import { provideEditingConfig } from 'scrivito'
import { ServiceObject } from './ServiceObjectDataClass'

provideEditingConfig(ServiceObject, {
  title: 'Service object',
  attributes: {
    serial_number: {
      title: "Serial Number",
      description: "Unique machine serial number"
    },
    company: {
      title: "Company", 
      description: "Company name"
    },
    machine_name: {
      title: "Machine Name", 
      description: "Machine name (short text)"
    },
    created_by: {
      title: "created_by", 
      description: "Created by"
    },
    created_at: {
      title: "created_at", 
      description: "Created on"
    },
    build_date: {
      title: "Build date", 
      description: "Build date"
    },
    first_name: {
      title: "First name",
      description: "Registering contact person: First name"
    },
    last_name: {
      title: "Last name",
      description: "Registering contact person: Last name"
    },
    contact_email: {
      title: "E-Mail", 
      description: "Registering contact person: E-Mail"
    },
    street: {
      title: "Street",
      description: "Machine address: Street (without number)"
    },
    house_number: {
      title: "House number",
      description: "Machine address: House number"
    },
    city: {
      title: "City",
      description: "Machine address: City"
    },
    zip: {
      title: "Zip code",
      description: "Machine address: Zip code"
    },
    country: {
      title: "Country",
      description: "Machine address: Country (name)"
    },
    country_iso: {
      title: "Country ISO code",
      description: "Machine address: Country (ISO code)"
    },
  },
})
