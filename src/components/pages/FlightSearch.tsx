import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../Config";
import type { Flight } from "../../interfaces/flight.interface";
import flightDefault from "../../interfaces/flight.interface";
import { formatBDDate } from "../utils/formatBDDate";
import { formatBDTime } from "../utils/convertBDTime";
import "../../../public/assets/css/flightSerch.css";

function FlightSearch() {
  // const [departure, setDeparture] = useState("");
  // const [arrival, setArrival] = useState("");
  // const [date, setDate] = useState("");
  const [flights, setFlights] = useState<Flight[]>([flightDefault]);
  // const navigate = useNavigate();

  // Static airports
  // const airports = [
  //   { id: 1, city: "Dhaka" },
  //   { id: 2, city: "Chittagong" },
  //   { id: 3, city: "Sylhet" },
  //   { id: 4, city: "Cox's Bazar" },
  //   { id: 5, city: "Rajshahi" },
  // ];

  // Static flight data
  // const allFlights = [
  //   {
  //     flight_id: 1,
  //     airline_name: "Biman Bangladesh Airlines",
  //     departure_airport: "Dhaka Airport",
  //     arrival_airport: "Chittagong Airport",
  //     departure_time: "2025-10-22T09:00:00",
  //     arrival_time: "2025-10-22T10:00:00",
  //   },
  //   {
  //     flight_id: 2,
  //     airline_name: "US-Bangla Airlines",
  //     departure_airport: "Chittagong Airport",
  //     arrival_airport: "Dhaka Airport",
  //     departure_time: "2025-10-22T15:00:00",
  //     arrival_time: "2025-10-22T16:00:00",
  //   },
  //   {
  //     flight_id: 3,
  //     airline_name: "NovoAir",
  //     departure_airport: "Dhaka Airport",
  //     arrival_airport: "Sylhet Airport",
  //     departure_time: "2025-10-22T07:30:00",
  //     arrival_time: "2025-10-22T08:20:00",
  //   },
  // ];
  useEffect(() => {
    getAllFlights();
  }, []);

  const getAllFlights = () => {
    api
      .get("all-flights")
      .then((res) => {
        console.log(res.data);
        setFlights(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleSearch = () => {
  // const results = allFlights.filter(
  //   (f) =>
  //     f.departure_airport.toLowerCase().includes(departure.toLowerCase()) &&
  //     f.arrival_airport.toLowerCase().includes(arrival.toLowerCase()) &&
  //     f.departure_time.startsWith(date)
  // );
  // setFlights(results);
  // };

  return (
    <div className="flight-search-container">
      <h2>All Flights</h2>

      {/* <div className="flight-search-form">
        <input
          type="text"
          placeholder="Departure City"
          list="departure-options"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
        />
        <datalist id="departure-options">
          {airports.map((airport) => (
            <option key={airport.id} value={airport.city} />
          ))}
        </datalist>

        <input
          type="text"
          placeholder="Arrival City"
          list="arrival-options"
          value={arrival}
          onChange={(e) => setArrival(e.target.value)}
        />
        <datalist id="arrival-options">
          {airports.map((airport) => (
            <option key={airport.id} value={airport.city} />
          ))}
        </datalist>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div> */}

      {/* <ul className="flight-list">
        {flights.length > 0 ? (
          flights.map((f) => (
            <li key={f.flight_id} className="flight-item">
              <div className="flight-info">
                <span className="airline">{f.airline_name}</span> |{" "}
                {f.departure_airport} → {f.arrival_airport} |{" "}
                {new Date(f.departure_time).toLocaleString()}
              </div>
              <button onClick={() => navigate(`/book/${f.flight_id}`)}>
                Book
              </button>
            </li>
          ))
        ) : (
          <p>No flights found</p>
        )}
      </ul> */}
      {/* {flights.map((item) => (
        <div key={item.id}>
          <div className="card card-body rounded mb-3">
            <h5 className="text-primary">{item.airline_name}</h5>
          </div>
        </div>
      ))} */}

      {flights.map((item) => (
        <div
          key={item.id}
          className="flight-card card shadow-sm border-0 rounded-5 mb-3"
        >
          <div className="card-body p-4">
            {/* Top badges */}
            <div className="mb-3 d-flex gap-2 flex-wrap">
              <span className="badge bg-light text-dark px-3 py-1 rounded-pill small">
                Partially Refundable
              </span>
              <span className="badge bg-warning text-dark px-3 py-1 rounded-pill small">
                Preferred
              </span>
            </div>

            {/* Flight details */}
            <div className="d-flex justify-content-between align-items-center flex-wrap position-relative">
              {/* Departure */}
              <div className="text-center flex-fill">
                <div className="fw-bold text-success fs-5">
                  {item.departure_airport}
                </div>
                <div className="text-warning small">{item.departure_city}</div>
                <div>{formatBDDate(item.departure_time ?? "")}</div>
                <div className="small text-muted">
                  {formatBDTime(item.departure_time ?? "")}
                </div>
                <div className="small text-primary">{item.airline_name}</div>
              </div>

              {/* Flight path */}
              <div className="d-flex flex-column align-items-center flex-fill position-relative">
                {/* <div className="small text-muted mb-1">
                  {item.duration ?? "55min"}
                </div> */}
                <div className="d-flex align-items-center w-100">
                  <div className="flex-grow-1 border-top border-secondary"></div>
                  <i className="bi bi-airplane-fill mx-2 text-secondary"></i>
                  <div className="flex-grow-1 border-top border-secondary"></div>
                </div>
                <div className="text-muted small mt-1">
                  {"NonStop"}
                </div>
              </div>

              {/* Arrival */}
              <div className="text-center flex-fill">
                <div className="fw-bold text-success fs-5">
                  {item.arrival_airport}
                </div>
                <div className="text-warning small">{item.arrival_city}</div>
                <div className="small text-muted">
                  {formatBDTime(item.arrival_time ?? "")}
                </div>
              </div>
            </div>

            <hr className="my-3" />

            {/* Bottom info */}
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <div className="fw-bold text-success">
                {`Flight ${item.id}`}
              </div>
              <div className="d-flex align-items-baseline gap-2">
                {/* <span className="fs-4 fw-bold text-primary">
                  ৳ {item.price}
                </span>
                {item.old_price && (
                  <span className="text-muted text-decoration-line-through small">
                    ৳ {item.old_price}
                  </span>
                )} */}
              </div>

              <a href={"/booking/"+item.id} target="_blank"
                className="btn btn-warning text-white fw-semibold rounded-pill px-4" // open in new tab
              >
                Select →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FlightSearch;
