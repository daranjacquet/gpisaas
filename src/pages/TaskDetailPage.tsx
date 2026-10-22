import { Link, useParams } from 'react-router'

function TaskDetailPage() {
  const { id } = useParams<{ id: string }>()

  return (
    <section>
      <Link to="/tasks" className="back-link">
        ← Retour aux tâches
      </Link>

      <header className="page-header">
        <h1>Détail de la tâche</h1>
        <p>
          Identifiant : <strong>{id}</strong>
        </p>
      </header>

      {/* Les informations de la tâche chargées depuis l'API seront affichées ici. */}
      <div className="card placeholder">
        Les informations de la tâche seront chargées depuis l'API
        prochainement.
      </div>
    </section>
  )
}

export default TaskDetailPage
