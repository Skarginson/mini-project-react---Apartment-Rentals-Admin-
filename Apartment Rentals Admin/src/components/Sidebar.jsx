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
          <li>
          <NavLink
            to="/NewItemForm"
            className={({ isActive }) => (isActive ? "active" : "")}
            >
            Add a new rental
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }

  export default Sidebar