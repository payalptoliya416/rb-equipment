"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function WorkWithUs() {
  const items = [
    {
      title: "Transparent Transactions",
      desc: "Clear listings and honest communication.",
    },
    {
      title: "Competitive Pricing",
      desc: "Fair market rates through direct sales or auctions.",
    },
    {
      title: "Global Network",
      desc: "Buyers and sellers from multiple regions.",
    },
    {
      title: "End-to-End Support",
      desc: "From inspection to delivery, we handle everything.",
    },
    {
      title: "Proven Experience",
      desc: "Years of industry knowledge and satisfied clients.",
    },
  ];

  const listContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };
  
const listItem = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;


  return (
    <section className="container-custom mx-auto lg:mb-[110px] my-20 lg:mt-[142px]">
      <div className="grid grid-cols-12 lg:gap-[30px] items-center mt-10">

        {/* LEFT IMAGE */}
        <motion.div
          className="col-span-12 lg:col-span-6 order-2 lg:order-1"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/assets/workwithus.png"
            alt="about"
            width={575}
            height={445}
            style={{ width: "100%" }}
          />
        </motion.div>

        {/* RIGHT TEXT + LIST */}
        <motion.div
          className="col-span-12 lg:col-span-6 order-1 lg:order-2 mb-5 lg:mb-0"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <motion.h2
            className="text-[38px] font-extrabold text-gray mb-[20px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Why <span className="text-orange">Work With</span> Us
          </motion.h2>

          {/* Staggered List */}
          <motion.div
            className="space-y-[15px]"
            variants={listContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {items.map((item, i) => (
              <motion.div
                key={i}
                variants={listItem}
                className="bg-[linear-gradient(90deg,#00796B14,#00796B00)] p-5 rounded-xl flex gap-3 items-start"
              >
                <div>
                  <Image
                    src="/assets/check.svg"
                    alt="check"
                    width={24}
                    height={21}
                  />
                </div>

                <div>
                  <h3 className="text-lg leading-[20px] font-semibold text-gray mb-[14px]">
                    {item.title}
                  </h3>

                  <p className="text-text-gray text-base leading-[16px]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default WorkWithUs;
