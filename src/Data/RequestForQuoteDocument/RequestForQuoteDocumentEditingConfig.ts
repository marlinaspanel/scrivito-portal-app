import { provideEditingConfig } from 'scrivito'
import { RequestForQuoteDocument } from './RequestForQuoteDocumentDataClass'

provideEditingConfig(RequestForQuoteDocument, {
  title: 'Request For Quote document',
  attributes: {
    requestForQuoteId: { title: 'Request For Quote ID' },
    documentId: { title: 'Document ID' },
  },
})
