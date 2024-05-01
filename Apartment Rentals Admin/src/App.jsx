import logo from "./assets/main-logo.png";
import "./App.css";
import RentalList from "./components/RentalList";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Sidebar />
        <div className="main-div">
          <RentalList />
        </div>
      </main>
      <Footer />
    </>
  );
}

function Navbar() {
  return (
    <nav className="nav-bar">
      <img src={logo}></img>
      <h1>Ici ça loue!</h1>
    </nav>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://github.com/Skarginson/mini-project-react---Apartment-Rentals-Admin-"
        target="_blank"
      >
        Lien vers Github
      </a>
    </footer>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          {" "}
          <a href="Homepage">Homepage</a>
        </li>
        <li>
          <a href="About"></a>About
        </li>
      </ul>
    </div>
  );
}

export default App;
