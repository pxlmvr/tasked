import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import { Task } from '@/context/task-context'
import { TaskPreview } from '.'

const task: Task = {
  id: '123',
  title: 'A test task',
  description: 'Description of the task',
  createdAt: Date.now(),
  status: 'todo',
  history: [],
}

describe('<TaskPreview />', () => {
  it('renders correctly', () => {
    const { queryByText } = render(<TaskPreview task={task} />)

    expect(queryByText('A test task')).not.toBeNull()
  })
  it('shows popover when button is clicked', () => {
    const { queryByTestId, getByTestId } = render(
      <TaskPreview testId="example" task={task} />,
    )

    expect(queryByTestId('example-popover')).not.toBeInTheDocument()

    fireEvent.click(getByTestId('example-popover-trigger'))

    expect(queryByTestId('example-popover')).toBeInTheDocument()
  })
  it('triggers task history dialog when user clicks on the corresponding button', () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <TaskPreview testId="example" task={task} />,
    )

    fireEvent.click(getByTestId('example-popover-trigger'))

    fireEvent.click(getByText(/task history/i))

    expect(queryByTestId('task-history-dialog')).toBeInTheDocument()
  })
  it('triggers delete dialog when user clicks on the corresponding button', () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <TaskPreview testId="example" task={task} />,
    )

    fireEvent.click(getByTestId('example-popover-trigger'))

    fireEvent.click(getByText(/delete task/i))

    expect(queryByTestId('delete-task-modal')).toBeInTheDocument()
  })
  it('edit task button redirects to correct edit url', () => {
    const { getByTestId, queryByRole } = render(
      <TaskPreview testId="example" task={task} />,
    )

    fireEvent.click(getByTestId('example-popover-trigger'))
    expect(queryByRole('link')).toHaveAttribute('href', '/edit?id=123')
  })
})
