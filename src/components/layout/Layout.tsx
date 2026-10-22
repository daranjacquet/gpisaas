import { NavLink, Outlet } from 'react-router'

export default function Layout() {
  return (
    <>
      <header>
        <h1>GpiSaaS</h1>
        <nav aria-label="Navigation principale">
          <NavLink to="/" end>
            Accueil
          </NavLink>{" "}
          <NavLink to="/taches">Tâches</NavLink>{" "}
          <NavLink to="/idees">Idées</NavLink>{" "}
          <NavLink to="/todo">Ma to-do</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>GpiSaaS — Gestion de projets</footer>
    </>
  );
}
