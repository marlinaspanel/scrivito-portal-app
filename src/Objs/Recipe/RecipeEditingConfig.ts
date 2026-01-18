import { provideEditingConfig } from 'scrivito'
import { Recipe } from './RecipeObjClass'
import Thumbnail from './thumbnail.svg'

provideEditingConfig(Recipe, {
  title: 'Recipe',
  thumbnail: Thumbnail,
  attributes: {
    title: { title: 'Recipe Name' },
    description: { title: 'Description' },
    ingredients: { title: 'Ingredients' },
    instructions: { title: 'Instructions' },
    prepTime: { title: 'Preparation Time' },
    cookTime: { title: 'Cooking Time' },
    servings: { title: 'Servings' },
    image: { title: 'Recipe Image' },
  },
  properties: [
    'title',
    'description',
    'ingredients',
    'instructions',
    'prepTime',
    'cookTime',
    'servings',
    'image',
  ],
  titleForContent: (obj) => obj.get('title') || 'Untitled Recipe',
})
