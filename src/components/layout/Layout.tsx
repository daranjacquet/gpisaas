import { Link, Outlet } from 'react-router'

export default function Layout() {
  return (
    <>
      <header>
        <h1>GpiSaaS</h1>
        <nav>
          <Link to="/">Accueil</Link> <Link to="/tasks">Tâches</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>GpiSaaS — Gestion de projets</footer>
    </>
  )
}
