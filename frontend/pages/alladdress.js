import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { userContext } from "../context/index";
import { useRouter } from "next/Router";

const alladdress = () => {
  const [state, setState] = useContext(userContext);
  const [addresses, setAddresses] = useState([]);
  const router = useRouter();

  useEffect(() => {
    console.log("Component mounted");
    if (state && state.user && state.user._id) {
      console.log("State updated, fetching data");
      getData();
    }
  }, [state.user._id]);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/allAddress`,
        {
          params: { userId: state.user._id },
        }
      );
      setAddresses(data);
      console.log("Data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleAddAddress = () => {
    router.push("/addaddress");
  };

  return (
    <div className="addres-container">
      <div className="car" onClick={handleAddAddress}>
        <h2>Add Address</h2>
      </div>
      {addresses.map((address) => (
        <div key={address._id} className="car">
          <p className="keyName">{address.fullName}</p>
          <p className="line"></p>
          <p>
            <span className="key">Address:</span> {address.address.flat},{" "}
            {address.address.area}
          </p>
          <p>
            <span className="key">Landmark:</span> {address.address.landmark}
          </p>
          <p>
            <span className="key">City:</span> {address.city}
          </p>
          <p>
            <span className="key">State:</span> {address.state}
          </p>
          <p>
            <span className="key">Pincode:</span> {address.pincode}
          </p>
          <p>
            <span className="key">Country:</span> {address.country}
          </p>
          <p>
            <span className="key">Mobile:</span> {address.mobileNumber}
          </p>
          <p>
            <span className="key">Instructions:</span> {address.instructions}
          </p>
        </div>
      ))}
    </div>
  );
};

export default alladdress;
