import { Task } from '@/context/task-context'
import Button from '@mui/material/Button'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'

type Props = {
  task: Task
}

export const EditTask: React.FC<Props> = ({ task }) => {
  return (
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
        <ModeEditOutlineOutlinedIcon
          sx={theme => ({ color: theme.palette.grey[400] })}
        />
      }
      href={`/edit?id=${task.id}`}
    >
      Edit Task
    </Button>
  )
}
