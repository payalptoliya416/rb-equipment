// 'use client'

// import Image from "next/image";
// import { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// export default function InventoryFilter() {
//       const min = 1990;
//   const max = 2024;

//   const [value, setValue] = useState(2010);

//   const progress = ((value - min) / (max - min)) * 100;
//   return (
//     <div className="w-full flex flex-col lg:flex-row gap-6 p-4 lg:p-6 container-custom mx-auto my-[110px]">

//       {/* ---------------- LEFT FILTER SIDEBAR ---------------- */}
//       <aside className="w-full lg:w-72 border border-light-gray rounded-xl p-[15px] h-fit bg-white">

//         {/* FILTER BY CATEGORY */}
//         <div>
//           <h2 className="font-semibold text-lg mb-[25px] text-gray">Filter by Category</h2>

//           <div className="space-y-[21px]">
//             {[
//               ["Wheel Loaders", "(05)"],
//               ["Wheel Excavators", "(01)"],
//               ["Track Excavators", "(03)"],
//               ["Telehandlers", "(08)"],
//               ["Skid Steer Loaders", "(06)"],
//               ["Rollers", "(10)"],
//               ["Mini Excavators", "(15)"],
//               ["Graders", "(02)"],
//               ["Farm Tractors", "(18)"],
//               ["Dumpers", "(20)"],
//               ["Dozers", "(05)"],
//               ["Backhoe Loaders", "(04)"]
//             ].map(([label, count], idx) => (
//               <label key={idx} className="flex items-center justify-between text-base">
//                 <div className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     className="w-4 h-4 rounded-full border-[#BCBCBC]"
//                   />
//                   <span className="text-text-gray">{label}</span>
//                 </div>
//                 <span className="text-text-gray">{count}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-light-gray my-[30px]" />

//         {/* MAKE & MODEL */}
//         <div>
//           <h2 className="font-bold text-lg mb-[25px] text-gray">Filter by Make and Model</h2>

//           <select className="w-full border border-light-gray rounded-lg py-[13px] px-[15px] text-sm text-text-gray">
//             <option>Any Make</option>
//           </select>

//           <select className="w-full border border-light-gray rounded-lg py-[13px] px-[15px] text-sm mt-5 text-text-gray">
//             <option>Select Make first</option>
//           </select>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-light-gray my-[30px]" />

//         {/* FILTER BY YEAR */}
//         <div>
//           <h2 className="font-semibold text-lg mb-[25px] text-gray">Filter by Year</h2>

//             <div className="flex items-center justify-between text-sm text-[#373737] mb-2">
//             <span>1990</span>
//             <span>2024</span>
//           </div>

//           {/* Slider (static UI) */}
//         <div className="w-full mb-5">
//       <div className="relative w-full h-1 bg-light-gray rounded-full my-4">

//         {/* GREEN FILL */}
//         <div
//           className="absolute h-[6px] bg-green rounded-full"
//           style={{ width: `${progress}%` }}
//         />

//         {/* RANGE INPUT (transparent track) */}
//         <input
//           type="range"
//           min={min}
//           max={max}
//           value={value}
//           onChange={(e) => setValue(Number(e.target.value))}
//           className="
//             absolute inset-0 w-full appearance-none bg-transparent cursor-pointer
//             [&::-webkit-slider-thumb]:appearance-none
//             [&::-webkit-slider-thumb]:w-4
//             [&::-webkit-slider-thumb]:h-4
//             [&::-webkit-slider-thumb]:bg-green
//             [&::-webkit-slider-thumb]:rounded-full
//             [&::-webkit-slider-thumb]:cursor-pointer

//             [&::-moz-range-thumb]:w-4
//             [&::-moz-range-thumb]:h-4
//             [&::-moz-range-thumb]:bg-green
//             [&::-moz-range-thumb]:rounded-full
//           "
//         />
//       </div>
//     </div>
//           <div className="flex gap-3">
//             <div className="w-1/2">
//                 <label className="text-base text-[#373737]">From</label>
//               <input type="number"  className="w-full mt-1 border border-light-gray rounded-lg py-2 px-3 text-base"/>
//             </div> 

//             <div className="w-1/2">
//                 <label className="text-base text-[#373737]">To</label>
//               <input type="number"  className="w-full mt-1 border border-light-gray rounded-lg py-2 px-3 text-base"/>
//             </div>
//           </div>

//        <div className="border-t border-light-gray my-[30px]" />

//           <button className="w-full bg-green hover:bg-white text-white py-[14px] text-base leading-[16px] rounded-lg">
//             Apply Filter
//           </button>
//         </div>
//       </aside>

//       {/* ---------------- RIGHT PRODUCT GRID ---------------- */}
//       <main className="flex-1">

//         {/* SORT BAR */}
//         <div className="flex justify-end mb-5">
//           <div className="flex items-center gap-3">
//             <span className="text-sm font-medium text-gray">Sort By:</span>
//             <select className="border border-light-gray rounded-lg px-3 py-2 text-sm text-text-gray">
//               <option className="text-text-gray">Ending Time: Sooner to Late</option>
//             </select>
//           </div>
//         </div>

//         {/* PRODUCT GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
//           {Array(9)
//             .fill(0)
//             .map((_, i) => (
//               <div
//                 key={i}
//                 className="border border-light-gray rounded-[10px] p-[15px] bg-white"
//               >
//                 <div className="w-full rounded-[10px] flex items-center justify-center border border-light-gray py-5 px-3">
//                     <Image src="/assets/filter1.png"  alt="product" width={216} height={123}/>
//                 </div>

//                 <div className="px-2 mt-[15px]">

//                     <h3 className="font-normal text-lg mb-[10px] text-[#373737]">
//                     2017 Wheel Loaders John Deere 6125M
//                   </h3>

//                     <p className="text-text-gray text-base font-normal mb-[15px] leading-[16px]">Hours: 3,825</p>

//                   <p className="text-base">
//                     <span className="font-bold text-green">
//                       Price: $22,640
//                     </span>
//                   </p>
//                 </div>
//               </div>
//             ))}
//         </div>

//         {/* --pagination-- */}
//          <div className="flex items-center gap-3 justify-center mt-10">

//       {/* BACK BUTTON */}
//       <button className="flex items-center gap-2 px-4 py-2 border border-light-gray rounded-xl text-text-gray bg-white hover:bg-gray-100">
//         <FaChevronLeft className="text-sm" />
//         Back
//       </button>

//       {/* PAGE 1 - ACTIVE */}
//       <button className="px-4 py-2 rounded-xl bg-green text-white font-medium">
//         1
//       </button>

//       {/* PAGE NUMBERS */}
//       <button className="px-4 py-2 border border-light-gray rounded-xl text-text-gray hover:bg-gray-100">
//         2
//       </button>

//       <button className="px-4 py-2 border border-light-gray rounded-xl text-text-gray hover:bg-gray-100">
//         3
//       </button>

//       <button className="px-4 py-2 border border-light-gray rounded-xl text-text-gray hover:bg-gray-100">
//         4
//       </button>

//       <button className="px-4 py-2 border border-light-gray rounded-xl text-text-gray hover:bg-gray-100">
//         5
//       </button>

//       {/* NEXT BUTTON */}
//       <button className="flex items-center gap-2 px-4 py-2 border border-light-gray rounded-xl text-text-gray bg-white hover:bg-gray-100">
//         Next
//         <FaChevronRight className="text-sm" />
//       </button>

//     </div>
//       </main>
//     </div>
//   );
// }


'use client';

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function InventoryFilter() {
  const min = 1990;
  const max = 2024;
  const [value, setValue] = useState(2010);

  const progress = ((value - min) / (max - min)) * 100;

  // Sidebar open/close (mobile)
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="w-full container-custom mx-auto my-[80px] lg:my-[110px] px-4">

      {/* MOBILE FILTER BUTTON */}
      <div className="lg:hidden mb-5">
        <button
          onClick={() => setOpenSidebar(true)}
          className="px-4 py-2 border border-light-gray rounded-lg text-text-gray"
        >
          ☰ Filters
        </button>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-6">

        {/* ================= LEFT SIDEBAR ================= */}
        <aside
          className={`
            fixed lg:static
            top-0 left-0
            h-full lg:h-fit
            w-[280px] lg:w-72
            bg-white
            border border-light-gray
            rounded-none lg:rounded-xl
            p-[15px]
            z-[999]
            overflow-y-auto
            transition-transform duration-300
            ${openSidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          `}
        >

          {/* Close button for mobile */}
          <button
            onClick={() => setOpenSidebar(false)}
            className="lg:hidden absolute top-4 right-4 text-xl"
          >
            ✕
          </button>

          {/* FILTER BY CATEGORY */}
          <div>
            <h2 className="font-semibold text-lg mb-[25px] text-gray">Filter by Category</h2>

            <div className="space-y-[21px]">
              {[
                ["Wheel Loaders", "(05)"],
                ["Wheel Excavators", "(01)"],
                ["Track Excavators", "(03)"],
                ["Telehandlers", "(08)"],
                ["Skid Steer Loaders", "(06)"],
                ["Rollers", "(10)"],
                ["Mini Excavators", "(15)"],
                ["Graders", "(02)"],
                ["Farm Tractors", "(18)"],
                ["Dumpers", "(20)"],
                ["Dozers", "(05)"],
                ["Backhoe Loaders", "(04)"]
              ].map(([label, count], idx) => (
                <label key={idx} className="flex items-center justify-between text-base">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded-full border-[#BCBCBC]"
                    />
                    <span className="text-text-gray">{label}</span>
                  </div>
                  <span className="text-text-gray">{count}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="border-t border-light-gray my-[30px]" />

          {/* MAKE & MODEL */}
          <div>
            <h2 className="font-bold text-lg mb-[25px] text-gray">Filter by Make and Model</h2>

            <select className="w-full border border-light-gray rounded-lg py-[13px] px-[15px] text-sm text-text-gray">
              <option>Any Make</option>
            </select>

            <select className="w-full border border-light-gray rounded-lg py-[13px] px-[15px] text-sm mt-5 text-text-gray">
              <option>Select Make first</option>
            </select>
          </div>

          <div className="border-t border-light-gray my-[30px]" />

          {/* FILTER BY YEAR */}
          <div>
            <h2 className="font-semibold text-lg mb-[25px] text-gray">Filter by Year</h2>

            <div className="flex items-center justify-between text-sm text-[#373737] mb-2">
              <span>1990</span>
              <span>2024</span>
            </div>

            {/* REAL SLIDER */}
            <div className="w-full mb-5">
              <div className="relative w-full h-1 bg-light-gray rounded-full my-4">

                <div
                  className="absolute h-[6px] bg-green rounded-full"
                  style={{ width: `${progress}%` }}
                />

                <input
                  type="range"
                  min={min}
                  max={max}
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  className="
                    absolute inset-0 w-full appearance-none bg-transparent cursor-pointer
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-4
                    [&::-webkit-slider-thumb]:h-4
                    [&::-webkit-slider-thumb]:bg-green
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:cursor-pointer
                  "
                />
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-1/2">
                <label className="text-base text-[#373737]">From</label>
                <input
                  type="number"
                  className="w-full mt-1 border border-light-gray rounded-lg py-2 px-3 text-base"
                />
              </div>

              <div className="w-1/2">
                <label className="text-base text-[#373737]">To</label>
                <input
                  type="number"
                  className="w-full mt-1 border border-light-gray rounded-lg py-2 px-3 text-base"
                />
              </div>
            </div>

            <div className="border-t border-light-gray my-[30px]" />

            <button className="w-full bg-green text-white py-[14px] text-base rounded-lg">
              Apply Filter
            </button>
          </div>
        </aside>

        {/* DARK OVERLAY WHEN SIDEBAR OPEN (MOBILE ONLY) */}
        {openSidebar && (
          <div
            onClick={() => setOpenSidebar(false)}
            className="fixed inset-0 bg-black/30 lg:hidden z-[998]"
          />
        )}

        {/* ================= PRODUCT GRID ================= */}
        <main className="flex-1">

          {/* SORT BAR */}
          <div className="flex justify-end mb-5">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray">Sort By:</span>
              <select className="border border-light-gray rounded-lg px-3 py-2 text-sm text-text-gray">
                <option>Ending Time: Sooner to Late</option>
              </select>
            </div>
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {Array(9)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="border border-light-gray rounded-[10px] p-[15px] bg-white"
                >
                  <div className="w-full rounded-[10px] flex items-center justify-center border border-light-gray py-5 px-3">
                    <Image src="/assets/filter1.png" alt="product" width={216} height={123} />
                  </div>

                  <div className="px-2 mt-[15px]">
                    <h3 className="font-normal text-lg mb-[10px] text-[#373737]">
                      2017 Wheel Loaders John Deere 6125M
                    </h3>

                    <p className="text-text-gray text-base font-normal mb-[15px] leading-[16px]">
                      Hours: 3,825
                    </p>

                    <p className="text-base">
                      <span className="font-bold text-green">Price: $22,640</span>
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* PAGINATION */}
          <div className="flex items-center gap-3 justify-center mt-10 flex-wrap">
            <button className="flex items-center gap-2 px-4 py-2 border border-light-gray rounded-xl text-text-gray">
              <FaChevronLeft className="text-sm" />
              Back
            </button>

            <button className="px-4 py-2 rounded-xl bg-green text-white font-medium">1</button>

            <button className="px-4 py-2 border border-light-gray rounded-xl text-text-gray">2</button>
            <button className="px-4 py-2 border border-light-gray rounded-xl text-text-gray">3</button>
            <button className="px-4 py-2 border border-light-gray rounded-xl text-text-gray">4</button>
            <button className="px-4 py-2 border border-light-gray rounded-xl text-text-gray">5</button>

            <button className="flex items-center gap-2 px-4 py-2 border border-light-gray rounded-xl text-text-gray">
              Next
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

