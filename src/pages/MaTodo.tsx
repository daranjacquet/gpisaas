import { useLangue } from '../hooks/useLangue'

export default function MaTodo() {
  const { t } = useLangue()

  return (
    <div className="card">
      <h2>{t('todo.titre')}</h2>
      <p>{t('todo.bientot')}</p>
    </div>
  )
}
