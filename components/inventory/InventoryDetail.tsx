"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFuelPumpFill } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { FaCalendarAlt } from "react-icons/fa";
import { FaHandHoldingDollar, FaLocationCrosshairs } from "react-icons/fa6";
import { GiWeightScale } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";
import { motion } from "framer-motion";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Listbox, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

const countries = ["Choose country", "USA", "CANADA"];

function InventoryDetail() {
  const fadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
  const [activeTab, setActiveTab] = useState("photos");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <div className="container-custom mt-10 lg:mt-20 mb-20 lg:mb-[110px]">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 xl:col-span-7">
          <div className="border border-light-gray  py-[43px] px-[38px] rounded-[15px] mb-[25px]">
            <motion.div 
             variants={fadeIn}
              initial="hidden"
              animate="show"
              whileHover={{ scale: 1.02 }}>
            <Image
              src="/assets/detail-img.png"
              alt="detail-image"
              width={700}
              height={500}
            />
            </motion.div>
          </div>
          <div className="flex border rounded-xl overflow-hidden w-full border-light-gray mb-[25px]">

  {/* Photos */}
                <button
                  onClick={() => setActiveTab("photos")}
                  className={`w-1/2 py-2 sm:py-3 font-medium mont-text transition-all duration-200 cursor-pointer
                    ${
                      activeTab === "photos"
                        ? "bg-green text-white"
                        : "bg-white text-gray hover:bg-light-gray/20 hover:text-green"
                    }`}
                >
                  Photos
                </button>

                {/* Videos */}
                <button
                  onClick={() => setActiveTab("videos")}
                  className={`w-1/2 py-2 sm:py-3 font-medium mont-text transition-all duration-200  cursor-pointer
                    ${
                      activeTab === "videos"
                        ? "bg-green text-white"
                        : "bg-white text-gray hover:bg-light-gray/20 hover:text-green"
                    }`}
                >
                  Videos
                </button>

              </div>

            {activeTab === "photos" && (
        <div className="flex justify-between gap-2 sm:gap-1 mb-[30px] flex-wrap">
          {["detail1.png","detail6.png","detail2.png","detail3.png","detail4.png","detail5.png"].map((img, i) => (
            <div
              key={i}
              className="border border-light-gray flex justify-center items-center w-[98px] h-[98px] rounded-xl"
            >
              <Image
                src={`/assets/${img}`}
                alt="detail"
                width={87}
                height={57}
              />
            </div>
          ))}
        </div>
      )}
            {activeTab === "videos" && (
        <div className="flex justify-between gap-2 sm:gap-1 mb-[30px] flex-wrap">
          {["detail5.png","detail3.png","detail4.png","detail1.png","detail6.png","detail5.png"].map((img, i) => (
            <div
              key={i}
              className="border border-light-gray flex justify-center items-center w-[98px] h-[98px] rounded-xl"
            >
              <Image
                src={`/assets/${img}`}
                alt="detail"
                width={87}
                height={57}
              />
            </div>
          ))}
        </div>
      )}
          <div className="w-full space-y-6">

        <h2 className="text-[22px] font-semibold text-[#333333] mb-[22px] mont-text">Overview</h2>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-1">

            {/* Year */}
            <div className="flex items-center gap-[10px]">
                <div>
            <div className="w-[50px] h-[50px] bg-green rounded-md flex items-center justify-center">
                <span className="text-white text-2xl"><FaCalendarAlt/></span>
            </div>
                </div>
            <div>
                <p className="text-text-gray mb-[6px] text-base leading-[16px]">Year</p>
                <p className="text-gray font-semibold text-lg leading-[20px] mont-text">2017</p>
            </div>
            </div>

            {/* Weight */}
            <div className="flex items-center gap-[10px]">
                <div>
            <div className="w-[50px] h-[50px] bg-green rounded-md flex items-center justify-center">
                <span className="text-white text-2xl"><GiWeightScale/></span>
            </div>
                </div>
            <div>
                <p className="text-text-gray mb-[6px] text-base leading-[16px]">Weight</p>
                <p className="text-gray font-semibold text-lg leading-[20px] mont-text">6,000 LBS</p>
            </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-center gap-[10px] md:justify-end">
                <div>
            <div className="w-[50px] h-[50px] bg-green rounded-md flex items-center justify-center">
                <span className="text-white text-2xl"><MdAccessTimeFilled/></span>
            </div>
                </div>
            <div>
                <p className="text-text-gray mb-[6px] text-base leading-[16px]">Working Hours</p>
                <p className="text-gray font-semibold text-lg leading-[20px] mont-text">1,200 hrs</p>
            </div>
            </div>

        </div>

        {/* Divider */}
        <div className="border-t border-light-gray"></div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-1">

            {/* Fuel Type */}
            <div className="flex items-center gap-[10px]">
                <div>
            <div className="w-[50px] h-[50px] bg-green rounded-md flex items-center justify-center">
                <span className="text-white text-2xl"><BsFuelPumpFill/></span>
            </div>
                </div>
            <div>
                <p className="text-text-gray mb-[6px] text-base leading-[16px]">Fuel Type</p>
                <p className="text-gray font-semibold text-lg leading-[20px] mont-text">Diesel</p>
            </div>
            </div>

            {/* Condition */}
            <div className="flex items-center gap-[10px]">
           <div> 
            <div className="w-[50px] h-[50px] bg-green rounded-md flex items-center justify-center">
                <span className="text-white text-2xl"><CgNotes/></span>
            </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-[15px]">
                <p className="text-text-gray mb-[6px] text-base leading-[16px] mont-text font-semibold">Condition </p>
                <span className="bg-[#1DAF50] text-white text-sm px-2 py-[6px] rounded-md whitespace-nowrap">
                Very Good
                </span>
                </div>

                {/* Condition badge */}
                
            </div>
            </div>

            {/* Serial Number */}
            <div className="flex items-center gap-4 md:justify-end">
            <div className="w-[50px] h-[50px]"></div>
            <div>
                <p className="bg-[#E9E9E9] text-gray text-sm px-[8px] py-[6px] rounded-md mont-text font-semibold">
                #S/N HG-2745
                </p>
            </div>
            </div>

        </div>
        <div className="border-t border-light-gray"></div>
          </div>
           <div className="mt-[30px]">
              <h3 className="mb-[15px] text-[#333333] text-[22px] leading-[22px] mont-text font-semibold">Description</h3>
              <p className="text-text-gray mb-[15px] text-base font-normal">This John Deere 6140R is a powerful and reliable tractor ideal for medium to large-scale farming and industrial operations.</p>
                <p className="text-text-gray mb-[15px] text-base font-normal">It features advanced hydraulics, a fuel-efficient engine, and operator-friendly controls to maximize performance and comfort. It features advanced hydraulics, a fuel efficient engine, and operator-friendly controls to maximize performance and comfort.</p>
           </div>
           <div className="w-full space-y-4 pt-[15px]">

  {/* Header */}
  <div className="flex justify-between items-center">
    <h2 className="text-lg leading-[20px] font-semibold text-gray mont-text">Specification</h2>
    <p className="text-lg leading-[20px] font-semibold text-gray mont-text">Details</p>
  </div>

  <div className="border-t border-light-gray"></div>

  {/* Table */}
  <div className="w-full">

    {/* Row */}
    <div className="flex justify-between items-center p-[15px] bg-[#F9F9F9]">
      <span className="text-text-gray">Make</span>
      <span className="text-text-gray">CAT</span>
    </div>

    <div className="flex justify-between items-center p-[15px]">
      <span className="text-text-gray">Model</span>
      <span className="text-text-gray">69G</span>
    </div>

    <div className="flex justify-between items-center p-[15px] bg-[#F9F9F9]">
      <span className="text-text-gray">Engine Power</span>
      <span className="text-text-gray">690 HP</span>
    </div>

    <div className="flex justify-between items-center p-[15px]">
      <span className="text-text-gray">Transport Dimensions</span>
      <span className="text-text-gray">
        287\" L x 106\" W x 130\" H
      </span>
    </div>

    <div className="flex justify-between items-center p-[15px] bg-[#F9F9F9]">
      <span className="text-text-gray">Tracks</span>
      <span className="text-text-gray">Rubber</span>
    </div>

    <div className="flex justify-between items-center p-[15px]">
      <span className="text-text-gray">Condition</span>
      <span className="text-text-gray">Very Good</span>
    </div>

    <div className="flex justify-between items-center py-4 px-4 bg-[#F9F9F9]">
      <span className="text-text-gray">Transmission</span>
      <span className="text-text-gray">PowerQuad Plus</span>
    </div>

  </div>
</div>

        </div>
        <div className="col-span-12 xl:col-span-5">    
            <div className="border border-light-gray p-5 rounded-[15px]">
             <h4 className="text-orange text-lg xl:text-lg xl:mb-[15px]  relative after:absolute after:top-3 after:left-0 after:bg-orange after:w-[15px] after:h-[2px] pl-5 after:rounded-full mont-text font-semibold">
                   Tractor Loader Backhoe
                  </h4>
                  <h2 className="text-[#373737] text-[26px] sm:text-[28px] sm:leading-[38px] mb-[30px] font-semibold mont-text">2017 Wheel Loaders John Deere 6125M</h2>
                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-[17px] mb-[30px]">
          {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
            <div
              key={i}
              className="border border-light-gray rounded-[10px] p-3 2xl:p-4 flex flex-col items-center bg-[#E9E9E940]"
            >
              <span className="text-xl 2xl:text-4xl 2xl:mb-[10px] 2xl:leading-[36px] font-semibold mont-text">{[0, 8, 32, 10][i]}</span>
              <span className="text-text-gray text-sm mt-1">{label}</span>
            </div>
          ))}
                  </div>
                   <div className="flex gap-[10px] items-center mb-[15px]">
                    <p className="text-[#373737] text-lg leading-[18px]">Current bid:</p>
                    <p className="text-green text-[26px] leading-[26px] font-semibold mont-text">$22,640.00 </p>
                    </div>
                    <div className="flex items-center bg-[#F2F8F7] text-green border border-[#CCE4E1] px-4 py-3 rounded-xl gap-[10px] text-base leading-[16px] mb-[30px] font-normal">
                    <span><Image src='/assets/fire.png' alt="icon" width={30} height={30} /></span> 1 Offer was received
                    </div>
                    {/* BID Button */}
                      <Link
                        href="/inventory/inventory-detail/verify-account"
                        className="w-full py-[15px] bg-green text-white rounded-lg text-base leading-[16px] font-medium 
                                  mb-[15px] flex justify-center items-center gap-[10px] mont-text 
                                  transition-all duration-300 hover:brightness-110 hover:bg-green/90"
                      >
                        <Image src="/assets/hammer.png" alt="icon" width={15} height={15} />
                        BID from $24,000.00
                      </Link>

                      <div className="text-center text-[#4D4D4D] text-lg leading-[18px] mb-[15px]">- OR -</div>

                      {/* BUY NOW Button */}
                      <Link
                        href="/inventory/inventory-detail/verify-account"
                        className="w-full py-[15px] bg-white text-green rounded-lg text-base leading-[16px] font-medium 
                                  flex justify-center items-center gap-[10px] border border-green mont-text 
                                  transition-all duration-300 hover:bg-green hover:text-white"
                      >
                        <Image src="/assets/bag.png" alt="icon" width={15} height={15} />
                        Buy Now for $25,000.00
                      </Link>
                    <div className="border-t border-light-gray my-[30px]"></div>

                    <div className="w-full space-y-6">

                    <h2 className="text-lg font-semibold text-gray mb-[10px] mont-text">
                        Delivery cost calculator
                    </h2>

                    <p className="text-text-gray text-nase leading-[26px] mb-[20px]">
                        We will deliver this equipment to your location. You can estimate 
                        the cost below.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-3 mb-[5px]">
                        <div className="flex flex-col items-center">
                          <FaLocationCrosshairs size={20}/>
                            <div className="border-l border-dashed border-gray h-10 mt-1"></div>
                        </div>
                        <p className="font-semibold text-gray text-lg leading-[18px] mont-text">
                            From our location
                        </p>
                        </div>
                        <div className="flex items-start gap-3">
                        <div className="flex flex-col items-center">
                          <IoLocationSharp size={20}/>
                        </div>
                         <p className="font-semibold text-gray text-lg leading-[18px] mont-text">
                          To your delivery location
                        </p>
                        </div>

                    </div>

                    {/* Form Inputs */}
                    <div className="space-y-5">

                        {/* Zip Code */}
                        <Formik
                      initialValues={{
                        zip: "",
                        country: countries[0],
                      }}
                      validationSchema={Yup.object({
                        zip: Yup.string().required("Zip code is required"),
                        country: Yup.string().required("Country is required"),
                      })}
                      onSubmit={(values) => {
                        console.log("Form submitted:", values);
                      }}
                    >
                      {({ setFieldValue }) => (
                        <Form className="space-y-6">

                          {/* ZIP CODE INPUT */}
                          <div className="mb-[25px]">
                            <label className="text-[#333333] text-lg mb-2 block mont-text font-semibold">Zip code</label>

                            <Field
                              name="zip"
                              type="text"
                              placeholder="Enter your zip code"
                              className="w-full rounded-xl border border-light-gray px-4 py-3 text-base outline-none focus:ring-2 focus:ring-green text-[#999999]"
                            />

                            {/* <ErrorMessage
                              name="zip"
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            /> */}
                          </div>

                          {/* COUNTRY DROPDOWN - HEADLESS UI LISTBOX */}
                          <div>
                            <label className="text-[#333333] text-lg mb-2 block mont-text font-semibold">
                              Choose country
                            </label>

                            <Listbox
                              value={selectedCountry}
                              onChange={(value) => {
                                setSelectedCountry(value);
                                setFieldValue("country", value);
                              }}
                            >
                              <div className="relative mt-2">
                                <Listbox.Button
                                  className="w-full rounded-xl border border-light-gray px-[18px] py-3 text-sm appearance-none outline-none focus:ring-2 focus:ring-green text-left relative"
                                >
                                  {selectedCountry}

                                  <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs" />
                                </Listbox.Button>

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
                                    className="absolute w-full z-50 bg-white border border-light-gray rounded-xl shadow-md mt-2 overflow-hidden"
                                  >
                                    {countries.map((country, idx) => (
                                      <Listbox.Option
                                        key={idx}
                                        value={country}
                                        className={({ active }) =>
                                          `px-4 py-2 cursor-pointer text-sm ${
                                            active
                                              ? "bg-green/10 text-green"
                                              : "text-text-gray"
                                          }`
                                        }
                                      >
                                        {country}
                                      </Listbox.Option>
                                    ))}
                                  </Listbox.Options>
                                </Transition>
                              </div>
                            </Listbox>

                            {/* <ErrorMessage
                              name="country"
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            /> */}
                          </div>
                        </Form>
                      )}
                    </Formik>
                        {/* Calculate Button */}
                        <button className="py-3 px-[18px] border border-green text-green rounded-xl text-base font-medium leading-[16px] hover:bg-green-50 transition mont-text">
                        Calculate shipping costs
                        </button>

                    </div>

                    {/* Result */}
                    <div className="pt-2 mb-0">
                        <p className="text-gray font-medium text-lg mb-[15px] leading-[18px] mont-text">
                        Delivery cost estimation
                        </p>

                        <p className="text-green font-bold text-[26px] mb-[10px] mont-text">$2.000</p>

                        <p className="text-text-gray flex items-center gap-1 text-sm mt-1 mont-text font-semibold">
                        Power By Google  
                        <Image src="/assets/google.png" alt="google" width={48} height={17}/>
                        </p>
                    </div>
                      <div className="border-t border-light-gray my-[30px]"></div>
                      <div className="w-full space-y-8">
                      {/* Pay at delivery */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xl"><FaHandHoldingDollar/></span>
                            <h3 className="text-lg font-semibold text-gray mb-[10px] leading-[18px] mont-text">
                              Pay at delivery
                            </h3>
                          </div>
                          <p className="text-text-gray text-base leading-[16px]">100% safe payment.</p>

                          <div className="border-t border-gray-200 mt-[30px]"></div>
                        </div>

                      {/* Money back guaranteed */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl"><FaHandHoldingDollar/></span>
                          <h3 className="text-lg font-semibold text-gray leading-[18px] mont-text">
                            Money back guaranteed
                          </h3>
                        </div>
                        <p className="text-text-gray text-base">
                          Test the machine for 30 days with a 100% Money-Back Guarantee!
                        </p>

                        <div className="border-t border-gray-200 mt-[30px]"></div>
                      </div>

                      {/* Feature list */}
                      <div className="space-y-4">

                        {/* Item */}
                                    <div className="flex items-center gap-3 p-4 rounded-xl 
                                    bg-[linear-gradient(90deg,#f6f6f6_0%,#ffffff_100%)]
                                    ">
                                    <Image src="/assets/van.svg" alt="vehicle" width={22} height={22}/>
                                    <p className="text-[#373737]">
                                        Delivery anywhere within the USA & Canada
                                    </p>
                                    </div>

                                    <div className="flex items-center gap-3 p-4 rounded-xl 
                                    bg-[linear-gradient(90deg,#f6f6f6_0%,#ffffff_100%)]
                                    ">
                                    <Image src="/assets/van1.svg" alt="return" width={22} height={22}/>
                                    <p className="text-[#373737]">
                                      hassle
                                    </p>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 rounded-xl 
                                    bg-[linear-gradient(90deg,#f6f6f6_0%,#ffffff_100%)]
                                    ">
                                    <Image src="/assets/van3.svg" alt="return" width={22} height={22}/>
                                    <p className="text-[#373737]">
                                        30-day hassle-free returns
                                    </p>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 rounded-xl 
                                    bg-[linear-gradient(90deg,#f6f6f6_0%,#ffffff_100%)]
                                    ">
                                    <Image src="/assets/van4.svg" alt="return" width={22} height={22}/>
                                    <p className="text-[#373737]">
                                        30-day hassle-free returns
                                    </p>
                                    </div>
                      </div>
                    </div>
                    </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryDetail;
