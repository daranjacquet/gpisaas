import { useParams } from 'react-router'
import { useLanguage } from '../hooks/useLanguage'

export default function TaskForm() {
  const { id } = useParams()
  const { t } = useLanguage()

  return (
    <div className="card">
      <h2>{id ? t('taskForm.edit', { id }) : t('taskForm.create')}</h2>
      <p>{t('taskForm.soon')}</p>
    </div>
  )
}
