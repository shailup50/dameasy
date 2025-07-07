"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import product1 from "../../asserts/images/category/bottle-glass.webp"
import product2 from "../../asserts/images/category/mega-spout-pouch.webp"
import product3 from "../../asserts/images/category/bottle-hdpe.webp"
import product4 from "../../asserts/images/category/bottle-pet.webp"

import product5 from "../../asserts/images/category/glass-jars.webp"
import product6 from "../../asserts/images/category/jerry-can.webp"
import product7 from "../../asserts/images/category/sachet.webp"
import product8 from "../../asserts/images/category/sachet-3-side.webp"
import product9 from "../../asserts/images/category/side-spout-pouch.webp"
import product10 from "../../asserts/images/category/top-spout-pouch.webp"
import product11 from "../../asserts/images/category/Caps.webp"
import product12 from "../../asserts/images/category/sachet-dameasy.webp"
import product13 from "../../asserts/images/category/shrink-sleeve.webp"
import product14 from "../../asserts/images/category/label.webp"


import bgimg from "../../asserts/images/bg-product.svg"

import Link from "next/link";


const categories = [
    {
        title: "Battle Glass Bottles",
        image: product1,
        shortDesc: "Premium glass bottles for a classic, sophisticated packaging solution.",
    },
    {
        title: "Mega Spout Pouches",
        image: product2,
        shortDesc: "High-capacity spout pouches designed for bulk and easy pouring.",
    },
    {
        title: "HDPE Bottles",
        image: product3,
        shortDesc: "Durable, lightweight bottles ideal for safe food storage and dispensing.",
    },
    {
        title: "PET Bottles",
        image: product4,
        shortDesc: "Crystal-clear PET bottles for a modern, attractive look with robust strength.",
    },
    {
        title: "Glass Jars",
        image: product5,
        shortDesc: "Elegant glass jars that keep products fresh and showcase quality.",
    },
    {
        title: "Jerry Cans",
        image: product6,
        shortDesc: " Sturdy jerry cans for safe, efficient transport and storage of liquids.",
    },
    {
        title: "Sachets",
        image: product7,
        shortDesc: "Single-serve sachets for convenient, mess-free usage on the go.",
    },
    {
        title: "3-Side Sachets",
        image: product8,
        shortDesc: "Triple-sealed sachets offering extra protection and easy tear options.",
    },
    {
        title: "Side Spout Pouches",
        image: product9,
        shortDesc: "Innovative pouches with side spouts for controlled pouring and resealability.",
    },
    {
        title: "Top Spout Pouches",
        image: product10,
        shortDesc: "Easy-pour pouches with top spouts for added convenience and freshness.",
    },
    {
        title: "Caps",
        image: product11,
        shortDesc: "A variety of caps to suit every bottle and pouch, ensuring freshness and safety.",
    },
    {
        title: "Dameasy Sachets",
        image: product12,
        shortDesc: "Custom-designed sachets tailored to your brand and portion needs.",
    },
    {
        title: "Shink Sleeve",
        image: product13,
        shortDesc: " Full-body shrink sleeves for 360° branding and tamper evidence.",
    },
    {
        title: "Label Sticker",
        image: product14,
        shortDesc: "High-quality label stickers for clear product info and standout shelf appeal.",
    },

];

export default function Category() {

    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="pt-12 md:pt-20 px-4 text-black text-center">
            <h2 className="text-4xl md:text-5xl  font-bold mb-10 md:mb-14 uppercase">
            Packaging Solutions
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
                    className="pb-10 product_card items-center middle_white_card"
                >
                    {categories.map((item, index) => (
                        <SwiperSlide key={index} className="rounded-xl">
                            <div className="radius_img">
                                <div
                                    className={` ${index === activeIndex ? "active-card" : ""
                                        }`}
                                >

                                    <div className="w-full h-full  bg-[#C3272B] text-black rounded-xl shadow-lg">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover f-full w-full !relative"
                                        />
                                        <div className="bottom-0 bg-white w-full text-center py-4 px-3 pb-8 content_slide">
                                            <h3 className="text-[22px] md:text-[26px] font-bold text-[#C3272B] mb-1 leading-8">
                                                {item.title}
                                            </h3>
                                            <p className="text-[15px] font-medium text-[#C3272B] mb-6">
                                                {item.shortDesc}
                                            </p>

                                            {/* <Link
                                        href="#"
                                        className="relative inline-flex items-center gap-2 overflow-hidden rounded bg-black  text-white group px-4 py-2 text-xs"
                                    >
                                        <span className="relative z-10 uppercase font-light font-btn">  Know More</span>

                                        <span
                                            className="absolute left-0 top-0 h-full w-full origin-bottom scale-y-0 bg-[#C3272B] transition-transform duration-500 ease-in-out group-hover:scale-y-100 z-0"
                                        ></span>
                                    </Link> */}

{/*
                                            <Link href="/products" className="bg-black rounded text-white px-4 py-2 text-xs uppercase font-light font-btn">
                                                Know More
                                            </Link> */}
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
