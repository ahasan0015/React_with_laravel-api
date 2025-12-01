import { Link } from "react-router-dom";

function ViewAirports() {
  const airports = [
    { id: 1, name: "Dhaka Airport", city: "Dhaka", country: "Bangladesh" },
    { id: 2, name: "Cox's Bazar Airport", city: "Cox's Bazar", country: "Bangladesh" },
  ];

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">
        <span className="text-muted fw-light">Airports / </span> View
      </h4>

      <Link to="/airports/add" className="btn btn-primary mb-3">Add New Airport</Link>

      <div className="card">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Airport Name</th>
                <th>City</th>
                <th>Country</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {airports.map((airport) => (
                <tr key={airport.id}>
                  <td>{airport.id}</td>
                  <td>{airport.name}</td>
                  <td>{airport.city}</td>
                  <td>{airport.country}</td>
                  <td>
                    <div className="d-flex gap-1">
                      <Link to={`/airports/${airport.id}`} className="btn btn-icon btn-outline-info">🔍</Link>
                      <Link to={`/airports/edit/${airport.id}`} className="btn btn-icon btn-outline-primary">✏️</Link>
                      <button className="btn btn-icon btn-outline-danger">🗑️</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewAirports;
