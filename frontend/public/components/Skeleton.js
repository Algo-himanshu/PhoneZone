import React from "react";

const Skeleton = () => {
  return (
    <div className="phoneInfo">
      <div className="imgdiv">
        <img className="skeleton-loading" />
      </div>
      <div className="deviceInfo">
        <div>
          <h1 className="skeleton skeleton-text "></h1>
        </div>
        <div className="skeleton-model-name">
          <h6 className="skeleton skeleton-text "></h6>
        </div>
        <div className="deviceDesc">
          <div className="descriptionItem skeleton skeleton-text ">
            <label></label>
            <h6></h6>
          </div>
          <div className="descriptionItem skeleton skeleton-text ">
            <label></label>
            <h6></h6>
          </div>
          <div className="descriptionItem skeleton skeleton-text ">
            <label></label>
            <h6></h6>
          </div>
          <div className="descriptionItem skeleton skeleton-text ">
            <label></label>
            <h6></h6>
          </div>
        </div>
        <h3 className="skeleton skeleton-text-price"></h3>
      </div>
    </div>
  );
};

export default Skeleton;
