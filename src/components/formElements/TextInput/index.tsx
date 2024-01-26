import { TextField, styled } from '@mui/material'
import React from 'react'

type Props = {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  required?: boolean
  multiline?: boolean
  name: string
  error?: boolean
}

export const TextInput: React.FC<Props> = ({
  label,
  value,
  onChange,
  onBlur,
  required = false,
  multiline = false,
  name,
  error = false,
}) => {
  const id: string = `${name}_input`

  return (
    <React.Fragment>
      <TextField
        margin="dense"
        placeholder={label}
        size="small"
        value={value}
        onChange={onChange}
        fullWidth
        required={required}
        sx={{
          '& .MuiInputBase-root': {
            borderRadius: multiline ? '1rem' : '1.75rem',
            boxShadow: '0px 2px 2px 0px rgba(16, 24, 40, 0.05)',
          },
        }}
        error={Boolean(error)}
        helperText={Boolean(error) && 'Mandatory field'}
        multiline={multiline}
        minRows={multiline ? 7 : 1}
        onBlur={onBlur}
        id={id}
      />
      <SrOnlyLabel htmlFor={id}>{label}</SrOnlyLabel>
    </React.Fragment>
  )
}

const SrOnlyLabel = styled('label')({
  border: 0,
  clipPath: 'rect(1px, 1px, 1px, 1px)',
  height: 1,
  width: 1,
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
})
