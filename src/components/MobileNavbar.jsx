import React, { useState } from "react";
import Logo from "../assets/img/AguaClara_Logo.png";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className="flex flex-row justify-between items-center mx-auto text-xl max-w-screen-xl mt-[1%] ml-2 mr-2">
      <div className="w-[35%]">
        <a href="/">
          <img src={Logo} alt="AguaClara Logo" className="w-full" />
        </a>
      </div>

      <div className="">
        <button
          onClick={toggleMenu}
          className="focus:outline-none bg-transparent"
        >
          <span className="text-3xl">Menu</span>
        </button>
      </div>

      {/* Menu items */}
      <div
        className={`fixed inset-0 z-50 ${
          isOpen ? "flex" : "hidden"
        } items-center justify-center bg-black bg-opacity-50`}
      >
        <div className="bg-white  rounded-lg shadow-lg items-center justify-center text-center p-8">
          <ul className="flex flex-col space-y-4">
            <li>
              <a href="/" className="text-black text-xl">
                Home
              </a>
            </li>
            <li>
              <a href="/OurPlants" className="text-black text-xl">
                Our Plants
              </a>
            </li>
            <li>
              <a href="/Team" className="text-black text-xl">
                Team
              </a>
            </li>
            <li>
              <a href="/Donate" className="text-black text-xl">
                Donate
              </a>
            </li>

            <li>
              <a href="/Apply" className="text-black text-xl">
                Apply
              </a>
            </li>

            <li>
              <button
                onClick={closeMenu}
                className="text-black text-xl bg-transparent"
              >
                Close
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileNavbar;
