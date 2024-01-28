import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { EditTaskForm } from '.'
import { Task } from '@/context/task-context'
import { BrowserRouter } from 'react-router-dom'

describe('<EditTaskForm />', () => {
  beforeEach(() => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => jest.fn(),
    }))
  })

  it('shows information about the task in the form fields', () => {
    const task: Task = {
      id: '123',
      title: 'Task title',
      description: 'Task description',
      status: 'todo',
      createdAt: Date.now(),
      history: [],
    }

    const { queryByLabelText, queryByTestId } = render(
      <BrowserRouter>
        <EditTaskForm task={task} />,
      </BrowserRouter>,
    )

    expect(queryByLabelText('Title')).toHaveValue('Task title')
    expect(queryByLabelText('Description')).toHaveValue('Task description')
    expect(queryByTestId('status-select')).toHaveValue('todo')
  })
})
