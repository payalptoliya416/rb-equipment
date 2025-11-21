'use client';

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

// Validation Schema
const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too short").required("Required"),
});

export default function SignInForm(): JSX.Element {
  return (
    <div className="w-full flex justify-center px-4 my-16">
      <div className="max-w-[593px] w-full border border-light-gray rounded-2xl p-[30px]">

        {/* Title */}
        <h2 className="text-3xl md:text-[38px] font-extrabold text-center text-gray mb-[15px]">
          Sign In your <span className="text-orange">account</span>
        </h2>

        <p className="text-text-gray text-center mb-[30px] text-base">
          Enter your email and password to access your account.
        </p>

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
          {({ values }) => (
            <Form className="space-y-6">

              {/* Email */}
              <div>
                <label className="text-[#333333] font-medium mb-3 block text-lg leading-[18px]">Email Address</label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green text-base leading-[16px]"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-[#333333] font-medium mb-3 block text-lg leading-[18px]">Password</label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green  text-base leading-[16px]"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Remember / Forgot */}
              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2 text-[#4D4D4D]">
                  <Field type="checkbox" name="remember" />
                  <span>Remember me</span>
                </label>

                <Link href="/signin/forgot-password" className="text-[#4D4D4D]">
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green text-white py-[14px] rounded-lg font-semibold text-lg 
                hover:opacity-90 transition flex justify-center items-center gap-2"
              >
                Sign In →
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-[1px] bg-gray-300"></div>
                <span className="text-gray-500">OR</span>
                <div className="flex-1 h-[1px] bg-gray-300"></div>
              </div>

              {/* Google Sign-in */}
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 border border-light-gray
                rounded-[10px] py-[18px] hover:bg-gray-50 transition text-[#333333] text-lg leading-[18px] cursor-pointer"
              >
                <Image src="/assets/googleicon.png" alt="Google" width={24} height={24} />
                Continue with Google
              </button>
            </Form>
          )}
        </Formik>

        {/* Bottom Link */}
        <p className="text-center text-[#333333] mt-[25px] text-lg">
          Don't have an account?{" "}
          <Link href="/signup" className="text-green ">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}
