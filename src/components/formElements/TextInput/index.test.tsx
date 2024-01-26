import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import { TextInput } from '.'

describe('<TextInput />', () => {
  it('renders correctly', () => {
    const { queryByRole } = render(
      <TextInput name="name" value="value" onChange={() => {}} label="test" />,
    )

    expect(queryByRole('textbox')).not.toBeNull()
  })

  it('accepts a value via props', () => {
    const { queryByRole } = render(
      <TextInput name="name" value="value" onChange={() => {}} label="test" />,
    )

    expect(queryByRole('textbox')).toHaveValue('value')
  })

  it('calls change handler upon change', () => {
    const changeHandlerMock = jest.fn()

    const { getByRole } = render(
      <TextInput
        name="name"
        value="value"
        onChange={changeHandlerMock}
        label="test"
      />,
    )

    expect(changeHandlerMock).toHaveBeenCalledTimes(0)

    fireEvent.change(getByRole('textbox'), {
      target: {
        value: 'Hello',
      },
    })

    expect(changeHandlerMock).toHaveBeenCalledTimes(1)
  })

  it('calls onBlur handler upon blur', () => {
    const blurHandlerMock = jest.fn()

    const { getByRole } = render(
      <TextInput
        name="name"
        value="value"
        onChange={() => {}}
        onBlur={blurHandlerMock}
        label="test"
      />,
    )

    expect(blurHandlerMock).toHaveBeenCalledTimes(0)

    fireEvent.blur(getByRole('textbox'))

    expect(blurHandlerMock).toHaveBeenCalledTimes(1)
  })

  it('has a visually hidden label for accessibility', () => {
    const { queryByText } = render(
      <TextInput
        name="name"
        value="value"
        onChange={() => {}}
        label="A label"
      />,
    )

    expect(queryByText('A label')).not.toBeNull()
  })
})
