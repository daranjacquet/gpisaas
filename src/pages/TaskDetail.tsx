import { Link, useParams } from 'react-router'

export default function TaskDetail() {
  const { id } = useParams()

  return (
    <div className="card">
      <Link to="/tasks">← Retour</Link>
      <h2>Tâche {id}</h2>
      <p>Les informations de la tâche seront chargées depuis l'API.</p>
    </div>
  )
}
