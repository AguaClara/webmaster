import React, { useState } from "react";
import linkedinlogo from "../assets/img/linkedin.svg";

function Member({ name, email, linkedin, major_year, img }) {
  const [imgValid, setImgValid] = useState(true);

  const handleImageError = () => {
    setImgValid(false);
  };

  return (
    <div className="bg-white w-full max-w-[240px] shadow-lg px-3 py-3 rounded-3xl flex flex-col items-center">
      <div
        className={`aspect-[5/6] w-full flex justify-center items-center rounded-3xl overflow-hidden mb-3 ${
          imgValid ? "bg-[#f0f0f0]" : "bg-gray-400"
        }`}
      >
        {imgValid ? (
          <img
            src={img}
            alt="Member"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full flex justify-center items-center" />
        )}
      </div>
      <div className="flex flex-row items-center justify-center w-full">
        <div>{name}</div>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2"
        >
          <img
            src={linkedinlogo}
            alt="LinkedIn logo"
            className="inline-block"
          />
        </a>
      </div>
      <div>{email}</div>
      <div>{major_year}</div>
    </div>
  );
}

export default Member;
