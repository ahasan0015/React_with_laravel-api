import React from "react";
import { NavLink } from "react-router-dom";
// import "../styles/navbar.css"; // import your custom CSS

 function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container-fluid">

        {/* Brand */}
        <NavLink className="navbar-brand fw-bold" to="/">
          <span className="text-primary">Travel</span>Portal.com
        </NavLink>

        {/* Navbar menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/flight"
              >
                ✈️ Flight
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/hotel"
              >
                🏨 Hotel
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/rent-car"
              >
                🚗 Rent a Car
              </NavLink>
            </li>

          </ul>

          {/* Login Button */}
          <NavLink className="btn btn-primary ms-lg-3 mt-2 mt-lg-0" to="/login">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
