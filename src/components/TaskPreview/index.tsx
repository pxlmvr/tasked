import { Task } from '@/context/task-context'
import { CardContainer } from '../CardContainer'
import styled from '@emotion/styled'
import { Button, IconButton, Popover, Typography } from '@mui/material'
import { format } from 'date-fns'
import { MoreVert, Schedule } from '@mui/icons-material'
import { StatusChip } from '../StatusChip'
import { useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import EventIcon from '@mui/icons-material/Event'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'

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
          aria-describedby={id}
          size="small"
          onClick={handlePopoverClick}
          data-testid={`${testId}-popover-trigger`}
        >
          <MoreVert />
        </IconButton>
        <Popover
          data-testid={`${testId}-popover`}
          id={id}
          open={open}
          anchorEl={popoverAnchor}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          sx={{
            '& .MuiPopover-paper': {
              borderRadius: '1rem',
              boxShadow:
                '0px 10px 32px -4px rgba(0, 0, 0, 0.10), 0px 6px 14px -6px rgba(0, 0, 0, 0.12)',
              maxWidth: 200,
            },
          }}
        >
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
          >
            Edit Task
          </Button>
          <Button
            sx={theme => ({
              textTransform: 'none',
              fontWeight: 400,
              justifyContent: 'flex-start',
              padding: '0.5rem 1rem',
              color: theme.palette.error.dark,
            })}
            fullWidth
            variant="text"
            startIcon={
              <DeleteOutlineIcon
                sx={theme => ({ color: theme.palette.grey[400] })}
              />
            }
          >
            Delete Task
          </Button>
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

const CreatedAt = styled('div')({
  display: 'flex',
  alignItems: 'center',
  fontSize: '0.75rem',
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
