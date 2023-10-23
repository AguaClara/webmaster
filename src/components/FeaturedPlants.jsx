import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const FeaturedPlants = ({ plants }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="container mx-auto p-4">

      <div className="flex flex-row space-x-10">
            <div className="w-1/2 p-4  bg-slate-200 rounded-2xl">
              {/* <img src={plant.imageUrl} alt={plant.name} className="h-auto rounded" /> */}
            </div>
            <div className="w-1/2">
              <p>description description description description description description description description description description description description description description description description description descriptiodescription description description description description descriptiodescription description description description description descriptiodescription description description description description descriptiodescription description description description description descriptiodescription description description description description descriptiodescription description description description description description </p>
            </div>
          </div>
      {/* <Slider {...settings}>
        {plants.map((plant, index) => (
          <div key={index} className="flex justify center">
            <div className="w-1/2 p-4 h-full bg-slate-200">
              <img src={plant.imageUrl} alt={plant.name} className="h-auto rounded" />
            </div>
            <div className="w-1/2 p-4">
              <h2 className="text-xl font-bold mb-2">{plant.name}</h2>
              <p>{plant.description}</p>
            </div>
          </div>
        ))}
      </Slider> */}
    </div>
  );
}

export default FeaturedPlants;
