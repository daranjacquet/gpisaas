import { useDebounce } from '../../hooks/useDebounce'
import { useFetch } from '../../hooks/useFetch'
import { useFilters } from '../../hooks/useFilters'
import { API_URL } from '../../services/api'
import type { Task } from '../../types'

export function useFilteredTasks() {
  const { filters } = useFilters()
  const search = useDebounce(filters.search.trim())
  const url = `${API_URL}/tasks?title:contains=${encodeURIComponent(search)}`
  const { data, loading, error } = useFetch<Task[]>(url)

  const tasks = data?.filter(
    (task) =>
      (filters.status === 'ALL' || task.status === filters.status) &&
      (filters.memberId === null || task.memberId === filters.memberId),
  )
  const isFiltered = filters.status !== 'ALL' || filters.memberId !== null || search !== ''

  return { tasks, loading, error, isFiltered }
}
