import { provideEditingConfig } from 'scrivito'
import { CRM_Person } from './CRM_PersonDataClass'

provideEditingConfig(CRM_Person, {
  title: 'CRM Person',
  attributes: {
    name: {
      title: "Name",
      description: "Name"
    },
    email: {
      title: "E-Mail", 
      description: "E-mail address"
    },
  },
})
