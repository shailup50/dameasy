"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import product1 from "../../asserts/images/home/apple-cider-vinegar.webp"
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
    {
        title: "Sauces & Condiments",
        image: product1,
        shortDesc: "Classic and innovative blends that excite taste buds.",
        longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. ",


    },
    {
        title: "KETCHUP",
        image: product2,
        longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. ",
        shortDesc: "Classic and innovative blends that excite taste buds.",

    },
    {
        title: "CLASSIC MAYO",
        image: product3,
        longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. ",
        shortDesc: "Classic and innovative blends that excite taste buds.",

    },
    {
        title: "GINGER PASTE",
        image: product4,
        longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. ",
        shortDesc: "Classic and innovative blends that excite taste buds.",

    },
    {
        title: "GINGER PASTE",
        image: product5,
        longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. ",
        shortDesc: "Classic and innovative blends that excite taste buds.",

    },
    {
        title: "GINGER PASTE",
        image: product6,
        longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. ",
        shortDesc: "Classic and innovative blends that excite taste buds.",

    },
    {
        title: "GINGER PASTE",
        image: product7,
        longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. ",
        shortDesc: "Classic and innovative blends that excite taste buds.",

    },
    {
        title: "GINGER PASTE",
        image: product8,
        longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. ",
        shortDesc: "Classic and innovative blends that excite taste buds.",

    },
    {
        title: "GINGER PASTE",
        image: product9,
        longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. ",
        shortDesc: "Classic and innovative blends that excite taste buds.",

    },

];

export default function ProductSlider() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className=" py-20 px-4 text-white text-center" style={{ background: "radial-gradient(circle,rgba(253, 97, 0, 1) 0%, rgba(180, 14, 19, 1) 100%);" }}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-10 md:mb-14">
                OUR CATEGORY SHOWCASE
            </h2>

            <div className="relative max-w-7xl mx-auto">
                <Swiper
                    modules={[Navigation, EffectCoverflow]}
                    navigation={{
                        nextEl: ".next-slide",
                        prevEl: ".prev-slide",
                    }}
                    centeredSlides
                    slidesPerView={"auto"}
                    spaceBetween={20}
                    loop={true}
                    // effect="coverflow"
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 2.5,
                        slideShadows: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            centeredSlides: false,
                        },
                        768: {
                            slidesPerView: 3,
                            centeredSlides: false,
                        },
                        1024: {
                            slidesPerView: 5,
                            centeredSlides: false,
                        },
                    }}

                    className="pb-10 product_card"
                >
                    {categories.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className="rounded-xl"
                        >
                            <div
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="perspective"
                            >
                                <div
                                    className={`transition-transform duration-500 transform-style preserve-3d relative rounded-xl h-[400px] ${hoveredIndex === index ? "rotate-y-180" : ""
                                        }`}
                                >
                                    {/* Front */}
                          <div className="absolute w-full h-full backface-hidden bg-white text-black rounded-xl shadow-lg overflow-hidden front_view">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute bottom-0 bg-white w-full text-center py-4 px-3 h-[150px]">
                                            <h3 className="text-[22px] font-bold text-[#C3272B] mb-3">{item.title}</h3>
                                            <p className="text-sm font-medium text-[#C3272B] mt-1">{item.shortDesc}</p>
                                        </div>
                                    </div>

                                    {/* Back */}
                                    <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white text-black rounded-xl flex flex-col justify-center items-center p-6 shadow-lg">
                                        <h3 className="text-xl font-bold text-[#C3272B]">
                                            {item.subtitle || item.title}
                                        </h3>
                                        <p className="text-sm font-medium text-black py-4 mb-5">{item.longDesc}</p>
                                        <Link href="#" className="bg-black text-white px-4 py-2 text-xs uppercase font-bold">
                                            Know More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>


                <button className="prev-slide absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white p-2 rounded-full">
                    <FiChevronLeft size={24} />
                </button>
                <button className="next-slide absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white p-2 rounded-full">
                    <FiChevronRight size={24} />
                </button>
            </div>
        </div>
    );
}
