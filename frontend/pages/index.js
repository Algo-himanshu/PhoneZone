import { userContext } from "../context";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Card from "../public/components/Card";
import Brands from "../public/components/Brands";
import Carousel from "../public/components/Carousel";
import { FetchCarousalData } from "../public/helpers/FetchCarousalData";

const Home = () => {
  const [state] = useContext(userContext);
  const [homeData, setHomeData] = useState([]);
  const [brand, setBrand] = useState("");
  const model = "brand";
  const [carouselData, setCarouselData] = useState([]);

  const handleBrandClick = async (selectedBrand) => {
    setBrand(selectedBrand);
  };

  useEffect(() => {
    const getcData = async () => {
      try {
        const data = await FetchCarousalData();
        setCarouselData(data);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      }
    };
    getcData();
    const fetchData = async () => {
      try {
        let response;

        if (brand != "") {
          response = await axios.post(
            `${process.env.NEXT_PUBLIC_API}/fetchCarousalData`,
            {
              searchQuery: brand,
              searchFor: model,
            }
          );
        } else {
          response = await axios.post(
            `${process.env.NEXT_PUBLIC_API}/homeData`
          );
        }
        setHomeData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [brand, model]);

  if (state && state.token)
    return (
      <div>
        <Brands onBrandClick={handleBrandClick} />
        <div className="container-fluid home-bg-image"></div>
        <Carousel data={carouselData} />
        <Card searchResults={homeData} flag={false} page={"index"} />
      </div>
    );
};

export default Home;
