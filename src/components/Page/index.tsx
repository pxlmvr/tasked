import { Box, Container } from '@mui/material'

type Props = {
  children: React.ReactNode
}

export const Page: React.FC<Props> = ({ children }) => {
  return (
    <Box
      component="main"
      sx={theme => ({
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        paddingTop: '1.5rem',
      })}
    >
      <Container
        sx={{
          maxWidth: 648,
        }}
        maxWidth={false}
      >
        {children}
      </Container>
    </Box>
  )
}
