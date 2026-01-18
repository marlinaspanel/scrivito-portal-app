import { provideEditingConfig } from 'scrivito'
import { RecipeIngredientWidget } from './RecipeIngredientWidgetClass'
import Thumbnail from './thumbnail.svg'

provideEditingConfig(RecipeIngredientWidget, {
  title: 'Recipe Ingredient',
  thumbnail: Thumbnail,
  properties: ['foodId', 'amount', 'notes'],
  attributes: {
    foodId: {
      title: 'Food (ID or name)',
      description: 'Enter the food name (e.g., "Sugar", "Flour", "Eggs")',
    },
    amount: {
      title: 'Amount',
      description: 'Quantity (e.g., "2", "1/2", "1.5")',
    },
    notes: {
      title: 'Notes',
      description: 'Additional notes (e.g., "chopped", "diced", "optional")',
    },
  },
  titleForContent: (widget) => {
    const foodId = widget.get('foodId')
    const amount = widget.get('amount')
    return `${amount || ''} ${foodId || 'Ingredient'}`.trim()
  },
  initialContent: {
    foodId: 'Sugar',
    amount: '1',
    notes: '',
  },
  validations: [
    [
      'foodId',
      (foodId: string) => {
        if (!foodId) return 'Please specify a food item.'
      },
    ],
    [
      'amount',
      (amount: string) => {
        if (!amount) return 'Please specify an amount.'
      },
    ],
  ],
})
