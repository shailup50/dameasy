import Image from 'next/image'
import React from 'react'


function Banner({ banner, logo, title }) {
    return (
        <>
            <section className={`-mt-14 md:-mt-16 py-8 h-[400px] lg:h-[600px] bg-fixed flex flex-wrap items-center justify-center relative`}
                style={{ background: `url(${banner?.src}) top center / cover no-repeat` }}
            >
                <div className='w-full h-full top-0 left-0 bg-[#C3272B] absolute opacity-40'></div>
                <main className='z-10 '>
                    <div className='text-center max-w-[200px] md:max-w-[400px] mx-auto'>
                        <Image src={logo} alt='logo' />
                    </div>
                    <h2 className='text-center text-white text-4xl md:text-5xl lg:text-6xl font-semibold mt-6 md:mt-12 md:w-[80%] mx-auto w-[90%]'>{title}</h2>
                </main>
            </section>
        </>
    )
}

export default Banner