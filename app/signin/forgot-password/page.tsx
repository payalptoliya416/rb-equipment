"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { JSX } from "react";
import { motion } from "framer-motion";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export default function ForgotPassword(): JSX.Element {
  const cardVariant = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } as const;

  const staggerVariant = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15, delayChildren: 0.25 },
    },
  } as const;

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  return (
    <div className="w-full flex justify-center px-4 my-20">

      {/* Card */}
      <motion.div
        variants={cardVariant}
        initial="hidden"
        animate="show"
        className="max-w-[570px] w-full border border-gray-300 rounded-2xl p-10 shadow-sm bg-white"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[38px] font-extrabold text-center text-gray mb-[15px] leading-[38px]  mont-text"
        >
          Forgot Your <span className="text-orange">Password?</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-text-gray text-center mb-[30px]"
        >
          We can help you reset it
        </motion.p>

        {/* Formik */}
        <Formik
          initialValues={{ email: "" }}
          validationSchema={ForgotPasswordSchema}
          onSubmit={(values) => {
            console.log("Reset request:", values);
            alert("Reset link sent to your email!");
          }}
        >
          {() => (
            <motion.div
              variants={staggerVariant}
              initial="hidden"
              animate="show"
            >
              <Form className="space-y-6">

                {/* Email */}
                <motion.div variants={itemVariant}>
                  <label className="text-[#333333] font-medium mb-3  mont-text">
                    Email Address
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none
                     focus:ring-2 focus:ring-green text-base leading-[16px]"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </motion.div>

                {/* Button */}
                <motion.button
                  variants={itemVariant}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full bg-green text-white py-[14px] rounded-lg text-lg hover:opacity-90 transition  mont-text"
                >
                  Reset it
                </motion.button>

              </Form>
            </motion.div>
          )}
        </Formik>

        {/* Bottom Link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center text-[#333333] mt-[25px] text-lg  mont-text font-semibold"
        >
          Don't have an account?{" "}
          <Link href="/signup" className="text-green">
            Create account
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}
