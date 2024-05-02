import rentals from "../assets/rentals.json";
import villachere from "../assets/villachere.jpg";
import FlagFrance from "../assets/Flag_of_France.png";
import FlagSpain from "../assets/Flag_of_Spain.png";
// import NotFound from "../pages/NotFound";
import { useState,} from "react";
import { Link } from "react-router-dom";



function RentalList() {
  const [rentalsAvailable, setRentals] = useState(rentals);
  // const { id } = useParams();
  // const rental = rentals.find((rent) => rent.id === parseInt(id));
  // if (!rental){
  //   return (
  //     <NotFound/>
  //   )
  // }
// console.log(id)

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
          <Link key={el.id} to={`/rentals/${el.id}`}>
            <p className="Name"> {el.name}</p>
            <p className="Localisation">
              {el.country} - {el.city}
            </p>
            <button onClick={() => deleteRentals(el.name)}>Delete</button>
            <img src={villachere} className="Pictures"/>
            {el.country === "France" && <img src={FlagFrance} />}
            {el.country === "Spain" && <img src={FlagSpain} />}
          </Link>
      

        );
      })}
    </div>
  );
}

export default RentalList;
