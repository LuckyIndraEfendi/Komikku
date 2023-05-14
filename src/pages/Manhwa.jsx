import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import {
    IoMdColorPalette, AiFillFire,
} from "../assets/Icons"
import { getManhwa } from '../api/Api'
import { useGlobalContext } from '../context/StateContext'
import Skeletons from '../lib/Skeletons'
const Manhwa = () => {
    const { handleDesc } = useGlobalContext()
    const [value, setValue] = useState({
        isLoading: false,
        setManhwa: []
    })

    useEffect(() => {
        async function getManwuaComic() {
            setValue({ ...value, isLoading: true })
            const response = await getManhwa()
            setValue({ ...value, setManhwa: response, isLoading: false })
        }
        getManwuaComic()
    }, [])
    return (
        <>
            <div className="w-full">
                <div className=" relative top-24 m-auto  w-[90%] ">
                    <div className="grid grid-cols-1  md:grid-cols-7 gap-4">
                        <div className="md:col-span-5">
                            <div className="px-4 py-2 rounded-sm bg-[#0687DD]">
                                <h1 className='text-white font-medium'>Daftar Komik <strong>Manhua</strong></h1>
                            </div>
                            <div className="bg-[#222222] px-3 py-4">
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">

                                    {value.isLoading ? (
                                        <Skeletons />
                                    ) : (
                                        value.setManhwa && value.setManhwa.slice(0, 20).map((manhwa, i) => (
                                            <a href={`/details${manhwa.endpoint}`} key={i} >
                                                <div className="group cursor-pointer">
                                                    <div className="image bg-cover bg-no-repeat h-[18vh] duration-200  md:h-[30vh] rounded-md relative bg-blend-darken  bg-top group-hover:opacity-80 " style={{ backgroundImage: `url(${manhwa.image})` }}>
                                                        <button className='bottom-2 absolute left-2 bg-yellow-400 px-2 py-1 uppercase text-[11px] flex manhuas-center gap-[2px] rounded-md font-bold font-fira'> <IoMdColorPalette size={15} /> <span >Warna</span></button>
                                                        <button className='right-2 absolute top-2 bg-red-600  px-2 py-2 rounded-md shadow-black'> <AiFillFire size={15} color='#fff' /> </button>
                                                    </div>
                                                    <p className='text-white text-sm font-medium py-1 md:py-2 group-hover:text-[#2693e6] duration-200'>{manhwa.title.length > 20 ? manhwa.title.slice(0, 20) + '...' : manhwa.title}</p>
                                                </div>
                                            </a>
                                        ))
                                    )}
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
                                                <a href="https://trakteer.id/lucky-indra-efendi-lpwhg" target="_blank"><img id="wse-buttons-preview" src="https://cdn.trakteer.id/images/embed/trbtn-red-5.png" height="30" alt="Trakteer Saya" className='h-[40px] border-none' /></a>
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
                <div className="mt-36">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Manhwa