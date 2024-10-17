import React from "react";
import memberData from "../data/members.json";
import Member from "./Member";

function Subteam({ name }) {
  // Find the section that matches the name prop
  let foundSubteam = null;
  for (const section of memberData.sections) {
    foundSubteam = section.subteams.find((subteam) => subteam.name === name);
    if (foundSubteam) break;
  }

  return (
    <div>
      {foundSubteam ? (
        <div className="flex flex-col ">
          <h2 className="text-3xl text-center font-bold mb-2">
            {foundSubteam.name}
          </h2>
          <div className="mb-4">
            <div className="mb-20 ">
              <div className="mb-10 text-xl space-x-10">
                <div className="">{foundSubteam.description}</div>
              </div>
              <div className="sm:flex sm:flex-col sm:gap-0 sm:space-y-2 sm:items-center grid grid-cols-4 gap-20 mb-4">
                <Member
                  key={`lead`}
                  name={foundSubteam.lead.name}
                  email={foundSubteam.lead.email}
                  linkedin={foundSubteam.lead.linkedin}
                  major_year={foundSubteam.lead.major_year}
                  img={foundSubteam.lead.img}
                  category={"Subteam Lead"}
                />
                {foundSubteam.members.map((member, memberIndex) => (
                  <Member
                    key={memberIndex}
                    name={member.name}
                    email={member.email}
                    linkedin={member.linkedin}
                    major_year={member.major_year}
                    img={member.img}
                    category={"Subteam Member"}
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
