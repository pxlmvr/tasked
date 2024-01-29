import { Button } from '@mui/material'

type Props = {
  children: React.ReactNode
  id?: string
  onClick: VoidFunction
}

export const PillButton: React.FC<Props> = ({ children, id, onClick }) => {
  return (
    <Button
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
