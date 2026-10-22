import { useEffect, useState, type ReactNode } from 'react'
import { translations, type Key, type Language } from '../i18n/translations'
import { LanguageContext } from './language'

function savedLanguage(): Language {
  try {
    return localStorage.getItem('language') === 'en' ? 'en' : 'fr'
  } catch {
    return 'fr'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState(savedLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    try {
      localStorage.setItem('language', language)
    } catch {
      // storage blocked: the language stays in memory
    }
  }, [language])

  function t(key: Key, params: Record<string, string | undefined> = {}) {
    return Object.entries(params).reduce(
      (text, [name, value]) => text.replace(`{${name}}`, value ?? ''),
      translations[language][key],
    )
  }

  return <LanguageContext value={{ language, setLanguage, t }}>{children}</LanguageContext>
}
