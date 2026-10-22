import { NavLink, Outlet } from 'react-router'

export default function Layout() {
  return (
    <>
      <header>
        <h1>GpiSaaS</h1>
        <nav aria-label="Navigation principale">
          <ul>
            <li>
              <NavLink to="/" end>
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/taches">Tâches</NavLink>
            </li>
            <li>
              <NavLink to="/idees">Idées</NavLink>
            </li>
            <li>
              <NavLink to="/todo">Ma to-do</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>GpiSaaS — Gestion de projets</footer>
    </>
  )
}
