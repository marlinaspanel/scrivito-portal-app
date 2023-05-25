import * as Scrivito from 'scrivito'

export const HeadlineWidget = Scrivito.provideWidgetClass('HeadlineWidget', {
  attributes: {
    alignment: ['enum', { values: ['left', 'center', 'right'] }],
    headline: 'string',
    level: ['enum', { values: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    style: ['enum', { values: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
  },
  extractTextAttributes: ['headline'],
})