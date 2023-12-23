import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import banner from "../assets/img/donatebanner.png";

function Donate() {
  return (
    <>
      <Navbar />

      <div className="relative">
        <img src={banner} className="w-full object-cover mt-[1%]" />
        <div className="text-center absolute top-[75%] left-1/2 transform translate-x-[-50%] text-white">
          <div className="text-center text-6xl mt-[5%]">
            Making a Difference
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl flex items-center justify-center flex-col mb-20">
        <div className="w-[70%] text-center text-lg mt-10 mb-10">
          AguaClara Cornell researches, invents, and designs resilient,
          gravity-powered, community-managed water and wastewater treatment
          technologies for villages, towns, and cities. We work with partner
          organizations who implement AguaClara technologies to provide reliable
          safe water on tap to whole communities. Donate today and support our
          mission.
        </div>
        <a
          href="https://securelb.imodules.com/s/1717/giving/interior.aspx?sid=1717&gid=2&pgid=403&cid=1031&dids=232&sort=1&bledit=1"
          className="text-[#39B54A] text-xl"
        >
          <button className="font-bold transform transition-all hover:bg-[#39B54A] hover:text-white border-2 border-[#39B54A] bg-transparent rounded-3xl px-8 py-2">
            DONATE
          </button>
        </a>
        <div className="text-3xl mt-10 mb-10">
          How your donation supports us
        </div>
        <div className="flex flex-row justify-between w-full text-center">
          <div className="flex flex-col flex-1 py-5 px-10 rounded-3xl shadow-lg">
            <div className="text-2xl mb-5">Prototypes Supplies</div>
            <div>
              Your donation funds essential supplies for our groundbreaking
              prototypes, driving innovation in water filtration.
            </div>
          </div>
          <div className="flex flex-col flex-1 py-5 px-10 rounded-3xl shadow-lg">
            <div className="text-2xl mb-5">Summer Research Support</div>
            <div>
              Support our summer research program, advancing water filtration
              solutions through in-depth studies and collaboration.
            </div>
          </div>
          <div className="flex flex-col flex-1 py-5 px-10 rounded-3xl shadow-lg">
            <div className="text-2xl mb-5">Annual Trips to Honduras</div>
            <div>
              Support our members' travel to Honduras, gaining new perspectives
              on the usage of our pants with your contribution.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Donate;
