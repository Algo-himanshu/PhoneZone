import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Card from "../public/components/Card";
import FilterSearch from "../public/components/FilterSection";

const search = () => {
  const router = useRouter();
  const searchQuery = router.query.q;
  const searchFor = router.query.searchFor; // Remove encodeURIComponent here
  const [searchResults, setSearchResults] = useState([]);
  let flag = false;
  useEffect(() => {
    const searchResult = async () => {
      try {
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API}/search`,
          {
            searchQuery,
            searchFor,
          }
        );
        flag = true;
        setSearchResults(data);
      } catch (err) {
        console.log(err);
      }
    };
    searchResult();
  }, [router.query.q]);

  return (
    <div className="search-container">
      <FilterSearch style={{ flex: "0 0 auto" }} />
      <Card
        style={{ flex: "1" }}
        searchResults={searchResults}
        flag={flag}
        page={"search"}
      />
    </div>
  );
};

export default search;

// <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">Cras justo odio</li>
//     <li class="list-group-item">Dapibus ac facilisis in</li>
//     <li class="list-group-item">Vestibulum at eros</li>
//   </ul>
//   <div class="card-body">
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>
// </div>
