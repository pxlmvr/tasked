import { SrOnlyLabel } from '@/components/styled/shared'
import { TextField } from '@mui/material'
import React from 'react'

type Props = {
  error?: boolean
  label: string
  multiline?: boolean
  name: string
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  value: string
}

export const TextInput: React.FC<Props> = ({
  error = false,
  label,
  multiline = false,
  name,
  onBlur,
  onChange,
  required = false,
  value,
}) => {
  const id: string = `${name}_input`

  return (
    <React.Fragment>
      <TextField
        error={Boolean(error)}
        fullWidth
        helperText={Boolean(error) && 'Mandatory field'}
        id={id}
        margin="dense"
        multiline={multiline}
        minRows={multiline ? 7 : 1}
        placeholder={label}
        required={required}
        size="small"
        sx={{
          '& .MuiInputBase-root': {
            borderRadius: multiline ? '1rem' : '1.75rem',
            boxShadow: '0px 2px 2px 0px rgba(16, 24, 40, 0.05)',
          },
        }}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <SrOnlyLabel htmlFor={id}>{label}</SrOnlyLabel>
    </React.Fragment>
  )
}
