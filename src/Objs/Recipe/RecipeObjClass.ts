import { provideObjClass } from 'scrivito'

export const Recipe = provideObjClass('Recipe', {
  attributes: {
    title: 'string',
    description: 'html',
    ingredients: ['widgetlist', { only: ['RecipeIngredientWidget'] }],
    instructions: 'html',
    prepTime: 'string', // e.g., "30 minutes"
    cookTime: 'string', // e.g., "45 minutes"
    servings: 'string', // e.g., "4 servings"
    image: ['reference', { only: ['Image'] }],
  },
  extractTextAttributes: ['title', 'description', 'instructions'],
})

export type RecipeInstance = InstanceType<typeof Recipe>

export function isRecipe(input: unknown): input is RecipeInstance {
  return input instanceof Recipe
}
