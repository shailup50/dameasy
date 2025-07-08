import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

function WeAre({ title, subtitle, description, img }) {
    return (
        <>
            <main className='pt-16 lg:pt-24'>
                <section className='mx-auto max-w-7xl px-4 md:px-6 lg:px-4 '>
                    <div className='mx-auto max-full flex flex-wrap md:flex-nowrap gap-0 bg-[#FFF1D7] rounded-2xl overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
                        <div className='w-full md:w-2/5'>
                            <Image className='w-full h-full md:h-[460px] object-cover' src={img} alt='title' />
                        </div>
                        <div className='w-full md:w-3/5'>
                            <div className='p-6 md:p-10 py-10 md:py-14'>
                                <h2 className='text-[50px] md:text-7xl text-[#C3272B] font2 text-center font-medium mb-0 md:mb-5'>{title}</h2>
                                <h3 className='text-2xl mb-5 md:text-[24px] font-semibold'>{subtitle}</h3>
                                <p className='text-[17px] md:text-lg font-medium'>{description}</p>
                                <div className='mt-8 text-center'>
                                    <Link
                                        href="/products"
                                        className="relative inline-flex items-center gap-2 overflow-hidden rounded-4xl bg-black py-4 px-6 text-white group "
                                    >
                                        <span className="relative z-10 font-medium">Explore Our Product Range</span>
                                        <IoIosArrowForward className="relative z-10" />
                                        <span
                                            className="absolute left-0 top-0 h-full w-full origin-bottom scale-y-0 bg-[#C3272B] transition-transform duration-500 ease-in-out group-hover:scale-y-100 z-0"
                                        ></span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>


        </>
    )
}

export default WeAre