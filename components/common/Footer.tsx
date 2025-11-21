
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
                <div className="border border-light-gray w-7 h-7 rounded-full flex justify-center items-center">
                  <FaFacebookF className="text-light-gray" />
                </div>
                <div className="border border-light-gray w-7 h-7 rounded-full flex justify-center items-center">
                  <FaXTwitter className="text-light-gray" />
                </div>
                <div className="border border-light-gray w-7 h-7 rounded-full flex justify-center items-center">
                  <FaInstagram className="text-light-gray" />
                </div>
                <div className="border border-light-gray w-7 h-7 rounded-full flex justify-center items-center">
                  <FaLinkedinIn className="text-light-gray" />
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex lg:justify-center mb-10 sm:mb-0">
              <div>
                <h3 className="text-orange mb-5 text-lg leading-[18px]">Quick Links</h3>
              <ul className="space-y-[15px]">
                <li>
                  <Link href='/' className="text-light-gray text-base leading-[16px] font-normal">Index</Link>
                </li>
                <li>
                  <Link href='/' className="text-light-gray text-base leading-[16px] font-normal">Inventory</Link>
                </li>
                <li>
                  <Link href='/' className="text-light-gray text-base leading-[16px] font-normal">About</Link>
                </li>
                <li>
                  <Link href='/' className="text-light-gray text-base leading-[16px] font-normal">FAQ</Link>
                </li>
                <li>
                  <Link href='/' className="text-light-gray text-base leading-[16px] font-normal">Contact</Link>
                </li>
              </ul>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                 <h3 className="text-orange mb-5 text-lg leading-[18px]">Quick Links</h3>
                 <div className="mb-5">
                  <div className="flex gap-3 items-center">
                   <div>
                     <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white/10">
                    <IoCallOutline className="text-white"/>
                    </div>
                   </div>
                       <h3 className="text-light-gray text-base">Sales: +34 520-900-1307</h3>
                  </div>
                 </div>
                 <div className="mb-5">
                  <div className="flex gap-3 items-center">
                    <div>
                      <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white/10">
                    <GrLocation className="text-white"/>
                    </div>
                    </div>
                       <h3 className="text-light-gray text-base">RB Equipment Sales 123 Industrial Road, Montgomery Village, USA</h3>
                  </div>
                 </div>
                 <div className="mb-5">
                  <div className="flex gap-3 items-center">
                   <div>
                     <div className="flex justify-center items-center w-10 h-10 rounded-full bg-white/10">
                    <LuMail className="text-white"/>
                    </div>
                   </div>
                       <h3 className="text-light-gray text-base">rb@equipmentsales.com</h3>
                  </div>
                 </div>
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
  )
}

export default Footer
