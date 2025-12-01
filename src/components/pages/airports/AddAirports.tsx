import { useState } from "react";

function AddAirport() {
  const [airport, setAirport] = useState({ name: "", city: "", country: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAirport({ ...airport, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Airport Data:", airport);
    alert("Airport added successfully!");
    setAirport({ name: "", city: "", country: "" });
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">
        <span className="text-muted fw-light">Airports / </span> Add
      </h4>

      <div className="card p-3">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Airport Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={airport.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">City</label>
            <input
              type="text"
              name="city"
              className="form-control"
              value={airport.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Country</label>
            <input
              type="text"
              name="country"
              className="form-control"
              value={airport.country}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">Add Airport</button>
        </form>
      </div>
    </div>
  );
}

export default AddAirport;
