import React from "react";
import Navbar from "../components/Navbar";
import sanmatias from "../assets/img/SanMatias.jpg";
import gracias from "../assets/img/plant.jpg";
import m from "../assets/img/map.png";
import Footer from "../components/Footer";

function OurPlants() {
  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-screen-xl">
        {/* Our plants */}
        <div className="text-center text-5xl mt-[5%] mb-[5%]">Our Plants</div>
        <div className="flex flex-row justify-center">
          <div className="w-[40%] text-center text-xl">
            <img src={sanmatias} />
            <div>Gracias Plant</div>
          </div>
          <div className="w-[5%]" />
          <div className="w-[40%] text-center text-xl">
            <img src={gracias} />
            <div>San Matias Plant</div>
          </div>
        </div>
        {/* our approach */}
        <div className="text-5xl mt-[5%] mb-[5%]">Our Approach</div>
        <div className="text-5xl mt-[5%] mb-[5%]">Location of our plants</div>
        <img src={m} />
      </div>
      <Footer />
    </>
  );
}

export default OurPlants;
