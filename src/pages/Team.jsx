import React, { useEffect, useRef } from "react"; // Import useEffect for lifecycle hooks, useRef for creating mutable ref objects.
import Navbar from "../components/Navbar"; // Importing the Navbar component.
import Footer from "../components/Footer"; // Importing the Footer component.
import teampic from "../assets/img/team.jpg"; // Importing an image for use in the team component.
import Subteam from "../components/Subteam"; // Importing the Subteam component.
import Leadership from "../components/Leadership"; // Importing the Leadership component.
import memberData from "../data/members.json"; // Importing the member data from a JSON file.
import BackTo from "../components/BackTo"; // Importing the BackTo component for navigation.
import teamPic from "../assets/img/oldfullteam.png"; // Importing another team image.
import monroe from "../assets/img/monroe.jpeg";
import richardson from "../assets/img/Richardson.png";

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
      <Navbar />
      <BackTo section="teams" />
      <div className="mx-auto max-w-screen-xl">
        <div className="text-5xl my-[5%]">Our Team</div>

        <div className="flex flex-row justify-center space-x-24">
          <img src={teampic} className="w-[50%] rounded-2xl" />
          <div className="self-center text-xl">
            Founded in 2005, AguaClara Cornell pioneers research in
            community-scale water treatment technologies. AguaClara Cornell has
            partnered with AguaClara Reach and other local organizations to
            build fourteen AguaClara plants that provide safe water on tap to
            over 65,000 people, with the flagship plant in Ojojona, Honduras and
            other plants in India.
          </div>
        </div>
        <div className="mb-10">
          <Leadership />
        </div>
        <div>
          <section id="teams" className="py-4">
            <div className="mb-10 text-4xl flex justify-center">Subteams</div>
            {/* Subteam navbar */}
            <div className="flex flex-row mb-[10%] space-x-10">
              <div className="flex flex-col space-y-3">
                {memberData.sections.map((section) =>
                  section.subteams.map((subteam, subteamIndex) => (
                    <button
                      key={subteamIndex}
                      onClick={() => scrollToSubteam(subteam.name)}
                      className="mb-2 text-xl px-4 hover:underline rounded bg-transparent"
                    >
                      {subteam.name}
                    </button>
                  ))
                )}
              </div>
              <div>
                <img src={teamPic} className="rounded-2xl " />
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
      <div className="mx-auto max-w-screen-xl flex flex-col ">
        <div className="text-5xl my-10">Our Advisors</div>

        <div className="container mx-auto p-10 space-y-24 mb-24">
          <div className="flex flex-row ">
            <div className="aspect-[4/3] w-1/4">
              <img
                src={monroe}
                alt="monroe"
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="p-10 w-3/4">
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
          <div className="flex flex-row ">
            <div className="p-10 w-3/4">
              <h2 className="text-2xl font-bold mb-2">Our Advisor</h2>
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
            <div className="aspect-[4/3] w-1/4 flex justify-center">
              <img
                src={richardson}
                alt="richardson"
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Team; // Exporting the Team component for use in other parts of the application.
