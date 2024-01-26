import { Paper, Typography } from '@mui/material'

export const NoTasks: React.FC = () => (
  <Paper
    sx={{
      padding: '2.5rem',
      boxShadow: `0px 8px 48px -12px rgba(16, 24, 40, 0.15)`,
      borderRadius: '1rem',
      marginTop: '1rem',
      '& > img': {
        display: 'inline-block',
        width: 100,
        height: 74.47,
      },
      textAlign: 'center',
    }}
    elevation={0}
  >
    <img
      srcSet="/images/tasks@2x.png, /images/tasks@2x.png 2x"
      src="/images/tasks@2x.png"
    />
    <Typography
      sx={theme => ({
        color: theme.palette.grey[600],
        fontSize: '0.875rem',
        marginTop: '0.4rem',
      })}
    >
      You have nothing to do.
      <br />
      Go get some sleep!
    </Typography>
  </Paper>
)
