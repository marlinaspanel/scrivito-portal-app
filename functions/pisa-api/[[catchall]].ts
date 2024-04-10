export const onRequest: PagesFunction = async function onRequest({ request }) {
  const pathPrefix = '/pisa-api'
  const target = 'https://web125.crm.pisasales.de/portal'

  const actualRequestUrl = request.url.replace(
    `${new URL(request.url).origin}${pathPrefix}`,
    target,
  )
  return fetch(actualRequestUrl, new Request(request))
}