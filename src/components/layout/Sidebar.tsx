// import React from "react";

import { NavLink } from "react-router-dom";


 function Sidebar() {
  return (
     
    <div className="sidebar d-flex flex-column p-3 bg-light shadow-sm">
      {/* Brand */}
      <NavLink className="sidebar-brand mb-4 fw-bold text-decoration-none" to="/">
        <span className="text-primary">Travel</span>Portal
      </NavLink>


      {/* Menu */}
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">
            🏠 Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/flight">
            ✈️ Flight Management
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/hotel">
            🏨 Hotel Management
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/rent-car">
            🚗 Rent a Car
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/settings">
            ⚙️ Settings
          </NavLink>
        </li>
      </ul>

      <hr />

      {/* Profile Section */}
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          <img
            src="https://via.placeholder.com/40"
            alt="profile"
            className="rounded-circle me-2"
          />
          <strong>Admin</strong>
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li><NavLink className="dropdown-item" to="/profile">Profile</NavLink></li>
          <li><NavLink className="dropdown-item" to="/settings">Settings</NavLink></li>
          <li><hr className="dropdown-divider" /></li>
          <li><NavLink className="dropdown-item" to="/logout">Logout</NavLink></li>
        </ul>
      </div>
    </div>
  );
}
 export default Sidebar;