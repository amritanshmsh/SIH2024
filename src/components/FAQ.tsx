import React, { useState } from "react";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      title: "Use Aadhaar Freely",
      content: [
        "Recently, UIDAI has issued an advisory...",
        "If Aadhaar has to be freely used for authentication...",
        "Why am I asked to verify Bank Account...",
        "Does linking my bank account, PAN...",
      ],
    },
    {
      title: "E-Aadhaar",
      content: [
        "How to validate digital signatures in e-Aadhaar?",
        "What supporting software is needed for e-Aadhaar?",
        "What is the Password of e-Aadhaar?",
        "What is Masked Aadhaar?",
      ],
    },
    {
      title: "mAadhaar FAQs",
      content: [
        "Is there any process to update the app?",
        "Is it compulsory to have a registered mobile number?",
        "How Aadhaar number holder can lock biometrics?",
        "Where can mAadhaar be used?",
      ],
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="w-full sm:w-1/3 bg-white shadow-md rounded-lg p-4">
      <h2 className="text-blue-900 text-xl font-bold mb-4 flex items-center">
        <span className="mr-2">❓</span> Frequently Asked Questions
      </h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-gray-800 font-bold hover:text-blue-600 focus:outline-none"
            >
              {faq.title}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <ul className="mt-2 pl-4 text-gray-600">
                {faq.content.map((item, i) => (
                  <li key={i} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;