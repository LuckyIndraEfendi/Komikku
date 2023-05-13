import { BsBookmark } from "../assets/Icons"
import { useState, useEffect } from "react"
import Footer from '../components/Footer'
import { IoMdColorPalette, AiFillFire } from "../assets/Icons"
import { useGlobalContext } from "../context/StateContext"
import Skeletons from '../lib/Skeletons'
import { useParams } from "react-router-dom"
import { getDetailComic } from "../api/Api"

const Details = () => {
    const { recomendation, handleDesc } = useGlobalContext()
    const [details, setDetails] = useState([])
    const [desc, setDesc] = useState([])
    const [latest, setlatest] = useState([])
    const { id } = useParams()
    useEffect(() => {
        const detailComic = async () => {
            try {
                const data = await getDetailComic(id)
                setDetails(data)
            } catch (err) {
                console.log(err)
            }
        }
        JSON.stringify(localStorage.setItem("chapter", id))
        detailComic()
        const desc = JSON.parse(localStorage.getItem('desc'))
        setDesc(desc)
        let datas = JSON.parse(localStorage.getItem('latestRead'))
        setlatest(datas)
    }, [])


    const handleLatestRead = (chapter) => {
        let datas = {
            chapter: chapter.target.innerText,
            link: chapter.target.href
        }
        localStorage.setItem('latestRead', JSON.stringify(datas))

    }
    return (
        <>
            <div className="">
                <div className="banner relative ">
                    <div className="images h-[300px] bg-top bg-cover  mt-6 md:mt-10 absolute after:w-full after:backdrop-blur-md after:absolute after:h-[300px] top-5 w-full" style={{ backgroundImage: `url(${details.thumbnail ? details.thumbnail : ""})` }}></div>
                </div>

                <div className="container  mt-50 absolute top-52  w-full">

                    <div className="m-auto px-4 md:px-10">
                        <div className="grid grid-cols-1  md:grid-cols-7 gap-4">
                            <div className=" md:col-span-5 ">
                                <div className="grid gap-4">
                                    <div className="bg-[#222222] px-3 py-3">
                                        <div className="title mb-5">
                                            <h1 className='text-white md:text-lg font-fira font-medium'>{id
                                                .split("-")
                                                .map((word) => {
                                                    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
                                                })
                                                .join(" ")} Bahasa Indonesia</h1>
                                        </div>
                                        <div className="md:flex grid justify-center w-full gap-5 ">
                                            <div className="grid gap-6 justify-center ">
                                                <img src={`${details.thumbnail ? details.thumbnail : details.thumbnail}`} alt="" className='w-52 md:w-[300px] ' />
                                                <button className='bg-blue-500 gap-2 font-medium rounded-md text-sm w-full h-10 flex items-center sm:-mt-12  text-white justify-center hover:text-white before:absolute relative before:bg-red-500 before:w-full before:top-0  before:h-full overflow-hidden before:translate-x-full hover:before:translate-x-0 before:left-0  z-10 before:-z-10 before:duration-300 before:text-white '><BsBookmark size={18} />  <span>Bookmark</span></button>
                                            </div>
                                            <div className="py-2">
                                                <p className='text-[#B8B8B8] text-sm'>{desc ? desc : ""}</p>
                                                <div className="mt-3 flex gap-3">
                                                    {details.chapter_list ? details.chapter_list.slice(-1).map((chapter, i) => (
                                                        <a href={`/watch${chapter.endpoint}`}><button className='bg-[#363636] py-1 px-3 rounded-md shadow-md shadow-gray-800  text-white' key={i}><span className='text-sm'>First :</span> <strong>{chapter.name}</strong></button></a>
                                                    )) : "Loading..."}
                                                    {details.chapter_list ? details.chapter_list.slice(0, 1).map((chapter, i) => (
                                                        <a href={`/watch${chapter.endpoint}`}><button className='bg-[#363636] py-1 px-3 rounded-md shadow-md shadow-gray-800  text-white' key={i}><span className='text-sm'>Last :</span> <strong>{chapter.name}</strong></button></a>
                                                    )) : "Loading..."}
                                                </div>
                                                <div className="">
                                                    <div className="table">
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-3 py-4">
                                                            <div className="col-1">
                                                                <div className="grid grid-cols-6 ">
                                                                    <div className=" col-span-2 flex flex-col gap-3">
                                                                        <h1 className='border-gray-500 border-b-[1px] text-white font-medium text-sm font-fira px-2 py-2 w-full'>Status</h1>
                                                                        <h1 className='border-gray-500 border-b-[1px] text-white font-medium text-sm font-fira px-2 py-2 w-full'>Rating</h1>
                                                                        <h1 className='border-gray-500 border-b-[1px] text-white font-medium text-sm font-fira px-2 py-2 w-full'>Source</h1>
                                                                        <h1 className='border-gray-500 border-b-[1px] text-white font-medium text-sm font-fira px-2 py-2 w-full'>Success</h1>

                                                                    </div>
                                                                    <div className="col-span-4">
                                                                        <h1 className='border-gray-500 border-b-[1px]  text-[#A4A4A4] text-sm font-fira border-l-[1px] px-3 py-2 '>{details.status ? details.status : 'Loading...'}</h1>
                                                                        <h1 className='border-gray-500 border-b-[1px] text-[#A4A4A4] text-sm font-fira border-l-[1px] px-3 py-[14px]  '>{details.rating ? details.rating : "Loading ..."}</h1>
                                                                        <h1 className='border-gray-500 border-b-[1px] text-[#A4A4A4] text-sm font-fira border-l-[1px] px-3 md:py-[14px] py-[14px] '><em>Lucky Anime</em></h1>
                                                                        <h1 className='border-gray-500 border-b-[1px] text-[#A4A4A4] text-sm font-fira border-l-[1px] px-3 md:py-[14px] py-[14px] '> True </h1>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-2">
                                                                <div className="grid grid-cols-6 ">
                                                                    <div className=" col-span-2 flex flex-col gap-3">
                                                                        <h1 className='border-gray-500 border-b-[1px] text-white font-medium text-sm font-fira px-2 py-2 w-full'>Type</h1>
                                                                        <h1 className='border-gray-500 border-b-[1px] text-white font-medium text-sm font-fira px-2 py-2 w-full'>Author</h1>
                                                                        <h1 className='border-gray-500 border-b-[1px] text-white font-medium text-sm font-fira px-2 py-2 w-full'>Developer</h1>
                                                                        <h1 className='border-gray-500 border-b-[1px] text-white font-medium text-sm font-fira px-2 py-2 w-full'>Message</h1>

                                                                    </div>
                                                                    <div className="col-span-4">
                                                                        <h1 className='border-gray-500 border-b-[1px]  text-[#A4A4A4] text-sm font-fira border-l-[1px] px-3 py-2 '>{details.type ? details.type : "Loading..."}</h1>
                                                                        <h1 className='border-gray-500 border-b-[1px] text-[#A4A4A4] text-sm font-fira border-l-[1px] px-3 py-[14px] md:py-[14px] '>{details.author ? details.author : "Loading..."}</h1>
                                                                        <h1 className='border-gray-500 border-b-[1px] text-[#A4A4A4] text-sm font-fira border-l-[1px] px-3 md:py-[14px] py-[14px] '><em>Lucky</em></h1>
                                                                        <h1 className='border-gray-500 border-b-[1px] text-[#A4A4A4] text-sm font-fira border-l-[1px] px-3 md:py-[14px] py-[14px] '> <a href="https://github.com/LuckyIndraEfendi" className="hover:text-blue-400" target="_blank">Follow my Github</a> </h1>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="genre px-3">
                                                        <ul className='flex  flex-wrap gap-3'>
                                                            {details.genre ? details.genre.map((genre, index) => (
                                                                <li className='bg-[#3d3d3d] px-3 py-1 rounded-sm cursor-pointer duration-200 font-poppins hover:text-blue-400 text-white text-sm ' key={index}>{genre}</li>
                                                            )) : (
                                                                <Skeletons />
                                                            )}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-[#222222]">
                                        <div className="latest-reading">
                                            <div className="bg-[#222222] rounded-sm">
                                                <div className="title py-2 px-3">
                                                    <h1 className='text-white text-[15px] font-medium font-fira md:text-base'>Latest Reading</h1>
                                                </div>
                                                <span className='line bg-[#5a5858]  h-[1px] w-full block'></span>
                                                <div className="px-3 py-3 ">
                                                    <ul className=" ring-1 ring-[#5a5858] rounded-sm ">
                                                        <li className='px-3 py-[8px] hover:text-blue-400 duration-200 text-[14px] text-white'><a href={`${latest.link ? latest.link : ""}`}>{latest.chapter ? latest.chapter : "Loading..."}</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-[#222222] ">
                                        <div className="">
                                            <div className="bg-[#222222] rounded-sm">
                                                <div className="title py-2 px-3">
                                                    <h1 className='text-white text-[15px] font-medium font-fira md:text-base'>Chapter Pendekar Pedang Sihir Rendah Reinkarnasi</h1>
                                                </div>
                                                <span className='line bg-[#5a5858]  h-[1px] w-full block'></span>
                                                <div className="flex justify-center gap-2 py-5">
                                                    <a href="" className='bg-blue-700 px-3 py-1 rounded-[3px] text-xs md:text-sm text-white hover:bg-blue-800 duration-100'>Facebook</a>
                                                    <a href="" className='bg-blue-500 px-3 py-1 rounded-[3px] text-xs md:text-sm text-white hover:bg-blue-600 duration-100'>Twitter</a>
                                                    <a href="" className='bg-green-600 px-3 py-1 rounded-[3px] text-xs md:text-sm text-white hover:bg-green-700 duration-100'>Whatsapp</a>
                                                    <a href="" className='bg-red-600 px-3 py-1 rounded-[3px] text-xs md:text-sm text-white hover:bg-red-700 duration-100'>Pinterest</a>
                                                </div>
                                                <div className="search px-3">
                                                    <input type="text" placeholder='Search Chapter. Example : 25 or 76' className='bg-[#343434] border-none ring-1 outline-none px-5 py-[6px] rounded-sm text-sm text-white ring-[#838181] font-fira w-full' />

                                                </div>
                                                <div className="py-5">
                                                    <div className="flex mt-2 flex-wrap gap-5 md:h-[60vh] overflow-y-scroll whitespace-nowrap  px-3 py-3 scroll-thumb">
                                                        {details.chapter_list ? details.chapter_list.map((chapter, index) => (
                                                            <a className='px-3 py-[8px] hover:text-blue-400 cursor-pointer rounded-sm duration-200 text-[14px] text-white ring-1 w-full ring-[#5a5858]' href={`/watch${chapter.endpoint}`} key={index} onClick={handleLatestRead}>{chapter.name}</a>
                                                        )) : "Loading..."}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="recomended">
                                        <div className="bg-[#3F81B5] flex px-5 py-2 justify-between md:mt-11 rounded-sm">
                                            <div className="flex items-center md:relative ">
                                                <h1 className='text-sm font-medium md:text-base text-white'>Rekomendasi</h1>
                                                <img src="https://komiku.com/wp-content/uploads/2022/03/fe79aa9b5eb0f51683dd5a83c5632bea-2.png" alt="" width={70} className='hidden md:block  md:absolute md:-right-20 md:-top-10' />
                                            </div>
                                            <div className="">
                                                <a href="#" className='bg-slate-800 px-2 py-1 text-sm rounded-sm text-white font-fira'>View All</a>
                                            </div>
                                        </div>

                                        <div className="px-3 bg-[#222222] py-3 grid grid-cols-3 md:grid-cols-5 gap-5">
                                            {recomendation ? (
                                                recomendation.slice(0, 5).map((item, index) => (
                                                    <a href={`/details${item.endpoint}`} key={index} onClick={() => handleDesc(item.desc)} >
                                                        <div className="group cursor-pointer">
                                                            <div className="image bg-cover bg-no-repeat h-[18vh] w-full duration-200  md:h-[30vh] rounded-md relative bg-blend-darken  bg-top group-hover:opacity-80" style={{ backgroundImage: `url(${item.image})` }}>
                                                                <button className='bottom-2 absolute left-2 bg-yellow-400 px-2 py-1 uppercase text-[11px] flex items-center gap-[2px] rounded-md font-bold font-fira'> <IoMdColorPalette size={15} /> <span >Warna</span></button>
                                                                <button className='right-2 absolute top-2 bg-red-600  px-2 py-2 rounded-md shadow-black'> <AiFillFire size={15} color='#fff' /> </button>
                                                            </div>
                                                            <p className='text-white text-sm font-medium py-1 md:py-2 group-hover:text-[#2693e6] duration-200'>{item.title.length > 20 ? item.title.slice(0, 20) + '...' : item.title}</p>
                                                        </div>
                                                    </a>
                                                ))
                                            ) : (
                                                <Skeletons />
                                            )}
                                        </div>
                                    </div>

                                </div>



                            </div>

                            <div className=" md:col-span-2">
                                <div className="grid gap-3">
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

                                    <div className="JoinDiscord">
                                        <div className="bg-[#222222] rounded-sm">
                                            <div className="title py-2 px-3">
                                                <h1 className='text-white text-[15px] font-medium font-fira'>Join Discord</h1>
                                            </div>
                                            <span className='line bg-[#5a5858]  h-[1px] w-full block'></span>
                                            <div className="likeFanpage px-3 py-3 ">
                                                <div className="flex justify-center">
                                                    <img src="https://i1.wp.com/kumascans.com/wp-content/uploads/2021/07/discord-1-978607-a7LNFDxr.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <div className="w-full absolute bottom-0 h-auto">
                <Footer />

            </div> */}
        </>
    )
}

export default Details