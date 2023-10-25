import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

function Apply() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Navbar />
      <div className="text-center text-5xl mt-[5%]">Apply</div>
    </>
  );
}

export default Apply;
