import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Whoweare from "../components/Whoweare";

import bannerimg from "../assets/img/HomeBanner.png";
import plant from "../assets/img/plant.png";
import whoweare from "../assets/img/whoweare.jpg";

import TLs from "../assets/img/tls.jpeg";
import logo from "../assets/img/Logo.png";
import plantcad from "../assets/img/plant cad.png";

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
          <div className="text-center absolute top-[75%] left-1/2 transform translate-x-[-50%] text-white">
            <div className="text-2xl sm:text-4xl lg:text-4xl xl:text-8xl bold-text py-1">
              Clean water on tap
            </div>
            <div className="text-sm lg:text-lg xl:text-xl">
              protecting the universal right to clean water
            </div>
          </div>
        </div>
        {/* our plant section */}
        <div className="mx-auto max-w-screen-xl mb-[5%]">
          <div className="text-5xl bold-text mt-[10%] mb-[3%]">Our Plants</div>
          <div className="flex flew-row items-center">
            <img
              src={plant}
              alt="san marias(?)"
              className="w-[50%] rounded-r-[40%]  rounded-b-[40%] relative"
            />
            {/* <img
              src={plantcad}
              className="w-[20%] absolute top-[25%] left-[35%] right-[10%] bottom-[-25%]s"
            /> */}
            <div className="w-full flex flex-col items-center">
              <div className="w-[75%] text-2xl">
                {" "}
                We design gravity powered water treatment plants with movable
                parts that can be easily constructed with local materials.
              </div>
              <Link to="/OurPlants" className="text-[#39B54A] mt-[10%] text-xl">
                <button className="mt-[8%] transform transition-all hover:scale-110 border border-[#39B54A] bg-transparent rounded-lg px-4 py-2">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Who we are section */}
        <div className="mx-auto max-w-screen-xl">
          <div className="relative mb-[20%]">
            <img src={whoweare} alt="crossing water" className="rounded-3xl" />
            <div className="bg-white text-center absolute top-[60%] left-[10%] right-[10%] bottom-[-25%] z-10 rounded-3xl shadow-lg">
              <div className="text-6xl py-[4%]">Who we are</div>
              <div className="text-2xl px-[8%]">
                AguaClara Cornell is a student-led program that develops and
                implements sustainable, gravity-powered drinking water and
                wastewater treatment technologies to bring safe water on tap to
                communities around the world.
              </div>
            </div>
          </div>
          <Whoweare />

          {/* Meet the team */}
          <div>
            <div className="relative mb-[20%] mt-[20%]">
              <img
                src={TLs}
                alt="team leads"
                className="rounded-3xl w-[60%] ml-[5%]"
              />
              <div className="bg-white shadow-lg absolute top-[40%] left-[55%] right-[5ç%] bottom-[-15%] z-10 rounded-3xl p-[8%]">
                <div className="text-xl ">
                  Since the start of AguaClara in 2005, we have always been a
                  project team dedicated to drinking water treatment so that
                  more communities can thrive.
                </div>
                <Link to="/Team" className="text-[#28C3EE]">
                  <button className="mt-[10%] text-xl transform transition-all hover:scale-110 border border-[#28C3EE] bg-transparent rounded-lg px-4 py-2s">
                    Meet the team
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Join us */}
          <div className="flex flex-row mb-[10%]">
            <div className="text-4xl w-[70%] p-[10%] ">
              Does our mission resonate with you? Explore our exciting
              opportunities and join our team!
            </div>
            <div className=" w-[30%] flex flex-col items-center justify-center">
              <div className="flex flex-row items-center mb-[5%]">
                <img src={logo} className="w-[20%]" />
                <div className="ml-4 text-3xl">Join us.</div>
              </div>

              <Link to="/Apply" className="text-white">
                <button className="transform transition-all hover:scale-110 border border-#39B54A bg-[#39B54A] text-white rounded-lg px-4 py-2">
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
