
import Image from "next/image";

function HowWork() {
  return (
   <section className="container-custom mx-auto my-20 lg:my-[110px]">
           <div className="text-center mb-10">
             <h2 className="text-3xl md:text-[38px] md:leading-[38px] mb-[15px] font-extrabold text-gray">
               How It <span className="text-orange">Works</span>
             </h2>
             <p className="text-base leading-[16px] text-text-gray">
               Simple Steps to Buy or Bid
             </p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px] relative">
             <div className="absolute hidden lg:block left-[calc(33.333%-100px)] top-[36px]">
               <Image
                 src="/assets/line.png"
                 width={144}
                 height={10}
                 alt="line 1"
                 className="object-cover"
               />
             </div>
   
             <div className="absolute hidden lg:block right-[calc(33.333%-100px)] top-[36px]">
               <Image
                 src="/assets/line.png"
                 width={144}
                 height={10}
                 alt="line 2"
                 className="object-cover"
               />
             </div>
             <div className="text-center">
               <div className="text-white w-20 h-20 rounded-[10px] mx-auto flex justify-center items-center bg-green mb-[30px]">
                 <Image
                   src="/assets/icon5.svg"
                   width={40}
                   height={40}
                   alt="icon"
                 />
               </div>
               <h3 className="mb-[10px] text-gray text-lg leading-[20px] font-bold">
                 Browse Inventory
               </h3>
               <p className=" text-base leading-[26px] text-text-gray">
                 Explore our extensive collection of industrial machinery, farm
                 tools, and equipment available for bidding.
               </p>
             </div>
             <div className="text-center">
               <div className="text-white w-20 h-20 rounded-[10px] mx-auto flex justify-center items-center bg-green mb-[30px]">
                 <Image
                   src="/assets/icon6.svg"
                   width={40}
                   height={40}
                   alt="icon"
                 />
               </div>
               <h3 className="mb-[10px] text-gray text-lg leading-[20px] font-bold">
                 Bid & Buy
               </h3>
               <p className=" text-base leading-[26px] text-text-gray">
                 Join live auctions or use the “Buy Now” option to secure
                 high-quality equipment at competitive prices.
               </p>
             </div>
             <div className="text-center">
               <div className="text-white w-20 h-20 rounded-[10px] mx-auto flex justify-center items-center bg-green mb-[30px]">
                 <Image
                   src="/assets/icon7.svg"
                   width={40}
                   height={40}
                   alt="icon"
                 />
               </div>
               <h3 className="mb-[10px] text-gray text-lg leading-[20px] font-bold">
                 Track Order
               </h3>
               <p className=" text-base leading-[26px] text-text-gray">
                 Stay updated with real-time order tracking and delivery details
                 until your purchased equipment safely arrives.
               </p>
             </div>
           </div>
         </section>
  )
}

export default HowWork
