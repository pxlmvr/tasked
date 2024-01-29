import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { TaskHistoryDialog } from '.'
import { Task } from '@/context/task-context'

describe('<TaskHistoryDialog />', () => {
  const task: Task = {
    createdAt: 123,
    description: 'Task description',
    history: [
      { targetStatus: 'todo', createdAt: 1706544105000 },
      { targetStatus: 'blocked', createdAt: 1706544105003 },
    ],
    id: '123',
    status: 'todo',
    title: 'My task',
  }

  it('renders correctly', () => {
    const { queryByRole, queryByText } = render(
      <TaskHistoryDialog open={true} handleClose={jest.fn()} task={task} />,
    )

    expect(queryByRole('dialog')).toBeInTheDocument()

    expect(queryByText(/the task was marked as "todo"/i)).not.toBeNull()
    expect(queryByText(/the task was marked as "blocked"/i)).not.toBeNull()
  })
  it('does not show if props.open === false', () => {
    const { queryByRole } = render(
      <TaskHistoryDialog open={false} handleClose={jest.fn()} task={task} />,
    )

    expect(queryByRole('dialog')).not.toBeInTheDocument()
  })
})
