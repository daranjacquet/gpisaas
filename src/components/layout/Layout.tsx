import { NavLink, Outlet } from 'react-router'
import { useLanguage } from '../../hooks/useLanguage'
import type { Language } from '../../i18n/translations'

export default function Layout() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <>
      <header>
        <h1>GpiSaaS</h1>
        <nav aria-label={t('nav.label')}>
          <ul>
            <li>
              <NavLink to="/" end>
                {t('nav.home')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/tasks">{t('nav.tasks')}</NavLink>
            </li>
            <li>
              <NavLink to="/ideas">{t('nav.ideas')}</NavLink>
            </li>
            <li>
              <NavLink to="/todo">{t('nav.todo')}</NavLink>
            </li>
          </ul>
        </nav>
        <select
          aria-label={t('language.label')}
          value={language}
          onChange={(e) => setLanguage(e.target.value as Language)}
        >
          <option value="fr">Français</option>
          <option value="en">English</option>
        </select>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>{t('footer.text')}</footer>
    </>
  )
}
