import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Side.css";

function MobileDashNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="page" className="mobilie_header_nav stylehome1">
      <div className="mobile-menu">
        <div className="header bdrb1">
          <div className="menu_and_widgets">
            <div className="mobile_menu_bar d-flex justify-content-between align-items-center">
              <Link to="/" className="mobile_logo">
                <h2>Digically</h2>
              </Link>
              <button onClick={toggleSidebar} className="toggle-button">
                <i className="fa fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <ul className="dropdown-content">
            <li>
              <p className="fz15 fw400 ff-heading mt30 pl30">Start</p>
            </li>

            <li className="active">
              <Link to="/dashboard">
                <i className="flaticon-home mr10" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard/saved">
                <i className="flaticon-like mr10" />
                Saved
              </Link>
            </li>
            <li>
              <Link to="/dashboard/messages">
                <i className="flaticon-chat mr10" />
                Message
              </Link>
            </li>
            <li>
              <Link to="/dashboard/reviews">
                <i className="flaticon-review-1 mr10" />
                Reviews
              </Link>
            </li>
            <li>
              <Link to="/dashboard/invoice">
                <i className="flaticon-receipt mr10" />
                Invoice
              </Link>
            </li>
            <li>
              <Link to="/dashboard/payouts">
                <i className="flaticon-dollar mr10" />
                Payouts
              </Link>
            </li>
            <li>
              <p className="fz15 fw400 ff-heading mt30 pl30">
                Organize and Manage
              </p>
            </li>
            <li>
              <Link to="/dashboard/services">
                <i className="flaticon-presentation mr10" />
                Manage Services
              </Link>
            </li>
            <li>
              <p className="fz15 fw400 ff-heading mt30 pl30">Account</p>
            </li>
            <li>
              <Link to="/dashboard/profile">
                <i className="flaticon-photo mr10" />
                My Profile
              </Link>
            </li>
            <li>
              <Link to="/signin">
                <i className="flaticon-logout mr10" />
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileDashNav;
