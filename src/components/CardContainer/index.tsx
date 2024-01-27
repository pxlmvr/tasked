import { Paper } from '@mui/material'

type Padding = 'sm' | 'md' | 'lg'

type Props = {
  children: React.ReactNode
  padding?: Padding
  className?: string
}

export const CardContainer: React.FC<Props> = ({
  children,
  padding = 'md',
}) => {
  const paddingValues: Record<Padding, string> = {
    sm: '1rem 1.5rem',
    md: '1.5rem 2rem',
    lg: '2.5rem',
  }

  return (
    <Paper
      sx={{
        padding: paddingValues[padding],
        boxShadow: `0px 8px 48px -12px rgba(16, 24, 40, 0.15)`,
        borderRadius: '1rem',
        overflow: 'hidden',
      }}
      elevation={0}
    >
      {children}
    </Paper>
  )
}
