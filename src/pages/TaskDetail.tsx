import { Link, useParams } from 'react-router'
import { useFetch } from '../hooks/useFetch'
import { useLanguage } from '../hooks/useLanguage'
import { API_URL } from '../services/api'
import type { Member, Project, Task } from '../types'

type TaskWithRelations = Task & { member?: Member; project?: Project }

export default function TaskDetail() {
  const { id } = useParams()
  const { language, t } = useLanguage()
  const url = `${API_URL}/tasks/${id}?_embed=member&_embed=project`
  const { data: task, loading, error } = useFetch<TaskWithRelations>(url)

  return (
    <div className="card">
      <Link to="/tasks">{t('taskDetail.back')}</Link>
      {loading && <p>{t('common.loading')}</p>}
      {error && <p role="alert">{t('taskDetail.error')}</p>}
      {task && (
        <>
          <h2>{task.title}</h2>
          <dl>
            <dt>{t('taskDetail.status')}</dt>
            <dd>{t(`status.${task.status}`)}</dd>
            <dt>{t('taskDetail.dueDate')}</dt>
            <dd>{new Date(task.dueDate).toLocaleDateString(language, { timeZone: 'UTC' })}</dd>
            <dt>{t('taskDetail.member')}</dt>
            <dd>{task.member?.name ?? t('taskDetail.unassigned')}</dd>
            <dt>{t('taskDetail.project')}</dt>
            <dd>
              <Link to={`/projects/${task.projectId}/kanban`}>{task.project?.name}</Link>
            </dd>
          </dl>
          <Link to={`/tasks/${task.id}/edit`} className="btn">
            {t('taskDetail.edit')}
          </Link>
        </>
      )}
    </div>
  )
}
