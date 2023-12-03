import { provideEditingConfig } from 'scrivito'
import { CRM_QuoteObject } from './CRM_QuoteObjectDataClass'

provideEditingConfig(CRM_QuoteObject, {
  title: 'CRM Quote',
  attributes: {
    name: {
      title: "Short text", 
      description: "Short text"
    },
    number: {
      title: "Number", 
      description: "Number"
    },
    quotation_date: {
      title: "Quotation date", 
      description: "Quotation date"
    },
    car: {
      title: "Car", 
      description: "Car"
    },
    contact_email: {
      title: "Contact email", 
      description: "Contact email"
    },
    price: {
      title: "Price", 
      description: "Price"
    },
    status: {
      title: "Status", 
      description: "Status"
    },
  },
})
