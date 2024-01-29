import { Actions } from '@/components/styled/shared'
import { Modal, Paper, Typography, styled } from '@mui/material'
import { Task, TaskContext, TaskContextType } from '@/context/task-context'

import Button from '@mui/material/Button'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import React, { useContext, useState } from 'react'

type Props = {
  task: Task
}

export const DeleteTask: React.FC<Props> = ({ task }) => {
  const { setTasks } = useContext<TaskContextType>(TaskContext)

  const [open, setOpen] = useState<boolean>(false)

  const handleDeleteTask = (removedTask: Task) => {
    setTasks((tasks: Task[]) => {
      return tasks.filter(t => t.id !== removedTask.id)
    })
    setOpen(false)
  }

  return (
    <React.Fragment>
      <Button
        fullWidth
        startIcon={
          <DeleteOutlineIcon
            sx={theme => ({ color: theme.palette.grey[400] })}
          />
        }
        sx={theme => ({
          textTransform: 'none',
          fontWeight: 400,
          justifyContent: 'flex-start',
          padding: '0.5rem 1rem',
          color: theme.palette.error.dark,
        })}
        variant="text"
        onClick={() => setOpen(true)}
      >
        Delete Task
      </Button>
      {/* TODO: fix accessibility for this modal*/}
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        data-testid="delete-task-modal"
        open={open}
        sx={{ display: 'flex', alignItems: 'center' }}
        onClose={() => setOpen(false)}
      >
        <Paper
          sx={{
            maxWidth: '30rem',
            margin: '0 auto',
            padding: '2.5rem 4rem',
            borderRadius: '1.5rem',
            textAlign: 'center',
          }}
        >
          <Image
            srcSet="/images/trash.png, /images/trash@2x.png 2x"
            src="/images/trash@2x.png"
          />
          <Typography variant="h5" fontWeight={700}>
            Delete Task?
          </Typography>
          <Typography sx={{ marginTop: '0.5rem' }}>
            You have made changes, are you sure about deleting "{task.title}"?
          </Typography>
          <Actions>
            <Button
              size="large"
              sx={theme => ({
                borderColor: theme.palette.grey[300],
                borderRadius: '2rem',
                textTransform: 'none',
              })}
              variant="outlined"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              data-testid="delete-task-confirm"
              size="large"
              sx={theme => ({
                backgroundColor: theme.palette.error.dark,
                borderRadius: '2rem',
                textTransform: 'none',
              })}
              variant="contained"
              onClick={() => handleDeleteTask(task)}
            >
              Delete
            </Button>
          </Actions>
        </Paper>
      </Modal>
    </React.Fragment>
  )
}

const Image = styled('img')({
  height: 56,
  margin: '0 auto 2.5rem 0',
  width: 56,
})
