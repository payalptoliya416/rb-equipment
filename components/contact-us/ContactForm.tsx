"use client";

import { JSX } from "react";
import { motion } from "framer-motion";

export default function ContactForm(): JSX.Element {
  const containerVariant = {
    hidden: { opacity: 0, y: 60 },
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

  const inputVariant = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  } as const;

  return (
    <div className="w-full">

      {/* MAP IFRAME SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full h-[407px] overflow-hidden"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157185.6322221!2d-103.977764847624!3d37.275679805810795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54b04f72c2b8c001%3A0x4c90d5d1d1e4aef!2sUnited%20States!5e0!3m2!1sen!2sus!4v1708954054231!5m2!1sen!2sus"
          width="100%"
          height="100%"
          loading="lazy"
          style={{ border: 0 }}
        ></iframe>
      </motion.div>

      {/* FORM SECTION */}
      <div className="mx-5">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-[900px] w-full mx-auto -mt-[150px] bg-white p-7 md:p-10 relative z-50 border border-light-gray rounded-[20px]"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-[38px] font-extrabold text-center text-gray mb-[15px] mont-text"
          >
            Send Us a <span className="text-orange">Message</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-text-gray text-center mb-10 text-base"
          >
            Fill out the form below and our team will get back to you shortly.
          </motion.p>

          {/* FORM WITH STAGGERED INPUTS */}
          <motion.form
            variants={staggerGroup}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-[30px]"
          >
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={inputVariant}>
                <label className="text-[#333333] font-medium text-lg mb-3 mont-text">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green text-base leading-[16px]"
                />
              </motion.div>

              <motion.div variants={inputVariant}>
                <label className="text-[#333333] font-medium text-lg mb-3 mont-text">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green text-base leading-[16px]"
                />
              </motion.div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={inputVariant}>
                <label className="text-[#333333] font-medium text-lg mb-3 mont-text">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green text-base leading-[16px]"
                />
              </motion.div>

              <motion.div variants={inputVariant}>
                <label className="text-[#333333] font-medium text-lg mb-3 mont-text">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green text-base leading-[16px]"
                />
              </motion.div>
            </div>

            {/* Message */}
            <motion.div variants={inputVariant}>
              <label className="text-[#333333] font-medium text-lg mb-3 mont-text">Message</label>
              <textarea
                placeholder="Write a message"
                rows={5}
                className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green resize-none text-base leading-[16px]"
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              variants={inputVariant}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                type="submit"
                className="bg-green text-white px-[22px] py-[14px] rounded-lg font-semibold text-base leading-[16px] hover:opacity-90 transition  mont-text"
              >
                Send Message
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}
