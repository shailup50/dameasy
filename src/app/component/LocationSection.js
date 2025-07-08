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
import Link from "next/link";


export default function LocationSection() {
    return (
        <section className="bg-[#f7f7f7]">

            <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 text-center">
                <h2 className="text-[30px] md:text-[50px] font-medium apply-font text-center text-black mb-8 md:mb-10 ">WHERE TO FIND US!</h2>
                <div className="flex md:flex-nowrap justify-center flex-wrap gap-8 text-left">

                    <div className="w-full md:w-[40%]">

                    <div className="flex items-center md:items-start gap-8 w-full">
                        <div className="shrink-0 ">
                            <Image src={icon1} alt="Corporate Office" className="w-12 md:w-22" />
                        </div>
                        <div className="md:w-[100%]">
                            <h3 className="text-[#C3272B] font-bold text-xl md:text-[28px] mb-2">CORPORATE OFFICE</h3>
                            <p className="text-black md:text-xl font-medium hover:text-[#C3272B]">
                                <Link href="https://www.google.com/maps?ll=28.478571,77.082078&z=10&t=m&hl=en&gl=IN&mapclient=embed&cid=13111383579940788649" target="_blank">
                                Office 409, 4th Floor, MGF Metropolis Mall, MG Road, Gurugram, Haryana-122002
                                </Link>
                            </p>
                        </div>
                    </div>
                    </div>
                    <div className="w-full md:w-[40%]">
                    <div className="flex items-center md:items-start gap-8 w-full">
                        <div className="shrink-0">
                            <Image src={icon2} alt="Factory" className="w-12 md:w-22" />
                        </div>
                        <div className="md:w-[100%]">
                            <h3 className="text-[#C3272B] font-bold text-xl md:text-[28px] mb-2">FACTORY</h3>
                            <p className="text-black md:text-xl font-medium hover:text-[#C3272B]">
                                <Link href="https://maps.app.goo.gl/HYbdwuGjxS2dt7Hi7" target="_blank">
                                1163/4, Block A, Sector 34, Gurugram, Haryana-122002
                                </Link>
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>


            <div className="bg-[#F8AB1D] py-6 md:py-4 px-4 md:pt-4 pt-3">
                <div className="max-w-7xl mx-auto flex flex-row md:flex-row justify-center items-end md:items-center gap-4 text-black font-bold text-sm">

                    <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center md:w-auto w-[80%]">
                        <p className="text-sm max-[370px]:text-[13px] md:text-xl md:w-auto w-full text-center">OUR SOCIAL PRESENCE</p>
                        <FaFacebook  className="text-3xl max-[370px]:text-2xl md:text-3xl hover:text-[#C3272B]  cursor-pointer" />
                        <FaTwitter className="text-3xl max-[370px]:text-2xl md:text-3xl hover:text-[#C3272B]  cursor-pointer" />
                        <Link href="https://www.linkedin.com/company/dameasy-consumer-products/" target="_blank">
                        <FaLinkedinIn className="text-3xl max-[370px]:text-2xl md:text-3xl hover:text-[#C3272B]  cursor-pointer" />
                        </Link>
                        <FaInstagram className="text-3xl max-[370px]:text-2xl md:text-3xl hover:text-[#C3272B]  cursor-pointer" />

                    </div>


                    <div className="  md:block h-14 md:h-6 mx-4 w-[3px] bg-black"></div>


                    <div className=" flex items-center gap-4 md:gap-6 flex-wrap justify-center md:flex-nowrap mt-4 md:mt-0">
                    <p className="text-sm  max-[370px]:text-[13px] md:text-xl w-full text-center">WHATSAPP US</p>
                    <Link href="https://api.whatsapp.com/send?phone=919810890530" target="_blank">
                        <Image src={whatsapp} alt="whatsapp"  className="h-[30px] md:h-10 max-[370px]:h-[28px]  cursor-pointer" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
