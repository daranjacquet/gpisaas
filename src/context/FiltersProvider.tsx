import { useReducer, type ReactNode } from 'react'
import { filtersReducer, initialFilters } from '../components/filters/filtersReducer'
import { FiltersContext } from './filters'

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [filters, dispatch] = useReducer(filtersReducer, initialFilters)

  return <FiltersContext value={{ filters, dispatch }}>{children}</FiltersContext>
}
