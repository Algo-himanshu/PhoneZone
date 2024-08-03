import React, { useState, useEffect, useContext } from "react";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import axios from "axios";
import { userContext } from "../context/index";
import { useRouter } from "next/Router";

const addaddress = () => {
  const router = useRouter();
  const [user] = useContext(userContext);
  const [country, setCountry] = useState(null);
  const [states, setStates] = useState([]);
  const [state, setState] = useState(null);
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState(null);
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState({
    flat: "",
    area: "",
    landmark: "",
  });
  const [defaultAddress, setDefaultAddress] = useState(false);
  const [instructions, setInstructions] = useState("");
  const [mounted, setMounted] = useState(false); // Add this state

  useEffect(() => {
    setMounted(true); // Set mounted to true after the component mounts
  }, []);

  useEffect(() => {
    if (country) {
      const statesList = State.getStatesOfCountry(country.value).map(
        (state) => ({
          value: state.isoCode,
          label: state.name,
        })
      );
      console.log(user);
      setStates(statesList);
      setState(null); // Reset state when country changes
      setCities([]); // Reset cities when country changes
      setCity(null); // Reset city when country changes
    }
  }, [country]);

  useEffect(() => {
    if (state) {
      const citiesList = City.getCitiesOfState(country.value, state.value).map(
        (city) => ({
          value: city.name,
          label: city.name,
        })
      );
      setCities(citiesList);
      setCity(null); // Reset city when state changes
    }
  }, [state, country]);

  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
  };

  const handleStateChange = (selectedState) => {
    setState(selectedState);
  };

  const handleCityChange = (selectedCity) => {
    setCity(selectedCity);
  };

  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = axios.post(`${process.env.NEXT_PUBLIC_API}/addAddress`, {
      user_id: user.user._id,
      country,
      state,
      city,
      fullName,
      mobileNumber,
      pincode,
      address,
      defaultAddress,
      instructions,
    });
    console.log(data);
    if (data) router.push("/alladdress");
  };

  const countries = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));
  return (
    <div className="add-address-container">
      <form onSubmit={handleSubmit} className="address-form">
        <label>
          Country/Region
          {mounted && (
            <Select
              options={countries}
              value={country}
              onChange={handleCountryChange}
            />
          )}
        </label>
        <label>
          Full name
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="First and Last name"
            required
          />
        </label>
        <label>
          Mobile number
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="May be used to assist delivery"
            required
          />
        </label>
        <label>
          Pincode
          <input
            type="text"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            placeholder="6 digits [0-9] PIN code"
            required
          />
        </label>
        <label>
          Flat, House no., Building, Company, Apartment
          <input
            type="text"
            name="flat"
            value={address.flat}
            onChange={handleAddressChange}
            required
          />
        </label>
        <label>
          Area, Street, Sector, Village
          <input
            type="text"
            name="area"
            value={address.area}
            onChange={handleAddressChange}
            required
          />
        </label>

        <label>
          Landmark
          <input
            type="text"
            name="landmark"
            value={address.landmark}
            onChange={handleAddressChange}
            placeholder="E.g. near Apollo hospital"
          />
        </label>
        <label>
          Town/City
          {mounted && (
            <Select
              options={cities}
              value={city}
              onChange={handleCityChange}
              isDisabled={!state}
              required
            />
          )}
        </label>
        <label>
          State
          {mounted && (
            <Select
              options={states}
              value={state}
              onChange={handleStateChange}
              isDisabled={!country}
              required
            />
          )}
        </label>

        <label className="default-address-label">
          <input
            type="checkbox"
            checked={defaultAddress}
            onChange={() => setDefaultAddress(!defaultAddress)}
          />
          Make this my default address
        </label>

        <label>
          Delivery instructions (optional)
          <input
            type="text"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </label>

        <button type="submit">Add Address</button>
      </form>
    </div>
  );
};

export default addaddress;
