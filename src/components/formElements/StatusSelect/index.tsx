import { getAllowedTransitions } from '@/utils/statusTransitions'
import { StatusOption, statusOptions } from '@/utils/statusOptions'
import { TaskStatus } from '@/context/task-context'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MenuItem from '@mui/material/MenuItem'
import React from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select'

type Props = {
  initialValue: TaskStatus
  onChange: (e: SelectChangeEvent) => void
  value: TaskStatus
}

export const StatusSelect: React.FC<Props> = ({
  initialValue,
  onChange,
  value,
}) => {
  const availableTransitions: TaskStatus[] = getAllowedTransitions(initialValue)

  const availableOptions: StatusOption[] = statusOptions.filter(
    (option: StatusOption) => availableTransitions.includes(option.value),
  )

  const id: string = 'status_select'

  return (
    <React.Fragment>
      <Select
        fullWidth
        id={id}
        inputProps={{
          'aria-label': 'Task status',
          'data-testid': 'status-select',
        }}
        IconComponent={KeyboardArrowDownIcon}
        size="small"
        sx={{
          borderRadius: '1.75rem',
          margin: '1rem 0',
        }}
        value={value}
        required
        onChange={onChange}
      >
        {availableOptions.map((option: StatusOption) => (
          <MenuItem
            data-testid={`option-${option.value}`}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </React.Fragment>
  )
}
