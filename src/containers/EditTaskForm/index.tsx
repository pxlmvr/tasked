import { StatusSelect } from '@/components/formElements/StatusSelect'
import { TextInput } from '@/components/formElements/TextInput'
import {
  Task,
  TaskContext,
  TaskContextType,
  TaskStatus,
} from '@/context/task-context'
import { Button, styled } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import { useNavigate } from 'react-router-dom'

import { useContext, useState } from 'react'
import { updateTaskHistory } from '@/utils/updateTaskHistory'

type Props = {
  task: Task
}

export const EditTaskForm: React.FC<Props> = ({ task }) => {
  const navigate = useNavigate()

  const { tasks, setTasks } = useContext<TaskContextType>(TaskContext)

  const [taskTitle, setTaskTitle] = useState<string>(task.title)
  const [taskDescription, setTaskDescription] = useState<string>(
    task.description,
  )
  const [taskStatus, setTaskStatus] = useState<TaskStatus>(task.status)

  const isValid = taskTitle && taskDescription && taskStatus

  const saveChanges = () => {
    if (isValid) {
      const newTask: Task = {
        id: task.id,
        createdAt: task.createdAt,
        title: taskTitle,
        description: taskDescription,
        status: taskStatus,
        history: updateTaskHistory(task, taskStatus),
      }

      const allTasks: Task[] = tasks.filter((t: Task) => t.id !== task.id)
      allTasks.unshift(newTask)

      setTasks(allTasks)

      navigate('/')
    }
  }

  return (
    <form>
      <TextInput
        error={!taskTitle}
        name="title"
        value={taskTitle}
        onChange={e => setTaskTitle(e.target.value)}
        label="Title"
      />
      <TextInput
        error={!taskDescription}
        name="description"
        multiline
        value={taskDescription}
        onChange={e => setTaskDescription(e.target.value)}
        label="Description"
      />
      <StatusSelect
        initialValue={task.status}
        value={taskStatus}
        onChange={e => setTaskStatus(e.target.value as TaskStatus)}
      />
      <Buttons>
        <Button
          data-testid="edit-task-confirm"
          size="large"
          sx={theme => ({
            backgroundColor: theme.palette.primary.dark,
            borderRadius: '2rem',
            textTransform: 'none',
          })}
          variant="contained"
          onClick={saveChanges}
          startIcon={<CheckIcon fontSize="small" />}
        >
          Save changes
        </Button>
        <Button
          size="large"
          sx={theme => ({
            borderColor: theme.palette.grey[300],
            borderRadius: '2rem',
            textTransform: 'none',
          })}
          variant="outlined"
          href="/"
        >
          Cancel
        </Button>
      </Buttons>
    </form>
  )
}

const Buttons = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '1rem',
  paddingBottom: '0.5rem',
  columnGap: '0.75rem',
  '& > button, & > a': {
    flex: 1,
  },
})
