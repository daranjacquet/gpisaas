import { Link } from 'react-router'

function HomePage() {
  return (
    <section className="hero card">
      <p className="hero__eyebrow">Bienvenue sur GpiSaaS</p>
      <h1>Gérez vos projets simplement.</h1>
      <p className="hero__text">
        GpiSaaS centralise vos projets, vos tâches, les membres de votre équipe
        et vos idées dans un seul espace, pour suivre l'avancement de votre
        travail en un coup d'œil.
      </p>
      <Link to="/tasks" className="btn btn-primary">
        Consulter les tâches
      </Link>
    </section>
  )
}

export default HomePage
