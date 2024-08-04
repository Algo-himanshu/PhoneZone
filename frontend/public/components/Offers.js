import React from "react";

const Offers = () => {
  return (
    <div className="carousl">
      <div className="carousl-track">
        <img src="4.jpg" alt="Offer 4" />
        <img src="5.jpg" alt="Offer 5" />
        <img src="6.jpg" alt="Offer 6" />
        <img src="6.jpg" alt="Offer 6" />
        <img src="7.jpg" alt="Offer 7" />
        <img src="8.jpg" alt="Offer 8" />
        {/* Duplicate images for seamless looping */}
        <img src="4.jpg" alt="Offer 4" />
        <img src="5.jpg" alt="Offer 5" />
        <img src="6.jpg" alt="Offer 6" />
        <img src="6.jpg" alt="Offer 6" />
        <img src="7.jpg" alt="Offer 7" />
        <img src="8.jpg" alt="Offer 8" />
      </div>
    </div>
  );
};

export default Offers;
