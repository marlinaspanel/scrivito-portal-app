#!npx vite-node
import fs from 'fs'
import { promisify } from 'util'
import { loadEnv } from 'vite'

type ObjData = { _id: string; _widget_pool?: Record<string, WidgetData> }
type WidgetData = Record<string, unknown>
type SearchData = { continuation?: string; objs: ObjData[] }
type BlobsData = { private_access: { get: { url: string } } }

const DUMP_PATH = 'contentDump'
const BINARIES_PATH = `${DUMP_PATH}/binaries`
const OBJS_PATH = `${DUMP_PATH}/objs`

const env = loadEnv('development', process.cwd(), '')

const API_CLIENT_ID = env.CONTENT_MASTER_API_CLIENT_ID
const API_CLIENT_SECRET = env.CONTENT_MASTER_API_CLIENT_SECRET
const INSTANCE_ID = env.CONTENT_MASTER_SCRIVITO_TENANT

let apiToken: string | undefined = undefined

if (API_CLIENT_ID && API_CLIENT_SECRET && INSTANCE_ID) {
  clearDump()
  await dumpContent()
  console.log(`\n✅ Dump complete (${fileStats()}).`)
} else {
  console.error(
    'Please provide CONTENT_MASTER_SCRIVITO_TENANT and credentials:',
    'CONTENT_MASTER_API_CLIENT_ID, CONTENT_MASTER_API_CLIENT_SECRET.',
  )
  process.exitCode = -1
}

function clearDump() {
  fs.rmSync(DUMP_PATH, { force: true, recursive: true })
  fs.mkdirSync(OBJS_PATH, { recursive: true })
  fs.mkdirSync(BINARIES_PATH, { recursive: true })
}

function fileStats() {
  const objs = fs.readdirSync(OBJS_PATH)
  const binaries = fs.readdirSync(BINARIES_PATH)
  return `${objs.length} objs and ${binaries.length} binaries`
}

async function dumpContent() {
  let continuation: string | undefined

  do {
    const data: SearchData = await fetchJson<SearchData>(
      `workspaces/published/objs/search`,
      {
        data: {
          continuation,
          include_objs: true,
          options: { site_aware: true },
          size: 10,
        },
        method: 'put',
      },
    )

    for (const objData of data.objs) await dumpObjAndBinaries(objData)

    continuation = data.continuation
  } while (continuation)
}

async function dumpObjAndBinaries(objData: ObjData) {
  await dumpBinaries(objData)
  dumpObj(objData)
}

async function dumpBinaries(data: ObjData | WidgetData) {
  for (const value of Object.values(data)) {
    if (isBinaryAttribute(value)) await dumpBinary(value[1].id)
  }

  const widgetPool = data._widget_pool || {}
  for (const widget of Object.values(widgetPool)) await dumpBinaries(widget)
}

function isBinaryAttribute(data: unknown): data is ['binary', { id: string }] {
  if (!Array.isArray(data)) return false
  const [attributeType, attributeValue] = data
  return (
    attributeType === 'binary' &&
    !!attributeValue &&
    typeof attributeValue === 'object' &&
    typeof attributeValue.id === 'string'
  )
}

async function dumpBinary(binaryId: string) {
  const binary = await fetchJson<BlobsData>(
    `blobs/${encodeURIComponent(binaryId)}`,
  )
  const url = binary.private_access.get.url
  const response = await fetch(url)
  if (response.status !== 200) throw new Error(`Failed to fetch ${url}`)
  const blob = await response.blob()
  fs.writeFileSync(
    `${BINARIES_PATH}/${encodeURIComponent(binaryId)}`,
    Buffer.from(await blob.arrayBuffer()),
  )
}

function dumpObj(objData: ObjData) {
  fs.writeFileSync(
    `${OBJS_PATH}/${objData._id}.json`,
    JSON.stringify(objData, null, 2),
  )
}

async function fetchJson<T>(
  apiPath: string,
  options: { data?: Record<string, unknown>; method?: string } = {},
): Promise<T> {
  process.stdout.write('.')

  if (!apiToken) apiToken = await fetchIamToken()

  const response = await fetch(
    `https://api.scrivito.com/tenants/${INSTANCE_ID}/${apiPath}`,
    {
      body: options.data ? JSON.stringify(options.data) : undefined,
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
        'Scrivito-Access-As': 'editor',
      },
      method: options.method,
    },
  )
  if (response.status === 200) return response.json()

  console.log(`\nHTTP status ${response.status}, retrying...\n`)
  apiToken = undefined
  const sleep = promisify(setTimeout)
  await sleep(2000)
  return fetchJson(apiPath, options)
}

async function fetchIamToken(): Promise<string> {
  const response = await fetch('https://api.justrelate.com/iam/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${encodeURIComponent(API_CLIENT_ID)}:${encodeURIComponent(
          API_CLIENT_SECRET,
        )}`,
      ).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  })

  if (response.status !== 200) throw new Error('Failed to get API access.')

  return (await response.json()).access_token
}
