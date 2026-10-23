import type { Status } from '../../types'

export type Filters = {
  status: Status | 'ALL'
  memberId: string | null
  search: string
}

export type FiltersAction =
  | { type: 'status'; status: Filters['status'] }
  | { type: 'member'; id: string | null }
  | { type: 'search'; text: string }
  | { type: 'reset' }

export const initialFilters: Filters = { status: 'ALL', memberId: null, search: '' }

export function filtersReducer(state: Filters, action: FiltersAction): Filters {
  switch (action.type) {
    case 'status':
      return { ...state, status: action.status }
    case 'member':
      return { ...state, memberId: action.id }
    case 'search':
      return { ...state, search: action.text }
    case 'reset':
      return initialFilters
  }
}
