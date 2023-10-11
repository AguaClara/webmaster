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
      <section id="banner" className="bg-[#75DC83] py-2">
        <div className="text-center text-5xl mt-[5%] mb-[5%] text-white">
          Our Plants
        </div>
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
      </section>
      <div className="mx-auto max-w-screen-xl">
        {/* Our plants */}

        {/* our approach */}
        <div className="text-5xl mt-[5%] mb-[5%]">Our Approach</div>
        <div className="w-full grid grid-cols-2 place-content-between text-center gap-60">
          <div className="bg-slate-100 h-48 rounded-xl drop-shadow-lg">
            img of plant
          </div>
          <div className="place-self-center">
            {" "}
            description description description description description
            description description description description description
            description description description description description
            description description description description{" "}
          </div>

          <div className="place-self-center">
            {" "}
            description description description description description
            description description description description description
            description description description description description
            description description description description{" "}
          </div>
          <div className="bg-slate-100 h-48 rounded-xl drop-shadow-lg">
            img of plant
          </div>

          <div className="bg-slate-100 h-48 rounded-xl drop-shadow-lg">
            img of plant
          </div>
          <div className="place-self-center">
            {" "}
            description description description description description
            description description description description description
            description description description description description
            description description description description{" "}
          </div>
        </div>
        <div className="text-5xl mt-[5%] mb-[5%]">Location of our plants</div>
        <img src={m} />
        <div className="text-5xl mt-[5%] mb-[5%]">Our Impact</div>
        <div className="w-full grid grid-cols-2 place-content-between text-center gap-60">
          <div className="bg-slate-100 h-48 rounded-xl drop-shadow-lg">
            img of people
          </div>
          <div className="place-self-center">
            {" "}
            description description description description description
            description description description description description
            description description description description description
            description description description description{" "}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OurPlants;
