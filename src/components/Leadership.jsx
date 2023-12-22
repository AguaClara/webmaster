import React from "react";
import data from "../data/leadership.json";
import Member from "./Member";

function Leadership() {
  return (
    <div>
      {data.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mt-10">
          <h2 className="text-3xl mb-2 text-center">{section.name}</h2>
          <div
            className={`mb-12 ${
              section.members.length < 5
                ? "flex justify-center"
                : "grid grid-cols-5 gap-x-4"
            }`}
          >
            {section.members.map((member, memberIndex) => (
              <div
                key={memberIndex}
                className={`${section.members.length < 5 ? "mx-4" : ""}`}
              >
                <Member
                  name={member.name}
                  email={member.email}
                  linkedin={member.linkedin}
                  major_year={member.major_year}
                  img={member.img}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Leadership;
