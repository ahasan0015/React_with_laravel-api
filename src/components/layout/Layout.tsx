import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
// import Footer from "./Footer"; // optional

const Layout: React.FC = () => {
  return (
    <div className="d-flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div
        className="flex-grow-1"
        style={{ marginLeft: "250px", minHeight: "100vh" }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="p-3 p-md-4">
          <Outlet />
        </main>

        {/* Footer */}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Layout;
