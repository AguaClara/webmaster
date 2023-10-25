import React from "react";
import data from "../data/members.json";
import Member from "./Member";

function Subteam() {
  return (
    <div className="">
      {data.sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h2 className="text-xl font-bold mb-2">{section.name}</h2>

          <div className="mb-4">
            {section.subteams.map((subteam, subteamIndex) => (
              <div key={subteamIndex} className="mb-20">
                <h3 className="text-lg font-bold mb-2">{subteam.name}</h3>
                <div className="mb-10">
                <div>{subteam.description}</div>
                </div>
                <div className="mb-4 grid grid-cols-4 gap-20">
                  <Member
                    name={subteam.lead.name}
                    email={subteam.lead.email}
                    linkedin={subteam.lead.linkedin}
                    major_year={subteam.lead.major_year}
                    img={subteam.lead.img}
                  />

                  {subteam.members.map((member, memberIndex) => (
                    <div key={memberIndex} className="">
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
        </div>
      ))}
    </div>
  );
}

export default Subteam;
