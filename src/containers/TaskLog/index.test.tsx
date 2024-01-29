import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { TaskLog } from '.'
import { TaskContext } from '@/context/task-context'

describe('<TaskLog />', () => {
  it('renders correctly', () => {
    const { queryByText } = render(
      <TaskContext.Provider
        value={{
          tasks: [
            {
              id: '1',
              title: 'Test Task 1',
              description: 'Test Description 1',
              createdAt: 123,
              status: 'todo',
              history: [],
            },
            {
              id: '2',
              title: 'Test Task 2',
              description: 'Test Description 2',
              createdAt: 456,
              status: 'done',
              history: [],
            },
          ],
          setTasks: jest.fn(),
        }}
      >
        <TaskLog />
      </TaskContext.Provider>,
    )

    expect(queryByText('Test Task 1')).toBeInTheDocument()
    expect(queryByText('Test Task 2')).toBeInTheDocument()
  })
})
