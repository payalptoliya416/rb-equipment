"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { JSX } from "react";
import { motion } from "framer-motion";

// Validation Schema
const CreateAccountSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  company: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zip: Yup.string().required("Required"),
  password: Yup.string().min(6, "Min 6 characters").required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
  terms: Yup.boolean().oneOf([true], "You must agree to continue"),
});

export default function CreateAccount(): JSX.Element {
  // Animation Variants
  const cardVariant = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } as const;

  const staggerVariant = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  } as const;

  const itemVariant = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  } as const;

  return (
    <div className="w-full flex justify-center px-4 my-14">
      {/* Card Animation */}
      <motion.div
        variants={cardVariant}
        initial="hidden"
        animate="show"
        className="max-w-[900px] w-full border border-light-gray rounded-[15px] p-[30px] bg-white"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-[38px] font-extrabold text-center text-gray mb-[15px] leading-[38px]  mont-text"
        >
          Create Your <span className="text-orange">Account</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-text-gray text-center mb-[30px]"
        >
          Buy, sell, or bid on high-quality industrial machinery with confidence.
        </motion.p>

        {/* Formik */}
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            company: "",
            city: "",
            state: "",
            zip: "",
            password: "",
            confirmPassword: "",
            terms: false,
            marketing: false,
          }}
          validationSchema={CreateAccountSchema}
          onSubmit={(values) => {
            console.log(values);
            alert("Account Created Successfully!");
          }}
        >
          {() => (
            <motion.div
              variants={staggerVariant}
              initial="hidden"
              animate="show"
            >
              <Form className="space-y-6">

                {/* FIRST GRID */}
                <motion.div
                  variants={itemVariant}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {/* First Name */}
                  <div>
                    <label className="text-[#333333] font-medium text-lg mb-3  mont-text">
                      First Name
                    </label>
                    <Field
                      name="firstName"
                      placeholder="Enter your first name"
                      className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green"
                    />
                    <ErrorMessage
                      name="firstName"
                      className="text-red-500 text-sm mt-1"
                      component="div"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="text-[#333333] font-medium text-lg mb-3  mont-text">
                      Last Name
                    </label>
                    <Field
                      name="lastName"
                      placeholder="Enter your last name"
                      className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green"
                    />
                    <ErrorMessage
                      name="lastName"
                      className="text-red-500 text-sm mt-1"
                      component="div"
                    />
                  </div>
                </motion.div>

                {/* SECOND GRID */}
                <motion.div
                  variants={itemVariant}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {/* Email */}
                  <div>
                    <label className="text-[#333333] font-medium text-lg mb-3  mont-text">
                      Email Address
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green"
                    />
                    <ErrorMessage
                      name="email"
                      className="text-red-500 text-sm mt-1"
                      component="div"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-[#333333] font-medium text-lg mb-3  mont-text">
                      Phone Number
                    </label>
                    <Field
                      name="phone"
                      placeholder="Enter your phone number"
                      className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green"
                    />
                    <ErrorMessage
                      name="phone"
                      className="text-red-500 text-sm mt-1"
                      component="div"
                    />
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div variants={itemVariant}>
                  <label className="text-[#333333] font-medium text-lg mb-3  mont-text">
                    Address
                  </label>
                  <Field
                    name="address"
                    placeholder="Enter your address"
                    className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green"
                  />
                  <ErrorMessage
                    name="address"
                    className="text-red-500 text-sm mt-1"
                    component="div"
                  />
                </motion.div>

                {/* GRID 3 (Company & City) */}
                <motion.div
                  variants={itemVariant}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div>
                    <label className="text-[#333333] font-medium text-lg mb-3  mont-text">
                      Company Name
                    </label>
                    <Field
                      name="company"
                      placeholder="Enter Company Name"
                      className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green"
                    />
                    <ErrorMessage
                      name="company"
                      className="text-red-500 text-sm mt-1"
                      component="div"
                    />
                  </div>

                  <div>
                    <label className="text-[#333333] font-medium text-lg mb-3  mont-text">
                      City
                    </label>
                    <Field
                      name="city"
                      placeholder="Enter City"
                      className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green"
                    />
                    <ErrorMessage
                      name="city"
                      className="text-red-500 text-sm mt-1"
                      component="div"
                    />
                  </div>
                </motion.div>

                {/* GRID 4 (State & Zip) */}
                <motion.div
                  variants={itemVariant}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {/* State */}
                  <div>
                    <label className="text-[#333333] font-medium text-lg mb-3  mont-text">
                      State
                    </label>
                    <Field
                      as="select"
                      name="state"
                      className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-xl outline-none focus:ring-2 focus:ring-green bg-white"
                    >
                      <option value="">Select a state</option>
                      <option value="NY">New York</option>
                      <option value="CA">California</option>
                      <option value="TX">Texas</option>
                    </Field>
                    <ErrorMessage
                      name="state"
                      className="text-red-500 text-sm mt-1"
                      component="div"
                    />
                  </div>

                  {/* Zip */}
                  <div>
                    <label className="text-[#333333] font-medium text-lg mb-3  mont-text">
                      Zip Code
                    </label>
                    <Field
                      name="zip"
                      placeholder="Enter zip code"
                      className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-xl outline-none focus:ring-2 focus:ring-green"
                    />
                    <ErrorMessage
                      name="zip"
                      className="text-red-500 text-sm mt-1"
                      component="div"
                    />
                  </div>
                </motion.div>

                {/* Password Fields */}
                <motion.div
                  variants={itemVariant}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {/* Password */}
                  <div>
                    <label className="text-[#333333] font-medium text-lg mb-3  mont-text">
                      Password
                    </label>
                    <Field
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-xl outline-none focus:ring-2 focus:ring-green"
                    />
                    <ErrorMessage
                      name="password"
                      className="text-red-500 text-sm mt-1"
                      component="div"
                    />
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="text-[#333333] font-medium text-lg mb-3  mont-text">
                      Confirm Password
                    </label>
                    <Field
                      name="confirmPassword"
                      type="password"
                      placeholder="Enter your confirm password"
                      className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-xl outline-none focus:ring-2 focus:ring-green"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      className="text-red-500 text-sm mt-1"
                      component="div"
                    />
                  </div>
                </motion.div>

                {/* Checkboxes */}
                <motion.div variants={itemVariant} className="space-y-[22px]">
                  <label className="flex items-center gap-3 text-[#4D4D4D]">
                    <Field type="checkbox" name="terms" />
                    <span>
                      I agree to the{" "}
                      <span className="text-green font-semibold">
                        Terms of Service
                      </span>{" "}
                      and{" "}
                      <span className="text-green font-semibold">
                        Privacy Policy
                      </span>
                    </span>
                  </label>
                  <ErrorMessage
                    name="terms"
                    className="text-red-500 text-sm"
                    component="div"
                  />

                  <label className="flex items-center gap-3 text-[#4D4D4D]">
                    <Field type="checkbox" name="marketing" />
                    <span>
                      I would like to receive marketing communications about
                      products, services, and promotions.
                    </span>
                  </label>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  variants={itemVariant}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full bg-green text-white py-[18px] rounded-lg font-semibold text-lg leading-[18px] hover:opacity-90 transition  mont-text"
                >
                  Create Account
                </motion.button>
              </Form>
            </motion.div>
          )}
        </Formik>

        {/* Bottom Link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center text-[#333333] mt-[30px]  mont-text font-semibold"
        >
          Already have an account?{" "}
          <Link href="/signin" className="text-green">
            Sign in
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}
