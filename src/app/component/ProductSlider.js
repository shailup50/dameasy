"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// import product1 from "../../asserts/images/home/apple-cider-vinegar.webp"
import product2 from "../../asserts/images/home/blueberry-jam.webp"
import product3 from "../../asserts/images/home/ginger-garlic-paste.webp"
import product4 from "../../asserts/images/home/honey-mustard-sachet.webp"
import product5 from "../../asserts/images/home/hot-and-spicy-schezwan.webp"
import product6 from "../../asserts/images/home/kung-pao.webp"
import product7 from "../../asserts/images/home/lemon-juice.webp"
import product8 from "../../asserts/images/home/truffle-mayo.webp"
import product9 from "../../asserts/images/home/vanilla.webp"
import Link from "next/link";


const categories = [
    // {
    //     title: "Sauces & Condiments",
    //     image: product1,
    //     shortDesc: "Classic and innovative blends that excite taste buds.",
    // },
    {
        title: "Sauces & Condiments",
        image: product2,
        shortDesc: "Classic and innovative blends that excite taste buds.",
    },
    {
        title: "CLASSIC MAYO",
        image: product3,
        shortDesc: "Classic and innovative blends that excite taste buds.",
    },
    {
        title: "GINGER PASTE",
        image: product4,
        shortDesc: "Classic and innovative blends that excite taste buds.",
    },
    {
        title: "GINGER PASTE",
        image: product5,
        shortDesc: "Classic and innovative blends that excite taste buds.",
    },
    {
        title: "GINGER PASTE",
        image: product6,
        shortDesc: "Classic and innovative blends that excite taste buds.",
    },
    {
        title: "GINGER PASTE",
        image: product7,
        shortDesc: "Classic and innovative blends that excite taste buds.",
    },
    {
        title: "GINGER PASTE",
        image: product8,
        shortDesc: "Classic and innovative blends that excite taste buds.",
    },
    {
        title: "GINGER PASTE",
        image: product9,
        shortDesc: "Classic and innovative blends that excite taste buds.",
    },

];

export default function ProductSlider() {

    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="py-12 md:py-20 px-4 text-white text-center" style={{ background: "radial-gradient(circle,rgba(253, 97, 0, 1) 0%, rgba(180, 14, 19, 1) 100%);" }}>
            <h2 className="text-3xl md:text-4xl  font-semibold mb-10 md:mb-14">
                OUR CATEGORY SHOWCASE
            </h2>

            <div className="relative max-w-8xl mx-auto px-4">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        nextEl: ".next-slide",
                        prevEl: ".prev-slide",
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
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
                    className="pb-10 product_card items-center"
                >
                    {categories.map((item, index) => (
                        <SwiperSlide key={index} className="rounded-xl">
                            <div className="radius_img">
                                <div
                                    className={` ${index === activeIndex ? "active-card" : ""
                                        }`}
                                >

                                    <div className="w-full h-full  bg-white text-black rounded-xl shadow-lg">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover f-full w-full !relative"
                                        />
                                        <div className="bottom-0 bg-white w-full text-center py-4 px-3 pb-8 content_slide">
                                            <h3 className="text-[22px] font-bold text-[#C3272B] mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm font-medium text-[#C3272B] mb-6">
                                                {item.shortDesc}
                                            </p>
                                            <Link href="#" className="bg-black rounded text-white px-4 py-2 text-xs uppercase font-bold">
                                            Know More
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button className="prev-slide absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full cursor-pointer">
                    <FiChevronLeft size={24} className="text-[#F8AB1D]" />
                </button>
                <button className="next-slide absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full cursor-pointer">
                    <FiChevronRight size={24} className="text-[#F8AB1D]" />
                </button>
            </div>


        </div>
    );
}
