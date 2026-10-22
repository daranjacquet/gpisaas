import { Link } from 'react-router'
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
      {loading && <p>{t('common.loading')}</p>}
      {error && <p role="alert">{t('tasks.error')}</p>}
      {tasks?.length === 0 && <p>{t('tasks.empty')}</p>}
      {tasks && tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <Link to={`/tasks/${task.id}`}>{task.title}</Link> — {t(`status.${task.status}`)}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
