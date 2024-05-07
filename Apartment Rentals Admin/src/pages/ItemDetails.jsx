import rentals from "../assets/rentals.json";
import villachere from "../assets/villachere.jpg";
import FlagFrance from "../assets/Flag_of_France.png";
import FlagSpain from "../assets/Flag_of_Spain.png";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function ItemDetails() {
  const [rentalsAvailable, setRentals] = useState(rentals);
  const { id } = useParams();

  function deleteRentals(name) {
    const rentalsToKeep = rentalsAvailable.results.filter(
      (rental) => rental.name !== name
    );

    setRentals({
      ...rentalsAvailable,
      results: rentalsToKeep,
    });
  }
  const el = rentalsAvailable.results.find((el) => el.id === id);

  return (
    <div key={el.id}>
      <p className="Name"> {el.name}</p>
      <p className="Localisation">
        {el.country} - {el.city}
      </p>
      <p className="Details">
        Number of Bathroom : {el.bathrooms} <br />
        Number of Bedrooms : {el.bedrooms} <br />
        Price : {el.price} <br />
        Property type : {el.property_type}
        <br />
        Review Score : {el.review_scores_rating}
        <br />
      </p>
      <p className="Description">
        {el.space}
        <br />
        {el.description}
        <br />
        {el.house_rules}
        <br />
      </p>
      <p className="hosts">
        {el.host_name}
        <br />
        {el.host_since}
        <br />
        {el.host_response_time}
        <br />
      </p>
      <p className="financials">
        Price : {el.price}
        <br />
        Cleaning Fee : {el.cleaning_fee}
        <br />
        Cancellation Policy : {el.cancellation_policy}
        <br />
      </p>
      <img src={villachere} className="Pictures" />
      {el.country === "France" && <img src={FlagFrance} />}
      {el.country === "Spain" && <img src={FlagSpain} />}
      <Link to="/" className="back-button">
        Return to home
      </Link>
    </div>
  );
}

export default ItemDetails;
