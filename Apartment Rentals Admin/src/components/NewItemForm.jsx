/* eslint-disable react/prop-types */
import  { useState } from "react";

function NewItemForm({ setRentals}) {

  const [newRental, setNewRental] = useState({
    country: "",
    city: "",
    name: "",
    property_type: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRental((prevRental) => ({
      ...prevRental,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRentals((prevRental) => {
      console.log(prevRental)
      const newId = prevRental.idCounter + 1
      return ({
        ...prevRental,
        idCounter : newId,
        results: [...prevRental.results, {...newRental, id: newId}]
      })
    });

  };

  return (
    <form className="new-rental-form" onSubmit={handleSubmit}>
      <label htmlFor="country">
        Country
        <input
          type="text"
          name="country"
          id="country"
          value={newRental.country}
          onChange={handleChange}
        />
      </label>
      <label>
        City
        <input
          type="text"
          name="city"
          id="city"
          value={newRental.city}
          onChange={handleChange}
        />
      </label>
      <label>
        Name
        <input
          type="text"
          name="name"
          id="name"
          value={newRental.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Property type
        <input
          type="text"
          name="property_type"
          id="property_type"
          value={newRental.property_type}
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
          value={newRental.description}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Add new rental" />
    </form>
  );
}

export default NewItemForm;
