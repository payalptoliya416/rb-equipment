'use client';

import { JSX } from "react";

export default function TrackingForm(): JSX.Element {
  return (
    <div className="w-full flex justify-center px-4 my-20 xl:mb-16 xl:mt-[141px]">
      <div className="max-w-[700px] w-full border border-light-gray rounded-2xl p-8 shadow-sm">

        {/* Title */}
        <h2 className="text-3xl md:text-[38px] font-extrabold text-center text-gray-900 mb-3">
          Enter Your <span className="text-orange">Tracking Number</span>
        </h2>

        <p className="text-center text-gray-500 mb-10 leading-relaxed">
          Please enter your Order ID or Tracking Number provided in your
          confirmation email.
        </p>

        <form className="space-y-6">

          {/* Tracking Number */}
          <div>
            <label className="text-gray-800 font-medium">Tracking Number</label>
            <input
              type="text"
              placeholder="Tracking Number"
              className="
                w-full mt-2 px-5 py-[18px] border border-light-gray rounded-xl
                outline-none focus:ring-2 focus:ring-green
              "
            />
          </div>

          {/* Email + Phone Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-800 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="
                  w-full mt-2 px-5 py-[18px] border border-light-gray rounded-xl
                  outline-none focus:ring-2 focus:ring-green
                "
              />
            </div>

            <div>
              <label className="text-gray-800 font-medium">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="
                  w-full mt-2 px-5 py-[18px] border border-light-gray rounded-xl
                  outline-none focus:ring-2 focus:ring-green
                "
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="
                bg-green text-white px-10 py-3 rounded-lg 
                font-semibold text-lg hover:opacity-90 transition
              "
            >
              Track Now
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
