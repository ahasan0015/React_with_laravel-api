import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../Config"; // axios instance
// import type { Flight } from "../../interfaces/flight.interface";
// import flightDefault from "../../interfaces/flight.interface";
import type {Flight} from "../../interfaces/flight.interface";




function Booking() {
  const { id } = useParams<{ id: string }>();
  const [Flight, setFlight] = useState<Flight>(flightDefault);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (id) fetchFlight(id);
  }, [id]);

  const fetchFlight = async (flightId: string) => {
    try {
      const res = await api.get(`/flight?id=${flightId}`);
      console.log(res.data)
      setFlight(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleBooking = () => {
    // simple alert for demo
    // alert(`Booking confirmed for ${name} on flight ${flight.flight_code}`);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-primary">Flight Booking</h2>

      {/* Flight Info */}
     
      {/* Booking Form */}
      <div className="card shadow-sm rounded-4 p-4">
        <h5 className="mb-3">Passenger Details</h5>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="text" className="form-control" value={phone} onChange={e => setPhone(e.target.value)} />
        </div>
        <Link to="/ticket" className="btn btn-success fw-semibold">
          Confirm Booking
        </Link>
      </div>
    </div>
  );
}

export default Booking;
