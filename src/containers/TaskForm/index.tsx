import { Add, InsertDriveFileOutlined } from '@mui/icons-material'
import { CardContainer } from '@/components/CardContainer'
import { FormHeader } from '@/components/styled/shared'
import { PillButton } from '@/components/PillButton'
import { Task, TaskContext } from '@/context/task-context'
import { TextInput } from '@/components/formElements/TextInput'
import { Typography, styled } from '@mui/material'
import { useContext, useState } from 'react'

export const TaskForm: React.FC = () => {
  const { setTasks } = useContext(TaskContext)

  const [taskTitle, setTaskTitle] = useState<string>('')
  const [titleTouched, setTitleTouched] = useState<boolean>(false)

  const [taskDescription, setTaskDescription] = useState<string>('')
  const [descriptionTouched, setDescriptionTouched] = useState<boolean>(false)

  const refreshForm = () => {
    setTaskTitle('')
    setTitleTouched(false)
    setTaskDescription('')
    setDescriptionTouched(false)
  }

  const isValid = taskTitle && taskDescription

  const createTask = () => {
    setTitleTouched(true)
    setDescriptionTouched(true)
    if (isValid) {
      const date = Date.now()

      const task: Task = {
        title: taskTitle,
        description: taskDescription,
        status: 'todo',
        createdAt: date,
        id: date.toString(),
        history: [{ targetStatus: 'todo', createdAt: date }],
      }

      setTasks((prevTasks: Task[]) => {
        return [...prevTasks, task]
      })

      refreshForm()
    }
  }

  return (
    <CardContainer padding="md">
      <FormHeader>
        <InsertDriveFileOutlined
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
          Add a new Task
        </Typography>
      </FormHeader>
      <form>
        <TextInput
          error={titleTouched && !taskTitle}
          label="Title"
          name="title"
          value={taskTitle}
          onChange={e => setTaskTitle(e.target.value)}
          onBlur={() => setTitleTouched(true)}
        />
        <TextInput
          error={descriptionTouched && !taskDescription}
          label="Description"
          multiline
          name="description"
          value={taskDescription}
          onChange={e => setTaskDescription(e.target.value)}
          onBlur={() => setDescriptionTouched(true)}
        />
        <Actions>
          <PillButton id="create-task-button" onClick={createTask}>
            <Add fontSize="small" sx={{ marginRight: '0.5rem' }} />
            Add
          </PillButton>
        </Actions>
      </form>
    </CardContainer>
  )
}

const Actions = styled('div')({
  margin: '2rem 0 0.5rem 0',
  display: 'flex',
  justifyContent: 'flex-end',
})
