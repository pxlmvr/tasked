import { Paper } from '@mui/material'

type Props = {
  children: React.ReactNode
}

export const CardContainer: React.FC<Props> = ({ children }) => (
  <Paper
    sx={{
      padding: '1.5rem 2rem',
      boxShadow: `0px 8px 48px -12px rgba(16, 24, 40, 0.15)`,
      borderRadius: '1rem',
    }}
    elevation={0}
  >
    {children}
  </Paper>
)
