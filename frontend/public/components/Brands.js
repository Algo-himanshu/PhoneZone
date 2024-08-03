import React from "react";

const Brands = ({ onBrandClick }) => {
  const brands = [
    "Amazon",
    "Apple",
    "Google",
    "Micromax",
    "OnePlus",
    "Oppo",
    "Samsung",
    "vivo",
    "Xiaomi",
  ];

  return (
    <div className="brands">
      {brands.map((brand) => (
        <button
          key={brand}
          value={brand}
          className="brandName"
          onClick={() => onBrandClick(brand)}
        >
          {brand}
        </button>
      ))}
      <button className="brandName" onClick={() => onBrandClick("")}>
        All Brands
      </button>
    </div>
  );
};

export default Brands;
