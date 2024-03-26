import React from "react";
import Navbar from "../components/Navbar";
import Recruitment from "../components/Recruitment";
import Footer from "../components/Footer";
import MobileNavbar from "../components/MobileNavbar";
import { useEffect } from "react";

function Apply() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="sm:hidden">
        <Navbar />
      </div>
      <div className="md:hidden lg:hidden xl:hidden">
        <MobileNavbar />
      </div>
      <div className="text-center text-5xl mt-10 mb-10">Recruitment</div>
      <div className="mx-auto max-w-screen-xl flex items-center justify-center space-y-4 flex-col mb-20 ml-20 mr-20 sm:ml-10 sm:mr-10">
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
        <div className="text-xl">
          Currently the application cycle has closed. Please check back when it opens next semester!
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
          <div className="font-bold text-3xl"> Common FAQs</div>
          <br></br>
          <div className="font-bold">
            What does the application process look like?
          </div>
          <div>
            The application process is simple! We just have a few short essay
            questions to better understand why applications are interested in
            joining and whether or not they would be a good fit.
          </div>
          <br></br>
          <div className="font-bold">
            Do we need prior skill (does having prior experience boost your
            application)?{" "}
          </div>
          <div>
            You don't need prior knowledge or skill to join, but it does help a
            candidate stand out. What week are mainly looking for in applicants
            is a willingness to learn and being passionate about Aguaclara's
            mission!
          </div>
          <br></br>
          <div className="font-bold">
            What are some things I need to highlight in my application?
          </div>
          <div>
            Some things that you would want to highlight are why you are
            interested in joining Aguaclara and your previous experiences that
            show you'd make a good team member!
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Apply;
