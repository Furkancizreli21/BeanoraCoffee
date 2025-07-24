import React from "react";

function About() {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/src/assets/coffees.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 flex flex-col justify-center h-full px-10 max-w-3xl gap-8">
        <h1 className="text-5xl font-bold text-[#f7c68b]">
          Beanora Coffee - Crafted for Coffee Lovers
        </h1>
        <p className="text-lg leading-relaxed text-[#f1e9d9]">
          Every sip tells a story. At Beanora Coffee, we believe coffee is not
          just a drink — it's a lifestyle, a daily ritual, and a moment to slow
          down.
        </p>
        <p className="text-lg leading-relaxed text-[#f1e9d9]">
          From handpicked beans to expertly roasted flavors, our mission is to
          bring you the freshest and most aromatic coffee experience. Whether
          you’re at home, at work, or on the go — Beanora is always with you.
        </p>
        <button className="w-fit px-6 py-2 bg-[#f0bb78] text-[#4b3a1b] font-semibold rounded-md hover:bg-[#e0a95e] transition hover:opacity-60 cursor-pointer">
          Discover Our Coffee →
        </button>
      </div>
    </section>
  );
}

export default About;
