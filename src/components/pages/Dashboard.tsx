import React from "react";

function Dashboard(){
  return (
    <div className="container">

      {/* Title */}
      <h2 className="fw-bold mb-4">Travel Dashboard</h2>

      <div className="row">

        {/* Flight */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title fw-bold">✈️ Flight Management</h5>
              <p className="text-muted mb-3">
                Manage flights, schedules, and bookings.
              </p>
              <a href="/flight-management" className="btn btn-primary w-100">
                Manage Flights
              </a>
            </div>
          </div>
        </div>

        {/* Hotel */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title fw-bold">🏨 Hotel Management</h5>
              <p className="text-muted mb-3">
                Handle hotel rooms, reservations, and pricing.
              </p>
              <a href="/hotel-management" className="btn btn-success w-100">
                Manage Hotels
              </a>
            </div>
          </div>
        </div>

        {/* Rent-a-car */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title fw-bold">🚗 Rent a Car</h5>
              <p className="text-muted mb-3">
                Manage car rentals, availability, and bookings.
              </p>
              <a href="/car-management" className="btn btn-warning w-100">
                Manage Cars
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
