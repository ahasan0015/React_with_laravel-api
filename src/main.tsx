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


const links = createBrowserRouter([
  {
    path: '/', element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      
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
