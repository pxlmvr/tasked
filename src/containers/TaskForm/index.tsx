import { CardContainer } from '@/components/CardContainer'
import { PillButton } from '@/components/PillButton'
import { TextInput } from '@/components/formElements/TextInput'
import { Task, TaskContext } from '@/context/task-context'
import { Add, InsertDriveFileOutlined } from '@mui/icons-material'
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
      const task: Task = {
        title: taskTitle,
        description: taskDescription,
        status: 'todo',
        createdAt: Date.now(),
      }

      setTasks((prevTasks: Task[]) => {
        return [...prevTasks, task]
      })

      refreshForm()
    }
  }

  return (
    <CardContainer>
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
          name="title"
          value={taskTitle}
          onChange={e => setTaskTitle(e.target.value)}
          label="Title"
          onBlur={() => setTitleTouched(true)}
        />
        <TextInput
          error={descriptionTouched && !taskDescription}
          name="description"
          multiline
          value={taskDescription}
          onChange={e => setTaskDescription(e.target.value)}
          label="Description"
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

const FormHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1.5rem',
})

const Actions = styled('div')({
  margin: '2rem 0 0.5rem 0',
  display: 'flex',
  justifyContent: 'flex-end',
})
