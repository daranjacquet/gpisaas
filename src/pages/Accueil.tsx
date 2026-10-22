import { Link } from 'react-router'

export default function Accueil() {
  return (
    <div className="card">
      <p>Bienvenue sur GpiSaaS</p>
      <h2>Gérez vos projets simplement.</h2>
      <p>Suivez vos projets, tâches et équipes au même endroit.</p>
      <Link to="/taches" className="btn">
        Consulter les tâches
      </Link>
    </div>
  )
}
