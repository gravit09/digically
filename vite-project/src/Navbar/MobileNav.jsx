import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Dashboard/Side.css";
import SignIn from "../SignIn";
function MobileDashNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [isLoggedIn, SetIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`/api/authenticate`);
        if (response.data.success == true) {
          SetIsLoggedIn(true);
          console.log(response.data.success);
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkAuth();
  }, []);

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
              <p className="fz15 fw400 ff-heading mt30 pl30">Digically</p>
            </li>
            <li className="active">
              <Link to="/">
                <i className="flaticon-home mr10" />
                Home
              </Link>
            </li>
            {isLoggedIn && (
              <li>
                <Link to="/dashboard">
                  <i className="flaticon-like mr10" />
                  Dashboard
                </Link>
              </li>
            )}
            <li>
              <Link to="/dashboard/messages">
                <i className="flaticon-chat mr10" />
                Message
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile">
                <i className="flaticon-review-1 mr10" />
                My Profile
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="flaticon-receipt mr10" />
                About
              </Link>
            </li>
            <li>
              <Link to="/signin">
                <i className="flaticon-dollar mr10" />
                {isLoggedIn ? "Logout" : "SignIn"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileDashNav;
