import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//css
import "bootstrap/dist/css/bootstrap.min.css";
//js
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Error from './components/pages/Error';
import Layout from './components/layout/Layout';
import Dashboard from './components/pages/Dashboard';
import ManageFlight from './components/pages/manageflight/ManageFlight';
import AddNewFlight from './components/pages/manageflight/AddNewFlight';
import ManageAirlines from './components/pages/airlines/ManageAirlines';
import AddAirlines from './components/pages/airlines/AddAirlines';
import ManageUsers from './components/pages/users/ManageUsers';
import CreateUser from './components/pages/users/CreateUsers';
import UpdateUser from './components/pages/users/UpdateUsers';
import DetailsUser from './components/pages/users/DetailsUsers';
import ManageRoles from './components/pages/rolls/ManageRolls';
import EditRole from './components/pages/rolls/EditRoll';
import CreateRole from './components/pages/rolls/CreateRolls';
import RoleDetails from './components/pages/rolls/RollDetails';
import ViewAirports from './components/pages/airports/ViewAirports';
import AddAirport from './components/pages/airports/AddAirports';
import FlightSearch from './components/pages/FlightSearch';
import Booking from './components/pages/Bookings';
import BookingTicket from './components/pages/Ticket'


const links = createBrowserRouter([
  {
    path: '/', element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      {path:'/flight-management', element:<ManageFlight/>},
      {path:'/flight-add', element:<AddNewFlight/>},
      {path:'/manage/airlines', element:<ManageAirlines/>},
      {path:'/add-airlines', element:<AddAirlines/>},
      {path:'/users', element:<ManageUsers/>},
      {path:'/users/create', element:<CreateUser/>},
      {path: '/update-user/:id', element: <UpdateUser /> },
      {path: '/users/:id', element: <DetailsUser /> },
      {path:'/roles', element:<ManageRoles/>},
      {path:'/edit/roles/:id', element:<EditRole/>},
      {path:'/create/roles', element:<CreateRole/>},
      {path:'/create/roles', element:<RoleDetails/>},
      {path:'/view/airports', element:<ViewAirports/>},
      {path:'/add/airports', element:<AddAirport/>},
      {path:'/flight/search', element:<FlightSearch/>},
      {path:'/booking/:id', element:<Booking/>},
      {path:'/ticket', element:<BookingTicket/>}
      
    ],
  },
  
  { path: '/login', element: <h1>Login</h1> },
  { path: '/pos', element: <h1>Pos</h1> },
  { path: '*', element: <Error /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={links} />
  </StrictMode>
);
