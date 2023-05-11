import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { getPopularComic } from "../api/Api";

const Slider = () => {

    const [popular, setPopular] = useState([])

    useEffect(() => {

        (async () => {
            const data = await getPopularComic(1)
            setPopular(data)
        })()

    }, [])
    return (
        <>
            <div className="">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: '.custom-pagination',
                        clickable: true,
                    }}

                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >

                    {popular ? popular.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="mt-[50px] md:mt-[60px]">
                                <div className="images bg-cover w-full md:h-[90vh] h-[35vh]  bg-bottom brightness-[.7]  top-0 right-0" style={{ backgroundImage: `url(${item.image ? item.image : ""})` }}>

                                </div>
                                <div className="md:absolute md:bottom-16 md:left-10 absolute bottom-6 left-5 w-[80%] md:w-[50%] bg-[rgba(0,0,0,0.6)]  backdrop-blur-sm px-5 py-5 rounded-xl">
                                    <h1 className="text-white text-xl font-medium md:text-3xl font-rowdies">{item.title}</h1>
                                    <div className="text-white mt-1 md:mt-3"><span className="text-sm bg-blue-600 px-3 py-[3px] md:py-[4px] md:text-base font-medium rounded-sm ">8.0</span> <span className="text-[13px] ml-2 font-medium">Type : <span>Manhwa</span></span>
                                    </div>

                                    <p className="text-xs text-white mt-2 md:mt-3 md:text-sm font-fira font-light">{item.desc}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )) : "Loading..."}



                </Swiper>
            </div >
        </>
    )
}

export default Slider