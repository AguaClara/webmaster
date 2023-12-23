import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import sanmatias from "../assets/img/SanMatias.jpg";
import gracias from "../assets/img/graciasplant.jpg";
import m from "../assets/img/map.png";
import Footer from "../components/Footer";
import FeaturedPlants from "../components/FeaturedPlants";
import plantsData from "../data/featuredplants";
import treatmentprocess from "../assets/img/treatment_process.png";
import greenArrow from "../assets/img/icons/arrow.png";

function OurPlants() {
  return (
    <>
      <Navbar />
      <section id="banner" className="py-2">
        <div className="text-center text-5xl mt-[5%] mb-4">Our Plants</div>
        <div className="flex flex-row justify-center items-center space-x-20 mx-auto max-w-screen-xl shadow-lg rounded-3xl py-10">
          <div className="flex flex-col w-1/2 space-y-6">
            <div className="text-4xl underline decoration-[#39B54A]">
              Gravity Powered Purity
            </div>

            <div className="text-xl">
              Introducing a scalable and sustainable water treatment solution
              that relies on the natural force of gravity, thus significantly
              reducing energy consumption. Our designs are meticulously created
              to use locally-sourced materials, ensuring they are
              environmentally friendly and easy to maintain for the communities
              we serve. This approach combines simplicity, ecological
              responsibility, and community empowerment into one cohesive
              vision.
            </div>
          </div>
          <div className="w-[30%] text-center text-xl ">
            <img src={gracias} className="rounded-3xl" />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-screen-xl mt-10 p-10 mb-10 ">
        <div className="text-5xl text-center">Featured Plants</div>
        <div className="flex justify-center">
          <FeaturedPlants plants={plantsData} />
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-5">
        {/* Our plants */}
        <div className="text-5xl mt-30 mb-5">The Filtration Process</div>
        <div>
          <img src={treatmentprocess} className="px-40 py-[2%]" />
        </div>
        <div className="flex flex-col space-y-6 text-xl">
          <div className="flex items-start">
            <img src={greenArrow} alt="Arrow" className="w-8 h-8 mr-2" />
            <p className="mt-1">
              <strong>Grit Removal:</strong> Water first flows into the entrance
              tank from a higher-elevation water source, like an uphill river or
              stream. Larger objects in the water like sticks, pebbles, leaves,
              and more are caught by the trash rack or fall due to gravity.
            </p>
          </div>

          <div className="flex items-start">
            <img src={greenArrow} alt="Arrow" className="w-8 h-8 mr-2" />
            <p className="mt-1">
              <strong>Chemical Dosing:</strong> A flotation device measures the
              elevation of water in the entrance tank, so when the water level
              rises, the dose of a chemical called coagulant increases. The
              coagulant allows the particles in the water to become “sticky”.
            </p>
          </div>

          <div className="flex items-start">
            <img src={greenArrow} alt="Arrow" className="w-8 h-8 mr-2" />
            <p className="mt-1">
              <strong>Flocculation:</strong> The water then flows into the
              flocculator, where it passes through baffles that create
              disturbances in the water flow, causing the particles to bump and
              stick to each other and form larger aggregates known as flocs.
            </p>
          </div>

          <div className="flex items-start">
            <img src={greenArrow} alt="Arrow" className="w-8 h-8 mr-2" />
            <p className="mt-1">
              <strong>Sedimentation:</strong> These flocs then travel into the
              Sedimentation Tank, where some flocs are caught by a bed of fellow
              flocs, and others hit the Plate Settlers and settle to the bottom.
            </p>
          </div>

          <div className="flex items-start">
            <img src={greenArrow} alt="Arrow" className="w-8 h-8 mr-2" />
            <p className="mt-1">
              <strong>Filtration:</strong> Finally, this clarified water travels
              into the sand filters, where sand particles provide more surfaces
              for smaller particles to stick to. Once filtration is complete,
              clean water is dosed with Chlorine to remove any harmful bacteria
              and heads into the Distribution Tank, where it can be distributed
              by gravity to surrounding homes!
            </p>
          </div>
          <a href="https://www.aguaclarareach.org/the-aguaclara-plant">
            Learn More
          </a>
        </div>

        {/* our approach */}
        <div className="text-5xl mt-[5%] mb-[5%]"></div>

        <div className="text-5xl mt-32 mb-10">Location of our plants</div>
        <div className="flex flex-row space-x-10 mb-24">
          <a
            href="https://www.aguaclarareach.org/project-sites"
            className=" w-[70%]"
          >
            <img src={m} className="rounded-3xl" />
          </a>
          <div className=" flex flex-col justify-center text-xl w-64">
            AguaClara Technology is currently in operation at 24 water treatment
            plants, serving over 96,000 people in Central America and India.
            These plants reliably provide safe water to community members year
            after year.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OurPlants;
