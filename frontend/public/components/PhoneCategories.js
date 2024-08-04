import React from "react";
import { Popular, Latest, Best } from "../helpers/HomePhonesData";

const PhonesData = ({ title, phones }) => {
  return (
    <div className="phones-category">
      <h2 className="category-title">{title} Mobile Phones</h2>
      <p className="Index-line"></p>
      <div className="phones-container">
        {phones.map((phone) => (
          <div key={phone._id} className="phone-card">
            <img
              src={phone.img_url}
              alt={`${phone.brand} ${phone.model}`}
              className="phone-img"
            />
          </div>
        ))}
      </div>
      <button className="view-more-btn">View More 🢂 </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <PhonesData title="Popular" phones={Popular} />
      <PhonesData title="Latest" phones={Latest} />
      <PhonesData title="Best" phones={Best} />
    </div>
  );
};

export default App;
