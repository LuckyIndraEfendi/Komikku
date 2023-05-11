import Navbar from './components/Navbar'
import Dashboard from "./pages/Dashboard"
import Details from './pages/Details'
import Watch from './pages/Watch'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useGlobalContext } from './context/StateContext'
function App() {

  const { loader } = useGlobalContext()
  return (
    <BrowserRouter>
      {loader.isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="">
            {/* <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-700"></div> */}
            <img src="https://media.tenor.com/i0o1i92By0YAAAAC/lucidic-landonia.gif" alt="" />
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/details/manga/:id' element={<Details />} />
            <Route path='/watch/ch/:name' element={<Watch />}></Route>
          </Routes>
        </>
      )}



    </BrowserRouter>

  )
}

export default App
