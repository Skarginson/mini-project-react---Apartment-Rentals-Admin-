import RentalList from "../components/RentalList";
import NewItemForm from "../components/NewItemForm";

function Dashboard() {
  return (
    <div>
      <NewItemForm rentals={RentalList} />
      <RentalList />
    </div>
  );
}

export default Dashboard;
