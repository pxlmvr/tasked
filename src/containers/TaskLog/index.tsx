import { NoTasks } from '@/components/NoTasks'
import { Task, TaskContext } from '@/context/task-context'
import { TaskPreview } from '@/containers/TaskPreview'
import { Typography, styled } from '@mui/material'
import { useContext } from 'react'

export const TaskLog: React.FC = () => {
  const { tasks } = useContext(TaskContext)

  return (
    <Wrapper>
      <Typography
        component="h2"
        sx={{ fontWeight: 600, marginBottom: '1rem' }}
        variant="h5"
      >
        Tasks
      </Typography>
      {tasks.length > 0 ? (
        <Tasks>
          {tasks.map((task: Task) => (
            <TaskPreview key={task.createdAt} task={task} />
          ))}
        </Tasks>
      ) : (
        <NoTasks />
      )}
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  marginTop: '3rem',
})

const Tasks = styled('div')({
  display: 'grid',
  rowGap: '1rem',
  paddingBottom: '3rem',
})
