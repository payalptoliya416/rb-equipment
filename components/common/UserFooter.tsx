import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

function UserFooter() {
  return (
    <div className="bg-gray ">
    <div className="py-12 container mx-auto grid grid-cols-12 gap-1 items-center">
       <div className="col-span-4">
        <p  className="text-light-gray text-base leading-[16px] font-normal">Copyright 2025 © All Right Reserved</p>
       </div>
       <div className="col-span-4">
       <Link href='/' className="text-light-gray text-base leading-[16px] font-normal">Terms & services </Link>
       <Link href='/'  className="text-light-gray text-base leading-[16px] font-normal ms-3">Privacy policy</Link>
       </div>
       <div className="col-span-4">
        <div className="flex justify-end gap-[15px]">
            <div className="w-[32px] h-[32px] flex justify-center items-center rounded-full border  border-white/10 text-white"><FaFacebookF size={16}/></div>
            <div className="w-[32px] h-[32px] flex justify-center items-center rounded-full border  border-white/10 text-white"><FaXTwitter size={16}/></div>
            <div className="w-[32px] h-[32px] flex justify-center items-center rounded-full border  border-white/10 text-white"><FaInstagram size={16}/></div>
            <div className="w-[32px] h-[32px] flex justify-center items-center rounded-full border  border-white/10 text-white"><FaLinkedinIn size={16}/></div>
        </div>
       </div>
    </div>
    </div>
  )
}

export default UserFooter
