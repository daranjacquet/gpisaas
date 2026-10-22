import { Link, Outlet } from 'react-router'

function AppLayout() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="container app-header__inner">
          <Link to="/" className="app-logo">
            GpiSaaS
          </Link>
          <nav className="app-nav" aria-label="Navigation principale">
            <Link to="/">Accueil</Link>
            <Link to="/tasks">Tâches</Link>
          </nav>
        </div>
      </header>

      <main className="app-main container">
        <Outlet />
      </main>

      <footer className="app-footer">
        <div className="container">GpiSaaS — Gestion de projets</div>
      </footer>
    </div>
  )
}

export default AppLayout
