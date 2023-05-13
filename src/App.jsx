import Navbar from './components/Navbar'
import Dashboard from "./pages/Dashboard"
import Details from './pages/Details'
import Watch from './pages/Watch'
import Search from './pages/Search'
import Manhua from './pages/Manhua'
import Manhwa from './pages/Manhwa'
import DaftarComic from './pages/DaftarComic'
import Arknight from "./assets/loader/arknights-error.gif"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useGlobalContext } from './context/StateContext'
function App() {

  const { loader } = useGlobalContext()
  return (
    <BrowserRouter>
      {loader.isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="px-4">
            <img src={Arknight} alt="" />
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/details/manga/:id' element={<Details />} />
            <Route path='/watch/ch/:name' element={<Watch />}></Route>
            <Route path='/manhua' element={<Manhua />}></Route>
            <Route path='/manhwa' element={<Manhwa />}></Route>
            <Route path='/list-comic' element={<DaftarComic />}></Route>
            <Route path='/search/comic/:searchName' element={<Search />}></Route>


          </Routes>
        </>
      )}



    </BrowserRouter>

  )
}

export default App
