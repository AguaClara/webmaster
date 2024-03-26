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
import MobileNavbar from "../components/MobileNavbar";

function OurPlants() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="w-full relative">
        <div className="sm:hidden">
          <Navbar />
        </div>
        <div className="md:hidden lg:hidden xl:hidden">
          <MobileNavbar />
        </div>
      </div>
      <section id="banner" className="py-2 px-2 sm:px-0">
        <div className="text-center text-5xl mt-[5%] mb-4 sm:mb-2">
          Our Plants
        </div>
        <div className="flex flex-row sm:flex-col justify-center items-center space-x-20 sm:space-x-0 mx-auto max-w-screen-xl shadow-lg rounded-3xl ml-20 mr-20 sm:ml-5 sm:mr-5 py-10 sm:py-5">
          <div className="flex flex-col w-1/2 sm:w-full space-y-6 sm:space-y-2 sm:p-4">
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
          <div className="w-[30%] sm:w-[80%] sm:mt-2 text-center ">
            <img src={gracias} className="rounded-3xl" />
          </div>
        </div>
      </section>

      <div className=" mt-10 p-10 mb-10 ">
        <div className="text-5xl text-center">Featured Plants</div>

        <FeaturedPlants plants={plantsData} className="w-full" />
      </div>

      <div className="mx-auto max-w-screen-xl px-5 ml-20 mr-20 sm:ml-5 sm:mr-5 ">
        {/* Our plants */}
        <div className="text-5xl mt-30 mb-5">The Filtration Process</div>
        <div className="sm:w-auto">
          <img
            src={treatmentprocess}
            className="w-full sm:px-0  sm:justify-center px-40 py-[2%]"
            alt="Filtration Process"
          />
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
          <a href="https://www.aguaclarareach.org/the-aguaclara-plant" className="underline">
            Learn More
          </a>
        </div>

        {/* our approach */}
        <div className="text-5xl mt-[5%] mb-[5%]"></div>

        <div className="text-5xl mt-32 mb-10 sm:mb-4">
          Location of our plants
        </div>
        <div className="flex flex-row sm:flex-col space-x-10 sm:space-x-0 mb-24 sm:space-y-5">
          <a
            href="https://www.aguaclarareach.org/project-sites"
            className=" w-[70%] sm:w-full"
          >
            <img src={m} className="rounded-3xl" />
          </a>
          <div className=" flex flex-col justify-center text-xl w-64 sm:w-full">
            AguaClara Technology is currently in operation at more than 24 water
            treatment plants, serving over 96,000 people in Central America and
            India. These plants reliably provide safe water to community members
            year after year.
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default OurPlants;
