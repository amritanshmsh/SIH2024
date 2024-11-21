import React from "react";

const AadhaarNumbers: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold text-blue-900 flex items-center">
          <span className="mr-2">📈</span> Aadhaar in Numbers
        </h2>
      </div>

      {/* Sub-links */}
      <div className="flex space-x-4 text-gray-600 mb-4">
        <a href="#" className="hover:underline">
          Aadhaar Generated
        </a>
        <span>|</span>
        <a href="#" className="hover:underline">
          Authentication Done
        </a>
      </div>

      {/* Report Details */}
      <div className="text-sm">
        <a
          href="#"
          className="text-blue-600 font-bold hover:underline mr-2"
        >
          Aadhaar Saturation Report
        </a>
        <span>Type: pdf</span>
        <span> | Size: 0.5 MB</span>
        <span> | </span>
        <a
          href="#"
          className="text-blue-600 font-bold hover:underline"
        >
          View On Dashboard
        </a>
      </div>
    </div>
  );
};

export default AadhaarNumbers;