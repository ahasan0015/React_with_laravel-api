

function AddNewFlight() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add New Flight</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="flightNumber" className="form-label">Flight Number</label>
          <input type="text" className="form-control" id="flightNumber" placeholder="Enter flight number" />
        </div>

        <div className="mb-3">
          <label htmlFor="origin" className="form-label">Origin</label>
          <input type="text" className="form-control" id="origin" placeholder="Enter origin airport/city" />
        </div>

        <div className="mb-3">
          <label htmlFor="destination" className="form-label">Destination</label>
          <input type="text" className="form-control" id="destination" placeholder="Enter destination airport/city" />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input type="date" className="form-control" id="date" />
        </div>

        <div className="mb-3">
          <label htmlFor="time" className="form-label">Time</label>
          <input type="time" className="form-control" id="time" />
        </div>

        <button type="submit" className="btn btn-primary">Add Flight</button>
      </form>
    </div>
  );
}

export default AddNewFlight;
