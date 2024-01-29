import { Paper } from '@mui/material'

type Padding = 'sm' | 'md' | 'lg'

type Device = 'mobile' | 'desktop'

type Props = {
  children: React.ReactNode
  className?: string
  padding?: Padding
}

export const CardContainer: React.FC<Props> = ({
  children,
  padding = 'md',
}) => {
  const paddingValues: Record<Padding, Record<Device, string>> = {
    sm: { mobile: '1rem 1.5rem', desktop: '1rem 1.5rem' },
    md: { mobile: '1.5rem 1rem', desktop: '1.5rem 2rem' },
    lg: { mobile: '2.5rem', desktop: '2.5rem' },
  }

  return (
    <Paper
      sx={{
        padding: paddingValues[padding].mobile,
        boxShadow: `0px 8px 48px -12px rgba(16, 24, 40, 0.15)`,
        borderRadius: '1rem',
        overflow: 'hidden',
        '@media screen and (min-width: 478px)': {
          padding: paddingValues[padding].desktop,
        },
      }}
      elevation={0}
    >
      {children}
    </Paper>
  )
}
