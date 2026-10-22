import { useLangue } from '../hooks/useLangue'

export default function Idees() {
  const { t } = useLangue()

  return (
    <div className="card">
      <h2>{t('idees.titre')}</h2>
      <p>{t('idees.bientot')}</p>
    </div>
  )
}
