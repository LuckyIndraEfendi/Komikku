import { FiSearch, AiFillCloseCircle, GiHamburgerMenu, IoIosLogIn, BsFillPersonPlusFill, BiShuffle, IoIosBook, FaRegQuestionCircle, FiSettings } from "../assets/Icons"
import { useState } from 'react'
const Navbar = () => {
    const navMenu = ["Beranda", "Daftar Komik", "Manhwa", "Manhua", "Bookmark", "APK", "iOS"]
    const [search, setSearch] = useState(false)
    const handleSearch = () => {
        setSearch(!search)
    }
    const [value, setValue] = useState({
        search: "",
        hamburger: false
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(value.search)
    }
    return (
        <>
            <div className="">
                <nav className='bg-[#0687dd] px-5 py-2 md:py-3 flex items-center justify-between md:justify-around  shadow-md shadow-slate-700 fixed w-full z-20' >
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
                        <li ><a href="/list" className='text-slate-200 opacity-70 hover:opacity-100 hover:text-white cursor-pointer duration-300  text-[15px] dura font-medium relative py-2 after:duration-300 after:bg-white after:absolute after:w-0  after:left-0 after:bottom-0  after:h-[2px] after:rounded-sm hover:after:w-full'>Daftar Komik</a></li>
                        <li ><a href="/manhwa" className='text-slate-200 opacity-70 hover:opacity-100 hover:text-white cursor-pointer duration-300  text-[15px] dura font-medium relative py-2 after:duration-300 after:bg-white after:absolute after:w-0  after:left-0 after:bottom-0  after:h-[2px] after:rounded-sm hover:after:w-full'>Manhwa</a></li>
                        <li ><a href="/manhua" className='text-slate-200 opacity-70 hover:opacity-100 hover:text-white cursor-pointer duration-300  text-[15px] dura font-medium relative py-2 after:duration-300 after:bg-white after:absolute after:w-0  after:left-0 after:bottom-0  after:h-[2px] after:rounded-sm hover:after:w-full'>Manhua</a></li>
                        <li ><a href="/bookmark" className='text-slate-200 opacity-70 hover:opacity-100 hover:text-white cursor-pointer duration-300  text-[15px] dura font-medium relative py-2 after:duration-300 after:bg-white after:absolute after:w-0  after:left-0 after:bottom-0  after:h-[2px] after:rounded-sm hover:after:w-full'>Bookmark</a></li>
                        <li ><a href="" className='text-slate-200 opacity-70 hover:opacity-100 hover:text-white cursor-pointer duration-300  text-[15px] dura font-medium relative py-2 after:duration-300 after:bg-white after:absolute after:w-0  after:left-0 after:bottom-0  after:h-[2px] after:rounded-sm hover:after:w-full'>APK</a></li>
                        <li ><a href="" className='text-slate-200 opacity-70 hover:opacity-100 hover:text-white cursor-pointer duration-300  text-[15px] dura font-medium relative py-2 after:duration-300 after:bg-white after:absolute after:w-0  after:left-0 after:bottom-0  after:h-[2px] after:rounded-sm hover:after:w-full'>iOS</a></li>


                    </ul>


                    <div className=' items-center hidden md:flex'>
                        <img src="https://tse2.mm.bing.net/th?id=OIP.bNQ8Br0pibM1YAp3FmvOqAHaHa&pid=Api&P=0" alt="" width="40px" className='rounded-full ring-1 ring-gray-200' />
                    </div>
                    <div className="flex items-center gap-4 md:hidden">
                        <form action="" className="absolute  right-0 w-full px-2  " onSubmit={handleSubmit}>
                            <div className={`${search ? 'block' : "hidden"} relative`}>
                                <div className='absolute top-[10px] left-4 flex items-center'>
                                    <FiSearch className='text-gray-500' />
                                </div>
                                <div className="close absolute right-3 top-[10px] cursor-pointer " onClick={() => setSearch(false)}>
                                    <AiFillCloseCircle className='text-red-500' />
                                </div>
                                <input type="text" placeholder="Cari Komik" className='text-sm bg-gray-200 px-10 py-2 rounded-full w-full outline-none focus:ring-1 ring-slate-600 duration-100' onChange={(e) => setValue({ ...value, search: e.target.value })} />
                            </div>
                        </form>
                        <div className={`${search ? "hidden" : 'search block '} md:hidden`} onClick={handleSearch}>
                            <div className='rounded-full bg-slate-400 px-3 py-3'>
                                <FiSearch className='text-white text-sm' />
                            </div>
                        </div>
                        <div className={`${search ? "hidden" : 'profile block'}`}>
                            <div className="account" onClick={() => setValue({ ...value, hamburger: false })}>
                                <img src="https://tse2.mm.bing.net/th?id=OIP.bNQ8Br0pibM1YAp3FmvOqAHaHa&pid=Api&P=0" alt="" width="40px" className='rounded-full ring-1 ring-gray-200' />
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
                            <h1 className='flex items-center text-sm  gap-4 hover:text-[#e0095c] cursor-pointer text-[#949494]'><IoIosLogIn size={20} /> <span>Login</span></h1>
                            <h1 className='flex items-center  text-sm gap-4 hover:text-[#e0095c] cursor-pointer text-[#949494]'><BsFillPersonPlusFill size={20} /> <span>Register</span></h1>
                        </div>
                    </div>

                    <div className="px-10 py-3">
                        <h1 className='text-[#949494]  font-medium'>General</h1>
                        <div className="flex flex-col gap-6 mt-4">
                            <h1 className='flex items-center text-sm gap-4 hover:text-[#e0095c] cursor-pointer text-[#949494]'><GiHamburgerMenu size={20} /> <span>Browser</span></h1>
                            <h1 className='flex items-center text-sm gap-4 hover:text-[#e0095c] cursor-pointer text-[#949494]'><IoIosBook size={20} /> <span>Genre</span></h1>
                            <h1 className='flex items-center text-sm gap-4 hover:text-[#e0095c] cursor-pointer text-[#949494]'><BiShuffle size={20} /> <span>Random</span></h1>

                        </div>
                    </div>

                    <div className="px-10 py-3">
                        <h1 className='text-[#949494]  font-medium'>Other</h1>
                        <div className="flex flex-col gap-4  mt-4">
                            <h1 className='flex items-center text-sm gap-4 hover:text-[#e0095c] cursor-pointer text-[#949494]'><FaRegQuestionCircle size={19} /> <span>FAQ</span></h1>
                            <h1 className='flex items-center text-sm gap-4 hover:text-[#e0095c] cursor-pointer text-[#949494]'><FiSettings size={19} /> <span>Setting</span></h1>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Navbar