import { Link, useParams } from 'react-router'
import { useLangue } from '../hooks/useLangue'

export default function FicheTache() {
  const { id } = useParams()
  const { t } = useLangue()

  return (
    <div className="card">
      <Link to="/tasks">{t('fiche.retour')}</Link>
      <h2>{t('fiche.titre', { id })}</h2>
      <p>{t('fiche.bientot')}</p>
    </div>
  )
}
