import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import teampic from "../assets/img/Team.jpg";
import Subteam from "../components/Subteam";
import Leadership from "../components/Leadership";
import memberData from "../data/members.json";
import BackTo from "../components/BackTo";
import teamPic from "../assets/img/hondurasteam.jpg";
import monroe from "../assets/img/monroe.jpeg";
import richardson from "../assets/img/Richardson.png";
import hwang from "../assets/img/Hwang.jpg";
import MobileNavbar from "../components/MobileNavbar";
import '../index.css';  // or './app.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Creating a ref for each subteam using the useRef hook and the data from the memberData JSON.
  const subteamRefs = memberData.sections
    .flatMap((section) =>
      section.subteams.map((subteam) => ({
        [subteam.name]: useRef(null),
      }))
    )
    .reduce((acc, ref) => ({ ...acc, ...ref }), {}); // Reducing the array of refs into a single object.

  // A function to scroll to a specific subteam's ref when called.
  const scrollToSubteam = (subteamName) => {
    subteamRefs[subteamName]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className="sm:hidden">
        <Navbar />
      </div>
      <div className="md:hidden lg:hidden xl:hidden">
        <MobileNavbar />
      </div>
      <BackTo section="teams" />
      <div className="mx-auto max-w-screen-xl px-20 sm:px-8">
        <div className="text-5xl my-[5%] text-center">Our Team</div>

        <div className="flex flex-row sm:flex-col justify-center space-x-24 sm:space-x-0 sm:space-y-5 md:flex-col md:space-x-0 md:space-y-5">
          <LazyLoadImage src={teampic} effect="blur" className="rounded-3xl w-full object-cover aspect-[4/3] sm:mb-2" />
          <div className="self-center text-xl">
            Founded in 2005, AguaClara Cornell pioneers research in
            community-scale water treatment technologies. AguaClara Cornell has
            partnered with AguaClara Reach and other local organizations to
            build more than 24 AguaClara plants that provide safe water on tap
            to over 96,000 people, with the flagship plant in Ojojona, Honduras,
            India, and Nicaragua.
          </div>
        </div>
        <div className="mb-10">
          <Leadership />
        </div>
        <div>
          <section id="teams" className="py-4">
            <div className="mb-10 text-4xl flex justify-center sm:mb-2">
              Subteams
            </div>
            {/* Subteam navbar */}
            <div className="flex flex-row sm:flex-col-reverse mb-[10%] space-x-10 sm:space-x-0">
              <div className="flex flex-col space-y-3 w-[40%] justify-center sm:w-full">
                {memberData.sections.map((section) =>
                  section.subteams.map((subteam, subteamIndex) => (
                    <button
                      key={subteamIndex}
                      onClick={() => scrollToSubteam(subteam.name)}
                      className="mb-2 text-xl px-4 underline hover:font-bold rounded bg-transparent"
                    >
                      {subteam.name}
                    </button>
                  ))
                )}
              </div>
              <div className="w-[60%] sm:flex sm:justify-center sm:w-full">
                <LazyLoadImage src={teamPic} effect="blur" className="rounded-3xl w-full object-cover aspect-[4/3] sm:mb-2" />
              </div>
            </div>
          </section>
        </div>
        <div>
          <div className="">
            {memberData.sections.map((section) =>
              section.subteams.map((subteam, subteamIndex) => (
                <div key={subteamIndex} ref={subteamRefs[subteam.name]}>
                  {/* Mapping subteams to display them with refs attached */}
                  <Subteam name={subteam.name} /> {/* Subteam component */}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl flex flex-col px-24 sm:px-0 ">
        <div className="text-5xl my-10 sm:my-0 ml-10 sm:mb-10">Our Advisors</div>
        <div className=" mx-auto space-y-20 sm:space-y-2 mb-24">
          <div className="flex flex-row space-x-12 sm:flex-col items-center sm:space-x-0">
            <div className="aspect-[4/3] sm:w-3/4 w-1/4 sm:mx-auto">
              <LazyLoadImage
                src={monroe}
                alt="monroe"
                effect="blur"
                className="object-cover rounded-3xl"
              />
            </div>
            <div className="p-10 w-3/4 sm:w-full">
              <h2 className="text-2xl font-bold mb-2">Our founder</h2>
              <p className="text-xl">
                Dr. Monroe Weber-Shirk is an environmental engineer who founded
                the AguaClara program to develop sustainable municipal scale
                water treatment for resource poor communities. His work has been
                motivated by his experiences working in Salvadoran refugee camps
                and his investigations of the widespread failure of automated
                and mechanized water treatment plants. AguaClara has invented a
                series of technologies that make it possible to produce safe
                drinking water without using any electricity.
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-12 sm:flex-col items-center">
            <div className="p-10 w-3/4 sm:w-full">
              <h2 className="text-2xl font-bold mb-2">Our Advisors</h2>
              <p className="text-xl">
                Dr. Ruth Richardson is a professor of civil and environmental
                engineering at Cornell University. Her research is focused on
                the application of molecular biological tools to improve basic
                understanding of microbes relevant to bioremediation,
                sustainable wastewater treatment and sustainable bioenergy and
                apply this understanding to the deployment of microbial
                processes in environmental and reactor systems.
              </p>
            </div>
            <div className="aspect-[4/3] sm:w-3/4 w-1/4 sm:mx-auto">
              <LazyLoadImage
                src={richardson}
                alt="richardson"
                effect="blur"
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
          <div className="flex flex-row space-x-12 sm:flex-col items-center">
          <div className="aspect-[4/3] sm:w-3/4 w-1/4 sm:mx-auto">
              <LazyLoadImage
                src={hwang}
                alt="hwang"
                effect="blur"
                className="object-cover rounded-3xl"
              />
            </div>
            <div className="p-10 w-3/4 sm:w-full">

              <p className="text-xl">
              Professor James Hwang graduated from the Department of Materials 
              Science and Engineering, Cornell University with a PhD degree.  
              He has published approximately 400 refereed technical papers and 
              been granted eight U.S. patents. He has researched electronic, optical, 
              and micro-electromechanical devices and circuits. His current research 
              interest includes scanning microwave microscopy, two-dimensional atomic-layered 
              materials and devices, and electromagnetic sensors for individual biological cells.
              </p>
            </div>
            </div>
            </div>
        </div>
      <Footer />
    </>
  );
}

export default Team; // Exporting the Team component for use in other parts of the application.
