
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { IoCallOutline, IoTimeOutline } from "react-icons/io5";
import { LuMail } from "react-icons/lu";

function Footer() {
  return (
    <>
    <section
        className="bg-[url(/assets/ready-bg.png)] bg-no-repeat w-full h-full mt-20 lg:mt-[110px] py-[60px]"
        style={{ backgroundSize: "100% 100%" }}
      >
        <div className="grid grid-cols-12 container-custom mx-auto">
          <div className="col-span-12 sm:col-span-10 md:col-span-7 xl:col-span-5 2xl:col-span-4">
            <h3 className="text-white text-3xl md:text-[38px] md:leading-[55px] font-bold mb-[15px] mont-text">
              Ready to Buy or Sell Equipment Today?
            </h3>
            <p className=" text-white text-base leading-[26px] mb-[30px] pr-10">
              Join thousands of satisfied customers who trust RB Equipment Sales
              for industrial and agricultural machinery.
            </p>
            <button className="text-green bg-white  py-[14px] px-[22px]  rounded-xl text-base leading-[16px] font-semibold mont-text">
              Start Now
            </button>
          </div>
        </div>
      </section>
     <footer className="bg-gray py-[50px] ">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-12 pb-[42px] border-b border-para">
            <div className="col-span-12 lg:col-span-4 mb-10 lg:mb-0">
              <Link href="/">
                <Image
                  src="/assets/light-logo.png"
                  alt="Logo"
                  height={90}
                  width={178}
                  className="mb-[30px]"
                />
              </Link>
              <p className="text-light-gray text-base leading-[26px] mb-[30px] w-full">
                RB Equipment Sales is your trusted marketplace for buying,
                selling, and auctioning quality industrial machinery, tractors,
                and tools.
              </p>
              <div className="flex items-center gap-[15px]">

              {/* Facebook */}
              <a
                href="https://facebook.com/"
                target="_blank"
                className="border border-light-gray w-7 h-7 rounded-full flex justify-center items-center"
              >
                <FaFacebookF className="text-light-gray" />
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com/"
                target="_blank"
                className="border border-light-gray w-7 h-7 rounded-full flex justify-center items-center"
              >
                <FaXTwitter className="text-light-gray" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/"
                target="_blank"
                className="border border-light-gray w-7 h-7 rounded-full flex justify-center items-center"
              >
                <FaInstagram className="text-light-gray" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/"
                target="_blank"
                className="border border-light-gray w-7 h-7 rounded-full flex justify-center items-center"
              >
                <FaLinkedinIn className="text-light-gray" />
              </a>

             </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex lg:justify-center mb-10 sm:mb-0">
              <div>
                <h3 className="text-orange mb-5 text-lg leading-[18px]  mont-text">Quick Links</h3>
              <ul className="space-y-[15px]">
                <li>
                  <Link href='/' className="text-light-gray text-base leading-[16px] font-normal">Index</Link>
                </li>
                <li>
                  <Link href='/inventory' className="text-light-gray text-base leading-[16px] font-normal">Inventory</Link>
                </li>
                <li>
                  <Link href='/about-us' className="text-light-gray text-base leading-[16px] font-normal">About</Link>
                </li>
                <li>
                  <Link href='/faq' className="text-light-gray text-base leading-[16px] font-normal">FAQ</Link>
                </li>
                <li>
                  <Link href='/contact-us' className="text-light-gray text-base leading-[16px] font-normal">Contact</Link>
                </li>
              </ul>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                 <h3 className="text-orange mb-5 text-lg leading-[18px]  mont-text">Contact Info</h3>
                  <a href="tel:+345209001307" className="block mb-5">
                  <div className="flex gap-3 items-center">
                   <div>
                     <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white/10">
                    <IoCallOutline className="text-white"/>
                    </div>
                   </div>
                       <h3 className="text-light-gray text-base">Sales: +34 520-900-1307</h3>
                  </div>
                 </a>
                   <a
                    href="https://www.google.com/maps/search/?api=1&query=RB+Equipment+Sales+123+Industrial+Road+Montgomery+Village+USA"
                    target="_blank"
                    className="block mb-5"
                  >
                  <div className="flex gap-3 items-center">
                    <div>
                      <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white/10">
                    <GrLocation className="text-white"/>
                    </div>
                    </div>
                       <h3 className="text-light-gray text-base">RB Equipment Sales 123 Industrial Road, Montgomery Village, USA</h3>
                  </div>
                 </a>
                 <a href="mailto:rb@equipmentsales.com" className="block mb-5">
                  <div className="flex gap-3 items-center">
                   <div>
                     <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white/10">
                    <LuMail className="text-white"/>
                    </div>
                   </div>
                       <h3 className="text-light-gray text-base">rb@equipmentsales.com</h3>
                  </div>
                 </a>
                 <div>
                  <div className="flex gap-3 items-center">
                    <div>
                      <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white/10">
                    <IoTimeOutline className="text-white"/>
                    </div>
                    </div>
                       <h3 className="text-light-gray text-base">9am - 5pm Monday to Friday</h3>
                  </div>
                 </div>
            </div>
          </div>
          <div className="flex justify-center sm:justify-between items-center pt-5 flex-wrap gap-4 text-center">
            <p className="text-light-gray text-base font-normal">Copyright 2025 © All Right Reserved</p>
            <p className="text-light-gray text-base font-normal">
              <Link href='/' className="mr-5">Terms & services</Link>
              <Link href='/'>Privacy policy</Link>
              </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
