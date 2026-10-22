import { NavLink, Outlet } from 'react-router'
import { useLangue } from '../../hooks/useLangue'
import type { Langue } from '../../i18n/traductions'

export default function Layout() {
  const { langue, setLangue, t } = useLangue()

  return (
    <>
      <header>
        <h1>GpiSaaS</h1>
        <nav aria-label={t('nav.label')}>
          <ul>
            <li>
              <NavLink to="/" end>
                {t('nav.accueil')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/tasks">{t('nav.taches')}</NavLink>
            </li>
            <li>
              <NavLink to="/ideas">{t('nav.idees')}</NavLink>
            </li>
            <li>
              <NavLink to="/todo">{t('nav.todo')}</NavLink>
            </li>
          </ul>
        </nav>
        <select
          aria-label={t('langue.label')}
          value={langue}
          onChange={(e) => setLangue(e.target.value as Langue)}
        >
          <option value="fr">Français</option>
          <option value="en">English</option>
        </select>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>{t('footer.texte')}</footer>
    </>
  )
}
