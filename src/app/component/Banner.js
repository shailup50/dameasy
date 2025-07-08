import Image from 'next/image'
import React from 'react'


function Banner({ banner, logo, title }) {
    return (
        <>
            <section className={`-mt-40 md:-mt-56  py-16 h-[400px] lg:h-[600px] bg-fixed flex flex-wrap items-center justify-center relative`}
                style={{ background: `url(${banner?.src}) top center / cover no-repeat` }}
            >
                <div className='w-full h-full top-0 left-0 bg-[#C3272B] absolute opacity-40'></div>
                <main className='z-10 '>
                    {/* <div className='text-center max-w-[210px] md:max-w-[500px] mx-auto'>
                        <Image src={logo} alt='logo' />
                    </div> */}
                    <h2 className='text-center text-white text-4xl md:text-5xl lg:text-7xl font-normal mt-12 md:mt-24 md:w-[100%] mx-auto w-[90%] apply-font' dangerouslySetInnerHTML={{__html: title }}/>
                </main>
            </section>
        </>
    )
}

export default Banner