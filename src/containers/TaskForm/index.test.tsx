import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { TaskForm } from '@/containers/TaskForm'

describe('<TaskForm />', () => {
  it('renders correctly', () => {
    const { queryByText, queryByTestId, queryByLabelText } = render(
      <TaskForm />,
    )

    expect(queryByText('Add a new Task')).not.toBeNull()
    expect(queryByTestId('InsertDriveFileOutlinedIcon')).not.toBeNull()

    expect(queryByLabelText('Title')).toBeInTheDocument()
    expect(queryByLabelText('Description')).toBeInTheDocument()
  })
})
