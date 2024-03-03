import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileNavbar from "../components/MobileNavbar";
import banner from "../assets/img/donatebanner.jpg";

function Donate() {
  return (
    <>
      <div className="sm:hidden">
        <Navbar />
      </div>
      <div className="md:hidden lg:hidden xl:hidden">
        <MobileNavbar />
      </div>

      <div className="relative">
        <img src={banner} className="w-full object-cover aspect-[5/2] mt-[1%]" />
        <div className="text-center absolute top-[75%] sm:top-[60%] left-1/2 transform translate-x-[-50%] text-white sm:w-full">
          <div className="text-center text-5xl mt-[5%] ">
            Making a Difference
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl flex items-center justify-center flex-col mb-20">
        <div className="w-[70%] text-center text-xl sm:text-sm mt-10 mb-10">
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
        <div className="flex flex-row sm:flex-col justify-between text-center space-x-16 sm:space-x-0 sm:space-y-6 px-64 sm:px-5">
          <div className="flex flex-col flex-1 py-5 px-10 rounded-3xl shadow-lg">
            <div className="text-2xl mb-5">Prototypes Supplies</div>
            <div>
              Your donation funds essential supplies for our prototypes,
              enabling us to explore and implement advanced technologies in
              water filtration and drive innovation in water filtration.
            </div>
          </div>
          <div className="flex flex-col flex-1 py-5 px-10 rounded-3xl shadow-lg">
            <div className="text-2xl mb-5">Summer Research Support</div>
            <div >
              Support our summer research program, and enable us to engage in
              in-depth studies, employ state-of-the-art equipment, and
              collaborate with leading experts, advancing our
              understanding of water purification.
            </div>
          </div>
          <div className="flex flex-col flex-1 py-5 px-10 rounded-3xl shadow-lg">
            <div className="text-2xl mb-5">Annual Trips to Honduras</div>
            <div >
              Our annual trip to Honduras allows us to gain
              new perspectives on the usage of our plants. We engage with local communities, assess the effectiveness of our
              solutions, and gather insights for refining our approaches.
            </div>
          </div>
        </div>
        <div className="text-xl text-center w-[70%] mt-24">
          Thank you for considering a donation to our cause. Your support
          empowers us to make a meaningful difference in the world of water
          filtration and purification.
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Donate;
