import {
  provideDataValues,
  provideAttributeLocalizers,
} from '../../utils/dataValuesConfig'
import { SupplierQuote } from './SupplierQuoteDataClass'

provideDataValues(SupplierQuote, {
  status: [
    'PSA_PRO_QUO_SUP_RCV',
  ],
})

provideAttributeLocalizers('de', SupplierQuote, {
  status: {
    PSA_PRO_QUO_SUP_RCV: 'Abgebot abgegeben',
  },
})

provideAttributeLocalizers('en', SupplierQuote, {
  status: {
    PSA_PRO_QUO_SUP_RCV: 'Quote submitted',
  },
})
