import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters() {
  const context = useContext(FiltersContext)
  if (!context) throw new Error('useFilters must be used inside <FiltersProvider>')
  return context
}
