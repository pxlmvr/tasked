import { Box, Button, Typography } from '@mui/material'
import { CardContainer } from '@/components/CardContainer'
import { Page } from '@/components/Page'
import { PageNavigation } from '@/components/PageNavigation'

export const TaskNotFound: React.FC = () => {
  return (
    <Page>
      <Box
        sx={{
          textAlign: 'center',
          '& > img': {
            margin: '0 auto',
            width: 100,
            height: 74.47,
          },
        }}
      >
        <PageNavigation currentPage="edit" />
        <CardContainer padding="lg">
          <img
            srcSet="/images/tasks.png, /images/tasks@2x.png 2x"
            src="/images/tasks@2x.png"
          />
          <Typography
            sx={theme => ({
              color: theme.palette.grey[600],
              fontSize: '0.875rem',
              marginTop: '0.4rem',
            })}
          >
            Looks like this task does not exist...
          </Typography>
          <Button
            href="/"
            size="large"
            sx={theme => ({
              marginTop: '1rem',
              borderColor: theme.palette.grey[300],
              borderRadius: '2rem',
              textTransform: 'none',
            })}
            variant="outlined"
          >
            Back to tasks
          </Button>
        </CardContainer>
      </Box>
    </Page>
  )
}
