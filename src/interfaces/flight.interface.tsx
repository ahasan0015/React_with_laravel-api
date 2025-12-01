export interface Flight {
  id: number,
  airline_id?: number,
  departure_airport_id?: number,
  arrival_airport_id?: number,
  departure_time?: string,
  arrival_time?: string,
  flight_type_id?: number,
  airline_name?: string,
  departure_airport?: string,
  departure_city?: string,
  arrival_airport?: string,
  arrival_city?: string,
}

const flightDefault: Flight = {
  id: 0,
  airline_id: 0,
  departure_airport_id: 0,
  arrival_airport_id: 0,
  departure_time: "",
  arrival_time: "",
  flight_type_id: 0,
  airline_name: "",
  departure_airport: "",
  departure_city: "",
  arrival_airport: "",
  arrival_city: "",
};

export default flightDefault;
