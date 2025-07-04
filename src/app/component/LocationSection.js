import {
    FaFacebook ,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaWhatsapp,
} from "react-icons/fa";
import whatsapp from "../../asserts/images/home/whatsapp.svg";
import icon1 from "../../asserts/images/home/icon1.svg"
import icon2 from "../../asserts/images/home/icon2.svg"
import Image from "next/image";


export default function LocationSection() {
    return (
        <section className="bg-[#f7f7f7]">

            <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 text-center">
                <h2 className="text-[30px] md:text-5xl font-bold text-center text-black mb-10 md:mb-20">WHERE TO FIND US!</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">

                    <div className="flex items-center md:items-start gap-8">
                        <div className="shrink-0">
                            <Image src={icon1} alt="Corporate Office" className="w-12 md:w-22" />
                        </div>
                        <div className="md:w-[55%]">
                            <h3 className="text-[#C3272B] font-bold text-xl md:text-[24px] mb-2">CORPORATE OFFICE</h3>
                            <p className="text-black md:text-xl font-medium">
                                Office 409, 4th Floor, MGF Metropolis Mall, MG Road, Gurugram, Haryana-122002
                            </p>
                        </div>
                    </div>


                    <div className="flex items-center md:items-start gap-8">
                        <div className="shrink-0">
                            <Image src={icon2} alt="Factory" className="w-12 md:w-22" />
                        </div>
                        <div className="md:w-[55%]">
                            <h3 className="text-[#C3272B] font-bold text-xl md:text-[24px] mb-2">FACTORY</h3>
                            <p className="text-black md:text-xl font-medium">
                                1163/4, Block A, Sector 34,<br />Gurugram, Haryana-122002
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-[#F8AB1D] py-6 md:py-4 px-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4 text-black font-bold text-sm">

                    <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center">
                        <p className="text-lg md:text-xl md:w-auto w-full text-center">OUR SOCIAL PRESENCE</p>
                        <FaFacebook  className="text-3xl md:text-3xl hover:text-[#C3272B]  cursor-pointer" />
                        <FaTwitter className="text-3xl md:text-3xl hover:text-[#C3272B]  cursor-pointer" />
                        <FaLinkedinIn className="text-3xl md:text-3xl hover:text-[#C3272B]  cursor-pointer" />
                        <FaInstagram className="text-3xl md:text-3xl hover:text-[#C3272B]  cursor-pointer" />
                    </div>


                    <div className="hidden md:block h-6 mx-4 w-[3px] bg-black"></div>


                    <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center md:flex-nowrap mt-4 md:mt-0">
                    <p className="text-lg md:text-xl w-full text-center">WHATSAPP US</p>
                        <Image src={whatsapp} alt="whatsapp"  className="h-10  cursor-pointer" />
                    </div>
                </div>
            </div>
        </section>
    );
}
