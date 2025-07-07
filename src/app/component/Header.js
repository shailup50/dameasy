"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import message from "../../asserts/images/email.svg"
import logo from "../../asserts/images/logo.png"
import Link from "next/link";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const handleLinkClick = () => setIsOpen(false);

    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


    return (
        <>
            <div className='container px-4 py-2 text-center bg-[#C3272B] text-white font-medium'>SHOP COMING SOON</div>

            <div className={`relative overflow-hidden ${isScrolled ? "custom_header" : ""}`}>
                <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-10">
                    <div className="flex pt-4 justify-between gap-4 items-center">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="  text-white  transition-transform"
                        >
                            <div className="flex items-center gap-2">
                                <FiMenu size={40} className="cursor-pointer" />
                            </div>
                        </button>
                        <Link href="/">
                        <Image
                        className="sticky_logo"
                                src={logo}
                                alt="Logo"
                                width="150"
                            />
                            </Link>
                        <div className="bg-[#C3272B] px-6 md:px-8 py-2 md:py-3 rounded-3xl">
                            <Image src={message} alt="Message" />
                        </div>

                    </div>
                </div>

                <div className="bg-[#2C2E3A] relative overflow-hidden">


                    <div
                        ref={sidebarRef}
                        className={`fixed top-0 left-0 bg-[#000] text-white w-96 z-50 h-full transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-100"
                            }`}
                    >
                        <div className="mb-4 px-6 pt-6 flex items-center justify-between">
                            <Image
                                src={logo}
                                alt="Logo"
                                width="200"
                            />
                            <button
                                onClick={() => setIsOpen(false)}
                                className="bg-[#fff] w-12 h-12 rounded-full grid place-content-center ml-auto"
                            >
                                <FiX size={28} className="text-[#C3272B] cursor-pointer" />
                            </button>
                        </div>

                        <div className="h-[1px] w-full bg-white mt-4"></div>

                        <div className="px-6 mt-10 space-y-6" id="links">

                            <Link href="/" onClick={handleLinkClick} className="block text-xl md:text-2xl font-medium text-white hover:text-[#F8AB1D]">Home</Link>
                            <Link href="/products" onClick={handleLinkClick} className="block text-xl md:text-2xl font-medium text-white hover:text-[#F8AB1D]">Products</Link>
                            {/* <a href="#" onClick={handleLinkClick} className="block text-xl md:text-2xl font-medium text-white hover:text-[#F8AB1D]">Services</a>
                            <a href="#" onClick={handleLinkClick} className="block text-xl md:text-2xl font-medium text-white hover:text-[#F8AB1D]">Contact</a> */}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header