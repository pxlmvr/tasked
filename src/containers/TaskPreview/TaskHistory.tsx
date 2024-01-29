import Button from '@mui/material/Button'
import EventIcon from '@mui/icons-material/Event'
import React, { useState } from 'react'
import { Task } from '@/context/task-context'
import { TaskHistoryDialog } from '../TaskHistoryDialog'

type Props = {
  task: Task
}

export const TaskHistory: React.FC<Props> = ({ task }) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)

  const openDialog = () => setDialogOpen(true)
  const closeDialog = () => setDialogOpen(false)

  return (
    <React.Fragment>
      <Button
        fullWidth
        startIcon={
          <EventIcon sx={theme => ({ color: theme.palette.grey[400] })} />
        }
        sx={{
          textTransform: 'none',
          fontWeight: 400,
          justifyContent: 'flex-start',
          padding: '0.5rem 1rem',
        }}
        variant="text"
        onClick={openDialog}
      >
        Task History
      </Button>
      <TaskHistoryDialog
        open={dialogOpen}
        task={task}
        handleClose={closeDialog}
      />
    </React.Fragment>
  )
}
