import Image from 'next/image'
import Link from 'next/link'

function UserHeader() {
  return (
    <div className="bg-header">
    <div className='container-custom mx-auto flex justify-between items-center py-[14px] gap-1'>
        <Link href='/'>
          <Image src="/assets/logo.png" alt="Logo" height={90} width={178}  loading="eager"  priority/>
        </Link>
        <button className='text-green bg-white py-[14px] px-[22px] rounded-lg text-base leading-[16px] cursor-pointer'>Register</button>
    </div>
    </div>
  )
}

export default UserHeader
