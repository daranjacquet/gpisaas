import { useLanguage } from '../hooks/useLanguage'

export default function Ideas() {
  const { t } = useLanguage()

  return (
    <div className="card">
      <h2>{t('ideas.title')}</h2>
      <p>{t('ideas.soon')}</p>
    </div>
  )
}
