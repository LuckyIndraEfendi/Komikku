import {
    IoMdColorPalette, AiFillFire, FcNext,
    FcPrevious
} from "../assets/Icons"

import { useGlobalContext } from "../context/StateContext"
import Skeletons from "../lib/Skeletons"

const Main = () => {
    const { pagess, nums, setNums, arr, pages, num, active, handlePagination, handlePagination2, popular, popular2, recomendation, actives, setNum, handleDesc } = useGlobalContext()

    return (
        <>

            <div className="w-[80%] m-auto hidden md:block ">
                <div className="bg-black rounded-md  -mt-8 z-10 relative">
                    <div className="flex gap-3 justify-between py-3 items-center px-10">
                        <ul className='flex gap-5 justify-around '>
                            {arr ? arr.map((item, i) => (
                                <li className='uppercase text-white hover:text-blue-400 duration-200 ' key={i}><a href="#" className='text-[15px]'>{item}</a></li>
                            )) : ""}
                        </ul>
                        <div className="bg-blue-600 py-1 px-3 rounded-sm">
                            <span className='text-white text-sm '>All Manga</span>
                        </div>
                    </div>
                </div>

            </div>


            <div className="px-3">
                <div className="container mx-auto md:max-w-full md:w-[95%]  md:mt-12 mt-8  ">
                    <div className="row grid md:grid-cols-7 gap-5 grid-cols-1 ">
                        <div className="col md:col-span-5 grid gap-3">
                            <div className="">
                                <div className="bg-[#3F81B5] rounded-sm">
                                    <div className="rounded-sm px-5 pt-3 overflow-hidden flex -mb-2">
                                        <h1 className=' text-white bottom-0 rounded-sm left-10 px-5 text-sm md:text-base bg-[#2e2d2d] py-2'>Baca Komik Terpopuler Hari Ini Online</h1>
                                    </div>
                                </div>
                                <div className="bg-[#2e2d2d]">
                                    <div className="content grid grid-cols-3 md:grid-cols-5 py-6 px-2 md:px-4 gap-4 ">
                                        {popular ? popular.map((item, i) => (
                                            <a href={`/details${item.endpoint}`} key={i} onClick={() => handleDesc(item.desc)}>
                                                <div className="group cursor-pointer">
                                                    <div className="image bg-cover bg-no-repeat h-[18vh] duration-200  md:h-[30vh] rounded-md relative bg-blend-darken  bg-top group-hover:opacity-80 " style={{ backgroundImage: `url(${item.image})` }}>
                                                        <button className='bottom-2 absolute left-2 bg-yellow-400 px-2 py-1 uppercase text-[11px] flex items-center gap-[2px] rounded-md font-bold font-fira'> <IoMdColorPalette size={15} /> <span >Warna</span></button>
                                                        <button className='right-2 absolute top-2 bg-red-600  px-2 py-2 rounded-md shadow-black'> <AiFillFire size={15} color='#fff' /> </button>

                                                    </div>
                                                    <p className='text-white text-sm font-medium py-1 md:py-2 group-hover:text-[#2693e6] duration-200'>{item.title.length > 20 ? item.title.slice(0, 20) + '...' : item.title}</p>
                                                </div>
                                            </a>
                                        )) : <Skeletons cards={6} />}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#1D1B26]">
                                <div className="px-4 py-4">
                                    <h1 className='text-slate-200 font-medium'>Komiku - Baca Manga</h1>
                                    <span className='h-[1px] my-2 text-slate-500 w-full bg-slate-500 block'></span>
                                    <div className="px-2 py-3">
                                        <p className='text-slate-400  text-sm font-fira'>Komiku merupakan situs <strong>baca komik</strong> bahasa indonesia terlengkap. Tampilan web juga sangat nyaman dengan warna yang enak dilihat dan tentu juga iklan yang tidak mengganggu para pembaca. Kamu bisa <strong>Baca Manga</strong> terbaru, Manhua(China) dan Manhwa(Korea) online gratis hanya di komiku.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <img src="https://komiku.com/wp-content/uploads/2022/08/komiku-banner22.jpg" alt="" className='w-full' />
                            </div>

                            <div className="bg-[#3F81B5] flex justify-center text-center rounded-sm">
                                <h1 className='flex items-center font-extrabold text-white text-[13px] md:text-base font-fira px-3 py-2'>Silahkan Klik (
                                    ) Refresh/Reload Pada Browser Anda Untuk Perbarui Komik Terbaru Jika Ada</h1>
                            </div>

                            <section id='terbaru' className="">
                                <div className="bg-[#3F81B5] flex px-5 py-2 justify-between md:mt-11 rounded-sm">
                                    <div className="flex items-center md:relative ">
                                        <h1 className='text-sm font-medium md:text-base text-white'>Baca Komik Terbaru Online</h1>
                                        <img src="https://komiku.com/wp-content/uploads/2022/04/luffy-monkey-d-luffy.gif" alt="" width={70} className='hidden md:block  md:absolute md:-right-20 md:-top-9' />
                                    </div>
                                    <div className="">
                                        <a href="#" className='bg-slate-800 px-2 py-1 text-sm rounded-sm text-white font-fira'>View All</a>
                                    </div>
                                </div>


                                <div className="bg-[#2e2d2d]">
                                    {popular2 ? (
                                        <div className="grid grid-cols-3 sm:grid-cols-3  md:grid-cols-5  gap-5  rounded-sm py-4 px-3">
                                            {popular2 ? popular2.map((item, i) => (
                                                <a href={`/details${item.endpoint}`} key={i}>
                                                    <div className="group cursor-pointer">
                                                        <div className="image bg-cover bg-no-repeat h-[18vh] duration-200  md:h-[30vh] rounded-md relative bg-blend-darken  bg-top group-hover:opacity-80 " style={{ backgroundImage: `url(${item.image})` }}>
                                                            <button className='bottom-2 absolute left-2 bg-yellow-400 px-2 py-1 uppercase text-[11px] flex items-center gap-[2px] rounded-md font-bold font-fira'> <IoMdColorPalette size={15} /> <span >Warna</span></button>
                                                            <button className='right-2 absolute top-2 bg-red-600  px-2 py-2 rounded-md shadow-black'> <AiFillFire size={15} color='#fff' /> </button>

                                                        </div>
                                                        <p className='text-white text-sm font-medium py-1 md:py-2 group-hover:text-[#2693e6] duration-200'>{item.title.length > 20 ? item.title.slice(0, 20) + '...' : item.title}</p>
                                                    </div>
                                                </a>
                                            )) : <Skeletons cards={6} />}
                                        </div>
                                    ) : (
                                        <div className="">
                                            <h1 className='text-white px-4 py-5 font-medium text-lg'>Data Tidak Ada</h1>
                                        </div>
                                    )}


                                    <div className="pagination">
                                        <div className="flex gap-1 justify-center py-4">
                                            <div className="prev mr-1">
                                                <button className='px-3 text-sm py-2 bg-[#353536] text-white rounded-md rounded-r-lg ' onClick={() => setNum((prev) => prev > 0 ? num - 1 : 0)}><FcPrevious /></button>
                                            </div>
                                            {pages ? pages.map((item, i) => (
                                                <button className={`px-3 text-sm py-1 rounded-md text-white ${active == item.page ? "bg-[#2693e6]" : "bg-[#353536]"}`} key={i} onClick={() => handlePagination(item)}>{item.page}</button>
                                            )) : ""}

                                            <div className="next ml-1">
                                                <button className='px-3 text-sm py-2 bg-[#353536] text-white rounded-md rounded-r-lg ' onClick={() => setNum((next) => next < 6 ? num + 1 : 6)}><FcNext /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </section>

                            <section id='recomendation' className="">
                                <div className="bg-[#3F81B5] flex px-5 py-2 justify-between md:mt-11 rounded-sm">
                                    <div className="flex items-center md:relative ">
                                        <h1 className='text-sm font-medium md:text-base text-white'>Baca Komik Rekomendasi</h1>
                                        <img src="https://komiku.com/wp-content/uploads/2022/04/luffy-monkey-d-luffy.gif" alt="" width={70} className='hidden md:block  md:absolute md:-right-20 md:-top-9' />
                                    </div>
                                    <div className="">
                                        <a href="#" className='bg-slate-800 px-2 py-1 text-sm rounded-sm text-white font-fira'>View All</a>
                                    </div>
                                </div>


                                <div className="bg-[#2e2d2d]">

                                    {recomendation ? (
                                        <div className="grid grid-cols-3 sm:grid-cols-3  md:grid-cols-5  gap-5  rounded-sm py-4 px-3">
                                            {recomendation ? recomendation.map((item, i) => (
                                                <a href={`/details${item.endpoint}`} key={i}>
                                                    <div className="group cursor-pointer">
                                                        <div className="image bg-cover bg-no-repeat h-[18vh] duration-200  md:h-[30vh] rounded-md relative bg-blend-darken  bg-top group-hover:opacity-80 " style={{ backgroundImage: `url(${item.image})` }}>
                                                            <button className='bottom-2 absolute left-2 bg-yellow-400 px-2 py-1 uppercase text-[11px] flex items-center gap-[2px] rounded-md font-bold font-fira'> <IoMdColorPalette size={15} /> <span >Warna</span></button>
                                                            <button className='right-2 absolute top-2 bg-red-600  px-2 py-2 rounded-md shadow-black'> <AiFillFire size={15} color='#fff' /> </button>
                                                        </div>
                                                        <p className='text-white text-sm font-medium py-1 md:py-2 group-hover:text-[#2693e6] duration-200'>{item.title.length > 20 ? item.title.slice(0, 20) + '...' : item.title}</p>
                                                    </div>
                                                </a>
                                            )) : <Skeletons cards={6} />}
                                        </div>
                                    ) : (
                                        <div className="">
                                            <h1 className='text-white px-4 py-5 font-medium text-lg'>Data Tidak Ada</h1>
                                        </div>
                                    )}


                                    <div className="pagination">
                                        <div className="flex gap-1 justify-center py-4">
                                            <div className="prev mr-1">
                                                <button className='px-3 text-sm py-2 bg-[#353536] text-white rounded-md rounded-r-lg ' onClick={() => setNums((prev) => prev > 0 ? nums - 1 : 0)}><FcPrevious /></button>
                                            </div>
                                            {pagess ? pagess.map((item, i) => (
                                                <button className={`px-3 text-sm py-1 rounded-md text-white ${actives == item.page ? "bg-[#2693e6]" : "bg-[#353536]"}`} key={i} onClick={() => handlePagination2(item)}>{item.page}</button>
                                            )) : ""}

                                            <div className="next ml-1">
                                                <button className='px-3 text-sm py-2 bg-[#353536] text-white rounded-md rounded-r-lg ' onClick={() => setNums((next) => next < 15 ? nums + 1 : 15)}><FcNext /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </section>

                        </div>

                        <div className="col md:col-span-2 ">
                            <div className="grid gap-4 md:flex md:flex-col">
                                <div className="fanpage">
                                    <div className="bg-[#222222] rounded-sm">
                                        <div className="title py-2 px-3">
                                            <h1 className='text-white text-[15px] font-medium font-fira'>Like Fanspage</h1>
                                        </div>
                                        <span className='line bg-[#5a5858]  h-[1px] w-full block'></span>
                                        <div className="likeFanpage px-3 py-5 ">
                                            <div className="bg-[#3d3b3b] rounded-sm ">
                                                <h1 className='px-2 py-1 text-[14px] text-white'>Like My Fanpage</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="giveCoffe">
                                    <div className="bg-[#222222] rounded-sm">
                                        <div className="title py-2 px-3">
                                            <h1 className='text-white text-[15px] font-medium font-fira'>Like Fanspage</h1>
                                        </div>
                                        <span className='line bg-[#5a5858]  h-[1px] w-full block'></span>
                                        <div className="likeFanpage px-3 py-3 ">
                                            <div className="flex justify-center">
                                                <a href="https://trakteer.id/lucky-indra-efendi-lpwhg" target="_blank"><img id="wse-buttons-preview" src="https://cdn.trakteer.id/images/embed/trbtn-red-5.png" height="30" alt="Trakteer Saya" className='h-[40px] border-none
                                            ' /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main