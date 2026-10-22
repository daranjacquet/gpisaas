import { Link } from 'react-router'
import { useFilters } from '../../hooks/useFilters'
import { useLanguage } from '../../hooks/useLanguage'
import type { Task } from '../../types'

export function TaskList({ tasks }: { tasks: Task[] }) {
  const { t } = useLanguage()
  const { filters } = useFilters()

  const visibleTasks = tasks.filter(
    (task) =>
      (filters.status === 'ALL' || task.status === filters.status) &&
      (filters.memberId === null || task.memberId === filters.memberId),
  )

  if (tasks.length === 0) return <p>{t('tasks.empty')}</p>
  if (visibleTasks.length === 0) return <p>{t('tasks.noMatch')}</p>

  return (
    <ul>
      {visibleTasks.map((task) => (
        <li key={task.id}>
          <Link to={`/tasks/${task.id}`}>{task.title}</Link> — {t(`status.${task.status}`)}
        </li>
      ))}
    </ul>
  )
}
