import { createContext, useEffect, useState } from 'react'

export type TaskStatus =
  | 'todo'
  | 'blocked'
  | 'inProgress'
  | 'inQa'
  | 'done'
  | 'deployed'

export type TaskHistoryUpdate = {
  createdAt: number
  targetStatus: TaskStatus
}

export type Task = {
  createdAt: number
  description: string
  history: TaskHistoryUpdate[]
  id: string
  status: TaskStatus
  title: string
}

export type TaskContextType = {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const defaultValue = {
  tasks: [],
  setTasks: () => {},
}

export const TaskContext = createContext<TaskContextType>(defaultValue)

export const TaskContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const localTasks = localStorage.getItem('tasks')
    return localTasks ? JSON.parse(localTasks) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
