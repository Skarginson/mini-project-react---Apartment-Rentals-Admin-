import rentals from "../rentals.json";

function RentalList() {
  const appartments = rentals;

  return (
    <div className="rentals-list">
      <h2>Rentals Lists</h2>(
      {appartments.map((el) => {
        return (
          <div key={el.id}>
            {el.id}
            {el.country}
            {el.city}
            {el.name}
          </div>
        );
      })}
      )
    </div>
  );
}

export default RentalList;

// property type : afficher ou pas un petit logo.
