'use client';

import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Disclosure } from "@headlessui/react";
import { Listbox, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

export default function InventoryFilter() {
  const min = 1990;
  const max = 2024;
  const [value, setValue] = useState(2010);
  const progress = ((value - min) / (max - min)) * 100;
  const [openSidebar, setOpenSidebar] = useState(false);

  const makes = ["Any Make", "John Deere", "CAT", "Komatsu", "Volvo"];
  const [selectedMake, setSelectedMake] = useState(makes[0]);

  const models = ["Select Make first", "Model A", "Model B", "Model C"];
  const [selectedModel, setSelectedModel] = useState(models[0]);

  // pagination
 const allProducts = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  hours: 3825,
  price: 22640,
}));

const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 9; // 3x3 grid
const totalPages = Math.ceil(allProducts.length / itemsPerPage);

// slice products for current page
const start = (currentPage - 1) * itemsPerPage;
const end = start + itemsPerPage;
const currentProducts = allProducts.slice(start, end);

const goNext = () => {
  if (currentPage < totalPages) setCurrentPage((p) => p + 1);
};

const goBack = () => {
  if (currentPage > 1) setCurrentPage((p) => p - 1);
};

// --short by
const sortOptions = [
  "Ending Time: Sooner to Late",
  "Ending Time: Late to Sooner",
  "Price: Low to High",
  "Price: High to Low",
  "Newest Added",
];

const [selectedSort, setSelectedSort] = useState(sortOptions[0]);

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
          className="px-4 py-2 border border-light-gray rounded-lg text-text-gray mont-text font-semibold"
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
              <Disclosure defaultOpen>
             {({ open }) => (
              <>
              <Disclosure.Button className="w-full flex items-center justify-between mt-10 lg:mt-0">
              <h2 className="font-semibold text-lg text-gray mont-text">Filter by Category</h2>

                  <FaChevronDown
                    className={`text-gray transition-transform duration-300 ${
                      open ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel>
                  <div className="mt-[25px] space-y-5">

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
                      ["Backhoe Loaders", "(04)"],
                    ].map(([label, count], idx) => (
                      <label
                        key={idx}
                        className="flex items-center justify-between text-base cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-5 h-5 rounded border-[2px] border-light-gray"
                          />
                          <span className="text-text-gray">{label}</span>
                        </div>

                        <span className="text-text-gray">{count}</span>
                      </label>
                    ))}

                  </div>
                </Disclosure.Panel>
              </>
             )}
              </Disclosure>
          </motion.div>

          <div className="border-t border-light-gray my-[30px]" />

          {/* MAKE & MODEL */}
          <Disclosure defaultOpen>
            {({ open }) => (
          <div>
          <Disclosure.Button className="w-full flex items-center justify-between mb-4">
              <h2 className="font-semibold text-lg text-gray mont-text">
                Filter by Make and Model
              </h2>
              <FaChevronDown
                className={`text-gray transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </Disclosure.Button>
             <Disclosure.Panel className="space-y-5">

        {/* ============ MAKE DROPDOWN ============ */}
        <Listbox value={selectedMake} onChange={setSelectedMake}>
          <div className="relative">
            <Listbox.Button
              className="w-full border border-light-gray rounded-lg py-[13px] px-[15px] text-sm text-gray-700 flex justify-between items-center"
            >
              {selectedMake}
              <FaChevronDown className="text-gray-500" />
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                className="absolute mt-1 w-full bg-white shadow-lg border border-light-gray rounded-lg max-h-48 overflow-auto z-10"
              >
                {makes.map((make, idx) => (
                  <Listbox.Option
                    key={idx}
                    value={make}
                    className={({ active }) =>
                      `cursor-pointer px-4 py-2 text-sm ${
                        active ? "bg-green text-white" : "text-gray-700"
                      }`
                    }
                  >
                    {make}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>

        {/* ============ MODEL DROPDOWN ============ */}
        <Listbox value={selectedModel} onChange={setSelectedModel}>
          <div className="relative">
            <Listbox.Button
              className="w-full border border-light-gray rounded-lg py-[13px] px-[15px] text-sm text-gray-700 flex justify-between items-center"
            >
              {selectedModel}
              <FaChevronDown className="text-gray-500" />
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                className="absolute mt-1 w-full bg-white shadow-lg border border-light-gray rounded-lg max-h-48 overflow-auto z-10"
              >
                {models.map((model, idx) => (
                  <Listbox.Option
                    key={idx}
                    value={model}
                    className={({ active }) =>
                      `cursor-pointer px-4 py-2 text-sm ${
                        active ? "bg-green text-white" : "text-gray-700"
                      }`
                    }
                  >
                    {model}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>

      </Disclosure.Panel>
          </div>
            )}
          </Disclosure>

          <div className="border-t border-light-gray my-[30px]" />

        <Disclosure defaultOpen>
        {({ open }) => (
          <div>

            <Disclosure.Button className="w-full flex items-center justify-between mb-3">
              <h2 className="font-semibold text-lg text-gray mont-text">Filter by Year</h2>
              <FaChevronDown
                className={`text-gray transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </Disclosure.Button>

            <Disclosure.Panel>

              {/* LIMITS */}
              <div className="flex items-center justify-between text-sm text-[#373737] mt-3 mb-1">
                <span>{min}</span>
                <span>{max}</span>
              </div>

              {/* SLIDER */}
              <div className="w-full mb-5">
                <div className="relative w-full h-1 bg-light-gray rounded-full mt-4">

                  {/* Filled portion */}
                  <div
                    className="absolute h-[6px] bg-green rounded-full top-[50%] -translate-y-1/2"
                    style={{ width: `${progress}%` }}
                  />

                  {/* Actual range input */}
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

              {/* FROM / TO INPUTS */}
              <div className="flex gap-3">
                <div className="w-1/2">
                  <label className="text-base text-[#373737]">From</label>
                  <input
                    type="number"
                    value={min}
                    className="w-full mt-1 border border-light-gray rounded-lg py-2 px-3 text-base"
                  />
                </div>

                <div className="w-1/2">
                  <label className="text-base text-[#373737]">To</label>
                  <input
                    type="number"
                    value={value}
                    className="w-full mt-1 border border-light-gray rounded-lg py-2 px-3 text-base"
                  />
                </div>
              </div>

              {/* DIVIDER */}
              <div className="border-t border-light-gray my-[30px]" />

              {/* BUTTON */}
             <button
            className="w-full bg-green text-white py-[14px] text-base rounded-lg
            flex items-center justify-center gap-2
            transition-all duration-300 ease-out
            hover:bg-green/90 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] cursor-pointer mont-text font-semibold"
          >
            Apply Filter
          </button>


            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
        </aside>

         <AnimatePresence>
        {openSidebar && (
          <motion.div
            onClick={() => setOpenSidebar(false)}
            className="fixed inset-0 bg-black/30 lg:hidden z-[998]"
          />
        )}
         </AnimatePresence>

        <main className="flex-1">
         <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-end mb-5"
        >
          <div className="flex items-center gap-3 relative">
            <span className="text-sm font-medium text-gray mont-text">Sort By:</span>

            <Listbox value={selectedSort} onChange={setSelectedSort}>
              <div className="relative">
                {/* BUTTON */}
                <Listbox.Button
                  className="
                    border border-light-gray rounded-lg px-3 py-2 text-sm text-text-gray 
                    flex items-center gap-2 w-60 pr-8 relative
                  "
                >
                  {selectedSort}
                  <FaChevronDown
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray text-xs"
                  />
                </Listbox.Button>

                {/* OPTIONS */}
                <Transition
                  as={Fragment}
                  enter="transition duration-200 ease-out"
                  enterFrom="opacity-0 -translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition duration-150 ease-in"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-1"
                >
                  <Listbox.Options
                    className="
                      absolute mt-2 w-full bg-white border border-light-gray 
                      rounded-lg shadow-md z-50 overflow-hidden
                    "
                  >
                    {sortOptions.map((option, idx) => (
                      <Listbox.Option
                        key={idx}
                        value={option}
                        className={({ active }) =>
                          `
                          cursor-pointer px-3 py-2 text-sm 
                          ${
                            active
                              ? "bg-green/10 text-green"
                              : "text-text-gray"
                          }
                        `
                        }
                      >
                        {option}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </motion.div>


         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {currentProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: i * 0.08,
                ease: "easeOut",
              }}
              className="border border-light-gray rounded-[10px] p-[15px] bg-white"
            >
              <div className="w-full rounded-[10px] flex items-center justify-center border border-light-gray py-5 px-3 bg-[#E9E9E926] relative group ">
                <Image src="/assets/filter1.png" alt="product" width={216} height={123} />
                <Link
                  href="/inventory/inventory-detail"
                  className="absolute border border-light-gray rounded-md py-[10px] px-[30px] text-green bg-white text-base leading-[16px] left-1/2 bottom-0 -translate-x-1/2 whitespace-nowrap opacity-0 translate-y-3 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:-translate-y-3"
                >
                  BID OR BUY
                </Link>
              </div>

              <div className="px-2 mt-[15px]">
                <h3 className="font-normal text-lg mb-[10px] text-[#373737]">
                  2017 Wheel Loaders John Deere 6125M
                </h3>

                <p className="text-text-gray text-base font-normal mb-[15px] leading-[16px]">
                  Hours: {product.hours}
                </p>

                <p className="text-base mont-text font-semibold">
                  <span className="font-semibold text-green">Price: ${product.price}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

          <motion.div
  className="flex items-center gap-3 justify-center mt-10 flex-wrap"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
>
  {/* BACK button */}
  <button
    onClick={goBack}
    disabled={currentPage === 1}
    className={`flex items-center gap-2 px-4 py-2 border border-light-gray rounded-xl text-text-gray transition-all
      ${currentPage === 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}
    `}
  >
    <FaChevronLeft className="text-sm" />
    Back
  </button>

  {/* PAGE numbers */}
  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
    <button
      key={page}
      onClick={() => setCurrentPage(page)}
      className={`px-4 py-2 rounded-xl transition-all
        ${
          currentPage === page
            ? "bg-green text-white shadow"
            : "border border-light-gray text-text-gray hover:bg-gray-100"
        }
      `}
    >
      {page}
    </button>
  ))}

  {/* NEXT button */}
  <button
    onClick={goNext}
    disabled={currentPage === totalPages}
    className={`flex items-center gap-2 px-4 py-2 border border-light-gray rounded-xl text-text-gray transition-all
      ${currentPage === totalPages ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}
    `}
  >
    Next
    <FaChevronRight className="text-sm" />
  </button>
          </motion.div>

        </main>
      </div>
    </div>
  );
}

