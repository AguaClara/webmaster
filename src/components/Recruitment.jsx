import React, { useState } from "react";
import recruitmentData from "../data/recruitment.json";

function MyComponent() {
  const renderApplicationsOpen = (data) => (
    <div className="p-10 h-60 rounded-3xl space-y-3">
      <div className="font-bold text-2xl">Applications Open</div>
      <h3>{data.Date}</h3>
      <p>
        Find the application form{" "}
        <a href={data["Application Link"]} className="underline font-bold">
          here
        </a>
      </p>
      <p>
        Don't forget to submit general application{" "}
        <a
          href={data["General Application Link"]}
          className="underline font-bold"
        >
          here
        </a>
      </p>
    </div>
  );

  const renderInformationSessions = (sessions) => (
    <div className="p-10 h-60 w-full rounded-3xl space-y-2">
      <div className="font-bold text-2xl">Information Sessions</div>
      <p>
        We have two information sessions, one through Zoom and one in-person
      </p>
      {Object.entries(sessions).map(([sessionName, sessionData], index) => (
        <div key={index}>
          <h4>{sessionName}</h4>
          <p>
            {sessionData.Date} {" • "}
            {sessionData.Time}
            {" • "}
            {sessionData.Zoom ? (
              <a href={sessionData.Zoom} className="underline">
                {sessionData.Location}
              </a>
            ) : (
              sessionData.Location
            )}
          </p>
        </div>
      ))}
    </div>
  );

  const renderApplicationDeadline = (data) => (
    <div className="p-10 h-60 w-full rounded-3xl  space-y-3">
      <div className="font-bold text-2xl">Applications Deadline</div>
      <h3>{data.Date}</h3>
      <p>Want to learn more?</p>
      <p>Schedule a coffee chat with one of our members!</p>
    </div>
  );

  const renderInterviewPeriod = (data) => (
    <div className="p-10 h-60 w-full rounded-3xl space-y-3">
      <div className="font-bold text-2xl">Interview Period</div>
      <div>{data.Date}</div>
      <p>
        We will send out an email to those who have moved onto the next stage in
        the recruitment process.
      </p>
    </div>
  );

  const renderDecisions = (data) => (
    <div className="p-10 h-60 w-full rounded-3xl  space-y-3">
      <div className="font-bold text-2xl">Decisions Released</div>
      <h3>{data.Date}</h3>
      <p>
        We will send out another email notifying you of our decisions! Good
        luck!
      </p>
    </div>
  );

  const renderDefault = (data) => (
    <div className="p-10 h-60 w-full rounded-3xl space-y-3"></div>
  );

  const choices = Object.entries(recruitmentData).map(
    ([title, details], index) => ({
      id: index,
      title: title,
      content: (() => {
        switch (title) {
          case "Applications Open":
            return renderApplicationsOpen(details);
          case "Information Sessions":
            return renderInformationSessions(details);
          case "Application Deadline":
            return renderApplicationDeadline(details);
          case "Interview Period":
            return renderInterviewPeriod(details);
          case "Decisions Released":
            return renderDecisions(details);
          default:
            return renderDefault(details);
        }
      })(),
    })
  );

  const [selectedChoice, setSelectedChoice] = useState(choices[0]);

  return (
    <div className="flex w-full sm:flex-col ">
      <nav className="w-1/4 sm:w-auto p-4 sm:p-0">
        {choices.map((choice) => (
          <button
            key={choice.id}
            className={`w-full text-left p-2 mb-1 bg-transparent${selectedChoice.id === choice.id ? " underline text-[#05C6F1]" : ""
              }`}
            onClick={() => setSelectedChoice(choice)}
          >
            {choice.title}
          </button>
        ))}
      </nav>

      <div className="w-3/4 sm:w-auto p-4">
        <div className="w-full h-60 sm:h-64 overflow-auto rounded-3xl shadow-lg">
          {selectedChoice.content}
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
