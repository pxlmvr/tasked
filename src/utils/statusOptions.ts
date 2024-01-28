import { TaskStatus } from '@/context/task-context'

export type StatusOption = { label: string; value: TaskStatus }

export const statusOptions: StatusOption[] = [
  { label: 'Blocked', value: 'blocked' },
  { label: 'Deployed', value: 'deployed' },
  { label: 'Done', value: 'done' },
  { label: 'In Progress', value: 'inProgress' },
  { label: 'In QA', value: 'inQa' },
  { label: 'Todo', value: 'todo' },
]
