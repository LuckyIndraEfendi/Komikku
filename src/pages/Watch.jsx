import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getChapters } from '../api/Api'
import Footer from "../components/Footer"

const Watch = () => {
    const { name } = useParams()
    const [value, setValue] = useState([])
    useEffect(() => {
        const watchComic = async () => {
            const chapters = await getChapters(name)
            setValue(chapters)
        }
        watchComic()
    }, [])
    return (
        <>

            <div className="w-full flex flex-col gap-5">
                <div className="w-[90%] m-auto -z-10 relative top-32">
                    <div className="">
                        <div className="flex justify-center flex-col gap-1">
                            <h1 className='text-white text-center text-base md:text-xl font-bold font-fira'>Komik {value.title ? value.title : ""}</h1>
                            <p className='text-center text-sm text-gray-500'>Semua chapter ada di <a href="" className='font-bold text-blue-600'>Nano Machine</a></p>
                        </div>
                        <div className="flex justify-center gap-2 py-5">
                            <a href="" className='bg-blue-700 px-3 py-1 rounded-[3px] text-xs md:text-sm text-white hover:bg-blue-800 duration-100'>Facebook</a>
                            <a href="" className='bg-blue-500 px-3 py-1 rounded-[3px] text-xs md:text-sm text-white hover:bg-blue-600 duration-100'>Twitter</a>
                            <a href="" className='bg-green-600 px-3 py-1 rounded-[3px] text-xs md:text-sm text-white hover:bg-green-700 duration-100'>Whatsapp</a>
                            <a href="" className='bg-red-600 px-3 py-1 rounded-[3px] text-xs md:text-sm text-white hover:bg-red-700 duration-100'>Pinterest</a>
                        </div>
                        <div className=" bg-[#222222] flex justify-center py-3 ">
                            <p className='text-slate-300 text-xs sm:text-sm'>Komiku  › {value.title ? value.title : ""}</p>
                        </div>
                        <div className="flex justify-center mt-5">
                            <p className='text-gray-400 font-fira text-center text-xs sm:text-sm font-normal'>Baca manga <strong>{value.title ? value.title : ""}</strong> bahasa Indonesia terbaru di <strong>Komiku</strong>. Manga Nano Machine bahasa Indonesia selalu update di <strong>Komiku</strong>. Jangan lupa membaca update manga lainnya ya. Daftar koleksi manga  <strong> Komiku</strong> ada di menu Daftar Manga.</p>
                        </div>
                    </div>

                    <div className="images  mt-10">
                        <div className=" grid w-full justify-center h-full gap-2">
                            {value.image ? value.image.map((chapter, i) => (
                                <img src={chapter ? chapter : ""} alt="kosong" className='' key={i} />
                            )) : (
                                <p className='text-white text-center'>Loading...</p>
                            )}
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

export default Watch