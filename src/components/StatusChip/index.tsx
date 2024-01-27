import { TaskStatus } from '@/context/task-context'
import { Chip } from '@mui/material'

type ChipColors = { background: string; text: string }

type Props = {
  status: TaskStatus
}

export const StatusChip: React.FC<Props> = ({ status }) => {
  const label: Record<TaskStatus, string> = {
    todo: 'Todo',
    blocked: 'Blocked',
    inProgress: 'In Progress',
    inQa: 'In QA',
    done: 'Done',
    deployed: 'Deployed',
  }

  const colors: Record<TaskStatus, ChipColors> = {
    todo: { background: '#33CCAA33', text: '#008060' },
    blocked: { background: '#f9dedc', text: '#410e0b' },
    inProgress: { background: '#6971FF29', text: '#0945EB' },
    inQa: { background: '#fae190', text: '#410e0b' },
    done: { background: '#dde1fd', text: '#1c2025' },
    deployed: { background: '#eaddff', text: '#21005d' },
  }

  return (
    <Chip
      size="small"
      sx={{
        backgroundColor: colors[status].background,
        color: colors[status].text,
        fontWeight: 500,
      }}
      label={label[status]}
    />
  )
}
