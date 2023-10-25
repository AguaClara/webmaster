import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const FeaturedPlants = ({ plants }) => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  const renderSlides = plants.map((plant, index) => (
    <div key={index} className="flex">
      <div className="w-1/3 p-4 h-full">
        <img src={plant.imageUrl} alt={plant.name} className="h-auto rounded" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{plant.name}</h2>
        <p>{plant.description}</p>
      </div>
    </div>
  ));

  return (
    <div className="container mx-auto p-4">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        className="carousel-container"
        showThumbs={false}
        showStatus={false}
      >
        {renderSlides}
      </Carousel>
    </div>
  );
};

export default FeaturedPlants;
