import {
  provideDataValues,
  provideAttributeLocalizers,
} from '../../utils/dataValuesConfig'
import { SupplierOrder } from './SupplierOrderDataClass'

provideDataValues(SupplierOrder, {
  status: [
    'PSA_PRO_ORD_SUP_CRE',
  ],
})

provideAttributeLocalizers('de', SupplierOrder, {
  status: {
    PSA_PRO_ORD_SUP_CRE: 'offen',
  },
})

provideAttributeLocalizers('en', SupplierOrder, {
  status: {
    PSA_PRO_ORD_SUP_CRE: 'offen',
  },
})
