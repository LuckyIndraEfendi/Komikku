import Navbar from './components/Navbar'
import Dashboard from "./pages/Dashboard"
import Details from './pages/Details'
import { StateProvider } from './context/StateContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <StateProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/details/manga/:id' element={<Details />} />
        </Routes>

      </BrowserRouter>
    </StateProvider>

  )
}

export default App
