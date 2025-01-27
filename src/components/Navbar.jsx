import React from "react";
import Logo from "../assets/img/AguaClara_Logo.png";

function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center mx-auto text-xl max-w-screen-xl mt-[1%] ml-20 mr-20">
      {/* Logo */}
      <div className="w-[35%]">
        <a href="/">
          <img src={Logo} alt="AguaClara Logo" className="w-[80%]" />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="text-lg">
        <ul className="flex flex-row space-x-4">
          <li>
            <a
              href="/"
              className="text-black hover:text-blue-500 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/OurPlants"
              className="text-black hover:text-blue-500 transition duration-300"
            >
              Our Plants
            </a>
          </li>
          <li>
            <a
              href="/Team"
              className="text-black hover:text-blue-500 transition duration-300"
            >
              Team
            </a>
          </li>
          <li>
            <a
              href="/Donate"
              className="text-black hover:text-blue-500 transition duration-300"
            >
              Donate
            </a>
          </li>
          {/* <li>
            <a
              href="/ContactUs"
              className="text-black hover:text-blue-500 transition duration-300"
            >
              Contact Us
            </a>
          </li> */}
          <li>
            <a
              href="/Apply"
              className="bg-aguaGreen text-white px-4 py-2 rounded-xl hover:bg-aguaBlue transition duration-300"
            >
              Apply
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
