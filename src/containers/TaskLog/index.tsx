import { TaskContext } from '@/context/task-context'
import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import { NoTasks } from '@/components/NoTasks'

export const TaskLog: React.FC = () => {
  const { tasks } = useContext(TaskContext)

  return (
    <React.Fragment>
      <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
        Tasks
      </Typography>
      {tasks.length > 0 ? <div>Tasks here</div> : <NoTasks />}
    </React.Fragment>
  )
}
