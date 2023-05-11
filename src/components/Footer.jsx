import { AiOutlineInstagram } from "react-icons/ai"
import { FaFacebookF, FaTiktok } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
const Footer = () => {
    return (
        <>
            <div className="">
                <footer className=' ring-1 bg-[#2E2D2D] ring-gray-500'>
                    <div className="ring-1 ring-gray-500 grid grid-cols-1 sm:flex px-4 gap-2 md:px-10 py-6  justify-between items-center mt-4 ">
                        <div className="">
                            <h1 className='text-[14px]  text-slate-200'>©2023 Lucky Anime. All Rights Reserved</h1>
                            <p className='text-[13px] mt-1 text-slate-200'>Disclaimer: This site Lucky Anime does not store any files on its server. All contents are provided by non-affiliated third parties</p>
                        </div>
                        <div className="follow-us flex gap-2 md:gap-3 mt-2">
                            <i className='px-2 py-2 bg-[#555555]  rounded-full text-xs md:text-base  text-white cursor-pointer hover:bg-[#2873ad] duration-200'><FaFacebookF /></i>
                            <i className='px-2 py-2  bg-[#555555] rounded-full text-xs md:text-base text-white cursor-pointer hover:bg-[#2873ad] duration-200'><AiOutlineInstagram /></i>
                            <i className='px-2 py-2  bg-[#555555] rounded-full text-xs md:text-base text-white cursor-pointer hover:bg-[#2873ad] duration-200'><BsTwitter /></i>
                            <i className='px-2 py-2   bg-[#555555] rounded-full text-xs md:text-base text-white cursor-pointer hover:bg-[#2873ad] duration-200'><FaTiktok /></i>
                        </div>
                    </div>
                </footer>
            </div>


        </>
    )
}

export default Footer