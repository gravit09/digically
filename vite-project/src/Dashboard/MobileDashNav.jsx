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
              <Link to="/dashboard" className="mobile_logo">
                <h2>Digically</h2>
              </Link>
              <div className="right-side text-end">
                <a className="" href="page-login.html">
                  join
                </a>
              </div>
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
              <Link to="page-dashboard.html">
                <i className="flaticon-home mr10" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="page-dashboard-proposal.html">
                <i className="flaticon-document mr10" />
                My Proposals
              </Link>
            </li>
            <li>
              <Link to="page-dashboard-save.html">
                <i className="flaticon-like mr10" />
                Saved
              </Link>
            </li>
            <li>
              <Link to="page-dashboard-message.html">
                <i className="flaticon-chat mr10" />
                Message
              </Link>
            </li>
            <li>
              <Link to="page-dashboard-reviews.html">
                <i className="flaticon-review-1 mr10" />
                Reviews
              </Link>
            </li>
            <li>
              <Link to="page-dashboard-invoice.html">
                <i className="flaticon-receipt mr10" />
                Invoice
              </Link>
            </li>
            <li>
              <Link to="page-dashboard-payouts.html">
                <i className="flaticon-dollar mr10" />
                Payouts
              </Link>
            </li>
            <li>
              <Link to="page-dashboard-statement.html">
                <i className="flaticon-web mr10" />
                Statements
              </Link>
            </li>
            <li>
              <p className="fz15 fw400 ff-heading mt30 pl30">
                Organize and Manage
              </p>
            </li>
            <li>
              <Link to="page-dashboard-manage-service.html">
                <i className="flaticon-presentation mr10" />
                Manage Services
              </Link>
            </li>
            <li>
              <Link to="page-dashboard-manage-jobs.html">
                <i className="flaticon-briefcase mr10" />
                Manage Jobs
              </Link>
            </li>
            <li>
              <Link to="page-dashboard-manage-project.html">
                <i className="flaticon-content mr10" />
                Manage Project
              </Link>
            </li>
            <li>
              <p className="fz15 fw400 ff-heading mt30 pl30">Account</p>
            </li>
            <li>
              <Link to="page-dashboard-profile.html">
                <i className="flaticon-photo mr10" />
                My Profile
              </Link>
            </li>
            <li>
              <Link to="page-login.html">
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
