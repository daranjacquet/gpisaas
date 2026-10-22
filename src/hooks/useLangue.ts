import { useContext } from 'react'
import { LangueContext } from '../context/langue'

export function useLangue() {
  const ctx = useContext(LangueContext)
  if (!ctx) throw new Error('useLangue doit être utilisé dans <LangueProvider>')
  return ctx
}
