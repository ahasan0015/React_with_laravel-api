

function ManageFlight() {
  return (
    <div className="container py-4">
      <h2 className="mb-4">Manage Flights</h2>

      {/* Search Form */}
      <form className="row g-3 mb-4">
        <div className="col-md-4">
          <label htmlFor="flightNumber" className="form-label">
            Flight Number
          </label>
          <input type="text" className="form-control" id="flightNumber" placeholder="e.g., AI202" />
        </div>
        <div className="col-md-4">
          <label htmlFor="flightDate" className="form-label">
            Date
          </label>
          <input type="date" className="form-control" id="flightDate" />
        </div>
        <div className="col-md-4 d-flex align-items-end">
          <button type="submit" className="btn btn-primary w-100">
            Search
          </button>
        </div>
      </form>

      {/* Flight Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th>Flight No</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Date</th>
              <th>Departure</th>
              <th>Arrival</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AI202</td>
              <td>New York</td>
              <td>London</td>
              <td>2025-10-01</td>
              <td>10:00 AM</td>
              <td>8:00 PM</td>
              <td><span className="badge bg-success">On Time</span></td>
              <td>
                <button className="btn btn-sm btn-warning me-2">Edit</button>
                <button className="btn btn-sm btn-danger">Cancel</button>
              </td>
            </tr>
            <tr>
              <td>BA303</td>
              <td>Paris</td>
              <td>Tokyo</td>
              <td>2025-10-02</td>
              <td>1:00 PM</td>
              <td>6:00 AM</td>
              <td><span className="badge bg-danger">Delayed</span></td>
              <td>
                <button className="btn btn-sm btn-warning me-2">Edit</button>
                <button className="btn btn-sm btn-danger">Cancel</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageFlight;
