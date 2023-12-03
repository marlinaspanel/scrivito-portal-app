import { provideEditingConfig } from 'scrivito'
import { GdprItem } from './GdprItemDataClass'

provideEditingConfig(GdprItem, {
  title: 'GDPR Item',
  attributes: {
    name: {
      title: "Name",
      description: "Name"
    },
    description: {
      title: "Description",
      description: "Description"
    },
    isActive: {
      title: "Is active", 
      description: "Is active"
    },
    email: {
      title: "E-Mail", 
      description: "E-Mail"
    },
    source: {
      title: "Source", 
      description: "Source"
    },
  },
})
