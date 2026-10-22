import { useLanguage } from '../hooks/useLanguage'

export default function Todo() {
  const { t } = useLanguage()

  return (
    <div className="card">
      <h2>{t('todo.title')}</h2>
      <p>{t('todo.soon')}</p>
    </div>
  )
}
