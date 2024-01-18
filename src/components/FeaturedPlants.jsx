import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const FeaturedPlants = ({ plants }) => {
  const renderSlides = plants.map((plant, index) => (
    <div
      key={index}
      className="flex sm:flex-col p-5 items-center space-x-10 sm:space-x-0"
    >
      <div className="w-3/5 sm:w-full">
        <div className="aspect-w-4 aspect-h-2">
          <img
            src={plant.image}
            alt={plant.name}
            className="object-cover rounded-3xl w-full h-full"
          />
        </div>
      </div>
      <div className="w-2/5 sm:w-full p-5 flex flex-col justify-center sm:p-0">
        <h2 className="text-xl font-bold sm:mt-2 mb-2">{plant.name}</h2>
        <p className="text-xl ">{plant.description}</p>
      </div>
    </div>
  ));

  return (
    <div className=" mx-auto p-10 sm:p-0">
      <div className="shadow-lg rounded-3xl">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          className="carousel-container"
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          emulateTouch={true}
        >
          {renderSlides}
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedPlants;
