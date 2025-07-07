"use client"
import React from 'react'
import Banner from '../component/Banner'
import Marquee from '../component/Marquee'
import banner from "../../asserts/images/info/banner2.webp"
import logo from ".././../asserts/images/logo.png"
import aboutimg from "../../asserts/images/home/about.webp"
import ProductSlider from '../component/ProductSlider2'
import icon1 from "../../asserts/images/info/icon1.svg"
import icon2 from "../../asserts/images/info/icon2.svg"
import icon3 from "../../asserts/images/info/icon3.svg"
import rocket from "../../asserts/images/info/rocket.svg"

import product1 from "../../asserts/images/home/apple-cider-vinegar.webp"
import product2 from "../../asserts/images/home/blueberry-jam.webp"
import product3 from "../../asserts/images/home/ginger-garlic-paste.webp"
import product4 from "../../asserts/images/home/honey-mustard-sachet.webp"
import product5 from "../../asserts/images/home/hot-and-spicy-schezwan.webp"
import product6 from "../../asserts/images/home/kung-pao.webp"
import product7 from "../../asserts/images/home/lemon-juice.webp"
import product8 from "../../asserts/images/home/truffle-mayo.webp"
import product9 from "../../asserts/images/home/vanilla.webp"
import product10 from "../../asserts/images/info/spicy-sauces.webp"
import product11 from "../../asserts/images/info/traditional-chinese-sauces.webp"
import product12 from "../../asserts/images/info/salad-dressing.webp"
import product13 from "../../asserts/images/info/floral-extracts.webp"
import product14 from "../../asserts/images/info/vinegar.webp"
import product15 from "../../asserts/images/info/chowmein-sauce.webp"
import product16 from "../../asserts/images/info/noodle-seasonings.webp"
import product17 from "../../asserts/images/info/emulsified-oils.webp"
import product18 from "../../asserts/images/info/chutneys-sweet-sauce.webp"



import { GrDownload } from "react-icons/gr";
import download from "../../asserts/images/download-1.svg"





import Image from 'next/image'
import Link from 'next/link'
import Category from '../component/Category'
import WeAre2 from '../component/WeAre2'



function page() {
    const title = "You Dream, We Scale!"

    const items = [
        "Custom CRAFTED",
        "SCALE READY",
        "QUALITY DRIVEN",
        "Custom CRAFTED",
        "Custom CRAFTED",
        "SCALE READY",
        "QUALITY DRIVEN",
        "Custom CRAFTED",
        "Custom CRAFTED",
        "SCALE READY",
        "QUALITY DRIVEN",
        "Custom CRAFTED",
    ];

    const about = {
        title: "We’re Dameasy",
        subtitle: `Our <br> Culinary Champions`,
        description: `Our in-house food testing team supports product and recipe development while delivering critical insights on
        real-world application and performance`,
        img: aboutimg
    }
    const features = [
        {
            icon: icon1,
            title: "CUSTOMISE",
            desc: "or Keep it the Same",
        },
        {
            icon: icon2,
            title: "PERFECT IT",
            desc: "to Your Brand",
        },
        {
            icon: icon3,
            title: "OR CREATE",
            desc: "A New Recipe Altogether",
        },
    ];


    const categories = [
        {
            title: "Sauces & Condiments",
            image: product1,
            shortDesc: "Classic kitchen staples to boost flavor in every bite.",
            longDesc: `
            <ul>
             <li>Ketchup</li>
             <li>BBQ</li>
             <li>Gochujang</li>
             <li>Hot Honey</li>
            </ul>` ,
        },
        {
            title: "Classic Fruit Jams",
            image: product2,
            shortDesc: "Sweet, trusted jams that stir memories and add joy to every meal.",
            longDesc: `<ul>
             <li>Blueberry Jam</li>
             <li>Mix Fruit Jam</li>
             <li>Orange Jam</li>
             <li>Strawberry and Raspberry Jam</li>
            </ul>` ,

        },
        {
            title: "Pastes & Purees",
            image: product3,
            shortDesc: "Smooth blends perfect for cooking rich and tasty meals.",
            longDesc: `<ul>
             <li>Ginger Garlic Paste</li>
             <li>Ginger Paste</li>
             <li>Garlic Paste</li>
             <li>Tomato Paste & Purees</li>
             <li>Schezwan Cooking Paste</li>
            </ul>` ,
        },
        {
            title: "Mustard & Pickles",
            image: product4,
            shortDesc: "Tangy twists that add zing to any meal or snack.",
            longDesc: `<ul>
             <li>Kasundi</li>
             <li>Mustard - American</li>
             <li>Mustard – Honey</li>
            </ul>` ,
        },
        {
            title: "Schezwan Sauce",
            image: product5,
            shortDesc: "Bold, spicy, and full of Indo-Chinese flair.",
            longDesc: `<ul>
             <li>Hot & Spicy Schezwan</li>
             <li>Normal Schezwan</li>
            </ul>` ,
        },
        {
            title: "Stir Fry Sauces",
            image: product6,
            shortDesc: "Quick and tasty sauces for perfect stir-fried dishes.",
            longDesc: `<ul>
             <li>Kung Pao Sauce</li>
             <li>Sweet & Sour</li>
             <li>Soy & Honey</li>
             <li>Black Bean</li>
            </ul>` ,
        },
        {
            title: "Juices & Extracts",
            image: product7,
            shortDesc: "Natural, flavorful essentials for cooking and sipping.",
            longDesc: `<ul>
             <li>Lemon Juice</li>
             <li>Lemon Ginger Juice</li>
             <li>Lemon Mint Juice</li>
            </ul>` ,
        },
        {
            title: "Mayonnaise",
            image: product8,
            shortDesc: "Creamy and smooth – perfect for spreading, dipping, and enjoying.",
            longDesc: `<ul>
             <li>Classic Mayo</li>
             <li>Classic Mayo with Jaggery</li>
             <li>Chipotle Mayo</li>
             <li>Honey Mustard Mayo</li>
             <li>Tandoori Mayo</li>
             <li>Burger Sauce Mayo</li>
             <li>Truffle Mayo</li>
             <li>Cheese Mayo</li>
             <li>Chilly/Spicy Mayo</li>

            </ul>` ,
        },
        {
            title: "Syrups & Concentrates",
            image: product9,
            shortDesc: "Sweet, rich blends ideal for drinks and desserts.",
            longDesc: `<ul>
             <li>Vanilla</li>
             <li>Hazelnut</li>
             <li>Strawberry</li>
             <li>Mint & Lemon</li>
             <li>Curacao Bleu</li>
             <li>Elderflower</li>
            </ul>` ,
        },
    ];

    const category2 = [
        {
            title: "Spicy Sauces",
            image: product10,
            shortDesc:"Fiery flavors to add a bold kick to your dishes.",
            longDesc: `<ul>
             <li>Sriracha Sauce</li>
             <li>Peri Peri</li>
             <li>Sriracha Mayo</li>
             <li>Harrisa</li>
            </ul>` ,
        },
        {
            title: "Traditional Chinese Sauces",
            shortDesc:"Authentic sauces that bring real Chinese taste to your kitchen.",
            image: product11,
            longDesc: `<ul>
             <li>White Vinegar</li>
             <li>Dark Soya</li>
             <li>Green Chilli Sauce</li>
             <li>Red Chilli Sauce</li>

            </ul>` ,
        },
        {
            title: "Salad Dressing",
            shortDesc:"Dress your greens in gourmet.",
            image: product12,
            longDesc: `<ul>
             <li>Caesar</li>
             <li>Thousand Island</li>
             <li>Ranch</li>
             <li>Balsamic Vinaigrette</li>
             <li>Lemon Vinaigrette</li>
             <li>Honey Mustard Vinaigrette</li>
             <li>Apple Cider Vinegar</li>

            </ul>` ,
        },
        {
            title: "Floral Extracts",
            shortDesc:"Fragrant infusions to elevate food and drinks.",
            image: product13,
            longDesc: `<ul>
             <li>Rose Water</li>
             <li>Kewda Water</li>
            </ul>` ,
        },
        {
            title: "Vinegar",
            shortDesc:"Sharp and versatile – a pantry must for cooking and pickling.",
            image: product14,
            longDesc: `<ul>
             <li>White Vinegar</li>
             <li>Dark Soya</li>
             <li>Green Chilli Sauce</li>
             <li>Red Chilli Sauce</li>

            </ul>` ,
        },
        {
            title: "Chowmein Sauce",
            shortDesc:"Savory sauces made for perfect street-style noodles.",
            image: product15,
            longDesc: `<ul>
             <li>Standard Chowmein Sauce</li>
             <li>Desi Chowmein Sauce</li>

            </ul>` ,
        },
        {
            title: "Noodle Seasonings",
            shortDesc:"Flavor-packed mixes that bring noodles to life.",
            image: product16,
            longDesc: `<ul>
             <li>Liquid Seasoning Noodle Packs - Oil Based</li>
             <li>Liquid Seasoning Noodle Packs - Sauce Based</li>
             <li>Dry Seasonings (from external vendor)</li>

            </ul>` ,
        },
        {
            title: "Emulsified Oils",
            shortDesc:"Blended oils that enhance cooking with flavor and consistency.",
            image: product17,
            longDesc: `<ul>
             <li>Garlic Emulsified Oil</li>
             <li>Herbs Emulsified Oil</li>
             <li>Lemon Emulsified Oil</li>
             <li>Thyme Emulsified Oil</li>
             <li>Chilli Emulsified Oil</li>

            </ul>` ,
        },
        {
            title: "Chutneys & Sweet Sauce",
            shortDesc:"Sweet and tangy blends to complement snacks and meals.",
            image: product18,
            longDesc: `<ul>
             <li>Sweet Chilli Chutney/Sauce</li>
             <li>Mango Chutney</li>

            </ul>` ,
        },
    ]

    const points = [
        {
            title: "Choose Your Format",
            info: "Bottles, jars, or pouches pick what fits best."
        },
        {
            title: "Customize the Design",
            info: "Match your brand’s look and feel."
        },

        {
            title: "Engineer the Details",
            info: "Built for strength, safety, and ease."
        },

        {
            title: "Tell Your Brand Story",
            info: "Make your product stand out on the shelf."
        },


    ]


    return (
        <>
            <Banner banner={banner} logo={logo} title={title} />
            <Marquee texts={items} speed={25} />

            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">

                    <h2 className='text-5xl md:text-8xl font-semibold mb-0 md:mb-4 text-[#C3272B]'>CHOOSE A PRODUCT</h2>
                    <h3 className='text-5xl md:text-8xl font-semibold mb-10 md:mb-16 text-black'>FROM OUR RANGE!</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 card_group">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#C3272B] text-white text-left p-6 md:p-10 rounded-lg   transition-transform hover:scale-105 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"

                            >
                                <Image src={item.icon} alt={item.title} className='w-16 mb-6' />
                                <h3 className="text-xl md:text-2xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-base md:text-xl font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-[#C3272B] font-semibold text-[22px] md:text-5xl mt-10 md:mt-16">
                        WITH DAMEASY TEAM, ANYTHING IS POSSIBLE!
                    </h2>
                </div>
            </section>
            <section className="py-12 md:py-20 px-4 text-white text-center"
                style={{
                    backgroundImage: 'radial-gradient(circle, #FD6100 0%, #B40E13 100%)'
                }}>
                <div className="max-w-7xl mx-auto">
                    <h2 className='text-5xl md:text-[90px] font-semibold mb-0 md:mb-4 text-[#fff]'>OUR VERSATILE FOOD</h2>
                    <h3 className='text-5xl md:text-[90px] font-semibold mb-6 md:mb-8 text-black'>CATEGORY RANGE</h3>
                </div>


                <ProductSlider products={categories} sliderId="slider1" />
                <ProductSlider products={category2} sliderId="slider2" />
                <div className="  pt-8 flex justify-center">
                    <Link href="#" className="flex items-center rounded-xl overflow-hidden shadow-md text-black font-bold text-sm md:text-base ">
                        <span className="bg-white px-10  py-4 flex items-center h-full">DOWNLOAD CATALOGUE</span>
                        <span className="bg-[#F8AB1D]  px-8 py-4 grid place-content-center text-2xl h-full">
                            <Image className='h-8' src={download} alt='download icon' />
                        </span>
                    </Link>
                </div>
            </section>

            <section className="py-12 md:py-20 px-4 text-white bg-[#F5F5F5]"
            >
                <div className="max-w-7xl mx-auto">
                    <h2 className='text-5xl md:text-8xl font-semibold mb-0 md:mb-4 text-[#C3272B]'>DAMEASY OFFERS</h2>
                    <h3 className='text-5xl md:text-8xl font-semibold mb-10 md:mb-16 text-black'>A RANGE OF PACKAGING  SOLUTIONS!</h3>
                    <div className='mt-10 text-[#2E2E2E]'>
                        <ul className='text-left space-y-4'>
                            {points.map((item, index) => (
                                <li className='flex gap-4 items-center1' key={index}>
                                    <Image src={rocket} alt={item.title} className='h-6 mt-1' />
                                    <p className='text-xl md:text-[24px] font-medium uppercase'><span className='text-[#C3272B] font-semibold'>{item.title} : </span>{item.info}
                                    </p>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
                <Category />


            </section>

            <WeAre2 title={about.title} subtitle={about.subtitle} description={about.description} img={about.img} />
        </>
    )
}

export default page