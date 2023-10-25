import React from "react";
import linkedinlogo from "../assets/img/linkedin.svg";

function Member({ name, email, linkedin, major_year, img }) {
  return (
    <>
      <div className="bg-white shadow-lg px-3 py-3 rounded-3xl flex flex-col items-center"> {/* Updated this line */}
        <div>
          <img src={img} alt="Member" className="rounded-lg mb-3" />
        </div>
        <div className="flex flex-row items-center justify-center w-full"> {/* Updated this line */}
          <div>{name}</div>
          <div>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <img
                src={linkedinlogo}
                alt="LinkedIn logo"
                className="inline-block ml-2"
              />
            </a>
          </div>
        </div>
        <div>{email}</div>
        <div>{major_year}</div>
      </div>
    </>
  );
}

export default Member;
