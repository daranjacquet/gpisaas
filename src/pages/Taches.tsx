import { Link } from 'react-router'
import { useFetch } from '../hooks/useFetch'
import { useLangue } from '../hooks/useLangue'
import { API_URL } from '../services/api'
import type { Tache } from '../types'

export default function Taches() {
  const { t } = useLangue()
  const { data: taches, loading, error } = useFetch<Tache[]>(`${API_URL}/taches`)

  return (
    <div className="card">
      <h2>{t('taches.titre')}</h2>
      {loading && <p>{t('commun.chargement')}</p>}
      {error && <p role="alert">{t('taches.erreur')}</p>}
      <ul>
        {taches?.map((tache) => (
          <li key={tache.id}>
            <Link to={`/tasks/${tache.id}`}>{tache.titre}</Link> — {t(`statut.${tache.statut}`)}
          </li>
        ))}
      </ul>
    </div>
  )
}
