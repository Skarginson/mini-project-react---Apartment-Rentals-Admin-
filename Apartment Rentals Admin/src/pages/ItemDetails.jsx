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
    <div className="item-details" key={el.id}>
      <h1 className="Name"> {el.name}</h1>
      <h2 className="Localisation">
        {el.country} - {el.city}
      </h2>
      <p className="Details">
        <span>Number of Bathroom :</span> {el.bathrooms} <br />
        <span>Number of Bedrooms :</span> {el.bedrooms} <br />
        <span>Price :</span> {el.price} <br />
        <span>Property type :</span> {el.property_type}
        <br />
        <span>Review Score</span> : {el.review_scores_rating}
        <br />
      </p>
      <p className="Description">
        <h3>What to expect :</h3>
        {el.space}
        <br />
        <h3>Why chose this rental ?</h3>
        {el.description}
        <br />
        <h3>House Rules :</h3>
        {el.house_rules}
        <br />
      </p>
      <p className="hosts">
        <span>Host :</span> {el.host_name}
        <br />
        <span>Been host since :</span> {el.host_since}
        <br />
        <span>Average response time :</span> {el.host_response_time}
        <br />
      </p>
      <p className="financials">
        <span>Price :</span> {el.price}
        <br />
        <span>Cleaning Fee :</span> {el.cleaning_fee}
        <br />
        <span>Cancellation Policy :</span> {el.cancellation_policy}
        <br />
      </p>
      <img src={villachere} className="Pictures" /> <br />
      {el.country === "France" && <img src={FlagFrance} />}
      {el.country === "Spain" && <img src={FlagSpain} />} <br />
      <Link to="/" className="back-button">
        Return to home
      </Link>
    </div>
  );
}

export default ItemDetails;
