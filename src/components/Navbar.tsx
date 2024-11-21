import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-500 text-white">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li className="group relative">
            <a href="#" className="hover:underline">My Aadhaar</a>
            <ul className="absolute left-0 hidden group-hover:block bg-white text-black mt-1 shadow-lg py-2">
              <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Option 1</a></li>
              <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Option 2</a></li>
            </ul>
          </li>
          <li className="group relative">
            <a href="#" className="hover:underline">About UIDAI</a>
            <ul className="absolute left-0 hidden group-hover:block bg-white text-black mt-1 shadow-lg py-2">
              <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Option 1</a></li>
              <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Option 2</a></li>
            </ul>
          </li>
          <li className="group relative">
            <a href="#" className="hover:underline">Ecosystem</a>
            <ul className="absolute left-0 hidden group-hover:block bg-white text-black mt-1 shadow-lg py-2">
              <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Option 1</a></li>
              <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Option 2</a></li>
            </ul>
          </li>
          <li className="group relative">
            <a href="#" className="hover:underline">Media & Resources</a>
            <ul className="absolute left-0 hidden group-hover:block bg-white text-black mt-1 shadow-lg py-2">
              <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Option 1</a></li>
              <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Option 2</a></li>
            </ul>
          </li>
          <li className="group relative">
            <a href="#" className="hover:underline">Contact & Support</a>
            <ul className="absolute left-0 hidden group-hover:block bg-white text-black mt-1 shadow-lg py-2">
              <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Option 1</a></li>
              <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Option 2</a></li>
            </ul>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-1 rounded-l-md focus:outline-none text-black"
          />
          <button className="bg-blue-800 hover:bg-blue-900 text-white px-3 rounded-r-md">
            Go
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;