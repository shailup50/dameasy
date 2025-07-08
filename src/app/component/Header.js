"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import message from "../../asserts/images/email.svg"
import logo from "../../asserts/images/logo.png"
import arrow from "../../asserts/images/arrow-right.svg"


import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

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
    const SCROLL_UPPER_LIMIT = 289; // When to trigger "scrolled"
    const SCROLL_LOWER_LIMIT = 80; // When to remove "scrolled"

    // Set initial state once, with buffer considered
    const initialScrollY = Math.floor(window.scrollY);
    setIsScrolled(initialScrollY >= SCROLL_UPPER_LIMIT);

    const handleScroll = () => {
        const scrollY = Math.floor(window.scrollY);
        console.log("scrollY:", scrollY);

        setIsScrolled((prev) => {
            const newState =
                (!prev && scrollY >= SCROLL_UPPER_LIMIT)
                    ? true
                    : (prev && scrollY <= SCROLL_LOWER_LIMIT)
                    ? false
                    : prev;

            if (prev !== newState) {
                console.log("isScrolled changed:", newState);
            }

            return newState;
        });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
}, []);


    const pathname = usePathname();

    return (
        <>
            {/* <div className='container px-4 py-2 text-center bg-[#C3272B] text-white font-medium'>SHOP COMING SOON</div> */}

            <header className={`relative overflow-hidden transition-all duration-100  ${isScrolled     ? "custom_header" : ""}`}>
                <div className="mx-auto max-w-8xl px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="flex md:py-2 justify-between gap-4 items-start">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="  text-white  transition-transform"
                        >
                            <div className="flex items-center gap-2">
                                <FiMenu size={40} className="cursor-pointer" />
                            </div>
                        </button>
                        <Link href="/" className="self-baseline">
                            <Image
                                className={`sticky_logo  pointer-events-all transform duration-100
                                ${isScrolled     ? "custom_header scale-[0.8]" : "scale-[1] "}`}

                                src={logo}
                                alt="Logo"

                            />
                        </Link>

                        <div className="md:flex gap-2 md:gap-4 items-center hidden">
                            <div className="bg-[#C3272B] px-4 md:px-8 py-2 md:py-3 rounded-3xl">
                                <Image src={message} alt="Message" className="md:h-auto h-4 md:w-6 md:min-w-auto min-w-12 " />
                            </div>

                            {pathname === "/" && (
                                <Link href="/products" title="Go to Products" className="bg-[#C3272B]  px-3 md:px-8 py-2 md:py-3 rounded-3xl   ">
                                    <Image src={arrow} alt="icon" className="arrow_icon h-5 w-auto" />
                                </Link>
                            )}
                            {pathname === "/products" && (
                                <Link href="/" title="Back to Home" className="bg-[#C3272B]  px-4 md:px-8 py-2 md:py-3 rounded-3xl   ">
                                    <Image src={arrow} alt="icon" className="arrow_icon h-5 w-auto rotate-180" />
                                </Link>
                            )}
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
                            <div className="flex gap-2 md:gap-4 items-center md:hidden">
                                <div className="bg-[#C3272B] px-4 md:px-8 py-2 md:py-3 rounded-3xl">
                                    <Image src={message} alt="Message" className="md:h-auto h-4 md:w-6 md:min-w-auto min-w-12 " />
                                </div>

                            </div>
                            <div className="w-full">
                                {pathname === "/" && (
                                    <Link href="/products" title="Go to Products" onClick={handleLinkClick} className="bg-[#C3272B]  px-8 py-3  rounded-full inline-block md:hidden ">
                                        <Image src={arrow} alt="icon" className="arrow_icon h-5 w-auto" />
                                    </Link>
                                )}
                                {pathname === "/products" && (
                                    <Link href="/" title="Back to Home" onClick={handleLinkClick} className="bg-[#C3272B]  px-8 py-3 rounded-full   inline-block md:hidden">
                                        <Image src={arrow} alt="icon" className="arrow_icon h-5 w-auto rotate-180" />
                                    </Link>
                                )}
                            </div>

                            {/* <a href="#" onClick={handleLinkClick} className="block text-xl md:text-2xl font-medium text-white hover:text-[#F8AB1D]">Services</a>
                            <a href="#" onClick={handleLinkClick} className="block text-xl md:text-2xl font-medium text-white hover:text-[#F8AB1D]">Contact</a> */}
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header