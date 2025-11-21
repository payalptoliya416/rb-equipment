'use client';

import { JSX } from "react";

export default function ContactForm(): JSX.Element {
  return (
    <div className="w-full">

      {/* MAP IFRAME SECTION */}
      <div className="w-full h-[407px] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157185.6322221!2d-103.977764847624!3d37.275679805810795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54b04f72c2b8c001%3A0x4c90d5d1d1e4aef!2sUnited%20States!5e0!3m2!1sen!2sus!4v1708954054231!5m2!1sen!2sus"
          width="100%"
          height="100%"
          loading="lazy"
          style={{ border: 0 }}
        ></iframe>
      </div>
      <div className="mx-5">
      <div className="max-w-[900px] w-full mx-auto -mt-[150px] bg-white p-7 md:p-10 relative z-50 border border-light-gray rounded-[20px]">
        <h2 className="text-3xl md:text-[38px] font-extrabold text-center text-gray mb-[15px]">
          Send Us a <span className="text-orange">Message</span>
        </h2>
        <p className="text-text-gray text-center mb-10 text-base">
          Fill out the form below and our team will get back to you shortly.
        </p>
        <form className="space-y-[30px]">

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-[#333333] font-medium text-lg mb-3">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green  text-base leading-[16px]"
              />
            </div>

            <div>
              <label className="text-[#333333] font-medium text-lg mb-3">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green  text-base leading-[16px]"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-[#333333] font-medium text-lg mb-3">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green  text-base leading-[16px]"
              />
            </div>

            <div>
              <label className="text-[#333333] font-medium text-lg mb-3">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green  text-base leading-[16px]"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-[#333333] font-medium text-lg mb-3">Message</label>
            <textarea
              placeholder="Write a message"
              rows={5}
              className="w-full mt-2 px-5 py-[18px] border border-light-gray rounded-[10px] outline-none focus:ring-2 focus:ring-green resize-none  text-base leading-[16px]"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green text-white px-[22px] py-[14px] rounded-lg font-semibold text-base leading-[16px] hover:opacity-90 transition"
            >
              Send Message
            </button>
          </div>

        </form>
      </div>
      </div>
    </div>
  );
}
