import React from "react";

function BackTo({ section }) {
  // This function will be called when the button is clicked
  const scrollToSection = () => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      // Scroll to the section with smooth behavior
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Render a button that on click will scroll to the section
    <button
      className="fixed bottom-4 right-4 bg-slate-300 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full"
      onClick={scrollToSection}
    >
      Back to {section}
    </button>
  );
}

export default BackTo;
