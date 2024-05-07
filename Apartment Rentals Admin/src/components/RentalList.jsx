import villachere from "../assets/villachere.jpg";
import FlagFrance from "../assets/Flag_of_France.png";
import FlagSpain from "../assets/Flag_of_Spain.png";
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
          <Link key={el.id} to={`/rentals/${el.id}`}>
            <div className="rentals-card">
              <p className="name"> {el.name}</p>
              <p className="localisation">
                {el.country} - {el.city}
              </p>
              <img src={villachere} />
              {el.country === "France" && (
                <img src={FlagFrance} className="flag" />
              )}
              {el.country === "Spain" && (
                <img src={FlagSpain} className="flag" />
              )}
              <button onClick={() => deleteRentals(el.name)}>Delete</button>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default RentalList;
