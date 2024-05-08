import villachere from "../assets/villachere.jpg";
import FlagFrance from "../assets/Flag_of_France.png";
import FlagSpain from "../assets/Flag_of_Spain.png";
import FlagGermany from "../assets/Flag_of_Germany.png"
// import NotFound from "../pages/NotFound";
import { Link } from "react-router-dom";

function RentalList({ rentalsAvailable, setRentals }) {
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
      {rentalsAvailable.results.map((el) => {
        return (
          <div key={el.id} className="rentals-card">
          <Link to={`/rentals/${el.id}`}>
            <div>
              <p className="name"> {el.name}</p>
              <p className="localisation">
                {el.country} - {el.city}
              </p>
              <img src={villachere} className="house"/>
              {el.country === "France" && (
                <img src={FlagFrance} className="flag" />
              )}
              {el.country === "Spain" && (
                <img src={FlagSpain} className="flag" />
              )} 
              {el.country === "Germany" && (
                <img src={FlagGermany} className="flag" />
              )}    

              <button
                className="delete-button"
                onClick={() => deleteRentals(el.name)}
              >
                Delete
              </button>
            </div>
          </Link>
          <button onClick={() => deleteRentals(el.name)} className="deleteButton">Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default RentalList;
