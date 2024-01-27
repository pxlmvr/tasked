import { TaskStatus } from '@/context/task-context'
import MenuItem from '@mui/material/MenuItem'
import React from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

type StatusOption = { label: string; value: TaskStatus }

type Props = {
  onChange: (e: SelectChangeEvent) => void
  value: TaskStatus
}

export const StatusSelect: React.FC<Props> = ({ onChange, value }) => {
  const statusOptions: StatusOption[] = [
    { label: 'Blocked', value: 'blocked' },
    { label: 'Deployed', value: 'deployed' },
    { label: 'Done', value: 'done' },
    { label: 'In Progress', value: 'inProgress' },
    { label: 'In QA', value: 'inQa' },
    { label: 'Todo', value: 'todo' },
  ]

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
        {statusOptions.map((option: StatusOption) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </React.Fragment>
  )
}
