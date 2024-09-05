import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileNavbar from "../components/MobileNavbar";
import ParallaxBanner from "../components/HomeBanner";

import bannerimg from "/src/assets/img/HBanner.jpg";
import plant from "../assets/img/graciasplant.jpg";
import whoweare from "../assets/img/whoweare.jpg";
import TLs from "../assets/img/TLSMonroe.jpeg";
import logo from "../assets/img/Logo.png";
import newhonduraspic1 from "../assets/img/newhonduraspic1.jpg";
import newhonduraspic2 from "../assets/img/newhonduraspic2.jpg";
import hikingpic from "../assets/img/hikingpic.jpg";
import newhonduraspic3 from "../assets/img/newhonduraspic3.jpg";
import plantcad from "../assets/img/plant cad.png";
import wwa1 from "../assets/img/wwa1.jpg";
import wwa2 from "../assets/img/wwa2.jpeg";
import wwa3 from "../assets/img/wwa3.jpeg";
import wwa4 from "../assets/img/wwa4.jpeg";
import wwa5 from "../assets/img/wwa5.jpeg";
import '../index.css';  // or './app.css'


function LazyImage({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${loaded ? 'lazy-image-loaded' : 'lazy-image'}`}
      loading="lazy"
      onLoad={() => setLoaded(true)}
    />
  );
}

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

        <ParallaxBanner img={bannerimg}>
          <div className="text-5xl py-1">Safe Water on Tap</div>
          <div className="text-xl">Protecting the Universal Right to Clean Water</div>
        </ParallaxBanner>

        {/* Our Plant Section */}
        <div className="mx-auto max-w-screen-xl px-20 mb-40 mt-40 sm:mt-12 sm:mb-12 sm:px-0">
          <div className="flex flex-row items-center space-x-20 sm:flex-col sm:items-center sm:space-x-0 sm:space-y-5">
            <LazyImage
              src={plant}
              alt="San Marias"
              className="object-cover aspect-[5/3] w-[50%] sm:w-72 sm:mx-auto rounded-3xl"
            />
            <div className="w-full flex flex-col space-y-7 sm:space-y-2 sm:mt-12 sm:w-64 sm:items-center">
              <div className="text-2xl text-left sm:text-center">
                We design gravity-powered water treatment plants with movable parts that can be easily constructed with local materials.
              </div>
              <Link to="/OurPlants" className="text-[#39B54A]">
                <button className="text-xl transform transition-all border-2 border-[#39B54A] bg-transparent hover:bg-[#39B54A] hover:text-white rounded-3xl px-4 py-2 sm:px-2 sm:py-1 font-bold sm:mx-auto">
                  LEARN MORE
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="px-20 sm:px-10">
          <div className="relative mb-[20%]">
            <div className="text-5xl mt-[10%] mb-[3%] text-center">
              Who We Are
            </div>
            <LazyImage
              src={whoweare}
              alt="Crossing Water"
              className="object-cover aspect-[3/1] rounded-3xl sm:w-72 sm:mx-auto"
            />
            <div className="bg-white text-center absolute top-[85%] left-[10%] right-[10%] bottom-[-10%] sm:bottom-[-100%] z-10 rounded-3xl shadow-lg">
              <div className="text-xl mt-4 sm:mt-2 px-[5%]">
                AguaClara Cornell is a student-led program that develops and implements sustainable, gravity-powered water treatment technologies to bring safe water on tap to communities around the world.
              </div>
            </div>
          </div>
        </div>

        {/* Add LazyImage components for other sections */}
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

      </div>
      <Footer />
    </>
  );
}

export default Home;
