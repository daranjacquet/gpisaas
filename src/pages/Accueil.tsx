import { Link } from 'react-router'
import { useLangue } from '../hooks/useLangue'

export default function Accueil() {
  const { t } = useLangue()

  return (
    <div className="card">
      <p>{t('accueil.bienvenue')}</p>
      <h2>{t('accueil.titre')}</h2>
      <p>{t('accueil.description')}</p>
      <Link to="/tasks" className="btn">
        {t('accueil.bouton')}
      </Link>
    </div>
  )
}
