import { useParams } from 'react-router'
import { useLangue } from '../hooks/useLangue'

export default function Kanban() {
  const { id } = useParams()
  const { t } = useLangue()

  return (
    <div className="card">
      <h2>{t('kanban.titre', { id })}</h2>
      <p>{t('kanban.bientot')}</p>
    </div>
  )
}
