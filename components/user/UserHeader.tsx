'use client'

import Image from 'next/image'
import Link from 'next/link'
import { GoQuestion } from 'react-icons/go'
import { PiBellRinging } from 'react-icons/pi'
import { Menu } from "@headlessui/react";
import { IoChevronDown } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import UserDashboardNav from './UserDashboardNav'
import { usePathname } from "next/navigation";

function UserHeader() {

  const pathname = usePathname();  
  const isSigninPage = pathname === "/user/signin";

  return (
    <>
    <div className="bg-header">
    <div className='container-custom mx-auto flex justify-between items-center py-[14px] sm:gap-2'>
        <Link href='/'>
          <Image src="/assets/logo.png" alt="Logo" height={52} width={130}  loading="eager"  priority />
        </Link>

        {
          isSigninPage  ? (
             <Link href="/signup" className='text-green bg-white py-[14px] px-[22px] rounded-lg text-base leading-[16px] cursor-pointer'>Register</Link>
          ) : (
          <div className="flex items-center gap-2 sm:gap-5">
        <div className="bg-white w-[42px] h-[42px] justify-center items-center rounded-full flex">
          <PiBellRinging size={20} />
        </div>
        <div className="bg-white w-[42px] h-[42px] justify-center items-center rounded-full flex">
          <GoQuestion size={20} />
        </div>
        <Menu as="div" className="relative">
          <Menu.Button className="bg-white rounded-full px-1 py-[4px] flex items-center gap-3 shadow-sm md:pe-3 cursor-pointer">
            <Image
              src="/assets/user.png"
              width={36}
              height={36}
              alt="user"
              className="rounded-full"
              priority
            />
            <span className="text-[#4D4D4D] font-medium text-[16px] hidden md:block">
              Jane Cooper
            </span>
            <IoChevronDown size={18} className="text-gray-600 hidden md:block" />
          </Menu.Button>

          <AnimatePresence>
            <Menu.Items
              as={motion.div}
              key="dropdown"
              initial={{ opacity: 0, scale: 0.95, y: -5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -5 }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 z-50 border border-gray-100"
            >
              <Menu.Item>
                {({ active }) => (
                  <button className={`w-full text-left px-4 py-2 text-[14px] ${active ? "bg-gray-100" : ""}`}>
                    Profile
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button className={`w-full text-left px-4 py-2 text-[14px] ${active ? "bg-gray-100" : ""}`}>
                    Settings
                  </button>
                )}
              </Menu.Item>

              <div className="border-t my-1"></div>

              <Menu.Item>
                {({ active }) => (
                  <button className={`w-full text-left px-4 py-2 text-[14px] text-red-600 ${active ? "bg-red-50" : ""}`}>
                    Logout
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </AnimatePresence>
        </Menu>
          </div>
            )
        }
    </div>
    </div>
    <UserDashboardNav/>
    </>
  )
}

export default UserHeader
