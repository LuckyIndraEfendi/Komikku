import Navbar from './components/Navbar'
import { DaftarComic, Dashboard, Details, Manhwa, Manhua, Search, Watch, Login, Register } from './pages'
import Arknight from "./assets/loader/arknights-error.gif"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useGlobalContext } from './context/StateContext'
import { useAuthContext } from './context/AuthContext'
import Error from './components/Error'

function App() {
  const { loader } = useGlobalContext()
  const { isLogin } = useAuthContext()

  // useEffect(() => {
  //   setisLoading({ ...isLoading, isLoading: true })
  // }, [loader.isLoading, setisLoading])

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
            {isLogin ? (
              <>
                <Route path='/' element={<Dashboard />} />
                <Route path='/details/manga/:id' element={<Details />} />
                <Route path='/watch/ch/:name' element={<Watch />}></Route>
                <Route path='/manhua' element={<Manhua />}></Route>
                <Route path='/manhwa' element={<Manhwa />}></Route>
                <Route path='/list-comic' element={<DaftarComic />}></Route>
                <Route path='/search/comic/:searchName' element={<Search />}></Route>
              </>
            ) : (
              <>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
              </>
            )}
            {/* <Route path='*' element={<Error />} /> */}
          </Routes>

        </>
      )}
    </BrowserRouter>
  )
}

export default App
