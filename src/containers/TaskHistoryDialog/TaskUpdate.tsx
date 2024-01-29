import { CreatedAt } from '@/components/styled/shared'
import { format } from 'date-fns'
import { Schedule } from '@mui/icons-material'
import { StatusOption, statusOptions } from '@/utils/statusOptions'
import { TaskHistoryUpdate } from '@/context/task-context'
import { Typography, styled } from '@mui/material'

type Props = {
  update: TaskHistoryUpdate
}

export const TaskUpdate: React.FC<Props> = ({ update }) => {
  const formattedDate: string = format(update.createdAt, 'MMM d, yyyy - h:mm a')

  const status = statusOptions.find(
    (option: StatusOption) => option.value === update.targetStatus,
  )?.label

  return (
    <Wrapper>
      <Typography variant="body1" fontWeight={600}>
        The task was marked as "{status}"
      </Typography>
      <CreatedAt>
        <Schedule
          sx={theme => ({
            color: theme.palette.grey[500],
            fontSize: '1rem',
            marginRight: '0.25rem',
          })}
        />
        <Typography
          sx={theme => ({
            color: theme.palette.grey[500],
            fontSize: '0.75rem',
          })}
        >
          {formattedDate}
        </Typography>
      </CreatedAt>
    </Wrapper>
  )
}

const Wrapper = styled('div')(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  padding: '1.5rem 0 1rem 0',
  '&:first-of-type': {
    paddingTop: 0,
  },
}))
