import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

function Contact() {
  return (
    <div className="relative w-full min-h-[600px] py-16">
      {/* Siyah transparan katman */}
      <div className="absolute inset-0   bg-gradient-to-r from-[#A16D28] via-[#C78A3B] to-[#5c4926] z-0" />

      {/* İçerik */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between gap-12 text-white">
        {/* Sol içerik */}
        <div className="flex flex-col justify-center max-w-xl space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            Stay Coffeinated with Beanora
          </h1>
          <p className="text-gray-200 text-base">
            Discover the essence of premium coffee, crafted to awaken your
            senses and fuel your day.
          </p>

          {/* Input + Button */}
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full py-3 px-5 pr-[120px] rounded-full text-white placeholder-white focus:outline-none border border-white"
            />
            <button className="absolute top-1/2 right-2 -translate-y-1/2 px-5 py-2 bg-[#A08963] hover:bg-[#8a744f] text-white text-sm font-semibold rounded-full transition duration-300 cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>

        {/* Sağ içerik */}
        <div className="flex flex-col items-center lg:items-end text-center lg:text-right w-full">
          <img
            src="/src/assets/contactlogo.png"
            alt="logo"
            className="w-24 mb-3"
          />
          <p className="italic text-sm text-gray-300 mb-6">
            Brewed to Awaken. Crafted to Inspire.
          </p>

          {/* Sosyal medya */}
          <div className="flex gap-4 text-2xl mb-6 justify-center lg:justify-end">
            <FaInstagram className="hover:text-[#A08963] cursor-pointer" />
            <FaFacebook className="hover:text-[#A08963] cursor-pointer" />
            <FaTwitter className="hover:text-[#A08963] cursor-pointer" />
          </div>

          {/* Menü grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm text-gray-300 w-full max-w-2xl">
            <div>
              <h3 className="font-semibold text-white mb-2">Navigation</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Our Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">Legal</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">Contact</h3>
              <ul className="space-y-1">
                <li>
                  <a href="tel:+905911331329" className="hover:underline">
                    Phone: +90 591 133 1329
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:beanoracoffee@gmail.com"
                    className="hover:underline"
                  >
                    Email: beanoracoffee@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
