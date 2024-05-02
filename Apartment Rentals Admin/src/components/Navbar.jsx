import logo from "../assets/main-logo.png";

function Navbar() {
    return (
      <nav className="nav-bar">
        <img src={logo}></img>
        <h1>Ici ça loue!</h1>
      </nav>
    );
  }

  export default Navbar;