import { provideDataClass } from 'scrivito'
import { pisaClient } from '../../pisaClient'
import { toClientParams } from '../../toClientParams'
import { DataIndexResponse, RawItem } from '../../types'
import { convertBlobAttributes } from '../../../utils/convertBlobAttributes'

export function pisaSupplierOrderDataClass() {
  const client = pisaClient('supplier-order')

  return provideDataClass('SupplierOrder', {
    connection: {
      index: (params) =>
        client.get('', {
          params: toClientParams(params),
        }) as Promise<DataIndexResponse>,
      get: (id) => client.get(id),
      create: async (data) =>
        client.post('', {
          data: await convertBlobAttributes(data),
        }) as Promise<RawItem>,
      update: async (id, data) =>
        client.patch(id, {
          data: await convertBlobAttributes(data),
        }),
      delete: (id) => client.delete(id),
    },
  })
}
