import { localStorageSupplierOrderDataClass } from './LocalStorage/localStorageSupplierOrderDataClass'
import { pisaSupplierOrderDataClass } from './Pisa/pisaSupplierOrderDataClass'

/*export const Ticket = import.meta.env.ENABLE_PISA
  ? pisaSupplierQuoteDataClass()
  : localStorageSupplierQuoteDataClass()*/

  export const SupplierOrder = pisaSupplierOrderDataClass()
