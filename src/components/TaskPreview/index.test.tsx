import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import { TaskPreview } from '.'
import { Task } from '@/context/task-context'

const task: Task = {
  id: '123',
  title: 'A test task',
  description: 'Description of the task',
  createdAt: Date.now(),
  status: 'todo',
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
})
