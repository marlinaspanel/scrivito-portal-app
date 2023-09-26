import { provideEditingConfig } from 'scrivito'
import { FAQObject } from './FAQObjectDataClass'

provideEditingConfig(FAQObject, {
  title: 'FAQ object',
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
    faq_title: {
      title: "FAQ title", 
      description: "FAQ title"
    },
    answer: {
      title: "Answer", 
      description: "Answer"
    },
    question: {
      title: "Question", 
      description: "Question"
    },
    machine_code: {
      title: "Machine code", 
      description: "Machine code"
    },
  },
})
