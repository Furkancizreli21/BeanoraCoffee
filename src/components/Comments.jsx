import React from "react";
import { FaStar } from "react-icons/fa";

function Comments() {
  return (
    <div className="py-16 px-6  mx-auto bg-gradient-to-r from-[#A08963] via-[#B9B28A] to-[#5c4926] text-[#4b3a1b]">
      <h1 className="text-4xl font-bold text-center mb-12">
        What our customers have to say...
      </h1>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {/* Card 1 */}
        <div className="flex flex-col justify-between items-start bg-[#D3AF37] rounded-2xl p-6 w-full md:w-1/3 shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/src/assets/avatar1.jpg"
              alt="Customer 1"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <div className="text-lg font-semibold">Jack E.</div>
              <div className="flex text-amber-800 text-sm">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2">
            A Bold Start to My Morning!
          </h2>
          <p className="text-sm">
            Beanora’s espresso is now my daily ritual. Smooth, bold, and
            beautifully balanced.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-between items-start bg-[#F8F3CE] rounded-2xl p-6 w-full md:w-1/3 shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/src/assets/avatar3.jpg"
              alt="Customer 2"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <div className="text-lg font-semibold">Sara B.</div>
              <div className="flex text-amber-800 text-sm">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2">
            Rich Flavor, Lovely Aroma
          </h2>
          <p className="text-sm">
            This coffee reminds me of cozy cafés in Italy. Absolutely love the
            packaging too!
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-between items-start bg-[#D3AF37] rounded-2xl p-6 w-full md:w-1/3 shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/src/assets/avatar2.jpg"
              alt="Customer 3"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <div className="text-lg font-semibold">Luca K.</div>
              <div className="flex text-amber-800 text-sm">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2">
            Perfect Roast Every Time
          </h2>
          <p className="text-sm">
            You can taste the quality in every cup. Highly recommend to any
            coffee enthusiast.
          </p>
        </div>
      </div>
      <hr className="mt-30 mb-30 w-4xl text-center mx-auto border-1" />
      <div className="flex gap-20 mt-10  items-center justify-center">
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="flex items-center justify-center gap-4 w-50 mb-5">
            <hr className="flex-grow border-t" />
            <p className=" text-[#4b3a1b] font-semibold">FAQ</p>
            <hr className="flex-grow border-t " />
          </div>

          <h2 className="text-4xl font-bold">Frequently asked Questions</h2>
          <img src="/src/assets/coffee.png" alt="" />
        </div>
        <div className="flex-1 mb-5">
          <div
            className="px-4 py-5 bg-[#4b3a1b] text-white rounded-xl mb-5 cursor-pointer
    hover:shadow-[0_10px_20px_rgba(75,58,27,0.7)] transition-shadow duration-500 ease-in-out"
          >
            <a href="">What is your delivery timeline?</a>
          </div>
          <div
            className="px-4 py-5 bg-[#4b3a1b] text-white rounded-xl mb-5 cursor-pointer
    hover:shadow-[0_10px_20px_rgba(75,58,27,0.7)] transition-shadow duration-500 ease-in-out"
          >
            <a href="">Do you offer international shipping?</a>
          </div>
          <div
            className="px-4 py-5 bg-[#4b3a1b] text-white rounded-xl mb-5 cursor-pointer
    hover:shadow-[0_10px_20px_rgba(75,58,27,0.7)] transition-shadow duration-500 ease-in-out"
          >
            <a href="">Can I return or exchange my order?</a>
          </div>
          <div
            className="px-4 py-5 bg-[#4b3a1b] text-white rounded-xl mb-5 cursor-pointer
    hover:shadow-[0_10px_20px_rgba(75,58,27,0.7)] transition-shadow duration-500 ease-in-out"
          >
            <a href="">How do you ensure coffee freshness?</a>
          </div>
          <div
            className="px-4 py-5 bg-[#4b3a1b] text-white rounded-xl mb-5 cursor-pointer
    hover:shadow-[0_10px_20px_rgba(75,58,27,0.7)] transition-shadow duration-500 ease-in-out"
          >
            <a href="">What brewing methods do you recommend?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
