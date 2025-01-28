import React, { useState } from "react";
import linkedinlogo from "../assets/img/linkedin.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


function Member({ name, email, linkedin, major_year, img, category }) {
  const [imgValid, setImgValid] = useState(true);

  const handleImageError = () => {
    console.log(img)
    setImgValid(false);
  };

  return (
    <div className="bg-white w-full max-w-[240px] shadow-lg px-3 py-3 rounded-3xl flex flex-col items-center ">
      <div
        className={`relative aspect-[5/6] w-full flex justify-center items-center rounded-3xl overflow-hidden mb-3 ${imgValid ? "" : "bg-gray-400 object-cover"
          }`} 
      >
        
        {imgValid ? (
          <LazyLoadImage
            src={img}
            alt="Member"
            effect="blur"
            className="h-full w-full object-cover "
            onError={handleImageError}
          />
        ) : (
          <div className="bg-gray-400 h-full w-full object-cover " />
        )}
      </div>
      {category ? (
        <div className="flex flex-row items-center justify-center w-full text-center font-bold ">{category}</div>

      ) : (
        <div>
        </div>

      )}
      <div className="flex flex-row items-center justify-center w-full ">
        <div className="flex text-center">{name}</div>
        {linkedin && (
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
        )}
      </div>
      <div className="flex flex-row items-center justify-center w-full text-center">{email}</div>
      <div className="flex flex-row items-center justify-center w-full text-center">{major_year}</div>
    </div>
  );
}

export default Member;
