import React from "react";


export default function Sidebar() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light shadow-sm"
      style={{ width: "250px", height: "100vh", position: "fixed" }}
    >
      {/* Brand */}
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
      >
        <span className="fs-4 fw-bold text-primary">MyPanel</span>
      </a>
      <hr />

      {/* Menu */}
      <ul className="nav nav-pills flex-column mb-auto">

        <li className="nav-item">
          <a href="/" className="nav-link active">
            <i className="bi bi-house-door me-2"></i>
            Dashboard
          </a>
        </li>

        <li>
          <a href="/users" className="nav-link text-dark">
            <i className="bi bi-people me-2"></i>
            Users
          </a>
        </li>

        <li>
          <a href="/products" className="nav-link text-dark">
            <i className="bi bi-box-seam me-2"></i>
            Products
          </a>
        </li>

        <li>
          <a href="/orders" className="nav-link text-dark">
            <i className="bi bi-bag me-2"></i>
            Orders
          </a>
        </li>

        <li>
          <a href="/settings" className="nav-link text-dark">
            <i className="bi bi-gear me-2"></i>
            Settings
          </a>
        </li>

      </ul>

      <hr />

      {/* Profile */}
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
          <li>
            <a className="dropdown-item" href="/profile">Profile</a>
          </li>
          <li>
            <a className="dropdown-item" href="/settings">Settings</a>
          </li>
          <li><hr className="dropdown-divider" /></li>
          <li>
            <a className="dropdown-item" href="/logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
