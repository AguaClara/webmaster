import React from "react";
import data from "../data/members.json";

function Subteam() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {data.sections.map((section, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-xl font-bold mb-2">{section.name}</h2>

          {section.subteams.map((subteam, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-bold mb-2">{subteam.name}</h3>
              <div className="font-semibold">Lead: {subteam.lead}</div>
              {subteam.members.map((member, index) => (
                <div key={index} className="mb-2">
                  <div>Name: {member.name}</div>
                  <div>Email: {member.email}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Subteam;
