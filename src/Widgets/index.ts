import.meta.glob(['./**/*WidgetClass.ts', './**/*WidgetComponent.tsx'], {
  eager: true,
})

import 'scrivito-neoletter-form-widgets/index.css';

import { initNeoletterFormWidgets } from 'scrivito-neoletter-form-widgets'
initNeoletterFormWidgets("bf49f5426b2b1ee70ac419970b3b3291");

export {}
