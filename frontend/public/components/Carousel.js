// components/Carousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show five models at a time
    slidesToScroll: 3,
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 3000, // Set auto-sliding interval in milliseconds (e.g., 3000ms = 3 seconds)
  };

  return (
    <div className="carousal">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={item.id || index} className="slide">
            <div className="carousel-item">
              <div className="image-container">
                <img src={item.img_url} alt={item.name} />
              </div>
              <h3 className="brand-name">{item.model}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
