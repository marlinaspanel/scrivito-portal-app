import { provideWidgetClass } from 'scrivito'

export const RecipeIngredientWidget = provideWidgetClass(
  'RecipeIngredientWidget',
  {
    attributes: {
      foodId: 'string', // Reference to Food by _id
      amount: 'string', // e.g. "2", "1/2", "1.5"
      notes: 'string', // e.g. "chopped", "diced", "optional"
    },
  },
)

export type RecipeIngredientWidgetInstance = InstanceType<
  typeof RecipeIngredientWidget
>

export function isRecipeIngredientWidget(
  input: unknown,
): input is RecipeIngredientWidgetInstance {
  return input instanceof RecipeIngredientWidget
}
