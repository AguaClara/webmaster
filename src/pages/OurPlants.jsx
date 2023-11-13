import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import sanmatias from "../assets/img/SanMatias.jpg";
import gracias from "../assets/img/plant.jpg";
import m from "../assets/img/map.png";
import Footer from "../components/Footer";
import FeaturedPlants from "../components/FeaturedPlants";
import plantsData from "../data/featuredplants";
import treatmentprocess from "../assets/img/treatment_process.png";

function OurPlants() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <section id="banner" className="py-2 bg-">
        <div className="text-center text-5xl mt-[5%] mb-[5%] ">Our Plants</div>
        <div className="flex flex-row justify-center items-center space-x-20 mx-auto max-w-screen-xl">
          <div className="flex flex-col w-1/2 space-y-6">
            <div className="text-4xl">Gravity Powered Purity</div>
            <div>
              Unveiling a scalable and sustainable water treatment solution that
              harnesses the natural force of gravity, eliminating the need for
              excessive energy consumption. Every design is thoughtfully crafted
              to utilize locally-sourced materials, ensuring not only
              environmental harmony but also ease of maintenance for the
              communities we serve. Dive into a vision that melds ease,
              eco-integrity, and community empowerment
            </div>
          </div>
          <div className="w-[30%] text-center text-xl ">
            <img src={gracias} className="rounded-3xl" />
          </div>
          {/* <div className="w-[5%]" />
          <div className="w-[40%] text-center text-xl">
            <img src={gracias} />
            <div>San Matias Plant</div>
          </div> */}
        </div>
      </section>

      <div className="mx-auto max-w-screen-xl  p-10 mb-10 ">
        <div className="text-5xl text-center">Featured Plants</div>
        <div className="flex justify-center">
          <FeaturedPlants plants={plantsData} />
        </div>

        {/* <div className="w-full grid grid-cols-2 place-content-between text-center gap-10">
          <div className="bg-slate-100 h-48 rounded-xl drop-shadow-lg">
            img of plant
          </div>
          <div className="place-self-center">
            Water first flows into the Entrance Tank from a higher-elevation
            water source, like an uphill river or stream. Larger objects in the
            water like sticks, pebbles, leaves, and more are caught by the Trash
            Rack or fall due to gravity.
          </div>

          <div className="place-self-center">
            A flotation device measures the elevation of this water, so when the
            water level rises, the dose of a chemical called Coagulant
            increases.
          </div>
          <div className="bg-slate-100 h-48 rounded-xl drop-shadow-lg">
            img of plant
          </div>

          <div className="bg-slate-100 h-48 rounded-xl drop-shadow-lg">
            img of plant
          </div>
          <div className="place-self-center">
            The coagulant allows the particles in the water to become “sticky”,
            so when the water flows around obstacles in the Flocculator, they
            can stick to each other to form larger particles called flocs.
          </div>

          <div className="place-self-center">
            These flocs then travel into the Sedimentation Tank, where some
            flocs are caught by a bed of fellow flocs, and others hit the Plate
            Settlers and settle to the bottom.
          </div>
          <div className="bg-slate-100 h-48 rounded-xl drop-shadow-lg">
            img of plant
          </div>

          <div className="bg-slate-100 h-48 rounded-xl drop-shadow-lg">
            img of plant
          </div>
          <div className="place-self-center">
            Finally, this clarified water travels into the sand filters, where
            sand particles provide more surfaces for smaller particles to stick
            to. Once filtration is complete, clean water is dosed with Chlorine
            to remove any harmful bacteria and heads into the Distribution Tank,
            where it can be distributed by gravity to surrounding homes!
          </div>
        </div> */}
      </div>

      <div className="mx-auto max-w-screen-xl">
        {/* Our plants */}
        <div className="text-5xl mt-30 mb-10">The Filtration Process</div>
        <div>
          <img src={treatmentprocess} className="px-[20%] py-[2%]" />
        </div>
        <div>
          Water first flows into the Entrance Tank from a higher-elevation water
          source, like an uphill river or stream. Larger objects in the water
          like sticks, pebbles, leaves, and more are caught by the Trash Rack or
          fall due to gravity. A flotation device measures the elevation of this
          water, so when the water level rises, the dose of a chemical called
          Coagulant increases. The coagulant allows the particles in the water
          to become “sticky”, so when the water flows around obstacles in the
          Flocculator, they can stick to each other to form larger particles
          called flocs. These flocs then travel into the Sedimentation Tank,
          where some flocs are caught by a bed of fellow flocs, and others hit
          the Plate Settlers and settle to the bottom. Finally, this clarified
          water travels into the sand filters, where sand particles provide more
          surfaces for smaller particles to stick to. Once filtration is
          complete, clean water is dosed with Chlorine to remove any harmful
          bacteria and heads into the Distribution Tank, where it can be
          distributed by gravity to surrounding homes!
        </div>

        <div>Learn more</div>

        {/* our approach */}
        <div className="text-5xl mt-[5%] mb-[5%]"></div>

        <div className="text-5xl mt-[5%] mb-[5%]">Location of our plants</div>
        <div className="flex flex-row space-x-10">
          <img src={m} className="rounded-2xl w-[70%]" />
          <div className=" flex flex-col justify-center">
            AguaClara Technology is currently in operation at 24 water treatment
            plants, serving over 96,000 people in Central America and India.
            These plants reliably provide safe water to community members year
            after year.
          </div>
        </div>

        {/* <div className="text-5xl mt-[5%] mb-[5%]">Our Impact</div>
        <div className="w-full grid grid-cols-2 place-content-between text-center gap-10">
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
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default OurPlants;
