import { createContext } from 'react'
import type { Cle, Langue } from '../i18n/traductions'

type LangueCtx = {
  langue: Langue
  setLangue: (langue: Langue) => void
  t: (cle: Cle, params?: Record<string, string | undefined>) => string
}

export const LangueContext = createContext<LangueCtx | null>(null)
