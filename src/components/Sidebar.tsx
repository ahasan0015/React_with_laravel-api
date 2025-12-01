function Sidebar() {
  return (
    <>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a href="/dashboard" className="nav-link active">
            <i className="bi bi-house-door-fill me-2"></i>Dashboard
          </a>
        </li>

        <li className="nav-item">
          <a href="{{ route('users.index') }}" className="nav-link">
            <i className="bi bi-person-fill me-2"></i>Users
          </a>
        </li>

        <li className="nav-item">
          <a href="{{ route('roles.index') }}" className="nav-link">
            <i className="bi bi-people me-2"></i>Roles
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="fa-solid fa-credit-card"></i> Payment
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="fa-solid fa-ticket"></i> Flight Ticket
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="fa-solid fa-hotel"></i> Hotel Book Invoice
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="fa-solid fa-car"></i> Rent A Car Invoice
          </a>
        </li>

        {/* <!-- Dropdown Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="collapse"
            href="#flightDropdown"
            role="button"
          >
            <i className="bi bi-airplane-fill me-2"></i>Flight Management
          </a>
          <div className="collapse ms-3" id="flightDropdown">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="{{ route('airlines-index') }}" className="nav-link">
                  <i className="bi bi-caret-right-fill me-2"></i>Airlines
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i className="bi bi-caret-right-fill me-2"></i>Airports
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="bi bi-person-fill me-2"></i>Flight Booking
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="bi bi-graph-up me-2"></i>Analytics
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="bi bi-gear-fill me-2"></i>Settings
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="bi bi-box-arrow-right me-2"></i>Logout
          </a>
        </li>
      </ul>
    </>
  );
}
export default Sidebar;
