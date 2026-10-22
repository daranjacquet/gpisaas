import { createContext, type Dispatch } from 'react'
import type { Filters, FiltersAction } from '../components/filters/filtersReducer'

type FiltersContextValue = { filters: Filters; dispatch: Dispatch<FiltersAction> }

export const FiltersContext = createContext<FiltersContextValue | null>(null)
