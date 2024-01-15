import React from "react";
import Navbar from "../components/Navbar";
import Recruitment from "../components/Recruitment";
import Footer from "../components/Footer";
import MobileNavbar from "../components/MobileNavbar";

function Apply() {
  return (
    <>
      <div className="sm:hidden">
        <Navbar />
      </div>
      <div className="md:hidden lg:hidden xl:hidden">
        <MobileNavbar />
      </div>
      <div className="text-center text-5xl mt-10 mb-10">Recruitment</div>
      <div className="mx-auto max-w-screen-xl flex items-center justify-center space-y-4 flex-col mb-20 ml-20 mr-20">
        <div className="text-xl">
          AguaClara is looking for <span> </span>
          <span className="underline">innovative</span>,<span> </span>
          <span className="underline">passionate</span>, and<span> </span>
          <span className="underline">hard-working</span> students to join our
          team and help us solve global water problems. There are spots open on
          our team not only for engineering students interested in water
          treatment research but also students with CAD or app design
          experience, as well as students with web development, marketing,
          investments, grant-writing, and finance skills. We look forward to
          building a diverse community at AguaClara!
        </div>
        <div>
          Contact the team leads at{" "}
          <span className="underline">aguaclara@cornell.edu</span> with any
          questions about the recruitment process.
        </div>
        <div className="mt-10 mb-10">
          <Recruitment />
        </div>
        <div className="space-y-1 text-center">
          <div className="font-bold text-3xl mb-5"> Common FAQs</div>
          <div>Do I need experience to join?</div>
          <div>Nope! </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Apply;
