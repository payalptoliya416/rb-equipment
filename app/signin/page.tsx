"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import { motion } from "framer-motion";

// Validation Schema
const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too short").required("Required"),
});

export default function SignInForm(): JSX.Element {
  // Variants
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
    <div className="w-full flex justify-center px-4 my-16">
      {/* Card Animation Wrapper */}
      <motion.div
        variants={cardVariant}
        initial="hidden"
        animate="show"
        className="max-w-[593px] w-full border border-light-gray rounded-2xl p-[30px] bg-white"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-[38px] font-bold text-center text-gray mb-[15px] mont-text"
        >
          Sign In your <span className="text-orange">account</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-text-gray text-center mb-[30px] text-base"
        >
          Enter your email and password to access your account.
        </motion.p>

        {/* Formik */}
        <Formik
          initialValues={{
            email: "",
            password: "",
            remember: false,
          }}
          validationSchema={SignInSchema}
          onSubmit={(values) => {
            console.log("Form Submitted", values);
            alert("Sign-In Successful!");
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
                  <label className="text-[#333333] font-medium mb-3 block text-lg leading-[18px]  mont-text">
                    Email Address
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green text-base"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </motion.div>

                {/* Password */}
                <motion.div variants={itemVariant}>
                  <label className="text-[#333333] font-medium mb-3 block text-lg leading-[18px]  mont-text">
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green text-base"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </motion.div>

                {/* Remember / Forgot */}
                <motion.div
                  variants={itemVariant}
                  className="flex justify-between items-center"
                >
                 <label className="flex items-center gap-2 cursor-pointer select-none text-[#4D4D4D]">
                <input
                  type="checkbox"
                  className="
                    peer appearance-none w-5 h-5 border border-[#CFCFCF] rounded-sm 
                    checked:bg-green checked:border-green transition
                    flex justify-center items-center
                  "
                />
                <span>Remember me</span>

                {/* Custom Tick */}
                <svg
                  className="absolute w-4 h-4 pointer-events-none fill-none stroke-white stroke-[3px] 
                            hidden peer-checked:block ml-[2px]"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </label>

                  <Link href="/signin/forgot-password" className="text-[#4D4D4D]">
                    Forgot password?
                  </Link>
                </motion.div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-green text-white py-[14px] rounded-lg font-semibold text-lg hover:opacity-90 transition mont-text cursor-pointer"
                >
                  Sign In →
                </button>

                {/* Divider */}
                <motion.div variants={itemVariant} className="flex items-center gap-4">
                  <div className="flex-1 h-[1px] bg-gray-300"></div>
                  <span className="text-gray-500">OR</span>
                  <div className="flex-1 h-[1px] bg-gray-300"></div>
                </motion.div>

                {/* Google Button */}
                <button
                  className="w-full flex items-center justify-center gap-3 border border-light-gray rounded-[10px] py-[18px] hover:bg-gray-50 transition text-[#333333] text-lg cursor-pointer  mont-text font-semibold"
                  type="button"
                >
                  <Image
                    src="/assets/googleicon.png"
                    alt="Google"
                    width={24}
                    height={24}
                  />
                  Continue with Google
                </button>
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
