import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Layout from './components/layout/Layout'
import { LangueProvider } from './context/LangueProvider'
import Accueil from './pages/Accueil'
import Taches from './pages/Taches'
import FicheTache from './pages/FicheTache'
import FormulaireTache from './pages/FormulaireTache'
import Kanban from './pages/Kanban'
import Idees from './pages/Idees'
import MaTodo from './pages/MaTodo'

export default function App() {
  return (
    <LangueProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Accueil />} />
            <Route path="/tasks" element={<Taches />} />
            <Route path="/tasks/new" element={<FormulaireTache />} />
            <Route path="/tasks/:id" element={<FicheTache />} />
            <Route path="/tasks/:id/edit" element={<FormulaireTache />} />
            <Route path="/projects/:id/kanban" element={<Kanban />} />
            <Route path="/ideas" element={<Idees />} />
            <Route path="/todo" element={<MaTodo />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LangueProvider>
  )
}
