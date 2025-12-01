import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">

        {/* Brand */}
        <a className="navbar-brand fw-bold" href="/">
          <span className="text-primary">My</span>Website
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link active fw-semibold" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="/about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="/services">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="/contact">
                Contact
              </a>
            </li>

          </ul>

          {/* Right Button */}
          <a className="btn btn-primary ms-lg-3 mt-3 mt-lg-0 px-3" href="/login">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
