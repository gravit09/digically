import React from "react";
import { Link } from "react-router-dom";

function Invoice() {
  return (
    <div className="dashboard_content_wrapper">
      <div className="dashboard dashboard_wrapper pr30 pr0-xl">
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
              <Link to="/dashboard/invoice" className="items-center -is-active">
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
              <Link to="/dashboard/services" className="items-center">
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
            <div className="row align-items-center justify-content-between pb40">
              <div className="col-xl-4">
                <div className="dashboard_title_area">
                  <h2>Invoice</h2>
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="dashboard_search_meta">
                  <div className="search_area">
                    <input
                      type="text"
                      className="form-control bdrs4"
                      placeholder="Search Invoice"
                    />
                    <label>
                      <span className="far fa-magnifying-glass" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                  <div className="packages_table table-responsive">
                    <table className="table-style3 table at-savesearch">
                      <thead className="t-head">
                        <tr>
                          <th scope="col">Invoice ID</th>
                          <th scope="col">Purchase Date</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Payment Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody className="t-body">
                        <tr>
                          <th scope="row">
                            <div>
                              #99 <span className="ms-3">App Services</span>
                            </div>
                          </th>
                          <td className="vam">April 9, 2023</td>
                          <td className="vam">$1.200</td>
                          <td className="vam">
                            <span className="pending-style style1">
                              In Progress
                            </span>
                          </td>
                          <td className="vam">
                            <a
                              href="#"
                              className="table-action fz15 fw500 text-thm2"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="View"
                            >
                              <span className="flaticon-website me-2 vam" />{" "}
                              View
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div>
                              #99 <span className="ms-3">App Services</span>
                            </div>
                          </th>
                          <td className="vam">April 9, 2023</td>
                          <td className="vam">$1.200</td>
                          <td className="vam">
                            <span className="pending-style style2">
                              Completed
                            </span>
                          </td>
                          <td className="vam">
                            <a
                              href="#"
                              className="table-action fz15 fw500 text-thm2"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="View"
                            >
                              <span className="flaticon-website me-2 vam" />{" "}
                              View
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th className="active">
                            <div>
                              #99 <span className="ms-3">App Services</span>
                            </div>
                          </th>
                          <td className="vam">April 9, 2023</td>
                          <td className="vam">$1.200</td>
                          <td className="vam">
                            <span className="pending-style style2">
                              Completed
                            </span>
                          </td>
                          <td className="vam">
                            <a
                              href="#"
                              className="table-action fz15 fw500 text-thm2"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="View"
                            >
                              <span className="flaticon-website me-2 vam" />{" "}
                              View
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div>
                              #99 <span className="ms-3">App Services</span>
                            </div>
                          </th>
                          <td className="vam">April 9, 2023</td>
                          <td className="vam">$1.200</td>
                          <td className="vam">
                            <span className="pending-style style3">Cancel</span>
                          </td>
                          <td className="vam">
                            <a
                              href="#"
                              className="table-action fz15 fw500 text-thm2"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="View"
                            >
                              <span className="flaticon-website me-2 vam" />{" "}
                              View
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div>
                              #99 <span className="ms-3">App Services</span>
                            </div>
                          </th>
                          <td className="vam">April 9, 2023</td>
                          <td className="vam">$1.200</td>
                          <td className="vam">
                            <span className="pending-style style3">Cancel</span>
                          </td>
                          <td className="vam">
                            <a
                              href="#"
                              className="table-action fz15 fw500 text-thm2"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="View"
                            >
                              <span className="flaticon-website me-2 vam" />{" "}
                              View
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th className="active">
                            <div>
                              #99 <span className="ms-3">App Services</span>
                            </div>
                          </th>
                          <td className="vam">April 9, 2023</td>
                          <td className="vam">$1.200</td>
                          <td className="vam">
                            <span className="pending-style style2">
                              Completed
                            </span>
                          </td>
                          <td className="vam">
                            <a
                              href="#"
                              className="table-action fz15 fw500 text-thm2"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="View"
                            >
                              <span className="flaticon-website me-2 vam" />{" "}
                              View
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div>
                              #99 <span className="ms-3">App Services</span>
                            </div>
                          </th>
                          <td className="vam">April 9, 2023</td>
                          <td className="vam">$1.200</td>
                          <td className="vam">
                            <span className="pending-style style2">
                              Completed
                            </span>
                          </td>
                          <td className="vam">
                            <a
                              href="#"
                              className="table-action fz15 fw500 text-thm2"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="View"
                            >
                              <span className="flaticon-website me-2 vam" />{" "}
                              View
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div>
                              #99 <span className="ms-3">App Services</span>
                            </div>
                          </th>
                          <td className="vam">April 9, 2023</td>
                          <td className="vam">$1.200</td>
                          <td className="vam">
                            <span className="pending-style style1">
                              In Progress
                            </span>
                          </td>
                          <td className="vam">
                            <a
                              href="#"
                              className="table-action fz15 fw500 text-thm2"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="View"
                            >
                              <span className="flaticon-website me-2 vam" />{" "}
                              View
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div>
                              #99 <span className="ms-3">App Services</span>
                            </div>
                          </th>
                          <td className="vam">April 9, 2023</td>
                          <td className="vam">$1.200</td>
                          <td className="vam">
                            <span className="pending-style style3">Cancel</span>
                          </td>
                          <td className="vam">
                            <a
                              href="#"
                              className="table-action fz15 fw500 text-thm2"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="View"
                            >
                              <span className="flaticon-website me-2 vam" />{" "}
                              View
                            </a>
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
                        <li className="page-item active" aria-current="page">
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
          <footer className="dashboard_footer pt30 pb30">
            <div className="container">
              <div className="row align-items-center justify-content-center justify-content-md-between">
                <div className="col-auto">
                  <div className="copyright-widget">
                    <p className="mb-md-0">
                      © Freeio. 2023 CreativeLayers. All rights reserved.
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

export default Invoice;
