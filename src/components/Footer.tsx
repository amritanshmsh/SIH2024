import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-700 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-lg mb-2">Contact Us</h3>
          <p className="flex items-center">
            <span className="mr-2">📞</span> Toll-free: 1947
          </p>
          <p className="flex items-center">
            <span className="mr-2">📧</span> help@uidai.gov.in
          </p>
          <h4 className="font-bold text-lg mt-4">Follow Us</h4>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">Twitter</a>
            <a href="#" className="hover:text-gray-300">YouTube</a>
            <a href="#" className="hover:text-gray-300">Instagram</a>
          </div>
        </div>

        {/* UIDAI Head Office */}
        <div>
          <h3 className="font-bold text-lg mb-2">UIDAI Head Office</h3>
          <p>
            Unique Identification Authority of India
            <br />
            Government of India (GoI)
          </p>
          <p>
            Bangla Sahib Road, Behind Kali Mandir, Gole Market,
            <br />
            New Delhi - 110001
          </p>
          <h4 className="font-bold text-lg mt-4">Regional Offices</h4>
          <select className="text-black mt-2 p-2 rounded">
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
            <option>Kolkata</option>
          </select>
        </div>

        {/* Website Policy */}
        <div>
          <h3 className="font-bold text-lg mb-2">Website Policy</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-300">Hyperlinking Policy</a></li>
            <li><a href="#" className="hover:text-gray-300">Copyright Policy</a></li>
            <li><a href="#" className="hover:text-gray-300">Disclaimer</a></li>
            <li><a href="#" className="hover:text-gray-300">Help</a></li>
            <li><a href="#" className="hover:text-gray-300">Feedback</a></li>
            <li><a href="#" className="hover:text-gray-300">Sitemap</a></li>
          </ul>
        </div>

        {/* Government of India */}
        <div>
          <h3 className="font-bold text-lg mb-2">Government of India</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">My Gov</a></li>
            <li><a href="#" className="hover:text-gray-300">National Portal of India</a></li>
            <li><a href="#" className="hover:text-gray-300">Digital India</a></li>
            <li><a href="#" className="hover:text-gray-300">GST.gov.in</a></li>
            <li><a href="#" className="hover:text-gray-300">DBT Bharat</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;