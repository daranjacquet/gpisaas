import { Link } from 'react-router'

export default function Home() {
  return (
    <div className="card">
      <p>Bienvenue sur GpiSaaS</p>
      <h2>Gérez vos projets simplement.</h2>
      <p>Suivez vos projets, tâches et équipes au même endroit.</p>
      <Link to="/tasks" className="btn">Consulter les tâches</Link>
    </div>
  )
}
