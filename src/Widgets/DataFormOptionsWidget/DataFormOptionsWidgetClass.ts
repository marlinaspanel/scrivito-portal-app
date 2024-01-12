import { provideWidgetClass } from 'scrivito'

export const DataFormOptionsWidget = provideWidgetClass(
  'DataFormOptionsWidget',
  {
    attributes: {
      attributeName: 'string',
      defaultValue: 'string',
      helpText: 'html',
      label: 'string',
      options: 'stringlist',
      required: 'boolean',
    },
  },
)
