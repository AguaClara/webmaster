import React from "react";

function BackTo({ section }) {
  const scrollToSection = () => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className="fixed bottom-4 right-4 bg-white border-2 border-[#0E751C] hover:bg-[#0E751C] text-[#003C08] font-bold py-2 px-4 rounded-full"
      onClick={scrollToSection}
    >
      Back to {section}
    </button>
  );
}

export default BackTo;
