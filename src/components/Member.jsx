import React from "react";

function Member({ name, email, linkedin, major_year, img }) {
  return (
    <>
      <div className="bg-white shadow-lg px-3 py-3 rounded-3xl">
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>LinkedIn: {linkedin}</div>
        <div>Major and Year: {major_year}</div>
        <div>
          <img src={img} />
        </div>
      </div>
    </>
  );
}

export default Member;
