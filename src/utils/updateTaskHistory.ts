import { Task, TaskHistoryUpdate, TaskStatus } from '@/context/task-context'

export const updateTaskHistory = (
  task: Task,
  statusInEdit: TaskStatus,
): TaskHistoryUpdate[] => {
  if (statusInEdit === task.status) {
    return task.history
  } else {
    const update: TaskHistoryUpdate = {
      targetStatus: statusInEdit,
      createdAt: Date.now(),
    }
    return [...task.history, update]
  }
}
