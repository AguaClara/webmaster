import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import banner from "../assets/img/donatebanner.jpg";

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

        <div className="text-3xl mb-10">How your donation supports us</div>
        <div className="flex flex-row justify-between  w-full text-center ">
          <div className="flex-1">prototypes</div>
          <div className="flex-1">summer research</div>
          <div className="flex-1">honduras</div>
        </div>
        <a
          href="https://securelb.imodules.com/s/1717/giving/interior.aspx?sid=1717&gid=2&pgid=403&cid=1031&dids=232&sort=1&bledit=1"
          className="text-[#39B54A] mt-[10%] text-xl"
        >
          <button className="text-2xl hover:scale-110 border border-[#39B54A] bg-transparent rounded-lg px-4 py-2">
            Donate
          </button>
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Donate;
