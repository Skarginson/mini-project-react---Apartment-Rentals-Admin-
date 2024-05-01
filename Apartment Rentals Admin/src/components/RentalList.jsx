import rentals from "../assets/rentals.json";
import villachere from "../assets/villachere.jpg";
import FlagFrance from "../assets/Flag_of_France.png";
import FlagSpain from "../assets/Flag_of_Spain.png";
import { useState } from "react";

function RentalList() {
  const [rentalsAvailable, setRentals] = useState(rentals);

  function deleteRentals(name) {
    const rentalsToKeep = rentalsAvailable.results.filter(
      (rental) => rental.name !== name
    );

    setRentals({
      ...rentalsAvailable,
      results: rentalsToKeep,
    });
  }

  return (
    <div className="rentals-list">
      <h2>Rentals Lists</h2>
      {rentalsAvailable.results.map((el) => {
        return (
          <div key={el.id}>
            <p className="Name"> {el.name}</p>
            <p className="Localisation">
              {el.country} - {el.city}
            </p>
            <p className="Details">
              {el.bathrooms}
              {el.bedrooms}
              {el.price}
              {el.property_type}
            </p>
            <button onClick={() => deleteRentals(el.name)}>Delete</button>
            <img src={villachere} />
            {el.country === "France" && <img src={FlagFrance} />}
            {el.country === "Spain" && <img src={FlagSpain} />}
          </div>
        );
      })}
    </div>
  );
}

export default RentalList;

// property type : afficher ou pas un petit logo.
