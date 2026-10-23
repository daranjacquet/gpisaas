import { FilterBar } from '../components/filters/FilterBar'
import { TaskList } from '../components/tasks/TaskList'
import { useDebounce } from '../hooks/useDebounce'
import { useFetch } from '../hooks/useFetch'
import { useFilters } from '../hooks/useFilters'
import { useLanguage } from '../hooks/useLanguage'
import { API_URL } from '../services/api'
import type { Task } from '../types'

export default function Tasks() {
  const { t } = useLanguage()
  const { filters } = useFilters()
  const search = useDebounce(filters.search.trim())
  const url = `${API_URL}/tasks?title:contains=${encodeURIComponent(search)}`
  const { data: tasks, loading, error } = useFetch<Task[]>(url)

  return (
    <div className="card">
      <h2>{t('tasks.title')}</h2>
      <FilterBar />
      {loading && <p>{t('common.loading')}</p>}
      {error && <p role="alert">{t('tasks.error')}</p>}
      {tasks && <TaskList tasks={tasks} />}
    </div>
  )
}
