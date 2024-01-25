import { provideEditingConfig } from 'scrivito'
import { DataFormOptionsRESTWidget } from './DataFormOptionsRESTWidgetClass'
import Thumbnail from './thumbnail.svg'

provideEditingConfig(DataFormOptionsRESTWidget, {
  title: 'Data Form Options REST',
  thumbnail: Thumbnail,
  attributes: {
    attributeName: {
      title: 'Name of the data attribute in question',
    },
    propertyName: {
      title: 'Name of the property from the data source to display in the options',
    },
    referenceName: {
      title: 'Reference of this widget for cross-dependencies between drop drowns',
    },
    promptName: {
      title: 'Text to display before selection',
    },
    required: { title: 'Mandatory' },
    helpText: { title: 'Help text' },
  },
  properties: [
    'attributeName',
    'propertyName',
    'referenceName',
    'defaultValue',
    'label',
    'required',
    'promptName',
    'helpText',
  ],
  initialContent: {
    label: 'Custom field',
  },
})
