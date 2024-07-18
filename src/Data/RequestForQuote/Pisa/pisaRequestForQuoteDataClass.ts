import { provideDataClass } from 'scrivito'
import { pisaClient } from '../../pisaClient'
import { toClientParams } from '../../toClientParams'
import { languageHeaders } from '../../../utils/currentLanguage'
import { DataIndexResponse } from '../../types'

export function pisaRequestForQuoteDataClass() {
  const requestForQuoteClient = pisaClient('request-for-quote')

  return provideDataClass('RequestForQuote', {
    connection: {
      index: async (params) =>
        requestForQuoteClient.get('', {
          params: toClientParams(params),
          headers: languageHeaders(),
        }) as Promise<DataIndexResponse>,

      get: async (id) => requestForQuoteClient.get(id, { headers: languageHeaders() }),
    },
  })
}
