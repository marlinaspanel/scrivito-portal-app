import { provideEditingConfig } from 'scrivito'
import { Food } from './FoodDataClass'

provideEditingConfig(Food, {
  title: 'Food',
  attributes: {
    name: { title: 'Name' },
    category: { title: 'Category' },
    unit: { title: 'Unit' },
  },
})
