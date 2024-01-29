import { Button } from '@mui/material'

type Props = {
  ariaLabel?: string
  children: React.ReactNode
  id?: string
  onClick: VoidFunction
}

export const PillButton: React.FC<Props> = ({
  ariaLabel,
  children,
  id,
  onClick,
}) => {
  return (
    <Button
      aria-label={ariaLabel}
      color="primary"
      id={id}
      size="large"
      sx={{ borderRadius: '2rem', textTransform: 'none' }}
      type="button"
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
