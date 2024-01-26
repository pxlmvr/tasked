import { fireEvent, render } from '@testing-library/react'
import { PillButton } from '.'

describe('<PillButton />', () => {
  it('renders correctly', () => {
    const { queryByRole, queryByText } = render(
      <PillButton onClick={() => {}}>Click me</PillButton>,
    )

    expect(queryByRole('button')).not.toBeNull()
    expect(queryByText('Click me')).not.toBeNull()
  })

  it('calls onClick handler upon click', () => {
    const clickHandlerMock = jest.fn()

    const { getByRole } = render(
      <PillButton onClick={clickHandlerMock}>Click me</PillButton>,
    )

    expect(clickHandlerMock).toHaveBeenCalledTimes(0)

    fireEvent.click(getByRole('button'))

    expect(clickHandlerMock).toHaveBeenCalledTimes(1)
  })
})
