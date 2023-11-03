import React from "react";
import memberData from "../data/members.json";
import Member from "./Member";

function Subteam({ name }) {
  // Find the section that matches the name prop
  let foundSubteam = null;
  for (const section of memberData.sections) {
    foundSubteam = section.subteams.find((subteam) => subteam.name === name);
    if (foundSubteam) break; // If we found the subteam, we can exit the loop
  }

  // If the section exists, render it, otherwise render nothing (or some fallback UI)
  return (
    <div>
      {foundSubteam ? (
        <div>
          <h2 className="text-xl font-bold mb-2">{foundSubteam.name}</h2>
          <div className="mb-4">
            <div className="mb-20">
              <div className="mb-10">
                <div>{foundSubteam.description}</div>
              </div>
              <div className="grid grid-cols-4 gap-20 mb-4">
                <Member
                  key={`lead`}
                  name={foundSubteam.lead.name}
                  email={foundSubteam.lead.email}
                  linkedin={foundSubteam.lead.linkedin}
                  major_year={foundSubteam.lead.major_year}
                  img={foundSubteam.lead.img}
                />
                {foundSubteam.members.map((member, memberIndex) => (
                  <Member
                    key={memberIndex}
                    name={member.name}
                    email={member.email}
                    linkedin={member.linkedin}
                    major_year={member.major_year}
                    img={member.img}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>No subteam found for {name}</div>
      )}
    </div>
  );
}

export default Subteam;
