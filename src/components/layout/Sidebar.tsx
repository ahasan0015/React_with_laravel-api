import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState<string>("");

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  return (
    <div
      className="sidebar shadow-sm p-3 bg-light"
      style={{
        width: "250px",
        height: "100vh",
        position: "fixed",
        overflowY: "auto",
      }}
    >
      <h4 className="fw-bold text-primary mb-4">Travel Panel</h4>
      <ul className="nav flex-column">

        {/* Dashboard */}
        <li>
          <NavLink to="/" className="nav-link sidebar-link">
            📊 Dashboard
          </NavLink>
        </li>

        {/* Flight Management */}
        <li className="mt-3">
          <button className="dropdown-btn" onClick={() => toggleMenu("flight")}>
            ✈️ Flight Management <span>{openMenu === "flight" ? "▲" : "▼"}</span>
          </button>
          {openMenu === "flight" && (
            <ul className="submenu">
              <li><NavLink to="/manage/airlines" className="nav-link sidebar-link">Airlines</NavLink></li>
              <li><NavLink to="/view/airports" className="nav-link sidebar-link">Airports</NavLink></li>
              <li><NavLink to="/flight-management" className="nav-link sidebar-link">Flights List</NavLink></li>
              <li><NavLink to="/flight-add" className="nav-link sidebar-link">Add New Flight</NavLink></li>
            </ul>
          )}
        </li>

        {/* Hotel Management */}
        <li className="mt-3">
          <button className="dropdown-btn" onClick={() => toggleMenu("hotel")}>
            🏨 Hotel Management <span>{openMenu === "hotel" ? "▲" : "▼"}</span>
          </button>
          {openMenu === "hotel" && (
            <ul className="submenu">
              <li><NavLink to="/view/hotels" className="nav-link sidebar-link">Hotels</NavLink></li>
              <li><NavLink to="/rooms" className="nav-link sidebar-link">Rooms</NavLink></li>
              <li><NavLink to="/hotel-bookings" className="nav-link sidebar-link">Bookings</NavLink></li>
              <li><NavLink to="/add-hotel" className="nav-link sidebar-link">Add New Hotel</NavLink></li>
            </ul>
          )}
        </li>

        {/* Rent A Car */}
        <li className="mt-3">
          <button className="dropdown-btn" onClick={() => toggleMenu("car")}>
            🚗 Rent A Car <span>{openMenu === "car" ? "▲" : "▼"}</span>
          </button>
          {openMenu === "car" && (
            <ul className="submenu">
              <li><NavLink to="/cars" className="nav-link sidebar-link">Cars</NavLink></li>
              <li><NavLink to="/car-types" className="nav-link sidebar-link">Car Types</NavLink></li>
              <li><NavLink to="/car-bookings" className="nav-link sidebar-link">Bookings</NavLink></li>
            </ul>
          )}
        </li>

        {/* Users & Roles */}
        <li className="mt-3">
          <button className="dropdown-btn" onClick={() => toggleMenu("users")}>
            👥 Users & Roles <span>{openMenu === "users" ? "▲" : "▼"}</span>
          </button>
          {openMenu === "users" && (
            <ul className="submenu">
              <li><NavLink to="/users" className="nav-link sidebar-link">Users</NavLink></li>
              <li><NavLink to="/users/create" className="nav-link sidebar-link">Create User</NavLink></li>
              <li><NavLink to="/roles" className="nav-link sidebar-link">Roles & Permissions</NavLink></li>
            </ul>
          )}
        </li>

        {/* Transactions */}
        <li className="mt-3">
          <button className="dropdown-btn" onClick={() => toggleMenu("transactions")}>
            💳 Transactions <span>{openMenu === "transactions" ? "▲" : "▼"}</span>
          </button>
          {openMenu === "transactions" && (
            <ul className="submenu">
              <li><NavLink to="/transactions/payment-history" className="nav-link sidebar-link">Payment History</NavLink></li>
              <li><NavLink to="/transactions/wallet" className="nav-link sidebar-link">Wallet / Balance</NavLink></li>
            </ul>
          )}
        </li>

        {/* Settings */}
        <li className="mt-3">
          <button className="dropdown-btn" onClick={() => toggleMenu("settings")}>
            ⚙️ Settings <span>{openMenu === "settings" ? "▲" : "▼"}</span>
          </button>
          {openMenu === "settings" && (
            <ul className="submenu">
              <li><NavLink to="/profile" className="nav-link sidebar-link">Profile</NavLink></li>
              <li><NavLink to="/system-settings" className="nav-link sidebar-link">System Settings</NavLink></li>
            </ul>
          )}
        </li>

        {/* Logout */}
        <li className="mt-4">
          <NavLink to="/logout" className="nav-link sidebar-link text-danger fw-bold">
            🚪 Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
