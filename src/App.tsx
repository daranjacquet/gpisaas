import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Layout from './components/layout/Layout'
import Accueil from './pages/Accueil'
import Taches from './pages/Taches'
import FicheTache from './pages/FicheTache'
import FormulaireTache from './pages/FormulaireTache'
import Kanban from './pages/Kanban'
import Idees from './pages/Idees'
import MaTodo from './pages/MaTodo'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Accueil />} />
          <Route path="/taches" element={<Taches />} />
          <Route path="/taches/nouvelle" element={<FormulaireTache />} />
          <Route path="/taches/:id" element={<FicheTache />} />
          <Route path="/taches/:id/modifier" element={<FormulaireTache />} />
          <Route path="/projets/:id/kanban" element={<Kanban />} />
          <Route path="/idees" element={<Idees />} />
          <Route path="/todo" element={<MaTodo />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
