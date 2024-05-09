import "./App.css";
// import RentalList from "./components/RentalList";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import ItemDetails from "./pages/ItemDetails";
import NewItemForm from "./components/NewItemForm";
import rentals from "./assets/rentals.json";
import { useState } from "react";
import RentalList from "./components/RentalList";

function App() {
  const [rentalsAvailable, setRentals] = useState(rentals);

  return (
    <>
      <Navbar />
      <main>
        <Sidebar />
        <div className="main-div">
          <Routes>
            <Route
              path="/NewItemForm"
              element={
                <NewItemForm
                  rentalsAvailable={rentalsAvailable}
                  setRentals={setRentals}
                />
              }
            />
            <Route
              path="/"
              element={
                <RentalList
                  rentalsAvailable={rentalsAvailable}
                  setRentals={setRentals}
                />
              }
            />
            <Route path="/about" Component={About} />
            <Route path="*" element={<h1>404 Page Not Found!</h1>} />
            <Route
              path="/rentals/:id"
              element={
                <ItemDetails
                  rentalsAvailable={rentalsAvailable}
                  setRentals={setRentals}
                />
              }
            />
            <Route
              path="/edit-rental/:id"
              element={
                <NewItemForm
                  rentalsAvailable={rentalsAvailable}
                  setRentals={setRentals}
                />
              }
            />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
