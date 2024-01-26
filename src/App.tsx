import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'
//import { SizedBox } from './components/SizedBox'
import { Home } from './pages/Home'
import { Edit } from './pages/Edit'
import { TaskContextProvider } from './context/task-context'

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
