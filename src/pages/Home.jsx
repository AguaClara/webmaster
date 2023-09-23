import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import bannerimg from "../assets/img/HomeBanner.png";
import plant from "../assets/img/plant.png";
import whoweare from "../assets/img/whoweare.jpg";
import wwa1 from "../assets/img/wwa1.png";
import wwa2 from "../assets/img/wwa2.png";
import wwa3 from "../assets/img/wwa3.png";
import TLs from "../assets/img/tls.jpeg";

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
            <div className="text-7xl bold-text py-1">Clean water on tap</div>
            <div>protecting the universal right to clean water</div>
          </div>
        </div>
        {/* our plant section */}
        <div className="mx-auto max-w-screen-xl mb-[5%]">
          <div className="text-5xl bold-text mt-[10%] mb-[3%]">Our Plants</div>
          <div className="flex flew-row items-center">
            <img
              src={plant}
              alt="san marias(?)"
              className="w-[50%] rounded-r-[40%]  rounded-b-[40%]"
            />
            <div className="w-full flex flex-col items-center">
              <div className="w-[75%] text-2xl">
                {" "}
                We design gravity powered water treatment plants with movable
                parts that can be easily constructed with local materials.
              </div>
              <Link to="/OurPlants" className="text-black mt-[10%] text-xl">
                <button className="mt-[8%] transform transition-all hover:scale-125 border border-black bg-transparent rounded-lg px-4 py-2">
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
          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-between">
              <img src={wwa1} className="w-[45%] mt-[2%]" />
              <div>
                Visiting Honduras gives us insight into the filtering processes
                of our plants
              </div>
            </div>

            <div className="flex items-center justify-between mt-[2%]">
              <img src={wwa2} className="w-[45%]" />
              <div className="ml-4">
                <img src={wwa3} className="w-[80%] mb-4" />
                <div>
                  Our annual trip to Honduras! We send members to learn about
                  the treatment plants and the local communities
                </div>
              </div>
            </div>
          </div>

          {/* Meet the team */}
          <div>
            <div className="relative mb-[20%] mt-[20%]">
              <img src={TLs} alt="team leads" className="rounded-3xl w-[60%]" />
              <div className="bg-white shadow-lg absolute top-[40%] left-[50%] right-[10%] bottom-[-15%] z-10 rounded-3xl p-[8%]">
                <div className="text-xl ">
                  Since the start of AguaClara in 2005, we have always been a
                  project team dedicated to drinking water treatment so that
                  more communities can thrive
                </div>
                <Link to="/Team" className="text-black">
                  <button className="mt-[10%] transform transition-all hover:scale-125 border border-black bg-transparent rounded-lg px-4 py-2s">
                    Meet the team
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
