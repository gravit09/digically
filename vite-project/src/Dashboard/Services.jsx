import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ToggleContext } from "../App";

function Services() {
  const { show } = useContext(ToggleContext);

  return (
    <div className="dashboard_content_wrapper">
      <div
        className={`dashboard dashboard_wrapper pr30 pr0-xl ${
          show ? "" : "dsh_board_sidebar_hidden"
        }`}
      >
        <div className="dashboard__sidebar d-none d-lg-block">
          <div className="dashboard_sidebar_list">
            <p className="fz15 fw400 ff-heading pl30">Start</p>
            <div className="sidebar_list_item">
              <Link to="/dashboard" className="items-center ">
                <i className="flaticon-home mr15" />
                Dashboard
              </Link>
            </div>
            <div className="sidebar_list_item">
              <Link to="/dashboard/saved" className="items-center">
                <i className="flaticon-like mr15" />
                Saved
              </Link>
            </div>
            <div className="sidebar_list_item ">
              <Link to="/dashboard/messages" className="items-center">
                <i className="flaticon-chat mr15" />
                Message
              </Link>
            </div>
            <div className="sidebar_list_item ">
              <Link to="/dashboard/reviews" className="items-center ">
                <i className="flaticon-review-1 mr15" />
                Reviews
              </Link>
            </div>
            <div className="sidebar_list_item">
              <Link to="/dashboard/invoice" className="items-center">
                <i className="flaticon-receipt mr15" />
                Invoice
              </Link>
            </div>
            <div className="sidebar_list_item">
              <Link to="/dashboard/payouts" className="items-center">
                <i className="flaticon-dollar mr15" />
                Payouts
              </Link>
            </div>
            <p className="fz15 fw400 ff-heading pl30 mt30">
              Organize and Manage
            </p>
            <div className="sidebar_list_item ">
              <Link
                to="/dashboard/services"
                className="items-center -is-active"
              >
                <i className="flaticon-presentation mr15" />
                Manage Services
              </Link>
            </div>
            <p className="fz15 fw400 ff-heading pl30 mt30">Account</p>
            <div className="sidebar_list_item ">
              <Link to="/dashboard/profile" className="items-center">
                <i className="flaticon-photo mr15" />
                My Profile
              </Link>
            </div>
            <div className="sidebar_list_item ">
              <Link to="/signin" className="items-center">
                <i className="flaticon-logout mr15" />
                Logout
              </Link>
            </div>
          </div>
        </div>
        <div className="dashboard__main pl0-md">
          <div className="dashboard__content hover-bgc-color">
            <div className="row pb40">
              <div className="col-lg-9">
                <div className="dashboard_title_area">
                  <h2>Manage Services</h2>
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="text-lg-end">
                  <Link
                    to="/AddServices"
                    className="ud-btn btn-dark default-box-shadow2"
                  >
                    Add Service
                    <i className="fal fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                  <div className="navtab-style1">
                    <nav>
                      <div
                        className="nav nav-tabs mb30"
                        id="nav-tab2"
                        role="tablist"
                      >
                        <button
                          className="nav-link active fw500 ps-0"
                          id="nav-item1-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-item1"
                          type="button"
                          role="tab"
                          aria-controls="nav-item1"
                          aria-selected="true"
                        >
                          Active Services
                        </button>
                        <button
                          className="nav-link fw500"
                          id="nav-item2-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-item2"
                          type="button"
                          role="tab"
                          aria-controls="nav-item2"
                          aria-selected="false"
                        >
                          Pending Services
                        </button>
                        <button
                          className="nav-link fw500"
                          id="nav-item3-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-item3"
                          type="button"
                          role="tab"
                          aria-controls="nav-item3"
                          aria-selected="false"
                        >
                          Ongoing Services
                        </button>
                        <button
                          className="nav-link fw500"
                          id="nav-item4-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-item4"
                          type="button"
                          role="tab"
                          aria-controls="nav-item4"
                          aria-selected="false"
                        >
                          Completed Services
                        </button>
                        <button
                          className="nav-link fw500"
                          id="nav-item5-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-item5"
                          type="button"
                          role="tab"
                          aria-controls="nav-item5"
                          aria-selected="false"
                        >
                          Canceled Services
                        </button>
                      </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav-item1"
                        role="tabpanel"
                        aria-labelledby="nav-item1-tab"
                      >
                        <div className="packages_table table-responsive">
                          <table className="table-style3 table at-savesearch">
                            <thead className="t-head">
                              <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Category</th>
                                <th scope="col">Type/Cost</th>
                                <th scope="col">Actions</th>
                              </tr>
                            </thead>
                            <tbody className="t-body">
                              <tr>
                                <th
                                  className="dashboard-img-service"
                                  scope="row"
                                >
                                  <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                    <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                      <img
                                        className="w-100"
                                        src="/images/listings/g-1.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                      <h6 className="list-title mb-0">
                                        <a href="page-services-single.html">
                                          I will design modern websites in figma
                                          or adobe xd
                                        </a>
                                      </h6>
                                      <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                        <li>Delievred with in a day</li>
                                        <li>Delievry Time Descreased</li>
                                        <li>Upload apps to Stores</li>
                                      </ul>
                                    </div>
                                  </div>
                                </th>
                                <td className="align-top">
                                  <span className="fz15 fw400">
                                    Web &amp; App Design
                                  </span>
                                </td>
                                <td className="align-top">
                                  <span className="fz14 fw400">
                                    $500.00/Fixed
                                  </span>
                                </td>
                                <td className="align-top">
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="icon me-2"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                    >
                                      <span className="flaticon-pencil" />
                                    </a>
                                    <a
                                      href="#"
                                      className="icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th
                                  className="dashboard-img-service"
                                  scope="row"
                                >
                                  <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                    <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                      <img
                                        className="w-100"
                                        src="/images/listings/g-2.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                      <h6 className="list-title mb-0">
                                        <a href="page-services-single.html">
                                          I will design modern websites in figma
                                          or adobe xd
                                        </a>
                                      </h6>
                                      <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                        <li>Delievred with in a day</li>
                                        <li>Delievry Time Descreased</li>
                                        <li>Upload apps to Stores</li>
                                      </ul>
                                    </div>
                                  </div>
                                </th>
                                <td className="align-top">
                                  <span className="fz15 fw400">
                                    Web &amp; App Design
                                  </span>
                                </td>
                                <td className="align-top">
                                  <span className="fz14 fw400">
                                    $500.00/Fixed
                                  </span>
                                </td>
                                <td className="align-top">
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="icon me-2"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                    >
                                      <span className="flaticon-pencil" />
                                    </a>
                                    <a
                                      href="#"
                                      className="icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th
                                  className="dashboard-img-service"
                                  scope="row"
                                >
                                  <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                    <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                      <img
                                        className="w-100"
                                        src="/images/listings/g-3.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                      <h6 className="list-title mb-0">
                                        <a href="page-services-single.html">
                                          I will design modern websites in figma
                                          or adobe xd
                                        </a>
                                      </h6>
                                      <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                        <li>Delievred with in a day</li>
                                        <li>Delievry Time Descreased</li>
                                        <li>Upload apps to Stores</li>
                                      </ul>
                                    </div>
                                  </div>
                                </th>
                                <td className="align-top">
                                  <span className="fz15 fw400">
                                    Web &amp; App Design
                                  </span>
                                </td>
                                <td className="align-top">
                                  <span className="fz14 fw400">
                                    $500.00/Fixed
                                  </span>
                                </td>
                                <td className="align-top">
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="icon me-2"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                    >
                                      <span className="flaticon-pencil" />
                                    </a>
                                    <a
                                      href="#"
                                      className="icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th
                                  className="dashboard-img-service"
                                  scope="row"
                                >
                                  <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                    <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                      <img
                                        className="w-100"
                                        src="/images/listings/g-4.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                      <h6 className="list-title mb-0">
                                        <a href="page-services-single.html">
                                          I will design modern websites in figma
                                          or adobe xd
                                        </a>
                                      </h6>
                                      <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                        <li>Delievred with in a day</li>
                                        <li>Delievry Time Descreased</li>
                                        <li>Upload apps to Stores</li>
                                      </ul>
                                    </div>
                                  </div>
                                </th>
                                <td className="align-top">
                                  <span className="fz15 fw400">
                                    Web &amp; App Design
                                  </span>
                                </td>
                                <td className="align-top">
                                  <span className="fz14 fw400">
                                    $500.00/Fixed
                                  </span>
                                </td>
                                <td className="align-top">
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="icon me-2"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                    >
                                      <span className="flaticon-pencil" />
                                    </a>
                                    <a
                                      href="#"
                                      className="icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th
                                  className="dashboard-img-service"
                                  scope="row"
                                >
                                  <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                    <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                      <img
                                        className="w-100"
                                        src="/images/listings/g-5.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                      <h6 className="list-title mb-0">
                                        <a href="page-services-single.html">
                                          I will design modern websites in figma
                                          or adobe xd
                                        </a>
                                      </h6>
                                      <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                        <li>Delievred with in a day</li>
                                        <li>Delievry Time Descreased</li>
                                        <li>Upload apps to Stores</li>
                                      </ul>
                                    </div>
                                  </div>
                                </th>
                                <td className="align-top">
                                  <span className="fz15 fw400">
                                    Web &amp; App Design
                                  </span>
                                </td>
                                <td className="align-top">
                                  <span className="fz14 fw400">
                                    $500.00/Fixed
                                  </span>
                                </td>
                                <td className="align-top">
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="icon me-2"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                    >
                                      <span className="flaticon-pencil" />
                                    </a>
                                    <a
                                      href="#"
                                      className="icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="mbp_pagination text-center mt30">
                            <ul className="page_navigation">
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  {" "}
                                  <span className="fas fa-angle-left" />
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  1
                                </a>
                              </li>
                              <li
                                className="page-item active"
                                aria-current="page"
                              >
                                <a className="page-link" href="#">
                                  2 <span className="sr-only">(current)</span>
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  3
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  4
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  5
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  ...
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  20
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  <span className="fas fa-angle-right" />
                                </a>
                              </li>
                            </ul>
                            <p className="mt10 mb-0 pagination_page_count text-center">
                              1 – 20 of 300+ property available
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-item2"
                        role="tabpanel"
                        aria-labelledby="nav-item2-tab"
                      >
                        <div className="packages_table table-responsive">
                          <table className="table-style3 table at-savesearch">
                            <thead className="t-head">
                              <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Category</th>
                                <th scope="col">Type/Cost</th>
                                <th scope="col">Actions</th>
                              </tr>
                            </thead>
                            <tbody className="t-body">
                              <tr>
                                <th
                                  className="dashboard-img-service"
                                  scope="row"
                                >
                                  <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                    <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                      <img
                                        className="w-100"
                                        src="/images/listings/g-1.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                      <h6 className="list-title mb-0">
                                        <a href="page-services-single.html">
                                          I will design modern websites in figma
                                          or adobe xd
                                        </a>
                                      </h6>
                                      <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                        <li>Delievred with in a day</li>
                                        <li>Delievry Time Descreased</li>
                                        <li>Upload apps to Stores</li>
                                      </ul>
                                    </div>
                                  </div>
                                </th>
                                <td className="align-top">
                                  <span className="fz15 fw400">
                                    Web &amp; App Design
                                  </span>
                                </td>
                                <td className="align-top">
                                  <span className="fz14 fw400">
                                    $500.00/Fixed
                                  </span>
                                </td>
                                <td className="align-top">
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="icon me-2"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                    >
                                      <span className="flaticon-pencil" />
                                    </a>
                                    <a
                                      href="#"
                                      className="icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th
                                  className="dashboard-img-service"
                                  scope="row"
                                >
                                  <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                    <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                      <img
                                        className="w-100"
                                        src="/images/listings/g-2.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                      <h6 className="list-title mb-0">
                                        <a href="page-services-single.html">
                                          I will design modern websites in figma
                                          or adobe xd
                                        </a>
                                      </h6>
                                      <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                        <li>Delievred with in a day</li>
                                        <li>Delievry Time Descreased</li>
                                        <li>Upload apps to Stores</li>
                                      </ul>
                                    </div>
                                  </div>
                                </th>
                                <td className="align-top">
                                  <span className="fz15 fw400">
                                    Web &amp; App Design
                                  </span>
                                </td>
                                <td className="align-top">
                                  <span className="fz14 fw400">
                                    $500.00/Fixed
                                  </span>
                                </td>
                                <td className="align-top">
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="icon me-2"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                    >
                                      <span className="flaticon-pencil" />
                                    </a>
                                    <a
                                      href="#"
                                      className="icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th
                                  className="dashboard-img-service"
                                  scope="row"
                                >
                                  <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                    <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                      <img
                                        className="w-100"
                                        src="/images/listings/g-3.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                      <h6 className="list-title mb-0">
                                        <a href="page-services-single.html">
                                          I will design modern websites in figma
                                          or adobe xd
                                        </a>
                                      </h6>
                                      <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                        <li>Delievred with in a day</li>
                                        <li>Delievry Time Descreased</li>
                                        <li>Upload apps to Stores</li>
                                      </ul>
                                    </div>
                                  </div>
                                </th>
                                <td className="align-top">
                                  <span className="fz15 fw400">
                                    Web &amp; App Design
                                  </span>
                                </td>
                                <td className="align-top">
                                  <span className="fz14 fw400">
                                    $500.00/Fixed
                                  </span>
                                </td>
                                <td className="align-top">
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="icon me-2"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                    >
                                      <span className="flaticon-pencil" />
                                    </a>
                                    <a
                                      href="#"
                                      className="icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th
                                  className="dashboard-img-service"
                                  scope="row"
                                >
                                  <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                    <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                      <img
                                        className="w-100"
                                        src="/images/listings/g-4.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                      <h6 className="list-title mb-0">
                                        <a href="page-services-single.html">
                                          I will design modern websites in figma
                                          or adobe xd
                                        </a>
                                      </h6>
                                      <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                        <li>Delievred with in a day</li>
                                        <li>Delievry Time Descreased</li>
                                        <li>Upload apps to Stores</li>
                                      </ul>
                                    </div>
                                  </div>
                                </th>
                                <td className="align-top">
                                  <span className="fz15 fw400">
                                    Web &amp; App Design
                                  </span>
                                </td>
                                <td className="align-top">
                                  <span className="fz14 fw400">
                                    $500.00/Fixed
                                  </span>
                                </td>
                                <td className="align-top">
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="icon me-2"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                    >
                                      <span className="flaticon-pencil" />
                                    </a>
                                    <a
                                      href="#"
                                      className="icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th
                                  className="dashboard-img-service"
                                  scope="row"
                                >
                                  <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                    <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                      <img
                                        className="w-100"
                                        src="/images/listings/g-5.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                      <h6 className="list-title mb-0">
                                        <a href="page-services-single.html">
                                          I will design modern websites in figma
                                          or adobe xd
                                        </a>
                                      </h6>
                                      <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                        <li>Delievred with in a day</li>
                                        <li>Delievry Time Descreased</li>
                                        <li>Upload apps to Stores</li>
                                      </ul>
                                    </div>
                                  </div>
                                </th>
                                <td className="align-top">
                                  <span className="fz15 fw400">
                                    Web &amp; App Design
                                  </span>
                                </td>
                                <td className="align-top">
                                  <span className="fz14 fw400">
                                    $500.00/Fixed
                                  </span>
                                </td>
                                <td className="align-top">
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="icon me-2"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                    >
                                      <span className="flaticon-pencil" />
                                    </a>
                                    <a
                                      href="#"
                                      className="icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="mbp_pagination text-center mt30">
                            <ul className="page_navigation">
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  {" "}
                                  <span className="fas fa-angle-left" />
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  1
                                </a>
                              </li>
                              <li
                                className="page-item active"
                                aria-current="page"
                              >
                                <a className="page-link" href="#">
                                  2 <span className="sr-only">(current)</span>
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  3
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  4
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  5
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  ...
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  20
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  <span className="fas fa-angle-right" />
                                </a>
                              </li>
                            </ul>
                            <p className="mt10 mb-0 pagination_page_count text-center">
                              1 – 20 of 300+ property available
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-item3"
                        role="tabpanel"
                        aria-labelledby="nav-item3-tab"
                      >
                        <div className="packages_table table-responsive">
                          <table className="table-style3 table at-savesearch">
                            <thead className="t-head">
                              <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Category</th>
                                <th scope="col">Type/Cost</th>
                                <th scope="col">Actions</th>
                              </tr>
                            </thead>
                            <tbody className="t-body">
                              <tr>
                                <th
                                  className="dashboard-img-service"
                                  scope="row"
                                >
                                  <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                    <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                      <img
                                        className="w-100"
                                        src="/images/listings/g-1.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                      <h6 className="list-title mb-0">
                                        <a href="page-services-single.html">
                                          I will design modern websites in figma
                                          or adobe xd
                                        </a>
                                      </h6>
                                      <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                        <li>Delievred with in a day</li>
                                        <li>Delievry Time Descreased</li>
                                        <li>Upload apps to Stores</li>
                                      </ul>
                                    </div>
                                  </div>
                                </th>
                                <td className="align-top">
                                  <span className="fz15 fw400">
                                    Web &amp; App Design
                                  </span>
                                </td>
                                <td className="align-top">
                                  <span className="fz14 fw400">
                                    $500.00/Fixed
                                  </span>
                                </td>
                                <td className="align-top">
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="icon me-2"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                    >
                                      <span className="flaticon-pencil" />
                                    </a>
                                    <a
                                      href="#"
                                      className="icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th
                                  className="dashboard-img-service"
                                  scope="row"
                                >
                                  <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                    <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                      <img
                                        className="w-100"
                                        src="/images/listings/g-2.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                      <h6 className="list-title mb-0">
                                        <a href="page-services-single.html">
                                          I will design modern websites in figma
                                          or adobe xd
                                        </a>
                                      </h6>
                                      <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                        <li>Delievred with in a day</li>
                                        <li>Delievry Time Descreased</li>
                                        <li>Upload apps to Stores</li>
                                      </ul>
                                    </div>
                                  </div>
                                </th>
                                <td className="align-top">
                                  <span className="fz15 fw400">
                                    Web &amp; App Design
                                  </span>
                                </td>
                                <td className="align-top">
                                  <span className="fz14 fw400">
                                    $500.00/Fixed
                                  </span>
                                </td>
                                <td className="align-top">
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="icon me-2"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                    >
                                      <span className="flaticon-pencil" />
                                    </a>
                                    <a
                                      href="#"
                                      className="icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th
                                  className="dashboard-img-service"
                                  scope="row"
                                >
                                  <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                    <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                      <img
                                        className="w-100"
                                        src="/images/listings/g-3.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                      <h6 className="list-title mb-0">
                                        <a href="page-services-single.html">
                                          I will design modern websites in figma
                                          or adobe xd
                                        </a>
                                      </h6>
                                      <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                        <li>Delievred with in a day</li>
                                        <li>Delievry Time Descreased</li>
                                        <li>Upload apps to Stores</li>
                                      </ul>
                                    </div>
                                  </div>
                                </th>
                                <td className="align-top">
                                  <span className="fz15 fw400">
                                    Web &amp; App Design
                                  </span>
                                </td>
                                <td className="align-top">
                                  <span className="fz14 fw400">
                                    $500.00/Fixed
                                  </span>
                                </td>
                                <td className="align-top">
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="icon me-2"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                    >
                                      <span className="flaticon-pencil" />
                                    </a>
                                    <a
                                      href="#"
                                      className="icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th
                                  className="dashboard-img-service"
                                  scope="row"
                                >
                                  <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                    <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                      <img
                                        className="w-100"
                                        src="/images/listings/g-4.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                      <h6 className="list-title mb-0">
                                        <a href="page-services-single.html">
                                          I will design modern websites in figma
                                          or adobe xd
                                        </a>
                                      </h6>
                                      <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                        <li>Delievred with in a day</li>
                                        <li>Delievry Time Descreased</li>
                                        <li>Upload apps to Stores</li>
                                      </ul>
                                    </div>
                                  </div>
                                </th>
                                <td className="align-top">
                                  <span className="fz15 fw400">
                                    Web &amp; App Design
                                  </span>
                                </td>
                                <td className="align-top">
                                  <span className="fz14 fw400">
                                    $500.00/Fixed
                                  </span>
                                </td>
                                <td className="align-top">
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="icon me-2"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                    >
                                      <span className="flaticon-pencil" />
                                    </a>
                                    <a
                                      href="#"
                                      className="icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th
                                  className="dashboard-img-service"
                                  scope="row"
                                >
                                  <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                    <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                      <img
                                        className="w-100"
                                        src="/images/listings/g-5.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                      <h6 className="list-title mb-0">
                                        <a href="page-services-single.html">
                                          I will design modern websites in figma
                                          or adobe xd
                                        </a>
                                      </h6>
                                      <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                        <li>Delievred with in a day</li>
                                        <li>Delievry Time Descreased</li>
                                        <li>Upload apps to Stores</li>
                                      </ul>
                                    </div>
                                  </div>
                                </th>
                                <td className="align-top">
                                  <span className="fz15 fw400">
                                    Web &amp; App Design
                                  </span>
                                </td>
                                <td className="align-top">
                                  <span className="fz14 fw400">
                                    $500.00/Fixed
                                  </span>
                                </td>
                                <td className="align-top">
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="icon me-2"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                    >
                                      <span className="flaticon-pencil" />
                                    </a>
                                    <a
                                      href="#"
                                      className="icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="mbp_pagination text-center mt30">
                            <ul className="page_navigation">
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  {" "}
                                  <span className="fas fa-angle-left" />
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  1
                                </a>
                              </li>
                              <li
                                className="page-item active"
                                aria-current="page"
                              >
                                <a className="page-link" href="#">
                                  2 <span className="sr-only">(current)</span>
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  3
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  4
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  5
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  ...
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  20
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  <span className="fas fa-angle-right" />
                                </a>
                              </li>
                            </ul>
                            <p className="mt10 mb-0 pagination_page_count text-center">
                              1 – 20 of 300+ property available
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-item4"
                        role="tabpanel"
                        aria-labelledby="nav-item4-tab"
                      >
                        <div className="packages_table table-responsive">
                          <table className="table-style3 table at-savesearch">
                            <thead className="t-head">
                              <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Category</th>
                                <th scope="col">Type/Cost</th>
                                <th scope="col">Actions</th>
                              </tr>
                            </thead>
                            <tbody className="t-body">
                              <tr>
                                <th
                                  className="dashboard-img-service"
                                  scope="row"
                                >
                                  <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                    <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                      <img
                                        className="w-100"
                                        src="/images/listings/g-1.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                      <h6 className="list-title mb-0">
                                        <a href="page-services-single.html">
                                          I will design modern websites in figma
                                          or adobe xd
                                        </a>
                                      </h6>
                                      <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                        <li>Delievred with in a day</li>
                                        <li>Delievry Time Descreased</li>
                                        <li>Upload apps to Stores</li>
                                      </ul>
                                    </div>
                                  </div>
                                </th>
                                <td className="align-top">
                                  <span className="fz15 fw400">
                                    Web &amp; App Design
                                  </span>
                                </td>
                                <td className="align-top">
                                  <span className="fz14 fw400">
                                    $500.00/Fixed
                                  </span>
                                </td>
                                <td className="align-top">
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="icon me-2"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                    >
                                      <span className="flaticon-pencil" />
                                    </a>
                                    <a
                                      href="#"
                                      className="icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th
                                  className="dashboard-img-service"
                                  scope="row"
                                >
                                  <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                    <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                      <img
                                        className="w-100"
                                        src="/images/listings/g-2.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                      <h6 className="list-title mb-0">
                                        <a href="page-services-single.html">
                                          I will design modern websites in figma
                                          or adobe xd
                                        </a>
                                      </h6>
                                      <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                        <li>Delievred with in a day</li>
                                        <li>Delievry Time Descreased</li>
                                        <li>Upload apps to Stores</li>
                                      </ul>
                                    </div>
                                  </div>
                                </th>
                                <td className="align-top">
                                  <span className="fz15 fw400">
                                    Web &amp; App Design
                                  </span>
                                </td>
                                <td className="align-top">
                                  <span className="fz14 fw400">
                                    $500.00/Fixed
                                  </span>
                                </td>
                                <td className="align-top">
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="icon me-2"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                    >
                                      <span className="flaticon-pencil" />
                                    </a>
                                    <a
                                      href="#"
                                      className="icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th
                                  className="dashboard-img-service"
                                  scope="row"
                                >
                                  <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                    <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                      <img
                                        className="w-100"
                                        src="/images/listings/g-3.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                      <h6 className="list-title mb-0">
                                        <a href="page-services-single.html">
                                          I will design modern websites in figma
                                          or adobe xd
                                        </a>
                                      </h6>
                                      <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                        <li>Delievred with in a day</li>
                                        <li>Delievry Time Descreased</li>
                                        <li>Upload apps to Stores</li>
                                      </ul>
                                    </div>
                                  </div>
                                </th>
                                <td className="align-top">
                                  <span className="fz15 fw400">
                                    Web &amp; App Design
                                  </span>
                                </td>
                                <td className="align-top">
                                  <span className="fz14 fw400">
                                    $500.00/Fixed
                                  </span>
                                </td>
                                <td className="align-top">
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="icon me-2"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                    >
                                      <span className="flaticon-pencil" />
                                    </a>
                                    <a
                                      href="#"
                                      className="icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th
                                  className="dashboard-img-service"
                                  scope="row"
                                >
                                  <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                    <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                      <img
                                        className="w-100"
                                        src="/images/listings/g-4.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                      <h6 className="list-title mb-0">
                                        <a href="page-services-single.html">
                                          I will design modern websites in figma
                                          or adobe xd
                                        </a>
                                      </h6>
                                      <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                        <li>Delievred with in a day</li>
                                        <li>Delievry Time Descreased</li>
                                        <li>Upload apps to Stores</li>
                                      </ul>
                                    </div>
                                  </div>
                                </th>
                                <td className="align-top">
                                  <span className="fz15 fw400">
                                    Web &amp; App Design
                                  </span>
                                </td>
                                <td className="align-top">
                                  <span className="fz14 fw400">
                                    $500.00/Fixed
                                  </span>
                                </td>
                                <td className="align-top">
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="icon me-2"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                    >
                                      <span className="flaticon-pencil" />
                                    </a>
                                    <a
                                      href="#"
                                      className="icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th
                                  className="dashboard-img-service"
                                  scope="row"
                                >
                                  <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                    <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                      <img
                                        className="w-100"
                                        src="/images/listings/g-5.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                      <h6 className="list-title mb-0">
                                        <a href="page-services-single.html">
                                          I will design modern websites in figma
                                          or adobe xd
                                        </a>
                                      </h6>
                                      <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                        <li>Delievred with in a day</li>
                                        <li>Delievry Time Descreased</li>
                                        <li>Upload apps to Stores</li>
                                      </ul>
                                    </div>
                                  </div>
                                </th>
                                <td className="align-top">
                                  <span className="fz15 fw400">
                                    Web &amp; App Design
                                  </span>
                                </td>
                                <td className="align-top">
                                  <span className="fz14 fw400">
                                    $500.00/Fixed
                                  </span>
                                </td>
                                <td className="align-top">
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="icon me-2"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                    >
                                      <span className="flaticon-pencil" />
                                    </a>
                                    <a
                                      href="#"
                                      className="icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="mbp_pagination text-center mt30">
                            <ul className="page_navigation">
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  {" "}
                                  <span className="fas fa-angle-left" />
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  1
                                </a>
                              </li>
                              <li
                                className="page-item active"
                                aria-current="page"
                              >
                                <a className="page-link" href="#">
                                  2 <span className="sr-only">(current)</span>
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  3
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  4
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  5
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  ...
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  20
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  <span className="fas fa-angle-right" />
                                </a>
                              </li>
                            </ul>
                            <p className="mt10 mb-0 pagination_page_count text-center">
                              1 – 20 of 300+ property available
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-item5"
                        role="tabpanel"
                        aria-labelledby="nav-item5-tab"
                      >
                        <div className="packages_table table-responsive">
                          <table className="table-style3 table at-savesearch">
                            <thead className="t-head">
                              <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Category</th>
                                <th scope="col">Type/Cost</th>
                                <th scope="col">Actions</th>
                              </tr>
                            </thead>
                            <tbody className="t-body">
                              <tr>
                                <th
                                  className="dashboard-img-service"
                                  scope="row"
                                >
                                  <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                    <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                      <img
                                        className="w-100"
                                        src="/images/listings/g-1.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                      <h6 className="list-title mb-0">
                                        <a href="page-services-single.html">
                                          I will design modern websites in figma
                                          or adobe xd
                                        </a>
                                      </h6>
                                      <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                        <li>Delievred with in a day</li>
                                        <li>Delievry Time Descreased</li>
                                        <li>Upload apps to Stores</li>
                                      </ul>
                                    </div>
                                  </div>
                                </th>
                                <td className="align-top">
                                  <span className="fz15 fw400">
                                    Web &amp; App Design
                                  </span>
                                </td>
                                <td className="align-top">
                                  <span className="fz14 fw400">
                                    $500.00/Fixed
                                  </span>
                                </td>
                                <td className="align-top">
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="icon me-2"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                    >
                                      <span className="flaticon-pencil" />
                                    </a>
                                    <a
                                      href="#"
                                      className="icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th
                                  className="dashboard-img-service"
                                  scope="row"
                                >
                                  <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                    <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                      <img
                                        className="w-100"
                                        src="/images/listings/g-2.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                      <h6 className="list-title mb-0">
                                        <a href="page-services-single.html">
                                          I will design modern websites in figma
                                          or adobe xd
                                        </a>
                                      </h6>
                                      <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                        <li>Delievred with in a day</li>
                                        <li>Delievry Time Descreased</li>
                                        <li>Upload apps to Stores</li>
                                      </ul>
                                    </div>
                                  </div>
                                </th>
                                <td className="align-top">
                                  <span className="fz15 fw400">
                                    Web &amp; App Design
                                  </span>
                                </td>
                                <td className="align-top">
                                  <span className="fz14 fw400">
                                    $500.00/Fixed
                                  </span>
                                </td>
                                <td className="align-top">
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="icon me-2"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                    >
                                      <span className="flaticon-pencil" />
                                    </a>
                                    <a
                                      href="#"
                                      className="icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th
                                  className="dashboard-img-service"
                                  scope="row"
                                >
                                  <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                    <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                      <img
                                        className="w-100"
                                        src="/images/listings/g-3.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                      <h6 className="list-title mb-0">
                                        <a href="page-services-single.html">
                                          I will design modern websites in figma
                                          or adobe xd
                                        </a>
                                      </h6>
                                      <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                        <li>Delievred with in a day</li>
                                        <li>Delievry Time Descreased</li>
                                        <li>Upload apps to Stores</li>
                                      </ul>
                                    </div>
                                  </div>
                                </th>
                                <td className="align-top">
                                  <span className="fz15 fw400">
                                    Web &amp; App Design
                                  </span>
                                </td>
                                <td className="align-top">
                                  <span className="fz14 fw400">
                                    $500.00/Fixed
                                  </span>
                                </td>
                                <td className="align-top">
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="icon me-2"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                    >
                                      <span className="flaticon-pencil" />
                                    </a>
                                    <a
                                      href="#"
                                      className="icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th
                                  className="dashboard-img-service"
                                  scope="row"
                                >
                                  <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                    <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                      <img
                                        className="w-100"
                                        src="/images/listings/g-4.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                      <h6 className="list-title mb-0">
                                        <a href="page-services-single.html">
                                          I will design modern websites in figma
                                          or adobe xd
                                        </a>
                                      </h6>
                                      <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                        <li>Delievred with in a day</li>
                                        <li>Delievry Time Descreased</li>
                                        <li>Upload apps to Stores</li>
                                      </ul>
                                    </div>
                                  </div>
                                </th>
                                <td className="align-top">
                                  <span className="fz15 fw400">
                                    Web &amp; App Design
                                  </span>
                                </td>
                                <td className="align-top">
                                  <span className="fz14 fw400">
                                    $500.00/Fixed
                                  </span>
                                </td>
                                <td className="align-top">
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="icon me-2"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                    >
                                      <span className="flaticon-pencil" />
                                    </a>
                                    <a
                                      href="#"
                                      className="icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th
                                  className="dashboard-img-service"
                                  scope="row"
                                >
                                  <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                    <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                      <img
                                        className="w-100"
                                        src="/images/listings/g-5.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                      <h6 className="list-title mb-0">
                                        <a href="page-services-single.html">
                                          I will design modern websites in figma
                                          or adobe xd
                                        </a>
                                      </h6>
                                      <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                        <li>Delievred with in a day</li>
                                        <li>Delievry Time Descreased</li>
                                        <li>Upload apps to Stores</li>
                                      </ul>
                                    </div>
                                  </div>
                                </th>
                                <td className="align-top">
                                  <span className="fz15 fw400">
                                    Web &amp; App Design
                                  </span>
                                </td>
                                <td className="align-top">
                                  <span className="fz14 fw400">
                                    $500.00/Fixed
                                  </span>
                                </td>
                                <td className="align-top">
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="icon me-2"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit"
                                    >
                                      <span className="flaticon-pencil" />
                                    </a>
                                    <a
                                      href="#"
                                      className="icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete"
                                    >
                                      <span className="flaticon-delete" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="mbp_pagination text-center mt30">
                            <ul className="page_navigation">
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  {" "}
                                  <span className="fas fa-angle-left" />
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  1
                                </a>
                              </li>
                              <li
                                className="page-item active"
                                aria-current="page"
                              >
                                <a className="page-link" href="#">
                                  2 <span className="sr-only">(current)</span>
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  3
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  4
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  5
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  ...
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  20
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  <span className="fas fa-angle-right" />
                                </a>
                              </li>
                            </ul>
                            <p className="mt10 mb-0 pagination_page_count text-center">
                              1 – 20 of 300+ property available
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="dashboard_footer pt30 pb30">
            <div className="container">
              <div className="row align-items-center justify-content-center justify-content-md-between">
                <div className="col-auto">
                  <div className="copyright-widget">
                    <p className="mb-md-0">
                      © Digically. 2023 . All rights reserved.
                    </p>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="footer_bottom_right_btns at-home8 text-center text-lg-end">
                    <ul className="p-0 m-0">
                      <li className="list-inline-item bg-white">
                        <select className="selectpicker show-tick">
                          <option>US$ USD</option>
                          <option>Euro</option>
                          <option>Pound</option>
                        </select>
                      </li>
                      <li className="list-inline-item bg-white">
                        <select className="selectpicker show-tick">
                          <option>English</option>
                          <option>Frenc</option>
                          <option>Italian</option>
                          <option>Spanish</option>
                          <option>Turkey</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Services;
