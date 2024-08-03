import React from "react";
import Skeleton from "./Skeleton";

const Card = ({ searchResults, flag, page }) => {
  let brand = "";

  return (
    <div className="mainBody">
      <div className="homeDisplay">
        {page === "search" ? ( //page===search?(flag==false?(!searchRsult?(print result):Nothing)?skeletonReload):(Hpmepage)
          flag === false ? (
            searchResults.length > 0 ? (
              searchResults.map((device) => (
                <div className="phoneInfo" key={device.model}>
                  <div className="imgdiv">
                    <img src={device.img_url} alt={device.model} />
                  </div>
                  <div className="deviceInfo">
                    <div>
                      <h1>{device.model}</h1>
                    </div>
                    <h6>{device.brand}</h6>
                    <div className="deviceDesc">
                      <div className="descriptionItem">
                        <label>RAM :</label>
                        <h6>{device.RAM}</h6>
                      </div>
                      <div className="descriptionItem">
                        <label>Internal Memory:</label>
                        <h6>{device.internal_memory}</h6>
                      </div>
                      <div className="descriptionItem">
                        <label>SIM :</label>
                        <h6>{device.SIM}</h6>
                      </div>
                      <div className="descriptionItem">
                        <label>CPU :</label>
                        <h6>{device.CPU}</h6>
                      </div>
                    </div>
                    <h3>Price : ₹{device.approx_price_EUR}</h3>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-center text-white">No results found</h1>
            )
          ) : (
            // Rendering skeleton loading effect when data is not loaded
            <div>
              <div>
                <Skeleton />
              </div>
              <div>
                <Skeleton />
              </div>
              <div>
                <Skeleton />
              </div>
              <div>
                <Skeleton />
              </div>
              <div>
                <Skeleton />
              </div>
              <div>
                <Skeleton />
              </div>
            </div>
          )
        ) : searchResults.length > 0 ? (
          searchResults.map((device) => {
            return (
              <div className="phoneInfo" key={device.model}>
                <div className="imgdiv">
                  <img
                    src={device.img_url}
                    alt={device.model}
                    onError={(e) => {
                      console.error(`Image not found: ${e.target.src}`, device);
                      e.target.src = "/6.jpg"; // Fallback image
                    }}
                  />
                </div>
                <div className="deviceInfo">
                  <div>
                    <h1>{device.model}</h1>
                  </div>
                  <h6>{device.brand}</h6>
                  <div className="deviceDesc">
                    <div className="descriptionItem">
                      <label>RAM :</label>
                      <h6>{device.RAM}</h6>
                    </div>
                    <div className="descriptionItem">
                      <label>Internal Memory:</label>
                      <h6>{device.internal_memory}</h6>
                    </div>
                    <div className="descriptionItem">
                      <label>SIM :</label>
                      <h6>{device.SIM}</h6>
                    </div>
                    <div className="descriptionItem">
                      <label>CPU :</label>
                      <h6>{device.CPU}</h6>
                    </div>
                  </div>
                  <h3>Price : ₹{device.approx_price_EUR}</h3>
                </div>
              </div>
            );
          })
        ) : (
          // Rendering skeleton loading effect when data is not loaded
          <div>
            <div>
              <Skeleton />
            </div>
            <div>
              <Skeleton />
            </div>
            <div>
              <Skeleton />
            </div>
            <div>
              <Skeleton />
            </div>
            <div>
              <Skeleton />
            </div>
            <div>
              <Skeleton />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
