import React, { useEffect, useRef } from "react"; // Added useRef import
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import teampic from "../assets/img/teamcommunity.jpg";
import Subteam from "../components/Subteam";
import Leadership from "../components/Leadership";
import memberData from "../data/members.json";
import BackTo from "../components/BackTo";
import teamPic from "../assets/img/oldfullteam.png";

function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Create a ref for each subteam
  const subteamRefs = memberData.sections
    .flatMap((section) =>
      section.subteams.map((subteam) => ({
        [subteam.name]: useRef(null),
      }))
    )
    .reduce((acc, ref) => ({ ...acc, ...ref }), {});

  const scrollToSubteam = (subteamName) => {
    subteamRefs[subteamName]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Navbar />
      {/* <BackToTeams /> */}
      <BackTo section="teams" />
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
          {/* <div className="text-5xl my-[5%] text-center">Team Leads</div>
          <div className="grid grid-cols-3 h-80 gap-20"></div> */}
          <Leadership />
        </div>

        <div>
          <section id="teams" className="py-4">
            <div className="mb-[10%] text-4xl flex justify-center">
              Subteams
            </div>
            <div className="flex flex-row mb-[10%]">
              <div className="flex flex-col items-center">
                {/* Map through all subteams to create navigation buttons */}
                {memberData.sections.map((section) =>
                  section.subteams.map((subteam, subteamIndex) => (
                    <button
                      key={subteamIndex}
                      onClick={() => scrollToSubteam(subteam.name)}
                      className="mb-2 text-sm py-2 px-4 hover:bg-gray-200 rounded"
                    >
                      {subteam.name}
                    </button>
                  ))
                )}
              </div>
              <div>
                <img src={teamPic} />
              </div>
            </div>
          </section>
        </div>
        <div>
          <div className="">
            {memberData.sections.map((section) =>
              section.subteams.map((subteam, subteamIndex) => (
                <div key={subteamIndex} ref={subteamRefs[subteam.name]}>
                  <Subteam name={subteam.name} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Team;
