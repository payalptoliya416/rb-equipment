'use client'

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <section className="container-custom mx-auto">
      <motion.div 
      className="grid grid-cols-12 lg:gap-[30px] items-center">
        <motion.div
            initial={{ opacity: 0, x: -120 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.9, ease: "easeOut" }}
          className="col-span-12 lg:col-span-6 order-2 lg:order-1">
          <Image
            src="/assets/about.png"
            alt="about"
            width={575}
            height={445}
            style={{ width: "100%" }}
          />
        </motion.div>
        <motion.div 
    initial={{ opacity: 0, x: 120 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeOut" }}
        className="col-span-12 lg:col-span-6 order-1 lg:order-2 mb-5 lg:mb-0">
          <h4 className="mb-5 text-orange text-lg font-semibold relative after:absolute after:top-3 after:left-0 after:bg-orange after:w-[15px] after:h-[2px] pl-5 after:rounded-full">
            {" "}
            About Us
          </h4>
          <h2 className="text-gray mb-[15px] font-extrabold text-[30px] leading-[44px]">
            Powering the Future of Equipment Trading
          </h2>
          <p className="mb-[15px] text-[16px] leading-[26px] font-normal">
            At RB Equipment Sales, we specialize in the buying, selling, and
            auctioning of high-quality industrial machinery, tractors, farm
            tools, and construction equipment.
          </p>
          <p className="mb-[15px] text-[16px] leading-[26px] font-normal">
            Our mission is simple to connect trusted sellers with serious buyers
            through a secure, transparent, and easy-to-use online platform.
          </p>
          <p className="mb-[15px] text-[16px] leading-[26px] font-normal">
            Whether you’re looking to purchase your next machine or sell your
            existing equipment, we provide the expertise, tools, and exposure
            you need to make every transaction smooth and successful.
          </p>
          <button className="text-base py-[14px] px-[22px] text-white rounded-lg bg-green">
            Read More <FaArrowRight className="inline-block ms-[10px]" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutUs;
