import React from "react";
import data from "../data/leadership.json";
import Member from "./Member";

function Leadership() {
  return (
    <div className="">
      {data.sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h2 className="text-xl font-bold mb-2">{section.name}</h2>
          <div className="mb-4 grid grid-cols-4 gap-20">
            {section.members.map((member, memberIndex) => (
              <div key={memberIndex}>
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
