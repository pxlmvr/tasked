import { Task, TaskHistoryUpdate } from '@/context/task-context'
import { Dialog, DialogTitle, styled } from '@mui/material'
import { TaskUpdate } from './TaskUpdate'

type Props = {
  task: Task
  open: boolean
  handleClose: () => void
}

export const TaskHistoryDialog: React.FC<Props> = ({
  task,
  open,
  handleClose,
}) => {
  return (
    <Dialog
      data-testid="task-history-dialog"
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          borderRadius: '1rem',
          minHeight: 600,
        },
      }}
    >
      <DialogTitle
        sx={{ fontSize: '1.5rem', fontWeight: 600, padding: '2rem' }}
      >
        Task History
      </DialogTitle>
      <Updates>
        {task.history.map((update: TaskHistoryUpdate) => (
          <TaskUpdate update={update} />
        ))}
      </Updates>
    </Dialog>
  )
}

const Updates = styled('div')({
  padding: '0 2rem 2rem 2rem',
})
