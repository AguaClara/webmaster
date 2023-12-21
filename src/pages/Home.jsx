import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Whoweare from "../components/Whoweare";

import bannerimg from "../assets/img/HomeBanner.png";
import plant from "../assets/img/graciasplant.jpg";
import whoweare from "../assets/img/whoweare.jpg";

import TLs from "../assets/img/tls.jpeg";
import logo from "../assets/img/Logo.png";
import plantcad from "../assets/img/plant cad.png";
import wwa1 from "../assets/img/wwa1.jpg";
import wwa2 from "../assets/img/wwa2.jpeg";
import wwa3 from "../assets/img/wwa3.jpeg";
import wwa4 from "../assets/img/wwa4.jpeg";
import wwa5 from "../assets/img/wwa5.jpeg";

function Home() {
  return (
    <>
      <div className="w-full relative">
        <Navbar />
        {/* banner */}
        <div className="relative">
          <img
            src={bannerimg}
            alt="Home Banner"
            className="w-full object-cover mt-[1%]"
          />
          <div className="text-center absolute top-[70%] left-1/2 transform translate-x-[-50%] text-white">
            <div className="text-7xl sm:text-3xl lg:text-3xl xl:text-7xl bold-text py-1">
              Safe Water on Tap
            </div>
            <div className="text-sm lg:text-lg xl:text-2xl">
              Protecting the Universal Right to Clean Water
            </div>
          </div>
        </div>
        {/* our plant section */}
        <div className="mx-auto max-w-screen-xl mb-40 mt-40">
          {/* <div className="text-5xl bold-text mt-[10%] mb-[3%]">Our Plants</div> */}
          <div className="flex flew-row items-center space-x-20">
            <img
              src={plant}
              alt="san marias"
              class="object-cover aspect-[5/3] w-[50%] rounded-3xl"
            />

            {/* <img
              src={plantcad}
              className="w-[20%] absolute top-[25%] left-[35%] right-[10%] bottom-[-25%]s"
            /> */}
            <div className="w-full flex flex-col align-left space-y-7">
              <div className=" text-2xl">
                We design gravity powered water treatment plants with movable
                parts that can be easily constructed with local materials.
              </div>
              <Link to="/OurPlants" className="text-[#39B54A]">
                <button className="transform transition-all border-2 border-[#39B54A] bg-transparent hover:bg-[#39B54A] hover:text-white rounded-3xl px-4 py-2 font-bold">
                  LEARN MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Who we are section */}
        <div className="mx-auto max-w-screen-xl">
          <div className="relative mb-[20%]">
            <div className="text-5xl font-semibold mt-[10%] mb-[3%] text-center">
              Who We Are
            </div>
            <img src={whoweare} alt="crossing water" className="rounded-3xl" />
            <div className="bg-white text-center absolute top-[80%] left-[10%] right-[10%] bottom-[-10%] z-10 rounded-3xl shadow-lg">
              <div className="text-2xl mt-8 px-[5%]">
                AguaClara Cornell is a student-led program that develops and
                implements sustainable, gravity-powered drinking water and
                wastewater treatment technologies to bring safe water on tap to
                communities around the world.
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mx-auto max-w-screen-xl mb-40 mt-40"> */}
        <div className="bg-[#003C08] max-w-full px-20 py-20 rounded-tl-3xl rounded-tr-3xl">
          <div className="grid grid-rows-6 grid-flow-col grid-cols-2 gap-20 text-right">
            <div className="row-span-3 bg-slate-50 rounded-3xl overflow-hidden">
              <img
                src={wwa4}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            <div className="row-span-3 bg-slate-50 rounded-3xl overflow-hidden">
              <img
                src={wwa5}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            <div className="row-span-2 bg-slate-50 rounded-3xl space-y-4 flex flex-col justify-center px-6">
              <div className="font-bold text-2xl">
                Our annual trip to Honduras!
              </div>
              <div className="text-xl">
                AguaClara Technology is currently in operation at 24 water
                treatment plants, serving over 96,000 people in Central America
                and India.
              </div>
              <div className="text-xl">
                The annual trips to Honduras offer life-changing, hands-on
                experiences for students, providing crucial insights and
                feedback that significantly contribute to our research and give
                deeper meaning to their work.
              </div>
            </div>

            <div className="row-span-3 bg-slate-50 rounded-3xl overflow-hidden">
              <img
                src={wwa3}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            <div className="bg-slate-50 rounded-3xl justify-center p-6">
              <div className="text-xl">
                Visiting Honduras provides insights into our plant's filtering
                processes, highlighting ways to improve user-friendliness and
                better meet local needs.
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-screen-xl">
          {/* Meet the team */}
          <div>
            <div className="relative mb-[20%] mt-[20%]">
              <img
                src={TLs}
                alt="team leads"
                className="rounded-3xl w-[70%] "
              />
              <div className="bg-white shadow-lg absolute top-[50%] left-[60%] right-[0%] bottom-[-15%] z-10 rounded-3xl p-[8%]">
                <div className="text-xl ">
                  Since the start of AguaClara in 2005, we have always been a
                  project team dedicated to drinking water treatment so that
                  more communities can thrive.
                </div>
                <Link to="/Team" className="text-[#003C08]">
                  <button className="mt-[10%] font-bold transform transition-all hover:bg-[#003C08] hover:text-white border-2 border-[#003C08] bg-transparent rounded-3xl px-4 py-2">
                    MEET THE TEAM
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Join us */}
          <div className="flex flex-row mb-[10%] rounded-3xl shadow-lg">
            <div className="text-3xl w-[70%] p-[10%] ">
              Does our mission resonate with you? Explore our exciting
              opportunities and join our team!
            </div>
            <div className=" w-[30%] flex flex-col items-center justify-center">
              <div className="flex flex-row items-center mb-[5%]">
                <img src={logo} className="w-[20%]" />
                <div className="ml-4 text-4xl bold">Join us.</div>
              </div>

              <Link to="/Apply" className="">
                <button className="mt-[10%] font-bold transform transition-all hover:bg-[#003C08] hover:text-white border-2 border-[#003C08] bg-transparent rounded-3xl px-4 py-2">
                  Apply
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
