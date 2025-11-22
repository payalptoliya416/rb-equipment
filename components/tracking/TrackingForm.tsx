"use client";

import { JSX } from "react";
import { motion } from "framer-motion";

export default function TrackingForm(): JSX.Element {
  const formContainer = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  } as const;

  const staggerGroup = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  } as const;

  const inputItem = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  } as const;

  return (
    <div className="w-full flex justify-center px-4 my-20 xl:mb-16 xl:mt-[141px]">
      <motion.div
        variants={formContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-[700px] w-full border border-light-gray rounded-2xl p-8 shadow-sm"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-[38px] font-extrabold text-center text-gray-900 mb-3"
        >
          Enter Your <span className="text-orange">Tracking Number</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mb-10 leading-relaxed"
        >
          Please enter your Order ID or Tracking Number provided in your
          confirmation email.
        </motion.p>

        {/* FORM FIELDS WITH STAGGER */}
        <motion.form
          variants={staggerGroup}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          {/* Tracking Number */}
          <motion.div variants={inputItem}>
            <label className="text-gray-800 font-medium">Tracking Number</label>
            <input
              type="text"
              placeholder="Tracking Number"
              className="
                w-full mt-2 px-5 py-[18px] border border-light-gray rounded-xl
                outline-none focus:ring-2 focus:ring-green
              "
            />
          </motion.div>

          {/* Email + Phone Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={inputItem}>
              <label className="text-gray-800 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="
                  w-full mt-2 px-5 py-[18px] border border-light-gray rounded-xl
                  outline-none focus:ring-2 focus:ring-green
                "
              />
            </motion.div>

            <motion.div variants={inputItem}>
              <label className="text-gray-800 font-medium">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="
                  w-full mt-2 px-5 py-[18px] border border-light-gray rounded-xl
                  outline-none focus:ring-2 focus:ring-green
                "
              />
            </motion.div>
          </div>

          {/* Submit Button */}
          <motion.div
            variants={inputItem}
            className="flex justify-center pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
              type="submit"
              className="
                bg-green text-white px-10 py-3 rounded-lg 
                font-semibold text-lg hover:opacity-90 transition
              "
            >
              Track Now
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
}
