import { useParams } from 'react-router'

export default function FormulaireTache() {
  const { id } = useParams()

  return (
    <div className="card">
      <h2>{id ? `Modifier la tâche ${id}` : 'Nouvelle tâche'}</h2>
      <p>Le formulaire sera ajouté ensuite.</p>
    </div>
  )
}
