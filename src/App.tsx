import { Box, Button, ThemeProvider, Typography } from '@mui/material'
import { theme } from './theme'
import { useState } from 'react'
import { SizedBox } from './components/SizedBox'

export default function App() {
  const [counter, setCounter] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Typography variant="body1">Current: {counter}</Typography>
        <SizedBox height={2} />
        <Button
          variant="contained"
          onClick={() => setCounter(current => current + 1)}
        >
          Count Me!
        </Button>
      </Box>
    </ThemeProvider>
  )
}
