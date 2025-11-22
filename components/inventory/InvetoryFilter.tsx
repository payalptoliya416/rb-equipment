'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
      <motion.div
       initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      className="lg:hidden mb-5">
        <button
          onClick={() => setOpenSidebar(true)}
          className="px-4 py-2 border border-light-gray rounded-lg text-text-gray"
        >
          ☰ Filters
        </button>
      </motion.div>

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
          <motion.div   initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}>
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
          </motion.div>

          <div className="border-t border-light-gray my-[30px]" />

          {/* MAKE & MODEL */}
          <div>
            <h2 className="font-semibold text-lg mb-[25px] text-gray">Filter by Make and Model</h2>

            <select className="w-full border border-light-gray rounded-lg py-[13px] px-[15px] text-sm text-text-gray">
              <option>Any Make</option>
               <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                            ▼
                            </div>
            </select>

            <select className="w-full border border-light-gray rounded-lg py-[13px] px-[15px] text-sm mt-5 text-text-gray">
              <option>Select Make first</option>
               <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                            ▼
                            </div>
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
         <AnimatePresence>
        {openSidebar && (
          <motion.div
            onClick={() => setOpenSidebar(false)}
            className="fixed inset-0 bg-black/30 lg:hidden z-[998]"
          />
        )}
         </AnimatePresence>

        {/* ================= PRODUCT GRID ================= */}
        <main className="flex-1">

          {/* SORT BAR */}
          <motion.div
           initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          className="flex justify-end mb-5">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray">Sort By:</span>
              <select className="border border-light-gray rounded-lg px-3 py-2 text-sm text-text-gray">
                <option>Ending Time: Sooner to Late</option>
              </select>
            </div>
          </motion.div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {Array(9)
              .fill(0)
              .map((_, i) => (
                <motion.div
                 initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.08,
                    ease: "easeOut"
                  }}
                  key={i}
                  className="border border-light-gray rounded-[10px] p-[15px] bg-white"
                >
                  <div className="w-full rounded-[10px] flex items-center justify-center border border-light-gray py-5 px-3 bg-[#E9E9E926] relative group">
                    <Image src="/assets/filter1.png" alt="product" width={216} height={123} />
                    <Link href='/inventory/inventory-detail' className="absolute border border-light-gray rounded-md py-[10px] px-[30px] text-green bg-white text-base leading-[16px] left-1/2 bottom-0 -translate-x-1/2 whitespace-nowrap       opacity-0 translate-y-3 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:-translate-y-3">BID OR BUY</Link>
                  </div>

                  <div className="px-2 mt-[15px]">
                    <h3 className="font-normal text-lg mb-[10px] text-[#373737]">
                      2017 Wheel Loaders John Deere 6125M
                    </h3>

                    <p className="text-text-gray text-base font-normal mb-[15px] leading-[16px]">
                      Hours: 3,825
                    </p>

                    <p className="text-base">
                      <span className="font-semibold text-green">Price: $22,640</span>
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* PAGINATION */}
          <motion.div className="flex items-center gap-3 justify-center mt-10 flex-wrap"
          initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            >
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
          </motion.div>
        </main>
      </div>
    </div>
  );
}

