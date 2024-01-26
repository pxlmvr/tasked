import { Button } from '@mui/material'

type Props = {
  children: React.ReactNode
  onClick: VoidFunction
  id?: string
}

export const PillButton: React.FC<Props> = ({ children, onClick, id }) => {
  return (
    <Button
      id={id}
      type="button"
      sx={{ borderRadius: '2rem', textTransform: 'none' }}
      color="primary"
      variant="contained"
      onClick={onClick}
      size="large"
    >
      {children}
    </Button>
  )
}
