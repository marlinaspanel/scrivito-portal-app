import { localRequestForQuoteDataClass } from './LocalStorage/localRequestForQuoteDataClass'
import { pisaRequestForQuoteDataClass } from './Pisa/pisaRequestForQuoteDataClass'

/*export const RequestForQuote = import.meta.env.ENABLE_PISA
  ? pisaRequestForQuoteDataClass()
  : localRequestForQuoteDataClass()*/

  export const RequestForQuote = pisaRequestForQuoteDataClass()
