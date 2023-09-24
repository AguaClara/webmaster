import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTeams from "../components/BackToTeams";

function Team() {
  return (
    <>
      <Navbar />
      <BackToTeams />
      <div className="mx-auto max-w-screen-xl">
        <div className="text-center text-5xl mt-[5%]">Our Team</div>
      </div>
      <Footer />
    </>
  );
}

export default Team;
