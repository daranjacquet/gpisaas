import { Link } from 'react-router'
import { useLanguage } from '../hooks/useLanguage'

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="card">
      <p>{t('home.welcome')}</p>
      <h2>{t('home.title')}</h2>
      <p>{t('home.description')}</p>
      <Link to="/tasks" className="btn">
        {t('home.button')}
      </Link>
    </div>
  )
}
