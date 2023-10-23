import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import groupPic from "../assets/img/group_pic.jpg";

function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-xl mb-20">
        <div className=" text-5xl mt-[5%]">Questions?</div>
        <div className=" text-3xl mt-[3%]"></div>
        <div className="flex flex-row justify-between w-full text-center ">
          <div className="flex-1">
            <img src={groupPic} alt="React Image" />
          </div>
          <div className="flex-1">
            <div className=" text-10xl mt-[10%]"></div>
            <div className=" text-3xl mt-[3%]">Contact Us</div>
            <div className=" text-1xl mt-[1%]">Connect with us on...</div>
            <div className=" text-5xl mt-[5%]"></div>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/company/aguaclara-at-cornell/"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/AguaClara" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/cuaguaclara/"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
