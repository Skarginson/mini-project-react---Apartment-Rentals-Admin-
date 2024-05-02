import { NavLink } from "react-router-dom"

function Sidebar() {
    return (
      <div className="sidebar">
        <ul>
          <li>
            <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            >
            Home
            </NavLink>
          </li>
          <li>
          <NavLink
            to="/About"
            className={({ isActive }) => (isActive ? "active" : "")}
            >
            About
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }

  export default Sidebar