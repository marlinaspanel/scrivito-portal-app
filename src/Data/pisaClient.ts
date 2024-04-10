import { unstable_createApiClient } from 'scrivito'
import { ensureString } from '../utils/ensureString'

export function pisaUrl(): string {
  const url = ensureString(import.meta.env.PISA_URL)
  if (!url) throw new Error('PISA_URL is not set!')

  return url
}

export function pisaClient(subPath: string) {
  const url = `../pisa-api/${subPath}`
  return unstable_createApiClient(url)
}
