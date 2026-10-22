import { useParams } from 'react-router'
import { useLangue } from '../hooks/useLangue'

export default function FormulaireTache() {
  const { id } = useParams()
  const { t } = useLangue()

  return (
    <div className="card">
      <h2>{id ? t('formulaire.modifier', { id }) : t('formulaire.creer')}</h2>
      <p>{t('formulaire.bientot')}</p>
    </div>
  )
}
