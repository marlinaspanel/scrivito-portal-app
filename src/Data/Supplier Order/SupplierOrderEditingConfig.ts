import { provideEditingConfig } from 'scrivito'
import { SupplierOrder } from './SupplierOrderDataClass'

provideEditingConfig(SupplierOrder, {
  title: 'Supplier Order',
  attributes: {
    _id: { title: 'Supplier Order ID' },
    title: { title: 'Title' },
    description: { title: 'Description' },
    number: { title: 'Number' },
    referenceNumber: { title: 'Reference number' },
    type: { title: 'Type' },
    status: { title: 'Status' },
    open: { title: 'Open?' },
    responsibleAgent: { title: 'Responsible agent (ID)' },
    createdBy: { title: 'Created by (ID)' },
    createdAt: { title: 'Created at' },
    updatedAt: { title: 'Updated at' },
    deliveryUntil: { title: 'Delivery until' },
    attachments: { title: 'Attachments' },
  },
})
