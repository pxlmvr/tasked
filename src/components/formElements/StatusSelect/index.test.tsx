import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { StatusSelect } from '.'

describe('<StatusSelect />', () => {
  it('renders correctly', () => {
    const { queryByTestId } = render(
      <StatusSelect onChange={jest.fn()} initialValue="todo" value="todo" />,
    )

    expect(queryByTestId('status-select')).toHaveValue('todo')
  })
  it('accepts a value via props', () => {
    const { queryByTestId } = render(
      <StatusSelect
        onChange={jest.fn()}
        initialValue="todo"
        value="inProgress"
      />,
    )

    expect(queryByTestId('status-select')).toHaveValue('inProgress')
  })
})
