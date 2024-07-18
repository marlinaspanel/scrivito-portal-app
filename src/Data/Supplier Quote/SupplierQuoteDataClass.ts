import { localStorageSupplierQuoteDataClass } from './LocalStorage/localStorageSupplierQuoteDataClass'
import { pisaSupplierQuoteDataClass } from './Pisa/pisaSupplierQuoteDataClass'

/*export const Ticket = import.meta.env.ENABLE_PISA
  ? pisaSupplierQuoteDataClass()
  : localStorageSupplierQuoteDataClass()*/

  export const SupplierQuote = pisaSupplierQuoteDataClass()
