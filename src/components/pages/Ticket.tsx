import React from "react";
// import "/assets/css/ticket.css";

const BoardingPass = () => {
  return (
    <div className="ticket-wrapper">
      <div className="ticket">
        {/* Left side */}
        <div className="ticket-left">
          <h3 className="ticket-title">BOARDING PASS</h3>

          <div className="route">
            <div className="from">
              <p className="label">FROM</p>
              <h1 className="code">AMS</h1>
              <p className="city">Amsterdam</p>
            </div>
            <div className="plane-icon">✈️</div>
            <div className="to">
              <p className="label">TO</p>
              <h1 className="code">JFK</h1>
              <p className="city">New York</p>
            </div>
          </div>

          <div className="details">
            <div>
              <p className="small-label">PASSENGER</p>
              <p className="value">John Smith</p>
            </div>
            <div>
              <p className="small-label">GATE</p>
              <p className="value">D16</p>
            </div>
            <div>
              <p className="small-label">BOARDING TIME</p>
              <p className="value">05:20</p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="ticket-right">
          <div className="passenger-info">
            <p className="small-label">NAME OF PASSENGER</p>
            <p className="value name">John Smith</p>

            <div className="route-info">
              <p>
                <span className="small-label">FROM:</span> Amsterdam / AMS
              </p>
              <p>
                <span className="small-label">TO:</span> New York / JFK
              </p>
            </div>

            <div className="flight-details">
              <p>
                <span className="small-label">FLIGHT:</span> DN7019
              </p>
              <p>
                <span className="small-label">DATE:</span> 20 AUG 25
              </p>
              <p>
                <span className="small-label">GATE:</span> D16
              </p>
              <p>
                <span className="small-label">SEAT:</span> 15C
              </p>
              <p>
                <span className="small-label">BOARDING TIME:</span> 05:20
              </p>
            </div>
          </div>

          <div className="barcode" />
        </div>
      </div>
    </div>
  );
};

export default BoardingPass;
