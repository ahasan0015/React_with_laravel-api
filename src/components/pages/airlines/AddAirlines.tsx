import React, { useState, useEffect } from "react";
import api from "../../../Config";

function AddAirlines() {
  const [airline, setAirline] = useState({
    airline_name: "",
    country: "",
  });

  useEffect(() => {
    document.title = "Add Airline";
  }, []);

  // ইনপুট পরিবর্তন হ্যান্ডেল করা
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAirline({
      ...airline,
      [e.target.name]: e.target.value,
    });
  };

  // ফর্ম সাবমিট করা
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    api
      .post("create-airlines", airline)
      .then((res) => {
        console.log("Airline Created:", res.data);
        alert("Airline created successfully!");
        setAirline({ airline_name: "", country: "" });
      })
      .catch((err) => {
        console.error("Error creating airline:", err);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add New Airline</h2>

      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="airline_name" className="form-label">
                Airline Name
              </label>
              <input
                type="text"
                className="form-control"
                id="airline_name"
                name="airline_name"
                value={airline.airline_name}
                onChange={handleChange}
                placeholder="Enter airline name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <input
                type="text"
                className="form-control"
                id="country"
                name="country"
                value={airline.country}
                onChange={handleChange}
                placeholder="Enter country"
                required
              />
            </div>

            <button type="submit" className="btn btn-success">
              Add Airline
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddAirlines;
