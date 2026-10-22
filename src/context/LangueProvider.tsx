import { useEffect, useState, type ReactNode } from 'react'
import { traductions, type Cle, type Langue } from '../i18n/traductions'
import { LangueContext } from './langue'

function langueSauvegardee(): Langue {
  try {
    return localStorage.getItem('langue') === 'en' ? 'en' : 'fr'
  } catch {
    return 'fr'
  }
}

export function LangueProvider({ children }: { children: ReactNode }) {
  const [langue, setLangue] = useState(langueSauvegardee)

  useEffect(() => {
    document.documentElement.lang = langue
    try {
      localStorage.setItem('langue', langue)
    } catch {
      // stockage bloqué : la langue reste en mémoire
    }
  }, [langue])

  function t(cle: Cle, params: Record<string, string | undefined> = {}) {
    return Object.entries(params).reduce(
      (texte, [nom, valeur]) => texte.replace(`{${nom}}`, valeur ?? ''),
      traductions[langue][cle],
    )
  }

  return <LangueContext value={{ langue, setLangue, t }}>{children}</LangueContext>
}
