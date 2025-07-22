import React from "react";

function Navbar() {
  const navItems = ["Home", "Best Sellers", "About", "FAQ", "Contact"];

  return (
    <nav className="fixed w-full z-50 top-10 h-10 text-white">
      <ul className="flex justify-center items-center gap-7 h-full font-bold">
        {navItems.map((item, index) => (
          <li key={index}>
            <a className="hover:opacity-40 cursor-pointer">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
