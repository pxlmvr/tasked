import { TaskContext } from '@/context/task-context'
import { Typography, styled } from '@mui/material'
import { useContext } from 'react'
import { NoTasks } from '@/components/NoTasks'

export const TaskLog: React.FC = () => {
  const { tasks } = useContext(TaskContext)

  return (
    <Wrapper>
      <Typography
        variant="h5"
        component="h2"
        sx={{ fontWeight: 600, marginBottom: '1rem' }}
      >
        Tasks
      </Typography>
      {tasks.length > 0 ? <div>Tasks here</div> : <NoTasks />}
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  marginTop: '3rem',
})
