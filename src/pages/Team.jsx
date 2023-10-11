import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTeams from "../components/BackToTeams";
import teampic from "../assets/img/teamcommunity.jpg";
import Subteam from "../components/Subteam";

function Team() {
  return (
    <>
      <Navbar />
      <BackToTeams />
      <div className="mx-auto max-w-screen-xl">
        <div className="text-5xl my-[5%]">Our Team</div>
        <div className="grid grid-cols-2 gap-10 place-content-center">
          <img src={teampic} className="" />
          <div className="self-center text-center text-xl">
            Founded in 2005, AguaClara Cornell pioneers research in
            community-scale water treatment technologies. AguaClara Cornell has
            partnered with AguaClara Reach and other local organizations to
            build fourteen AguaClara plants that provide safe water on tap to
            over 65,000 people, with the flagship plant in Ojojona, Honduras and
            other plants in India.
          </div>
        </div>
        <div className="text-5xl my-[5%] text-center">Team Leads</div>
        <div className="grid grid-cols-3 h-80 gap-20">
          <div className="bg-slate-200"></div>
          <div className="bg-slate-200"></div>
          <div className="bg-slate-200"></div>
        </div>
        <div>
          <Subteam />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Team;
