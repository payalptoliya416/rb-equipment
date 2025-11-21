"use client";

import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";

interface Item {
  question: string;
  answer: string;
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const data: Item[] = [
    {
      question: "How can I register for bidding?",
      answer:
        "You can easily register by creating an account on our website using your email or phone number. After quick verification, you’ll unlock full access to our live auctions, bidding features, and exclusive equipment listings.",
    },
    { question: "What payment methods do you accept?", answer: "" },
    { question: "How is shipping handled after purchase?", answer: "" },
    {
      question: "Can I inspect the equipment before buying or bidding?",
      answer: "",
    },
    { question: "How can I sell my equipment on your platform?", answer: "" },
    { question: "What happens if I win an auction?", answer: "" },
  ];
  return (
    <div className="container-custom mx-auto ">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-[38px] md:leading-[38px] mb-[15px] font-extrabold text-gray">
          Frequently Asked <span className="text-orange">Questions</span>{" "}
        </h2>
      </div>
      <div className="grid grid-cols-12 w-full justify-center items-center">
        <div className="space-y-4 col-span-10 col-start-2">
          {data.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={i} className={` overflow-hidden transition-all`}>
                {/* Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full flex items-center justify-between rounded-xl border border-light-gray px-[22px] py-5 text-left font-medium text-[16px] gap-2 md:gap-0
                transition-all
                ${isOpen ? "bg-green text-white" : "bg-white text-gray"}
              `}
                >
                  {item.question}

                  {isOpen ? (
                    <div>
                      <FaMinus size={20} className="text-white" />
                    </div>
                  ) : (
                    <div>
                      {" "}
                      <BiPlus size={20} className="text-gray0" />
                    </div>
                  )}
                </button>

                {/* Content */}
                {isOpen && item.answer !== "" && (
                  <div className="px-6 py-4 bg-white text-text-hray text-[15px]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
