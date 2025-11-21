'use client';

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { JSX } from "react";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export default function ForgotPassword(): JSX.Element {
  return (
    <div className="w-full flex justify-center px-4 my-20">
      <div className="max-w-[570px] w-full border border-gray-300 rounded-2xl p-10 shadow-sm">

        {/* Title */}
        <h2 className="text-[38px] font-extrabold text-center text-gray mb-[15px] leading-[38px]">
          Forgot Your <span className="text-orange">Password?</span>
        </h2>

        <p className="text-text-gray text-center mb-[30px]">
          We can help you reset it
        </p>

        {/* Formik Form */}
        <Formik
          initialValues={{ email: "" }}
          validationSchema={ForgotPasswordSchema}
          onSubmit={(values) => {
            console.log("Reset request:", values);
            alert("Reset link sent to your email!");
          }}
        >
          {() => (
            <Form className="space-y-6">

              {/* Email Input */}
              <div>
                <label className="text-[#333333] font-medium mb-3">Email Address</label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green  text-base leading-[16px]"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Reset Button */}
              <button
                type="submit"
                className="w-full bg-green text-white py-[14px] leading-[14px] rounded-lg text-lg
                hover:opacity-90 transition"
              >
                Reset it
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
