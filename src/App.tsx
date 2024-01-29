import { Edit } from './pages/Edit'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { TaskContextProvider } from './context/task-context'
import { theme } from './theme'
import { ThemeProvider } from '@mui/material'

export default function App() {
  return (
    <TaskContextProvider>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </ThemeProvider>
    </TaskContextProvider>
  )
}
