import { Dialog, DialogTitle, styled } from '@mui/material'
import { Task, TaskHistoryUpdate } from '@/context/task-context'
import { TaskUpdate } from './TaskUpdate'

type Props = {
  open: boolean
  task: Task
  handleClose: () => void
}

export const TaskHistoryDialog: React.FC<Props> = ({
  open,
  task,
  handleClose,
}) => {
  return (
    <Dialog
      data-testid="task-history-dialog"
      fullWidth
      maxWidth="sm"
      open={open}
      PaperProps={{
        sx: {
          borderRadius: '1rem',
          minHeight: 600,
        },
      }}
      onClose={handleClose}
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
