import { Link } from 'react-router'
import { useLanguage } from '../../hooks/useLanguage'
import type { Task } from '../../types'

export function TaskList({ tasks, isFiltered }: { tasks: Task[]; isFiltered: boolean }) {
  const { t } = useLanguage()

  if (tasks.length === 0) return <p>{t(isFiltered ? 'tasks.noMatch' : 'tasks.empty')}</p>

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Link to={`/tasks/${task.id}`}>{task.title}</Link> — {t(`status.${task.status}`)}
        </li>
      ))}
    </ul>
  )
}
