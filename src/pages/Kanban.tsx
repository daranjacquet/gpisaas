import { useParams } from "react-router";

export default function Kanban() {
  const { id } = useParams();

  return (
    <div className="card">
      <h2>Kanban du projet {id}</h2>
      <p>Les colonnes par statut seront ajoutées ensuite.</p>
    </div>
  );
}
