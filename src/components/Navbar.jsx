import { FiSearch, AiFillCloseCircle, FaUserAlt, GiHamburgerMenu, IoIosLogIn, BiLogOut, BsFillPersonPlusFill, BiShuffle, IoIosBook, FaRegQuestionCircle, FiSettings, SiGitbook, SiMdbook, BsFillBookmarksFill } from "../assets/Icons"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState, useEffect } from 'react'
import { getSearchComic } from "../api/Api";
import { useGlobalContext } from "../context/StateContext";
import { useAuthContext } from "../context/AuthContext";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 500,
    borderRadius: '10px',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
    overflowX: "hidden",
    overflowY: "scroll ",
};


const Navbar = () => {
    const { isLogin, handleLogout } = useAuthContext()
    const { handleDesc } = useGlobalContext()
    const [search, setSearch] = useState(false)
    const handleSearch = () => {
        setSearch(!search)
    }
    const [value, setValue] = useState({
        hamburger: false,
        setDataVal: []
    })
    const [search1, setSearch1] = useState("")
    const [valSearch, setValSearch2] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(value.search)
        window.location.href = `/search/comic/${search1}`
    }

    const handleSubmit2 = (e) => {
        e.preventDefault()
        window.location.href = `/search/comic/${valSearch}`
    }
    const [open, setOpen] = useState(false);
    const [isUser, setIsUser] = useState("")
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    useEffect(() => {
        const searchComic = async () => {
            try {
                const searchAPI = await getSearchComic(search1)
                setValue({ ...value, setDataVal: searchAPI })
            } catch (err) {
                console.log(err)
            }
        }
        searchComic()
    }, [search1])

    useEffect(() => {
        localStorage.getItem('user') && setIsUser(JSON.parse(localStorage.getItem('user')))
    }, [])

    return (
        <>
            <div className="">
                <nav className='bg-[#0687dd] px-5 py-2 md:py-3 flex items-center justify-between md:justify-around  shadow-md shadow-slate-700 fixed w-full z-20 top-0' >
                    <div className="logo flex items-center gap-3" >
                        <GiHamburgerMenu className="text-white text-2xl md:hidden" onClick={() => setValue({
                            ...value, hamburger: !value.hamburger
                        })} />
                        <div className="-mt-2">
                            <a href="/"> <img src="https://komiku.com/wp-content/uploads/2022/03/logooo.png" alt="" width="150px" /></a>
                        </div>
                    </div>
                    <ul className='hidden md:flex sm:w-[50%] md:w-[55%] justify-between items-center '>
                        <li ><a href="/" className='text-slate-200 opacity-70 hover:opacity-100 hover:text-white cursor-pointer duration-300  text-[15px] dura font-medium relative py-2 after:duration-300 after:bg-white after:absolute after:w-0  after:left-0 after:bottom-0  after:h-[2px] after:rounded-sm hover:after:w-full'>Beranda</a></li>
                        <li ><a href="/list-comic" className='text-slate-200 opacity-70 hover:opacity-100 hover:text-white cursor-pointer duration-300  text-[15px] dura font-medium relative py-2 after:duration-300 after:bg-white after:absolute after:w-0  after:left-0 after:bottom-0  after:h-[2px] after:rounded-sm hover:after:w-full'>Daftar Komik</a></li>
                        <li ><a href="/manhwa" className='text-slate-200 opacity-70 hover:opacity-100 hover:text-white cursor-pointer duration-300  text-[15px] dura font-medium relative py-2 after:duration-300 after:bg-white after:absolute after:w-0  after:left-0 after:bottom-0  after:h-[2px] after:rounded-sm hover:after:w-full'>Manhwa</a></li>
                        <li ><a href="/manhua" className='text-slate-200 opacity-70 hover:opacity-100 hover:text-white cursor-pointer duration-300  text-[15px] dura font-medium relative py-2 after:duration-300 after:bg-white after:absolute after:w-0  after:left-0 after:bottom-0  after:h-[2px] after:rounded-sm hover:after:w-full'>Manhua</a></li>
                        <li ><a href="/bookmark" className='text-slate-200 opacity-70 hover:opacity-100 hover:text-white cursor-pointer duration-300  text-[15px] dura font-medium relative py-2 after:duration-300 after:bg-white after:absolute after:w-0  after:left-0 after:bottom-0  after:h-[2px] after:rounded-sm hover:after:w-full'>Bookmark</a></li>
                        <li className="bg-slate-800 px-3 py-3 text-white rounded-full cursor-pointer hover:text-blue-400" onClick={handleOpen}><FiSearch /></li>

                    </ul>


                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"

                    >
                        <Box sx={style} >
                            <form action="" className="relative " onSubmit={handleSubmit}>
                                <input type="text" className='w-full px-16 border-2 border-gray-200 rounded-full  py-2 focus:outline-none focus:border-blue-400' placeholder='Cari Komik atau Manga' onChange={(e) => setSearch1(e.target.value)} />
                                <button className="absolute left-5 top-[12px]  text-blue-500 text-xl"><FiSearch /></button>
                            </form>

                            <div className="mt-3">
                                <div className="flex flex-col gap-5 overflow-hidden scroll-thumb px-2 ">
                                    {
                                        value.setDataVal ? value.setDataVal.data ? value.setDataVal.data.map((item, i) => (
                                            <a href={`/details${item.endpoint}`} className="group" key={i} onClick={() => handleDesc(item.desc)}>
                                                <div className="images flex gap-5">
                                                    <img src={`${item.image}`} alt="" width={150} />
                                                    <div className="py-1">
                                                        <h1 className="text-gray-900 font-medium text-lg group-hover:text-blue-700">{item.title}</h1>
                                                        <p className="text-sm mt-2 text-gray-700 group-hover:text-gray-500">{item.desc}</p>
                                                    </div>
                                                </div>
                                            </a>
                                        )) : "" : "Loading..."
                                    }
                                </div>
                            </div>
                        </Box>
                    </Modal>

                    <div className=' items-center hidden md:flex gap-2'>
                        {isLogin ? (
                            <>
                                {isUser.photoURL ? (
                                    <img src={`${isUser.photoURL ? isUser.photoURL : ""}`} alt="" className=" w-12 rounded-full" />
                                ) : (
                                    <h1 className="text-white">{isUser.displayName}</h1>
                                )}
                            </>
                        ) : (
                            <>
                                <button className="bg-red-500 py-2 px-3 rounded-md text-sm text-white shadow-sm shadow-gray-500 font-fira font-medium">Login</button>
                                <button className="bg-yellow-500 py-2 px-3 rounded-md text-sm text-white shadow-sm shadow-gray-500 font-fira font-medium">Register</button>
                            </>
                        )}

                    </div>
                    <div className="flex items-center gap-4 md:hidden">
                        <form action="" className="absolute  right-0 w-full px-2  " onSubmit={handleSubmit2}>
                            <div className={`${search ? 'block' : "hidden"} relative`}>
                                <div className='absolute top-[10px] left-4 flex items-center'>
                                    <FiSearch className='text-gray-500' />
                                </div>
                                <div className="close absolute right-3 top-[10px] cursor-pointer " onClick={() => setSearch(false)}>
                                    <AiFillCloseCircle className='text-red-500' />
                                </div>
                                <input type="text" placeholder="Cari Komik" className='text-sm bg-gray-200 px-10 py-2 rounded-full w-full outline-none focus:ring-1 ring-slate-600 duration-100' onChange={(e) => setValSearch2(e.target.value)} />
                            </div>
                        </form>
                        <div className={`${search ? "hidden" : 'search block '} md:hidden`} onClick={handleSearch}>
                            <div className='rounded-full bg-slate-800 px-3 py-3'>
                                <FiSearch className='text-white text-sm' />
                            </div>
                        </div>
                        <div className={`${search ? "hidden" : 'profile block'}`}>
                            <div className="account" >
                                {isLogin ? (
                                    <>
                                        {isUser.photoURL ? (
                                            <img src={`${isUser.photoURL ? isUser.photoURL : "https://cdn-icons-png.flaticon.com/128/456/456212.png"}`} alt="" className=" w-12 rounded-full" />

                                        ) : (
                                            <h1 className="text-white font-medium text-base">{isUser.displayName || isUser.email ? isUser.email.replace('@gmail.com', '') : ""}</h1>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        <button className="bg-red-500 py-2 px-3 rounded-md text-sm  text-white shadow-sm shadow-gray-500 font-fira font-medium">Login</button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>



                <div className={`${value.hamburger ? "-translate-x-0" : "-translate-x-full "}  bg-[#131315] z-30 duration-300 transition-all h-screen fixed top-0 left-0 w-2/3`}>
                    <div className="logo ">
                        <img src="https://4anime.is/images/Saitama.jpg" alt="" />
                    </div>
                    <div className="px-10 py-5">
                        <div className="flex flex-col gap-4">
                            {
                                isLogin ? (
                                    <a href="/account" className='flex items-center  text-base mt-5 gap-4 hover:text-[#e0095c] cursor-pointer text-[#949494]'><FaUserAlt size={20} /> <span>Account</span></a>
                                ) : (
                                    <>
                                        <a href="/login" className='flex items-center text-sm  gap-4 hover:text-[#e0095c] cursor-pointer text-[#949494]'><IoIosLogIn size={20} /> <span>Login</span></a>
                                        <a href="/register" className='flex items-center  text-sm gap-4 hover:text-[#e0095c] cursor-pointer text-[#949494]'><BsFillPersonPlusFill size={20} /> <span>Register</span></a>
                                    </>
                                )
                            }

                        </div>
                    </div>

                    {isLogin ? (
                        <>
                            <div className="px-10 py-3">
                                <h1 className='text-[#949494]  font-medium'>General</h1>
                                <div className="flex flex-col gap-6 mt-4">
                                    <a href="/" className='flex items-center text-sm gap-4 hover:text-[#e0095c] cursor-pointer text-[#949494]'><GiHamburgerMenu size={20} /> <span>Browser</span></a>
                                    <a href="/list-comic" className='flex items-center text-sm gap-4 hover:text-[#e0095c] cursor-pointer text-[#949494]'><IoIosBook size={20} /> <span>Daftar Komik</span></a>
                                    <a href="/manhwa" className='flex items-center text-sm gap-4 hover:text-[#e0095c] cursor-pointer text-[#949494]'><SiGitbook size={20} /> <span>Manhwa</span></a>
                                    <a href="/manhua" className='flex items-center text-sm gap-4 hover:text-[#e0095c] cursor-pointer text-[#949494]'><SiMdbook size={20} /> <span>Manhua</span></a>
                                    <a href="/bookmark" className='flex items-center text-sm gap-4 hover:text-[#e0095c] cursor-pointer text-[#949494]'><BsFillBookmarksFill size={20} /> <span>Boomark</span></a>
                                    <a href="/random" className='flex items-center text-sm gap-4 hover:text-[#e0095c] cursor-pointer text-[#949494]'><BiShuffle size={20} /> <span>Random</span></a>
                                </div>
                            </div>

                            <div className="px-10 py-3">
                                <h1 className='text-[#949494]  font-medium'>Other</h1>
                                <div className="flex flex-col gap-4  mt-4">
                                    <a href="/" className='flex items-center text-sm gap-4 hover:text-[#e0095c] cursor-pointer text-[#949494]'><FaRegQuestionCircle size={19} /> <span>FAQ</span></a>
                                    <a href="/setting" className='flex items-center text-sm gap-4 hover:text-[#e0095c] cursor-pointer text-[#949494]'><FiSettings size={19} /> <span>Setting</span></a>
                                    <a className='flex items-center text-sm gap-4 hover:text-[#e0095c] cursor-pointer text-[#949494]' onClick={handleLogout} ><BiLogOut size={19} /> <span>LogOut</span></a>
                                </div>
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                    <div className="px-3">
                        <button className="mt-5  px-2 py-1 bg-red-600 w-full rounded-md text-white" onClick={() => setValue({ ...value, hamburger: false })}>Close</button>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Navbar