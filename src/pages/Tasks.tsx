import { FilterBar } from '../components/filters/FilterBar'
import { TaskList } from '../components/tasks/TaskList'
import { useFilteredTasks } from '../components/tasks/useFilteredTasks'
import { useLanguage } from '../hooks/useLanguage'

export default function Tasks() {
  const { t } = useLanguage()
  const { tasks, loading, error, isFiltered } = useFilteredTasks()

  return (
    <div className="card">
      <h2>{t('tasks.title')}</h2>
      <FilterBar />
      {loading && <p>{t('common.loading')}</p>}
      {error && <p role="alert">{t('tasks.error')}</p>}
      {tasks && <TaskList tasks={tasks} isFiltered={isFiltered} />}
    </div>
  )
}
