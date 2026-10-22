import { FilterBar } from '../components/filters/FilterBar'
import { TaskList } from '../components/tasks/TaskList'
import { FiltersProvider } from '../context/FiltersProvider'
import { useFetch } from '../hooks/useFetch'
import { useLanguage } from '../hooks/useLanguage'
import { API_URL } from '../services/api'
import type { Task } from '../types'

export default function Tasks() {
  const { t } = useLanguage()
  const { data: tasks, loading, error } = useFetch<Task[]>(`${API_URL}/tasks`)

  return (
    <div className="card">
      <h2>{t('tasks.title')}</h2>
      <FiltersProvider>
        <FilterBar />
        {loading && <p>{t('common.loading')}</p>}
        {error && <p role="alert">{t('tasks.error')}</p>}
        {tasks && <TaskList tasks={tasks} />}
      </FiltersProvider>
    </div>
  )
}
