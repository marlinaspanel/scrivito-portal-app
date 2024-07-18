import { localStorageQuoteDocumentDataClass } from './LocalStorage/localStorageRequestForQuoteDocumentDataClass'
import { pisaRequestForQuoteDocumentDataClass } from './Pisa/pisaRequestForQuoteDocumentDataClass'

/*export const QuoteDocument = import.meta.env.ENABLE_PISA
  ? pisaRequestForQuoteDocumentDataClass()
  : localStorageRequestForQuoteDocumentDataClass()*/

  export const RequestForQuoteDocument = pisaRequestForQuoteDocumentDataClass()
