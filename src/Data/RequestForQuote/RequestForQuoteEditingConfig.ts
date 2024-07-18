import { provideEditingConfig } from 'scrivito'
import { RequestForQuote } from './RequestForQuoteDataClass'

provideEditingConfig(RequestForQuote, {
  title: 'RequestForQuote',
  attributes: {
    _id: { title: 'Request For Quote ID' },
    keyword: { title: 'Keyword' },
    number: { title: 'Number' },
    type: { title: 'Type' },
    status: { title: 'Status' },
    mainStatus: { title: 'Main status' },
    open: { title: 'Open?' },
    description: { title: 'Description' },
    totalPrice: { title: 'Total price' },
    totalPriceCurrency: { title: 'Total price currency' },
    termsOfPayment: { title: 'Terms of payment' },
    termsOfDelivery: { title: 'Terms of delivery' },
    customer: { title: 'Customer' },
    commercialAgent: { title: 'Commercial agent (ID)' },
    salesPartner: { title: 'Sales partner' },
    technicalAgent: { title: 'Technical agent (ID)' },
    quoteAt: { title: 'Quote at' },
    orderAt: { title: 'Order at' },
    openFrom: { title: 'Open from' },
    openUntil: { title: 'Open until' },
  },
})
