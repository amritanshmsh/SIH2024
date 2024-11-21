import React from "react";

const Navbar2: React.FC = () => {
  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <img
            src="src/assets/uidai_english_logo-2.svg"
            alt="Left Logo"
            className="w-48 h-auto" // Larger left logo
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          <img
            src="src/assets/aadhaar_english_logo-2.svg"
            alt="Right Logo"
            className="w-24 h-auto" // Smaller right logo
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;