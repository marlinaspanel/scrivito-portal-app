import { Obj } from 'scrivito'
import { ensureString } from './ensureString'

export function objTitle(obj: Obj): string {
  return (
    ensureString(obj.get('title')) ||
    ensureString(obj.metadata().get('filename')) ||
    '<untitled>'
  )
}
