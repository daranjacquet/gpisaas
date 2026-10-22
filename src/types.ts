export type Status = 'TODO' | 'IN_PROGRESS' | 'IN_REVIEW' | 'DONE'

export type Member = { id: string; name: string }

export type Project = { id: string; name: string }

export type Task = {
  id: string
  title: string
  status: Status
  dueDate: string
  projectId: string
  memberId: string | null
}

export type Idea = { id: string; text: string }
