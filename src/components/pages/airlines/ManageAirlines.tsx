import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Airline } from "../../../interfaces/airline.interface";
import api from "../../../Config";

function ManageAirlines() {
  const [airlines, setAirlines] = useState<Airline[]>([]);

  useEffect(() => {
    document.title = "Manage Airlines";
    getAirlines(); // প্রথমে এই ফাংশন declare থাকতে হবে
  }, []);

  const getAirlines = () => {
    api
      .get("airlines")
      .then((res) => {
        console.log("Users received:", res.data);
        setAirlines(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  function handleDelete(id: any) {
    // console.log(id + "confirm delete");
    api
      .delete(`delete-airlines?id=${id}`)
      .then((res) => {
        console.log(res.data);
        getAirlines();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Manage Airlines</h2>

      {/* Add New Airline Form */}
      {/* <div className="card mb-4">
        <Link to="/flight-add" className="card-header">
          Add New Airline
        </Link>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="airlineName" className="form-label">
                Airline Name
              </label>
              <input
                type="text"
                className="form-control"
                id="airlineName"
                placeholder="Enter airline name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="airlineCode" className="form-label">
                Airline Code
              </label>
              <input
                type="text"
                className="form-control"
                id="airlineCode"
                placeholder="e.g. AA, BA, EK"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Airline
            </button>
          </form>
        </div>
      </div> */}

      {/* Existing Airlines Table */}
      <div className="card">
        <div className="card-header">Airline List</div>
        <div className="card-body p-0">
          <table className="table mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Airline Name</th>
                <th>Airline Country</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Static rows for now */}
              {airlines.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.airline_name}</td>
                  <td>{item.country}</td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <button className="btn btn-sm btn-warning">Edit</button>
                      <Link to="" className="btn btn-sm btn-primary">View</Link>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {/* More static rows can be added */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageAirlines;
