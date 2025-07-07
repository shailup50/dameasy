import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import ContactForm from "./ContactForm";
import LocationSection from "./LocationSection";


export default function Footer() {
  return (
    <>

      <ContactForm />
      <LocationSection />
      <footer className="bg-black text-white">
        {/* Top Footer */}
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-14 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          <div>
            <h3 className="font-bold md:text-xl md:mb-6 text-lg mb-4">COMPANY</h3>
            <ul className="space-y-2 text-sm font-noraml  md:text-base text-[#BDBDBD]">
              <li><a href="#">About us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>


          <div>
            <h3 className="font-bold md:text-xl md:mb-6 text-lg mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm font-noraml  md:text-base text-[#BDBDBD]">
              <li><a href="#">What’s Flick?</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Our Work</a></li>
              <li><a href="#">Our Blog</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>


          <div>
            <h3 className="font-bold md:text-xl md:mb-6 text-lg mb-4">WHY DAMEASY</h3>
            <ul className="space-y-2 text-sm font-noraml  md:text-base text-[#BDBDBD]">
              <li><a href="#">Customer Stories</a></li>
              <li><a href="#">Services & Support</a></li>
              <li><a href="#">Our Journey</a></li>
            </ul>
          </div>


          <div>
            <h3 className="font-bold md:text-xl md:mb-6 text-lg mb-4">CALL US</h3>
            <div className="flex items-center gap-3 text-sm font-noraml  md:text-base text-[#BDBDBD]">
              <FaPhoneAlt className="text-[#C3272B] text-lg" />
              <span>+91-9810890530</span>
            </div>
          </div>


          <div>
            <h3 className="font-bold md:text-xl md:mb-6 text-lg mb-4">EMAIL US</h3>
            <div className="flex items-center gap-3 text-sm font-noraml  md:text-base text-[#BDBDBD]">
              <IoIosMail className="text-[#C3272B]  text-2xl" />
              <span>info@dameasy.in</span>
            </div>
          </div>
        </div>


        <div className="bg-[#C3272B] text-center py-3 text-white text-sm">
          Copyright © 2024 Dameasy. All Rights Reserved
        </div>
      </footer>
    </>

  );
}
