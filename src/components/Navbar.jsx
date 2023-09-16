import React from 'react';

function Navbar() {
  
  return (
    <div className="flex flex-row justify-between items-center">
      <ul className="nav-menu flex flex-row space-x-4">
        <li><a href="/" className="text-black">Home</a></li>
        <li><a href="/OurPlants" className="text-black">Our Plants</a></li>
        <li><a href="/Team" className="text-black">Team</a></li>
        <li><a href="/Donate" className="text-black">Donate</a></li>
        <li><a href="/ContactUs" className="text-black">Contact Us</a></li>
        <li><a href="/Apply" className="text-black">Apply</a></li>
      </ul>
    </div>
  );
}


export default Navbar;
