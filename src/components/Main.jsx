import React from "react";
import { GiAchievement } from "react-icons/gi";

function Main() {
  return (
    <div className="pt-16 relative w-full min-h-screen ">
      <div className="absolute top-1/2 w-1/2 left-50 transform -translate-y-1/2 text-white">
        <p className="flex items-center gap-3 mb-4 text-sm font-semibold">
          <GiAchievement size={24} className="text-[#C78A3B]" />
          <span>100% Ethically Sourced - Small-Batch Roasted</span>
        </p>

        <h1 className="text-5xl italic text-[#C78A3B] mb-2 font-semibold">
          Awake Your Senses.
        </h1>

        <h2 className="text-4xl font-semibold mb-6">Crafted with Passion.</h2>

        <p className="text-base text-white leading-relaxed mb-10 max-w-xl">
          Experience the perfect start to your day with bold flavors, rich
          aroma, and a smooth finish. Responsibly sourced and carefully roasted
          for the ultimate coffee experience.
        </p>

        <div className="flex gap-6 items-center">
          <button className="rounded-2xl bg-red-600 bg-opacity-90 text-white px-6 py-3 font-bold hover:bg-opacity-100 transition shadow-md">
            Shop Now
          </button>

          <a className="cursor-pointer underline hover:text-[#EAA64D] font-semibold">
            Explore Our Blends
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
