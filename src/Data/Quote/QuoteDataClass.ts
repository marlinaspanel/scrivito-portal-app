import { provideDataClass, unstable_JrRestApi } from 'scrivito'

const apiPath = '../pisa-api/quote'

// TODO: use `provideDataClass('Quote', { apiPath })` once available (with 1.39.0?)
export const Quote = provideDataClass('Quote', {
  connection: {
    index: (params) =>
      unstable_JrRestApi.fetch(apiPath, {
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
    get: (id) => unstable_JrRestApi.fetch(`${apiPath}/${id}`),
  },
})
