import React, { useState } from "react";
import linkedinlogo from "../assets/img/linkedin.svg";
import styles from "./Member.module.css";

function Member({ name, email, linkedin, major_year, img }) {
  const [imgValid, setImgValid] = useState(true);

  const handleImageError = () => {
    setImgValid(false);
  };

  return (
    <div className="bg-white shadow-lg px-3 py-3 rounded-3xl flex flex-col items-center">
      <div className={styles.imageContainer}>
        {imgValid ? (
          <img
            src={img}
            alt="Member"
            className={styles.memberImage} // Use CSS Module here
            onError={handleImageError}
          />
        ) : (
          <div className={styles.imagePlaceholder} /> // Use CSS Module here
        )}
      </div>
      <div className="flex flex-row items-center justify-center w-full">
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
  );
}

export default Member;
