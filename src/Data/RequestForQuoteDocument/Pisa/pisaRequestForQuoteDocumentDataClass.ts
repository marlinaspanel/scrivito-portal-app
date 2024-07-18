import { provideDataClass } from 'scrivito'
import { pisaClient } from '../../pisaClient'

export function pisaRequestForQuoteDocumentDataClass() {
  const requestForQuoteDocumentClient = pisaClient('request-for-quote-document')

  return provideDataClass('RequestForQuoteDocument', {
    // @ts-expect-error until out of private beta
    restApi: requestForQuoteDocumentClient,
  })
}
