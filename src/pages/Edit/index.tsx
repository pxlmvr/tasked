import { CardContainer } from '@/components/CardContainer'
import { FormHeader } from '@/components/styled/shared'
import { Page } from '@/components/Page'
import { PageNavigation } from '@/components/PageNavigation'
import { Task, TaskContext, TaskContextType } from '@/context/task-context'
import { TaskNotFound } from './TaskNotFound'
import { Typography } from '@mui/material'
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import { EditTaskForm } from './EditTaskForm'

export const Edit: React.FC = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const taskId = searchParams.get('id')

  const { tasks } = useContext<TaskContextType>(TaskContext)

  const currentTask: Task | undefined = tasks.find(
    (task: Task) => task.id === taskId,
  )

  if (!taskId || !currentTask) {
    return <TaskNotFound />
  }

  return (
    <Page>
      <PageNavigation currentPage="edit" />
      <CardContainer padding="md">
        <FormHeader>
          <ModeEditOutlineOutlinedIcon
            sx={theme => ({
              color: theme.palette.grey[400],
              fontSize: '1rem',
              marginRight: '0.5rem',
            })}
          />
          <Typography
            component="h2"
            sx={{ fontWeight: 600, fontSize: '1.125rem' }}
          >
            Edit Task
          </Typography>
        </FormHeader>
        <EditTaskForm task={currentTask} />
      </CardContainer>
    </Page>
  )
}
