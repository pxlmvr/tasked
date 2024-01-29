import { CardContainer } from '@/components/CardContainer'
import { CreatedAt } from '@/components/styled/shared'
import { DeleteTask } from './DeleteTask'
import { EditTask } from './EditTask'
import { format } from 'date-fns'
import { IconButton, Popover, Typography } from '@mui/material'
import { MoreVert, Schedule } from '@mui/icons-material'
import { StatusChip } from '@/components/StatusChip'
import { Task } from '@/context/task-context'
import { TaskHistory } from './TaskHistory'
import { useState } from 'react'

import styled from '@emotion/styled'

type Props = {
  task: Task
  testId?: string
}

export const TaskPreview: React.FC<Props> = ({ task, testId }) => {
  const [popoverAnchor, setPopoverAnchor] = useState<HTMLButtonElement | null>(
    null,
  )

  const handlePopoverClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPopoverAnchor(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setPopoverAnchor(null)
  }

  const open = Boolean(popoverAnchor)
  const id = open ? `${task.createdAt}-actions-popover` : undefined

  const formattedDate: string = format(task.createdAt, 'MMM d, yyyy - h:mm a')

  return (
    <CardContainer data-testid={testId} padding="sm">
      <Header>
        <Typography variant="body1" sx={{ fontWeight: 600, flex: 1 }}>
          {task.title}
        </Typography>
        <StatusChip status={task.status} />
        <IconButton
          aria-label="Open actions menu"
          data-testid={`${testId}-popover-trigger`}
          size="small"
          onClick={handlePopoverClick}
        >
          <MoreVert />
        </IconButton>
        <Popover
          anchorEl={popoverAnchor}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          data-testid={`${testId}-popover`}
          id={id}
          open={open}
          sx={{
            '& .MuiPopover-paper': {
              borderRadius: '1rem',
              boxShadow:
                '0px 10px 32px -4px rgba(0, 0, 0, 0.10), 0px 6px 14px -6px rgba(0, 0, 0, 0.12)',
              maxWidth: 200,
            },
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          onClose={handlePopoverClose}
        >
          <TaskHistory task={task} />
          <EditTask task={task} />
          <DeleteTask task={task} />
        </Popover>
      </Header>
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
          Created: {formattedDate}
        </Typography>
      </CreatedAt>
      <Description>{task.description}</Description>
    </CardContainer>
  )
}

const Header = styled('div')({
  display: 'flex',
  columnGap: '0.5rem',
  alignItems: 'center',
})

const Description = styled('p')({
  marginTop: '0.5rem',
  fontSize: '0.875rem',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  '@supports (-webkit-line-clamp: 3)': {
    whiteSpace: 'initial',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
  },
})
