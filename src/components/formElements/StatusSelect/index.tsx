import { TaskStatus } from '@/context/task-context'
import MenuItem from '@mui/material/MenuItem'
import React from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { getAllowedTransitions } from '@/utils/statusTransitions'
import { StatusOption, statusOptions } from '@/utils/statusOptions'

type Props = {
  onChange: (e: SelectChangeEvent) => void
  value: TaskStatus
  initialValue: TaskStatus
}

export const StatusSelect: React.FC<Props> = ({
  onChange,
  value,
  initialValue,
}) => {
  const availableTransitions: TaskStatus[] = getAllowedTransitions(initialValue)

  const availableOptions: StatusOption[] = statusOptions.filter(
    (option: StatusOption) => availableTransitions.includes(option.value),
  )

  const id: string = 'status_select'

  return (
    <React.Fragment>
      <Select
        required
        inputProps={{
          'aria-label': 'Task status',
          'data-testid': 'status-select',
        }}
        id={id}
        value={value}
        onChange={onChange}
        size="small"
        fullWidth
        sx={{
          borderRadius: '1.75rem',
          margin: '1rem 0',
        }}
        IconComponent={KeyboardArrowDownIcon}
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
