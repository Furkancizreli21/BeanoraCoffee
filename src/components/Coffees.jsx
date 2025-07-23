import React from "react";

function Coffees() {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(90deg,#F8E1B7 0%,#F0BB78 100%)",
      }}
      className="w-full min-h-screen px-6 py-20"
    >
      <div className="flex flex-col justify-center items-center gap-4 max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-extrabold text-[#5A3E1B] drop-shadow-md">
          Discover Our Finest Coffee Selection
        </h1>
        <p className="text-[#4B3A1B] max-w-lg text-lg leading-relaxed">
          Crafting exceptional coffee experiences since 2019. Hand-roasted daily
          with passion and care.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
        {/* Americano */}
        <div
          className="rounded-xl shadow-lg max-w-xs bg-white hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
          style={{
            backgroundImage: "linear-gradient(180deg,#F0BB78 0%,#EBE5C2 100%)",
          }}
        >
          <img
            src="/src/assets/americano.png"
            alt="Americano"
            className="mb-4 rounded-t-xl border-b border-[#CBA35C] "
          />
          <h6 className="font-semibold text-xl mb-3 text-[#5A3E1B] text-center drop-shadow-sm">
            Americano
          </h6>
          <p className="text-sm text-[#4B3A1B] px-6 pb-6 leading-relaxed">
            A bold espresso diluted with hot water, delivering a rich and smooth
            flavor that's perfect any time of day.
          </p>
        </div>

        {/* Cappuccino */}
        <div
          className="rounded-xl shadow-lg max-w-xs bg-white hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
          style={{
            backgroundImage: "linear-gradient(180deg,#F0BB78 0%,#EBE5C2 100%)",
          }}
        >
          <img
            src="/src/assets/cappucino.png"
            alt="Cappuccino"
            className=" mb-4 rounded-t-xl border-b border-[#CBA35C] "
          />
          <h6 className="font-semibold text-xl mb-3 text-[#5A3E1B] text-center drop-shadow-sm">
            Cappuccino
          </h6>
          <p className="text-sm text-[#4B3A1B] px-6 pb-6 leading-relaxed">
            Creamy steamed milk combined with espresso, topped with a delicate
            layer of froth — a timeless classic.
          </p>
        </div>

        {/* Latte */}
        <div
          className="rounded-xl shadow-lg max-w-xs bg-white hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
          style={{
            backgroundImage: "linear-gradient(180deg,#F0BB78 0%,#EBE5C2 100%)",
          }}
        >
          <img
            src="/src/assets/latte.png"
            alt="Latte"
            className=" mb-4 rounded-t-xl border-b border-[#CBA35C]"
          />
          <h6 className="font-semibold text-xl mb-3 text-[#5A3E1B] text-center drop-shadow-sm">
            Latte
          </h6>
          <p className="text-sm text-[#4B3A1B] px-6 pb-6 leading-relaxed">
            Smooth espresso blended with velvety steamed milk, delivering a
            creamy and comforting coffee experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Coffees;
