import { useDebounce } from '../../hooks/useDebounce'
import { useFetch } from '../../hooks/useFetch'
import { useFilters } from '../../hooks/useFilters'
import { API_URL } from '../../services/api'
import type { Task } from '../../types'

export function useFilteredTasks() {
  const { filters } = useFilters()
  const search = useDebounce(filters.search.trim())

  const params = new URLSearchParams()
  if (filters.status !== 'ALL') params.set('status', filters.status)
  if (filters.memberId !== null) params.set('memberId', filters.memberId)
  if (search !== '') params.set('title:contains', search)

  const { data: tasks, loading, error } = useFetch<Task[]>(`${API_URL}/tasks?${params}`)
  const isFiltered = params.size > 0

  return { tasks, loading, error, isFiltered }
}
