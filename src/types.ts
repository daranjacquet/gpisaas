export type Statut = 'A_FAIRE' | 'EN_COURS' | 'EN_REVUE' | 'TERMINEE'

export type Membre = { id: string; nom: string }

export type Projet = { id: string; nom: string }

export type Tache = {
  id: string
  titre: string
  statut: Statut
  echeance: string
  projetId: string
  membreId: string | null
}

export type Idee = { id: string; texte: string }
