import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Whoweare from "../components/Whoweare";

import bannerimg from "../assets/img/HomeBanner.png";
import plant from "../assets/img/graciasplant.jpg";
import whoweare from "../assets/img/whoweare.jpg";

import TLs from "../assets/img/TLs.jpeg";
import logo from "../assets/img/Logo.png";
import plantcad from "../assets/img/plant cad.png";
import wwa1 from "../assets/img/wwa1.jpg";
import wwa2 from "../assets/img/wwa2.jpeg";
import wwa3 from "../assets/img/wwa3.jpeg";
import wwa4 from "../assets/img/wwa4.jpeg";
import wwa5 from "../assets/img/wwa5.jpeg";
import MobileNavbar from "../components/MobileNavbar";
import newhonduraspic1 from "../assets/img/newhonduraspic1.jpg"
import newhonduraspic2 from "../assets/img/newhonduraspic2.jpg"
import hikingpic from "../assets/img/hikingpic.jpg";
import newhonduraspic3 from "../assets/img/newhonduraspic3.jpg";
function Home() {
  return (
    <>
      <div className="w-full relative">
        <div className="sm:hidden">
          <Navbar />
        </div>
        <div className="md:hidden lg:hidden xl:hidden">
          <MobileNavbar />
        </div>

        {/* banner */}
        <div className="relative">
          <img
            src={bannerimg}
            alt="Home Banner"
            className="w-full object-cover mt-[1%]"
          />
          <div className="text-center absolute top-[70%] left-1/2 transform translate-x-[-50%] text-white sm:w-full">
            <div className="text-5xl py-1">Safe Water on Tap</div>
            <div className="text-xl">
              Protecting the Universal Right to Clean Water
            </div>
          </div>
        </div>
        {/* our plant section */}
        <div className="mx-auto max-w-screen-xl px-20 mb-40 mt-40 sm:mt-12 sm:mb-12 sm:px-0">
          <div className="flex flex-row items-center space-x-20 sm:flex-col sm:items-center sm:space-x-0 sm:space-y-5">
            <img
              src={plant}
              alt="san marias"
              className="object-cover aspect-[5/3] w-[50%] sm:w-72 sm:mx-auto rounded-3xl"
            />

            <div className="w-full flex flex-col space-y-7 sm:space-y-2 sm:mt-12 sm:w-64 sm:items-center">
              <div className="text-xl text-left sm:text-center">
                We design gravity powered water treatment plants with movable
                parts that can be easily constructed with local materials.
              </div>
              <Link to="/OurPlants" className="text-[#39B54A]">
                <button className="text-xl transform transition-all border-2 border-[#39B54A] bg-transparent hover:bg-[#39B54A] hover:text-white rounded-3xl px-4 py-2 sm:px-2 sm:py-1 font-bold sm:mx-auto">
                  LEARN MORE
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Who we are section */}
        <div className=" px-20 sm:px-10">
          <div className="relative mb-[20%]">
            <div className="text-5xl mt-[10%] mb-[3%] text-center ">
              Who We Are
            </div>
            <img
              src={whoweare}
              alt="crossing water"
              className="object-cover aspect-[3/1] rounded-3xl sm:w-72 sm:mx-auto "
            />
            <div className="bg-white text-center absolute top-[85%] left-[10%] right-[10%] bottom-[-10%] sm:bottom-[-100%] z-10 rounded-3xl shadow-lg">
              <div className="text-xl mt-4 sm:mt-2 px-[5%]">
                AguaClara Cornell is a student-led program that develops and
                implements sustainable, gravity-powered water treatment
                technologies to bring safe water on tap to communities around
                the world.
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-full px-10 mb-40 mt-40 sm:hidden">
          {/* <div className="bg-[#003C08] max-w-full px-20 py-20 rounded-tl-3xl rounded-tr-3xl"> */}
          <div className="grid grid-rows-6 grid-flow-col grid-cols-2 gap-4 text-right">
            <div className="row-span-3 bg-slate-50 rounded-3xl overflow-hidden">
              <img
                src={newhonduraspic3}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            <div className="row-span-3 bg-slate-50 rounded-3xl overflow-hidden">
              <img
                src={newhonduraspic2}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            <div className="row-span-2 bg-white shadow-lg rounded-3xl space-y-4 flex flex-col justify-center px-6">
              <div className="font-bold text-2xl">
                Our annual trip to Honduras!
              </div>
              <div className="text-lg">
                AguaClara Technology is currently in operation at 24 water
                treatment plants, serving over 96,000 people in Central America
                and India.
              </div>
              <div className="text-lg">
                The annual trips to Honduras offer life-changing, hands-on
                experiences for students, providing crucial insights and
                feedback that significantly contribute to our research and give
                deeper meaning to their work.
              </div>
            </div>

            <div className="row-span-3 bg-slate-50 rounded-3xl overflow-hidden">
              <img
                src={hikingpic}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            <div className="bg-white shadow-lg rounded-3xl justify-center p-6">
              <div className="text-xl">
                Visiting Honduras provides insights into our plant's filtering
                processes and help find ways to better meet local needs.
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-screen-xl px-20 mt-20">
          {/* Meet the team */}
          <div className="sm:hidden">
            <div className="relative mb-[20%] mt-[20%] ">
              <img
                src={TLs}
                alt="team leads"
                className="rounded-3xl w-[70%] "
              />
              <div className="bg-white shadow-lg absolute top-[45%] left-[60%] right-[0%] bottom-[-15%] z-10 rounded-3xl p-[8%]">
                <div className="text-xl">
                  Since the start of AguaClara in 2005, we have always been a
                  project team dedicated to drinking water treatment so that
                  more communities can thrive.
                </div>
                <Link to="/Team" className="text-[#003C08]">
                  <button className="mt-[10%] font-bold transform transition-all hover:bg-[#003C08] hover:text-white border-2 border-[#003C08] bg-transparent rounded-3xl px-4 py-2 sm:px-2 sm:py-1 ">
                    MEET THE TEAM
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* small screens */}
          <div className="md:hidden lg:hidden xl:hidden mt-52">
            <div className="flex flex-col items-center space-y-5 mb-12">
              <img src={TLs} alt="team leads" className="rounded-3xl w-52" />
              <div className="bg-white shadow-lg rounded-3xl p-[8%]">
                <div className="text-xl w-full text-center">
                  Since the start of AguaClara in 2005, we have always been a
                  project team dedicated to drinking water treatment so that
                  more communities can thrive.
                </div>
                <div className="flex justify-center">
                  {" "}
                  {/* Flex container for centering the button */}
                  <Link to="/Team" className="text-[#003C08]">
                    <button className="mt-2 text-xl font-bold transform transition-all hover:bg-[#003C08] hover:text-white border-2 border-[#003C08] bg-transparent rounded-3xl px-4 py-2">
                      MEET THE TEAM
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Join us */}
          <div className="flex flex-row sm:flex-col mb-[10%] rounded-3xl shadow-lg ">
            <div className="text-3xl w-[70%] sm:w-full p-[10%] ">
              Does our mission resonate with you? Explore our exciting
              opportunities and join our team!
            </div>
            <div className=" w-[30%] sm:w-full flex flex-col sm:flex-row items-center justify-center sm:mb-5">
              <div className="flex flex-row items-center mb-[5%]">
                <img src={logo} className="w-[20%]" />
                <div className="ml-4 sm:ml-2 text-4xl sm:text-sm bold sm:w-auto">
                  Join us.
                </div>
              </div>

              <Link to="/Apply" className="">
                <button className="mt-[10%] sm:mt-0 font-bold text-xl transform transition-all hover:bg-[#003C08] hover:text-white border-2 border-[#003C08] bg-transparent rounded-3xl px-4 py-2 sm:px-2 sm:py-1 ">
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
