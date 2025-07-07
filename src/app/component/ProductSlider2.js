"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { useState, useId, useEffect } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";




import Link from "next/link";




export default function ProductSlider({ products, sliderId }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const uniqueId = useId(); // generate a unique ID (or use sliderId from props)

    const prevClass = `prev-${sliderId || uniqueId}`;
    const nextClass = `next-${sliderId || uniqueId}`;

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

    if (!isClient) return null;


    return (
        <>

            <div className="relative max-w-8xl mx-auto px-4">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        nextEl: `.${nextClass}`,
                        prevEl: `.${prevClass}`,
                    }}
                    // autoplay={{
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    loop={true}
                    spaceBetween={20}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            centeredSlides: true,
                        },
                        768: {
                            slidesPerView: 3,
                            centeredSlides: true,
                        },
                        1024: {
                            slidesPerView: 5,
                            centeredSlides: true,
                        },
                    }}
                    className="pb-10 product_card flip_slider"
                >
                    {products.map((item, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <SwiperSlide key={index} className="rounded-xl mt-8">
                                <div className="radius_img">
                                    <div
                                        className={`relative group perspective overflow-hidden rounded-xl transition-all duration-100 ${isActive ? "h-[400px]" : "h-[400px]"
                                            }`}
                                    >
                                        <div
                                            className={`relative w-full h-full transform-style preserve-3d transition-transform duration-700 ${isActive
                                                ? "group-hover:rotate-y-180"
                                                : ""
                                                }`}
                                        >
                                            {/* Front Side */}
                                            <div className="absolute w-full h-full backface-hidden bg-white text-black rounded-xl shadow-lg overflow-hidden">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover !relative !rounded-xl"
                                                />
                                                <div className="absolute bottom-0 bg-white w-full text-center py-4 px-3 front_side">
                                                    <h3 className="text-[18px] font-semibold text-[#000] mb-1">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-sm font-medium text-[#C3272B] mb-4">
                                                        {item.shortDesc}
                                                    </p>
                                                    <Link
                                                        href="/info"
                                                        className="bg-black rounded text-white px-4 py-2 text-xs uppercase font-bold"
                                                    >
                                                        Know More
                                                    </Link>
                                                </div>
                                            </div>

                                            {/* Back Side */}
                                            <div className="absolute w-full h-full backface-hidden bg-white text-black rounded-xl shadow-lg rotate-y-180 p-6 flex flex-col justify-center items-center back_side">
                                                <h3 className="text-[22px] font-bold text-[#C3272B] mb-3">{item.title}</h3>
                                                <p className="text-sm text-center text-[#C3272B] mb-4"
                                                 dangerouslySetInnerHTML={{__html: item.longDesc}}
                                                />


                                                {/* <Link
                                                    href="/info"
                                                    className="bg-black rounded text-white px-4 py-2 text-xs uppercase font-bold"
                                                >
                                                    Know More
                                                </Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                <button className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full cursor-pointer ${prevClass}`}>
                    <FiChevronLeft size={24} className="text-[#F8AB1D]" />
                </button>
                <button className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full cursor-pointer ${nextClass}`}>
                    <FiChevronRight size={24} className="text-[#F8AB1D]" />
                </button>


            </div>
        </>
    );
}
