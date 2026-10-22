import { createContext } from 'react'
import type { Key, Language } from '../i18n/translations'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: Key, params?: Record<string, string | undefined>) => string
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
