import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import TaskDetail from "./pages/TaskDetail";
import TaskForm from "./pages/TaskForm";
import Kanban from "./pages/Kanban";
import Ideas from "./pages/Ideas";
import Todo from "./pages/Todo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/taches" element={<Tasks />} />
          <Route path="/taches/nouvelle" element={<TaskForm />} />
          <Route path="/taches/:id" element={<TaskDetail />} />
          <Route path="/taches/:id/modifier" element={<TaskForm />} />
          <Route path="/projets/:id/kanban" element={<Kanban />} />
          <Route path="/idees" element={<Ideas />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
