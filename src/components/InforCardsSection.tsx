import React from "react";

const InfoCardsSection: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Top Banner */}
      <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-4 rounded-md">
        <p>
          <strong>Observance of Vigilance Awareness Week 2024</strong> From
          28.10.2024 to 03.11.2024 on theme "Culture of Integrity for Nation's
          Prosperity"
        </p>
        <a
          href="#"
          className="text-blue-600 underline font-bold hover:text-blue-800"
        >
          Integrity Pledge
        </a>
      </div>

      {/* Cards */}
      <div className="space-y-6">
        {/* Card 1 */}
        <div className="border rounded-lg shadow-md p-4">
          <div className="border-t-4 border-blue-800 rounded-t-lg -mt-4"></div>
          <div className="flex items-center mb-3">
            <div className="text-blue-800 text-2xl font-bold flex-shrink-0">
              <span className="mr-2">🛠️</span>
              Update Aadhaar
            </div>
            <span className="text-blue-800 ml-auto text-xl">›</span>
          </div>
          <p className="text-green-600 font-semibold">
            Keep your Aadhaar details up-to-date.
          </p>
          <p className="text-gray-700 text-sm">
            It is essential that your Aadhaar Data is correct and remains
            updated always.
          </p>
          <div className="mt-3 text-sm text-blue-600 space-y-2">
            <a href="#" className="hover:underline">
              Check Aadhaar Update Status
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Update Demographics Data & Check Status
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Enrolment & Update Forms
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Aadhaar Enrolment & Update Charges
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Aadhaar Update History
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg shadow-md p-4">
          <div className="border-t-4 border-blue-800 rounded-t-lg -mt-4"></div>
          <div className="flex items-center mb-3">
            <div className="text-blue-800 text-2xl font-bold flex-shrink-0">
              <span className="mr-2">📄</span>
              Get Aadhaar
            </div>
            <span className="text-blue-800 ml-auto text-xl">›</span>
          </div>
          <p className="text-green-600 font-semibold">
            Aadhaar is for every Resident of India.
          </p>
          <p className="text-gray-700 text-sm">
            From a new born to a senior citizen, everyone can enrol for
            Aadhaar.
          </p>
          <div className="mt-3 text-sm text-blue-600 space-y-2">
            <a href="#" className="hover:underline">
              Book an Appointment
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Check Aadhaar Status
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Download Aadhaar
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Order Aadhaar PVC Card
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Check Aadhaar PVC Card Status
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Aadhaar Enrolment & Update Charges
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Enrolment & Update Forms
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border rounded-lg shadow-md p-4">
          <div className="border-t-4 border-blue-800 rounded-t-lg -mt-4"></div>
          <div className="flex items-center mb-3">
            <div className="text-blue-800 text-2xl font-bold flex-shrink-0">
              <span className="mr-2">📋</span>
              Aadhaar Services
            </div>
            <span className="text-blue-800 ml-auto text-xl">›</span>
          </div>
          <p className="text-green-600 font-semibold">
            An array of services for Aadhaar holders
          </p>
          <p className="text-gray-700 text-sm">
            Aadhaar Registered Mobile number is essential to access the
            following services.
          </p>
          <div className="mt-3 text-sm text-blue-600 space-y-2">
            <a href="#" className="hover:underline">
              Verify an Aadhaar Number
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Verify Email/Mobile Number
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Virtual ID (VID) Generator
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Aadhaar Paperless Offline e-kyc (Beta)
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Lock/Unlock Biometrics
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCardsSection;