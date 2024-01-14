import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const FeaturedPlants = ({ plants }) => {
  const renderSlides = plants.map((plant, index) => (
    <div key={index} className="flex p-5 items-center space-x-10">
      <div className="w-3/5">
        <div className="aspect-w-4 aspect-h-2">
          <img
            src={plant.image}
            alt={plant.name}
            className="object-cover rounded-3xl w-full h-full"
          />
        </div>
      </div>
      <div className="w-2/5 p-5 flex flex-col justify-center">
        <h2 className="text-xl font-bold mb-2">{plant.name}</h2>
        <p>{plant.description}</p>
      </div>
    </div>
  ));

  return (
    <div className=" mx-auto p-10 ">
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
