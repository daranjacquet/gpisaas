import { Link, useParams } from 'react-router'
import { useLanguage } from '../hooks/useLanguage'

export default function TaskDetail() {
  const { id } = useParams()
  const { t } = useLanguage()

  return (
    <div className="card">
      <Link to="/tasks">{t('taskDetail.back')}</Link>
      <h2>{t('taskDetail.title', { id })}</h2>
      <p>{t('taskDetail.soon')}</p>
    </div>
  )
}
