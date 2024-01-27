import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { StatusChip } from '.'

describe('<StatusChip />', () => {
  it('renders a readable label', () => {
    const { queryByText } = render(
      <div>
        <StatusChip status="todo" />
        <StatusChip status="inProgress" />
        <StatusChip status="blocked" />
        <StatusChip status="inQa" />
        <StatusChip status="done" />
        <StatusChip status="deployed" />
      </div>,
    )

    expect(queryByText('Todo')).toBeInTheDocument()
    expect(queryByText('In Progress')).toBeInTheDocument()
    expect(queryByText('Blocked')).toBeInTheDocument()
    expect(queryByText('In QA')).toBeInTheDocument()
    expect(queryByText('Done')).toBeInTheDocument()
    expect(queryByText('Deployed')).toBeInTheDocument()
  })
})
