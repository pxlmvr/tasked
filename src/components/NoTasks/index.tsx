import { CardContainer } from '@/components/CardContainer'
import { Typography, styled } from '@mui/material'

export const NoTasks: React.FC = () => (
  <Padding>
    <CardContainer padding="lg">
      <Wrapper>
        <img
          srcSet="/images/tasks.png, /images/tasks@2x.png 2x"
          src="/images/tasks@2x.png"
          alt=""
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
      </Wrapper>
    </CardContainer>
  </Padding>
)

const Wrapper = styled('div')({
  textAlign: 'center',
  '& > img': {
    margin: '0 auto',
    width: 100,
    height: 74.47,
  },
})

const Padding = styled('div')({
  paddingBottom: '2rem',
})
