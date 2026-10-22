import { useParams } from 'react-router'
import { useLanguage } from '../hooks/useLanguage'

export default function Kanban() {
  const { id } = useParams()
  const { t } = useLanguage()

  return (
    <div className="card">
      <h2>{t('kanban.title', { id })}</h2>
      <p>{t('kanban.soon')}</p>
    </div>
  )
}
