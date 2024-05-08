/* eslint-disable react/prop-types */
import  { useState } from "react";
import RentalList from "./RentalList";

function NewItemForm({ rentals = [RentalList] }) {
  const [rental, setRental] = useState({
    country: "",
    city: "",
    name: "",
    property_type: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRental((prevRental) => ({
      ...prevRental,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRental((prevRental) => ({
      ...prevRental,
      id: (rentals.length + 1).toString(),
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="country">
        Country
        <input
          type="text"
          name="country"
          id="country"
          value={rental.country}
          onChange={handleChange}
        />
      </label>
      <label>
        City
        <input
          type="text"
          name="city"
          id="city"
          value={rental.city}
          onChange={handleChange}
        />
      </label>
      <label>
        Name
        <input
          type="text"
          name="name"
          id="name"
          value={rental.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Property type
        <input
          type="text"
          name="property_type"
          id="property_type"
          value={rental.property_type}
          onChange={handleChange}
        />
      </label>
      <label>
        Description
        <textarea
          name="description"
          id="description"
          rows="10"
          cols="40"
          value={rental.description}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Add new rental" />
    </form>
  );
}

export default NewItemForm;
