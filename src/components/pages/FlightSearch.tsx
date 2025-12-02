import React, { useEffect, useState } from "react";
import axios from "axios";
import type { Airport } from "../../interfaces/airport.interface";
import type { Flight } from "../../interfaces/flight.interface";
// import "/assets/css/flightSerch.css";

export default function FlightSearch() {
  const [airports, setAirports] = useState<Airport[]>([]);
  const [flights, setFlights] = useState<Flight[]>([]);

  const [search, setSearch] = useState({
    from: "",
    to: "",
    date: "",
    fare: "regular",
  });

  // Fetch airports
  useEffect(() => {
    axios.get("http://localhost:8000/api/airports").then((res) => {
      setAirports(res.data.data);
    });
  }, []);

  // Handle Submit
  const submitSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!search.from || !search.to || !search.date) return;

    const res = await axios.post("http://localhost:8000/api/flights/search", {
      from: search.from,
      to: search.to,
      date: search.date,
      fare: search.fare,
    });

    setFlights(res.data.data);
  };

  return (
    <div className="container">

      {/* Search Box */}
      <div className="search-box">
        <form onSubmit={submitSearch}>
          <div className="row align-items-center g-3">

            {/* From Airport */}
            <div className="col-md-4">
              <div className="airport-box">
                <p className="airport-code">From</p>
                <select
                  required
                  className="form-select border-0 p-0"
                  value={search.from}
                  onChange={(e) =>
                    setSearch({ ...search, from: e.target.value })
                  }
                >
                  <option value="">Select Airport</option>
                  {airports.map((a) => (
                    <option key={a.id} value={a.id}>
                      {a.airport_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* To Airport */}
            <div className="col-md-4">
              <div className="airport-box">
                <p className="airport-code">To</p>
                <select
                  required
                  className="form-select border-0 p-0"
                  value={search.to}
                  onChange={(e) =>
                    setSearch({ ...search, to: e.target.value })
                  }
                >
                  <option value="">Select Airport</option>
                  {airports.map((a) => (
                    <option key={a.id} value={a.id}>
                      {a.airport_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date */}
            <div className="col-md-2">
              <input
                type="date"
                required
                className="form-control"
                value={search.date}
                onChange={(e) =>
                  setSearch({ ...search, date: e.target.value })
                }
              />
            </div>

            {/* Submit */}
            <div className="col-md-2">
              <button type="submit" className="search-btn w-100">
                Search
              </button>
            </div>
          </div>
        </form>

        <hr />

        {/* Fare Types */}
        <div className="fare-type d-flex mt-2">
          <label>
            <input
              type="radio"
              name="fare"
              onChange={() => setSearch({ ...search, fare: "regular" })}
              defaultChecked
            />
            Regular Fare
          </label>
          <label>
            <input
              type="radio"
              name="fare"
              onChange={() => setSearch({ ...search, fare: "student" })}
            />
            Student Fare
          </label>
          <label>
            <input
              type="radio"
              name="fare"
              onChange={() => setSearch({ ...search, fare: "umrah" })}
            />
            Umrah Fare
          </label>
        </div>
      </div>

      <hr />

      {/* Results */}
      {flights.length > 0 ? (
        flights.map((f) => (
          <div key={f.id} className="result-card">

            <span className="best-deal">Best Deal</span>

            <div className="row align-items-center mt-3">

              {/* Airline */}
              <div className="col-md-3 d-flex align-items-start gap-3">
                <img
                  src={`/images/air/${f.airline_name
                    .toLowerCase()
                    .replace(/ /g, "_")}.png`}
                  className="flight-logo"
                />

                <div>
                  <strong>
                    {f.departure_airport} → {f.arrival_airport}
                  </strong>
                  <br />

                  <span>{f.airline_name}</span>
                  <br />
                </div>
              </div>

              {/* Time Info */}
              <div className="col-md-4">
                <div className="row">
                  <div className="col">
                    <h5 className="m-0">
                      {new Date(f.departure_time).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </h5>
                    <small>
                      {new Date(f.departure_time).toLocaleDateString()}
                    </small>
                    <br />
                    <small>{f.departure_airport} →</small>
                  </div>

                  <div className="col">
                    <h5 className="m-0">
                      {new Date(f.arrival_time).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </h5>
                    <small>
                      {new Date(f.arrival_time).toLocaleDateString()}
                    </small>
                    <br />
                    <small>{f.arrival_airport}</small>
                  </div>

                  <div className="col">
                    <span className="badge bg-light text-dark">Non-Stop</span>
                  </div>
                </div>
              </div>

              {/* Price Box */}
              <div className="col-md-3 text-end">
                <div className="price-box">
                  <div className="current-price">
                    ৳ {f.price.toLocaleString()}
                  </div>
                </div>
                <button className="select-btn mt-2">Select</button>
              </div>
            </div>

            <div className="mt-3">
              <span className="tag-refund">✔ Partially Refundable</span>
              <span className="tag-coins">💰 7</span>
              <span className="float-end view-detail">View Detail ▼</span>
            </div>
          </div>
        ))
      ) : search.from ? (
        <p>No flights found.</p>
      ) : null}
    </div>
  );
}
