import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {
  return (
  <>
    {/* <!-- Travel Booking Navbar --> */}
    <nav className="navbar navbar-expand-lg travel-navbar">
    <Navbar/>
    </nav>

    {/* <!-- Sidebar --> */}
    <nav className="sidebar bg-light shadow">
        <Sidebar/>
    </nav>


    





   
  
  
  </>;
}
export default Layout;
