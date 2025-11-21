'use client';

import { JSX, useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { BiPlus } from "react-icons/bi";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How can I register for bidding?",
    answer:
      "You can easily register by creating an account on our website using your email or phone number. After quick verification, you’ll unlock full access to our live auctions, bidding features, and exclusive equipment listings.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards, bank transfers, and secure online payments.",
  },
  {
    question: "How is shipping handled after purchase?",
    answer:
      "We offer delivery across multiple regions with cost calculated based on location.",
  },
  {
    question: "Can I inspect the equipment before buying or bidding?",
    answer:
      "Yes, inspections are available by appointment at our listed locations.",
  },
  {
    question: "How can I sell my equipment on your platform?",
    answer:
      "Simply create a seller account, upload your equipment details, and list for buyers.",
  },
  {
    question: "What happens if I win an auction?",
    answer:
      "You'll receive a confirmation email with payment and delivery instructions.",
  },
  {
    question: "Do I need to create an account to buy equipment?",
    answer: "Yes, an account is required to ensure secure transactions.",
  },
  {
    question: "How can I track my shipment?",
    answer: "You can track via your dashboard using the tracking number provided.",
  },
  {
    question: "What if my machine arrives damaged?",
    answer:
      "Contact support immediately with photos and order details for assistance.",
  },
  {
    question: "What types of equipment do you sell?",
    answer:
      "We sell construction machinery, loaders, excavators, and more.",
  },
  {
    question: "Is RB Equipment Sales an international company?",
    answer:
      "Yes, we serve customers across multiple countries through our network.",
  },
];

export default function FAQSection(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="container-custom ">
        <div className="w-full max-w-[900px] mx-auto my-20 lg:my-[110px]">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;

        return (
          <div key={i} className="mb-4">
            <button
              onClick={() => toggle(i)}
              className={`
                w-full flex justify-between items-center px-5 py-4 rounded-xl border cursor-pointer
                transition-all text-left font-semibold text-lg
                ${isOpen ? "bg-green text-white border-green" : "bg-white text-gray border-gray-300"}
              `}
            >
              {faq.question}

              {isOpen ? (
                <FaMinus className="text-white" size={18} />
              ) : (
                <BiPlus className="text-gray" size={22} />
              )}
            </button>

            {isOpen && (
              <div className="p-5 text-text-gray bg-white rounded-b-xl text-base leading-[26px]">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
    </div>
  );
}
