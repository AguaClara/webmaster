import React from "react";
// import data from "../data/leadership.json";
import data from "../data/leadership_cleaned.json";
import Member from "./Member";

function Leadership() {
  return (
    <div>
      {data.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mt-10 flex justify-center flex-col items-center">
          <h2 className="text-3xl mb-2 text-center">{section.name}</h2>

          <div
            className={`mb-12 ${section.members.length <= 3
              ? "flex justify-center space-x-20 sm:flex-col sm:space-y-2 sm:items-center sm:space-x-0 md:flex-col md:space-y-2 md:items-center md:space-x-0"
              : "grid grid-cols-4 gap-20 mb-4 md:grid md:grid-cols-2 sm:gap-0 sm:flex sm:flex-col sm:items-center sm:space-x-0 sm:space-y-2"
              }`}
          >
            {section.members.map((member, memberIndex) => (
              <div
                key={memberIndex}
                className={`${section.members.length < 4 ? "mx-4" : ""}`}
              >
                <Member
                  name={member.name}
                  email={member.netid + `@cornell.edu`}
                  linkedin={member.linkedin}
                  major_year={member.major_year}
                  img={`src/assets/img/headshots/` + member.netid + `.jpg`}
                  category={member.category}
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
