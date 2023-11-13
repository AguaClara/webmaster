import React, { useEffect, useRef } from "react"; // Import useEffect for lifecycle hooks, useRef for creating mutable ref objects.
import Navbar from "../components/Navbar"; // Importing the Navbar component.
import Footer from "../components/Footer"; // Importing the Footer component.
import teampic from "../assets/img/teamcommunity.jpg"; // Importing an image for use in the team component.
import Subteam from "../components/Subteam"; // Importing the Subteam component.
import Leadership from "../components/Leadership"; // Importing the Leadership component.
import memberData from "../data/members.json"; // Importing the member data from a JSON file.
import BackTo from "../components/BackTo"; // Importing the BackTo component for navigation.
import teamPic from "../assets/img/oldfullteam.png"; // Importing another team image.

function Team() {
  // Using useEffect to scroll to the top of the page when the component mounts.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Creating a ref for each subteam using the useRef hook and the data from the memberData JSON.
  const subteamRefs = memberData.sections
    .flatMap((section) =>
      section.subteams.map((subteam) => ({
        [subteam.name]: useRef(null), // Creating a ref object for each subteam.
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

  // The JSX for rendering the Team component.
  return (
    <>
      <Navbar /> {/* Rendering the Navbar component at the top */}
      <BackTo section="teams" /> {/* BackTo navigation component */}
      <div className="mx-auto max-w-screen-xl">
        <div className="text-5xl my-[5%]">Our Team</div>
        {/* Title for the Team page */}
        <div className="flex flex-row justify-center space-x-9">
          <img src={teampic} className="w-[50%]" /> {/* Team picture */}
          <div className="self-center text-center ">
            {/* Description of the team */}
            Founded in 2005, AguaClara Cornell pioneers research in
            community-scale water treatment technologies. AguaClara Cornell has
            partnered with AguaClara Reach and other local organizations to
            build fourteen AguaClara plants that provide safe water on tap to
            over 65,000 people, with the flagship plant in Ojojona, Honduras and
            other plants in India.
            {/* The content of the description is here */}
          </div>
        </div>
        <div className="mb-10">
          <Leadership />
          {/* Leadership component which might display team leads */}
        </div>
        <div>
          <section id="teams" className="py-4">
            {/* Subteams section */}
            <div className="mb-[10%] text-4xl flex justify-center">
              Subteams {/* Subteams heading */}
            </div>
            <div className="flex flex-row mb-[10%]">
              <div className="flex flex-col">
                {/* Buttons to navigate to each subteam */}
                {memberData.sections.map((section) =>
                  section.subteams.map((subteam, subteamIndex) => (
                    <button
                      key={subteamIndex}
                      onClick={() => scrollToSubteam(subteam.name)}
                      className="mb-2 text-sm py-2 px-4 hover:underline rounded bg-transparent"
                    >
                      {subteam.name} {/* The name of the subteam */}
                    </button>
                  ))
                )}
              </div>
              <div>
                <img src={teamPic} /> {/* Another team picture */}
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
      <Footer /> {/* Footer component at the bottom */}
    </>
  );
}

export default Team; // Exporting the Team component for use in other parts of the application.
