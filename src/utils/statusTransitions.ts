import { TaskStatus } from '@/context/task-context'

const statusTransitions: Record<TaskStatus, TaskStatus[]> = {
  todo: ['inProgress'],
  inProgress: ['blocked', 'inQa'],
  blocked: ['todo'],
  inQa: ['done', 'todo'],
  done: ['deployed'],
  deployed: [],
}

export const getAllowedTransitions = (
  currentStatus: TaskStatus,
): TaskStatus[] => {
  return [...statusTransitions[currentStatus], currentStatus]
}
