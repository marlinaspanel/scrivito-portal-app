import { provideEditingConfig } from 'scrivito'
import { AppObject} from './AppointmentsObjectDataClass'

provideEditingConfig(AppObject, {
  title: 'App Object',
  attributes: {
    created_by: {
      title: "Created by", 
      description: "Created by"
    },
    created_at: {
      title: "Created at", 
      description: "Created at"
    },
    creation_date: {
      title: "Creation date", 
      description: "Creation date"
    },
    creation_date_fmt: {
      title: "Creation date (formatted)", 
      description: "Creation date (formatted)"
    },
    subject: {
      title: "Appointment subject", 
      description: "Appointment subject"
    },
    note: {
      title: "Note", 
      description: "Note"
    },
   start: {
        title: "Start Date", 
        description: "Start Date"
      },
    end: {
        title: "End Date", 
        description: "End Date"
      },
      start_date_fmt: {
        title: "Start date (formatted)", 
        description: "Start date (formatted)"
      },
      end_date_fmt: {
        title: "End date (formatted)", 
        description: "End date (formatted)"
      },
  },
})