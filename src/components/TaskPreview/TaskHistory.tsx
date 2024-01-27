import Button from '@mui/material/Button'
import EventIcon from '@mui/icons-material/Event'
import React from 'react'
import { Task } from '@/context/task-context'

type Props = {
  task: Task
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const TaskHistory: React.FC<Props> = ({ task }) => {
  console.log(task)

  return (
    <React.Fragment>
      <Button
        sx={{
          textTransform: 'none',
          fontWeight: 400,
          justifyContent: 'flex-start',
          padding: '0.5rem 1rem',
        }}
        fullWidth
        variant="text"
        startIcon={
          <EventIcon sx={theme => ({ color: theme.palette.grey[400] })} />
        }
      >
        Task History
      </Button>
    </React.Fragment>
  )
}
