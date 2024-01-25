import { provideWidgetClass } from 'scrivito'

export const DataFormOptionsRESTWidget = provideWidgetClass(
  'DataFormOptionsRESTWidget',
  {
    attributes: {
      attributeName: 'string',
      propertyName: 'string',
      referenceName: 'string',
      data: 'datalocator',
      defaultValue: 'string',
      promptName: 'string',
      helpText: 'html',
      label: 'string',
      required: 'boolean',
    },
  },
)
