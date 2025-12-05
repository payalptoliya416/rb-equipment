'use client'

import Image from "next/image";
import { useState } from "react";
import { IoCallOutline } from "react-icons/io5";

function Tracking() {
  const [step, setStep] = useState(2); 
  // step = 0 → Processing
  // step = 1 → Shipped
  // step = 2 → In Transit
  // step = 3 → Delivered

  const steps = [
    {
      title: "Processing",
      date: "Mar 8, 2024 10:20 AM",
      completed: step >= 0,
    },
    {
      title: "Shipped",
      date: "Mar 10, 2024 09:05 AM",
      completed: step >= 1,
    },
    {
      title: "In Transit",
      date: "Mar 14, 2024 03:45 PM",
      completed: step >= 2,
    },
    {
      title: "Delivered",
      date: "Mar 16, 2024 04:15 PM",
      completed: step >= 3,
    },
  ];
  return (
    <section className="py-11 sm:py-[60px]">
      <div className="container-custom mx-auto">
        <h1 className="text-[#373737] text-[26px] font-bold mb-[35px]">
          Delivery Tracking
        </h1>
        <div className="border border-[#E9E9E9] py-[30px] px-[15px] rounded-[14px]">
          <div className="grid grid-cols-12 items-center pb-[25px] border-[#E9E9E9] border-b-[1.5px] gap-5">
           <div className="col-span-12 lg:col-span-7 flex gap-5 items-center flex-wrap">
            <div className="w-[150px] h-[110px] bg-[#E9E9E973] rounded-[7px] flex justify-center items-center">
                 <Image src='/assets/rub.png' alt=''  width={110} height={63} />
            </div>
            <div>
                <h2 className="mb-[21px] text-xl text-[#373737] ">2017 Wheel Loaders John Deere 6125M</h2>
                <div className="grid grid-cols-12">
                    <div className="col-span-12 sm:col-span-6 mb-[15px] me-[43px]">
                        <h4 className="text-text-gray text-sm">Hours: 3,825 km</h4>
                    </div>
                    <div className="col-span-12 sm:col-span-6 mb-[15px]">
                        <h4 className="text-text-gray text-sm">Total Distance: 350 km</h4>
                    </div>
                    <div className="col-span-12 sm:col-span-6 me-[43px]">
                        <h4 className="text-text-gray text-sm">Total Weight: 6,000 LBS</h4>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <h4 className="text-text-gray text-sm">Year: 2017</h4>
                    </div>
                </div>
            </div>
           </div>
           <div className="col-span-12 lg:col-span-5 lg:text-right">
            <h2 className="text-green text-[22px] leading-[22px] mb-5 font-semibold">Price: $22,640</h2>
            <p className="text-[#646464] mb-2 text-base leading-[16px]">Serial Number</p>
            <span className="py-[6px] px-2 text-sm leading-[14px] rounded bg-[#E9E9E9] text-[#646464]">S/N HG-2745</span>
           </div>
          </div>
           <div className="flex justify-between pt-[25px] mb-10 flex-wrap gap-5">
             <div>
                <h3 className="mb-[10px] text-[#373737] text-xl leading-[20px] font-medium">Order ID</h3>
                <h4 className="text-text-gray text-base leading-[16px] font-normal">#HF1315DV15656</h4>
             </div>
             <div>
                <div className="flex items-center gap-[15px]">
               <div>
                 <h3 className="mb-[10px] text-[#373737] text-xl leading-[20px] font-medium">Delivery Contact</h3>
                <p className="text-text-gray text-base leading-[16px] font-normal">(603) 555-0123</p>
               </div>
                <div className="w-[38px] h-[38px] flex justify-center items-center rounded-full bg-[#E9E9E9]">
                <IoCallOutline/>
                </div>
                </div>
             </div>
           </div>
        {/* <div className="grid grid-cols-12 relative z-20 gap-8 lg:gap-1">
          <div className="
            absolute 
            top-[16px]
            h-[6px]
            bg-[#E8E8E8]
            rounded
            left-[calc(12.5%+18px)]
            right-[calc(12.5%+18px)]
            -z-10
          "></div>
          <div
            className="
              absolute top-[16px] h-[6px] bg-[#0A7F71] rounded transition-all duration-500 -z-10
            "
            style={{
              width:
                step === 0 ? "0%" :
                step === 1 ? "33%" :
                step === 2 ? "66%" :
                "100%",
              left: "calc(12.5% + 18px)"
            }}
          ></div>
            <div className="col-span-12 lg:col-span-3 flex flex-col items-center gap-[10px]">
                <div className="w-[36px] h-[36px] rounded-full bg-[#CCE4E1] flex justify-center items-center">
                   <div className="w-[22px] h-[22px] rounded-full bg-green flex justify-center items-center">
                        <Image src='/assets/checkamrk.svg' alt="check" width={12} height={12}/>
                   </div>
                </div>
                        <h3 className="text-[#373737] text-lg leading-[18px] ">Processing</h3>
                        <p className="text-[#7A7A7A] text-sm leading-[14px]">Mar 8, 2024 10:20 AM</p>
            </div>
            <div className="col-span-12 lg:col-span-3 flex flex-col items-center gap-[10px]">
                <div className="w-[36px] h-[36px] rounded-full bg-[#CCE4E1] flex justify-center items-center">
                   <div className="w-[22px] h-[22px] rounded-full bg-green flex justify-center items-center">
                        <Image src='/assets/checkamrk.svg' alt="check" width={12} height={12}/>
                   </div>
                </div>
                        <h3 className="text-[#373737] text-lg leading-[18px] ">Shipped</h3>
                        <p className="text-[#7A7A7A] text-sm leading-[14px]">Mar 10, 2024 09:05 AM</p>
            </div>
            <div className="col-span-12 lg:col-span-3 flex flex-col items-center gap-[10px]">
                <div className="w-[36px] h-[36px] rounded-full bg-[#E9E9E9] flex justify-center items-center">
                   <div className="w-[22px] h-[22px] rounded-full bg-[#D3D3D3] flex justify-center items-center">
                   </div>
                </div>
                        <h3 className="text-[#373737] text-lg leading-[18px] ">In Transit</h3>
                        <p className="text-[#7A7A7A] text-sm leading-[14px]">Mar 14, 2024 03:45 PM</p>
            </div>
            <div className="col-span-12 lg:col-span-3 flex flex-col items-center gap-[10px]">
                <div className="w-[36px] h-[36px] rounded-full bg-[#E9E9E9] flex justify-center items-center">
                   <div className="w-[22px] h-[22px] rounded-full bg-[#D3D3D3] flex justify-center items-center">
                   </div>
                </div>
                        <h3 className="text-[#373737] text-lg leading-[18px] ">Delivered</h3>
                        <p className="text-[#7A7A7A] text-sm leading-[14px]">Mar 16, 2024 04:15 PM</p>
            </div>
        </div> */}
        <div className="grid grid-cols-12 relative z-20 lg:gap-1">
            <div
              className="
                hidden lg:block
                absolute 
                top-[16px]
                h-[6px]
                bg-[#E8E8E8]
                rounded
                left-[calc(12.5%+12px)]
                right-[calc(12.5%+12px)]
                -z-10
              "
            ></div>

            <div
              className="
                hidden lg:block
                absolute top-[16px] h-[6px] bg-[#0A7F71] rounded transition-all duration-500 -z-10
              "
                style={{
    left: "calc(12.5% + 12px)",  // Starting point (between 1st & 2nd box)
    width:
      step === 0 ? "0%" :
      step === 1 ? "25%" :      // 2nd box સુધી
      "25%",                    // Always 2 boxes સુધી જ રહે
  }}
            ></div>

                <div
              className="
                lg:hidden
                absolute
                left-[16px]   /* icon size 36px → center is 18px */
                top-[30px]
                h-[250px]
                bottom-0
                w-[6px]
                bg-[#E8E8E8]
                rounded
                -z-10
              "
            ></div>

            <div
              className="
                lg:hidden
                absolute
                left-[16px]
                top-[30px]
                 h-[250px]
                w-[6px]
                bg-[#0A7F71]
                rounded
                transition-all duration-500
                -z-10
              "
              style={{
                height:
                  step === 0 ? "0%" :
                  step === 1 ? "25%" :
                  step === 2 ? "50%" :
                  "75%",
              }}
            ></div>

          {/* --- STEP ITEMS --- */}
          <div className="col-span-12 lg:col-span-3 flex lg:flex-col lg:items-center gap-5 lg:gap-[10px] mb-8 lg:mb-0">
            <div className="w-[36px] h-[36px] rounded-full bg-[#CCE4E1] flex justify-center items-center">
              <div className="w-[22px] h-[22px] rounded-full bg-green flex justify-center items-center">
                <Image src='/assets/checkamrk.svg' alt="check" width={12} height={12}/>
              </div>
            </div>
          <div className="flex flex-col lg:items-center gap-5 lg:gap-[10px]">
            <h3 className="text-[#373737] text-lg leading-[18px]">Processing</h3>
            <p className="text-[#7A7A7A] text-sm leading-[14px]">Mar 8, 2024 10:20 AM</p>
          </div>
          </div>

          <div className="col-span-12 lg:col-span-3 flex lg:flex-col lg:items-center gap-5 lg:gap-[10px] mb-8 lg:mb-0">
            <div className="w-[36px] h-[36px] rounded-full bg-[#CCE4E1] flex justify-center items-center">
              <div className="w-[22px] h-[22px] rounded-full bg-green flex justify-center items-center">
                <Image src='/assets/checkamrk.svg' alt="check" width={12} height={12}/>
              </div>
            </div>
          <div className="flex flex-col lg:items-center gap-5 lg:gap-[10px]">
            <h3 className="text-[#373737] text-lg leading-[18px]">Shipped</h3>
            <p className="text-[#7A7A7A] text-sm leading-[14px]">Mar 10, 2024 09:05 AM</p>
          </div>
          </div>

          <div className="col-span-12 lg:col-span-3 flex lg:flex-col lg:items-center gap-5 lg:gap-[10px] mb-8 lg:mb-0">
            <div className="w-[36px] h-[36px] rounded-full bg-[#E9E9E9] flex justify-center items-center">
              <div className="w-[22px] h-[22px] rounded-full bg-[#D3D3D3] flex justify-center items-center"></div>
            </div>
          <div  className="flex flex-col lg:items-center gap-5 lg:gap-[10px]">
            <h3 className="text-[#373737] text-lg leading-[18px]">In Transit</h3>
            <p className="text-[#7A7A7A] text-sm leading-[14px]">Mar 14, 2024 03:45 PM</p>
          </div>
          </div>

          <div className="col-span-12 lg:col-span-3 flex lg:flex-col lg:items-center gap-5 lg:gap-[10px] mb-8 lg:mb-0">
            <div className="w-[36px] h-[36px] rounded-full bg-[#E9E9E9] flex justify-center items-center">
              <div className="w-[22px] h-[22px] rounded-full bg-[#D3D3D3] flex justify-center items-center"></div>
            </div>
            <div  className="flex flex-col lg:items-center gap-5 lg:gap-[10px]">
              <h3 className="text-[#373737] text-lg leading-[18px]">Delivered</h3>
            <p className="text-[#7A7A7A] text-sm leading-[14px]">Mar 16, 2024 04:15 PM</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Tracking;
