import { provideComponent } from 'scrivito'
import { RecipeIngredientWidget } from './RecipeIngredientWidgetClass'

provideComponent(RecipeIngredientWidget, ({ widget }) => {
  const foodId = widget.get('foodId')
  const amount = widget.get('amount')
  const notes = widget.get('notes')

  if (!foodId) return null

  return (
    <li>
      {amount && <strong>{amount}</strong>} {foodId}
      {notes && <span className="text-muted"> ({notes})</span>}
    </li>
  )
})
