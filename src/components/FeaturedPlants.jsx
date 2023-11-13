import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const FeaturedPlants = ({ plants }) => {
  const renderSlides = plants.map((plant, index) => (
    <div key={index} className="flex p-5">
      <div className="aspect-w-3 aspect-h-1 w-full ">
        <img
          src={plant.imageUrl}
          alt={plant.name}
          className="object-cover rounded"
        />
      </div>
      <div className="p-10 w-[40%] flex flex-col justify-center">
        <h2 className="text-xl font-bold mb-2">{plant.name}</h2>
        <p>{plant.description}</p>
      </div>
    </div>
  ));

  return (
    <div className="container mx-auto p-10 ">
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
