export interface Airline {
  id: number,
  airline_name: string,
  country?: string,
}

const airlineDefault: Airline = {
  id: 0,
  airline_name: "",
  country: "",
};

export default airlineDefault;
