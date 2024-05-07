import "./App.css";
// import RentalList from "./components/RentalList";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import ItemDetails from "./pages/ItemDetails";
import NewItemForm from "./components/NewItemForm";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Sidebar />
        <div className="main-div">
          <Routes>
            <Route path="/NewItemForm" Component={NewItemForm} />
            <Route path="/" Component={Dashboard} />
            <Route path="/about" Component={About} />
            <Route path="*" element={<h1>404 Page Not Found!</h1>} />
            <Route path="/rentals/:id" Component={ItemDetails} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

/*
Todo :
    Filter france / spain
*/
