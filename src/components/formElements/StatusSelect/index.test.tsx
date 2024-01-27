import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { StatusSelect } from '.'

describe('<StatusSelect />', () => {
  it('renders correctly', () => {
    const { queryByTestId } = render(
      <StatusSelect onChange={jest.fn()} value={'todo'} />,
    )

    expect(queryByTestId('status-select')).toHaveValue('todo')
  })
})
