'use client';

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { JSX } from "react";

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
  return (
    <div className="w-full flex justify-center px-4 my-14">
      <div className="max-w-[900px] w-full border border-light-gray rounded-[15px] p-[30px]">

        {/* TITLE */}
        <h2 className="text-3xl md:text-[38px] font-extrabold text-center text-gray mb-[15px] leading-[38px]">
          Create Your <span className="text-orange">Account</span>
        </h2>

        <p className="text-text-gray text-center mb-[30px]">
          Buy, sell, or bid on high-quality industrial machinery with confidence.
        </p>

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
            <Form className="space-y-6">

              {/* GRID FIELDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* First Name */}
                <div>
                  <label className="text-[#333333] font-medium text-lg leading-[18px] mb-3">First Name</label>
                  <Field
                    name="firstName"
                    placeholder="Enter your first name"
                      className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green  text-base leading-[16px]"
                  />
                  <ErrorMessage name="firstName" className="text-red-500 text-sm" component="div" />
                </div>

                {/* Last Name */}
                <div>
                  <label className="text-[#333333] font-medium text-lg leading-[18px] mb-3">Last Name</label>
                  <Field
                    name="lastName"
                    placeholder="Enter your last name"
                      className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green  text-base leading-[16px]"
                  />
                  <ErrorMessage name="lastName" className="text-red-500 text-sm" component="div" />
                </div>

                {/* Email */}
                <div>
                  <label className="text-[#333333] font-medium text-lg leading-[18px] mb-3">Email Address</label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                      className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green  text-base leading-[16px]"
                  />
                  <ErrorMessage name="email" className="text-red-500 text-sm" component="div" />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-[#333333] font-medium text-lg leading-[18px] mb-3">Phone Number</label>
                  <Field
                    name="phone"
                    placeholder="Enter your phone number"
                      className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green  text-base leading-[16px]"
                  />
                  <ErrorMessage name="phone" className="text-red-500 text-sm" component="div" />
                </div>

              </div>

              {/* Address */}
              <div>
                <label className="text-[#333333] font-medium text-lg leading-[18px] mb-3">Address</label>
                <Field
                  name="address"
                  placeholder="Enter your address"
                  className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none
                  focus:ring-2 focus:ring-green"
                />
                <ErrorMessage name="address" className="text-red-500 text-sm" component="div" />
              </div>

              {/* Company + City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[#333333] font-medium text-lg leading-[18px] mb-3">Company Name</label>
                  <Field
                    name="company"
                    placeholder="Enter Company Name"
                      className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green  text-base leading-[16px]"
                  />
                  <ErrorMessage name="company" className="text-red-500 text-sm" component="div" />
                </div>

                <div>
                  <label className="text-[#333333] font-medium text-lg leading-[18px] mb-3">City</label>
                  <Field
                    name="city"
                    placeholder="Enter City"
                      className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green  text-base leading-[16px]"
                  />
                  <ErrorMessage name="city" className="text-red-500 text-sm" component="div" />
                </div>
              </div>

              {/* State + Zip */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* State Select */}
                <div>
                  <label className="text-[#333333] font-medium text-lg leading-[18px] mb-3">State</label>
                  <Field
                    as="select"
                    name="state"
                    className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-xl outline-none
                    focus:ring-2 focus:ring-green bg-white"
                  >
                    <option value="">Select a state</option>
                    <option value="NY">New York</option>
                    <option value="CA">California</option>
                    <option value="TX">Texas</option>
                  </Field>
                  <ErrorMessage name="state" className="text-red-500 text-sm" component="div" />
                </div>

                {/* Zip Code */}
                <div>
                  <label className="text-[#333333] font-medium text-lg leading-[18px] mb-3">Zip Code</label>
                  <Field
                    name="zip"
                    placeholder="Enter zip code"
                    className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-xl outline-none
                    focus:ring-2 focus:ring-green"
                  />
                  <ErrorMessage name="zip" className="text-red-500 text-sm" component="div" />
                </div>

              </div>

              {/* Password Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[#333333] font-medium text-lg leading-[18px] mb-3">Password</label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-xl outline-none
                    focus:ring-2 focus:ring-green"
                  />
                  <ErrorMessage name="password" className="text-red-500 text-sm" component="div" />
                </div>

                <div>
                  <label className="text-[#333333] font-medium text-lg leading-[18px] mb-3">Confirm Password</label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    placeholder="Enter your confirm password"
                    className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-xl outline-none
                    focus:ring-2 focus:ring-green"
                  />
                  <ErrorMessage name="confirmPassword" className="text-red-500 text-sm" component="div" />
                </div>
              </div>

              {/* CHECKBOXES */}
              <div className="space-y-[22px]">
                <label className="flex items-center gap-3 text-[#4D4D4D]">
                  <Field type="checkbox" name="terms" />
                  <span>
                    I agree to the{" "}
                    <span className="text-green font-semibold">Terms of Service</span>{" "}
                    and{" "}
                    <span className="text-green font-semibold">Privacy Policy</span>
                  </span>
                </label>
                <ErrorMessage name="terms" className="text-red-500 text-sm" component="div" />

                <label className="flex items-center gap-3 text-[#4D4D4D]">
                  <Field type="checkbox" name="marketing" />
                  <span>
                    I would like to receive marketing communications about products, services, and promotions
                  </span>
                </label>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full bg-green text-white py-[18px] rounded-lg font-semibold text-lg leading-[18px] hover:opacity-90 transition"
              >
                Create Account
              </button>

            </Form>
          )}
        </Formik>

        {/* Bottom Link */}
        <p className="text-center text-gray-700 mt-[30px]">
          Already have an account?{" "}
          <Link href="/signin" className="text-green font-semibold hover:underline">
            Sign in
          </Link>
        </p>

      </div>
    </div>
  );
}
