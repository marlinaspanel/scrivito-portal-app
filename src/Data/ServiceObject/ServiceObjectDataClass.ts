import { provideDataClass } from 'scrivito'
import { pisaClient } from '../pisaClient'

const serviceObjectClient = pisaClient('service-object')

export const ServiceObject = provideDataClass('ServiceObject', {
  connection: {
    index: (params) =>
      serviceObjectClient.get('', {
        params: {
          ...params.filters(),
          _continuation: params.continuation(),
          _order: params.order().length
            ? params
                .order()
                .map((o) => o.join('.'))
                .join(',')
            : undefined,
          _search: params.search() || undefined,
        },
      }) as Promise<{ results: Array<{ _id: string }>; continuation?: string }>,
    get: (id) => serviceObjectClient.get(id),
  },
})
