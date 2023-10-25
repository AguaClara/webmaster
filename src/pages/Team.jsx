import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTeams from "../components/BackToTeams";
import teampic from "../assets/img/teamcommunity.jpg";
import Subteam from "../components/Subteam";
import Member from "../components/Member";
import annie from "../assets/img/headshots/Annie.jpeg"
import { useEffect } from "react";

function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

        <div className="mb-10">
        <div className="text-5xl my-[5%] text-center">Team Leads</div>
        <div className="grid grid-cols-3 h-80 gap-20">
        <Member
                        name={"Annie"}
                        email={""}
                        linkedin={""}
                        major_year={"major"}
                        img={annie}
                      />
          <Member
                        name={"Annie"}
                        email={""}
                        linkedin={""}
                        major_year={"major+year"}
                        img={annie}
                      />
          <Member
                        name={"Annie"}
                        email={""}
                        linkedin={""}
                        major_year={"major+year"}
                        img={annie}
                      />
        </div>
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
