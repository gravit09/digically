import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ToggleContext } from "../App";

function Payouts() {
  const { show } = useContext(ToggleContext);
  return (
    <>
      <div className="dashboard_content_wrapper ">
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
                <Link
                  to="/dashboard/payouts"
                  className="items-center -is-active"
                >
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
          <div className="dashboard__main pl0-md ">
            <div className="dashboard__content hover-bgc-color">
              <div className="row align-items-center justify-content-between pb40">
                <div className="col-lg-6">
                  <div className="dashboard_title_area">
                    <h2>Payouts</h2>
                    <p className="text">
                      Lorem ipsum dolor sit amet, consectetur.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="text-lg-end">
                    <a
                      href="page-freelancer-v1.html"
                      className="ud-btn btn-dark default-box-shadow2"
                    >
                      Create Payout
                      <i className="fal fa-arrow-right-long" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="ps-widget bgc-white bdrs4 p30 mb60 overflow-hidden position-relative">
                    <div className="packages_table table-responsive">
                      <table className="table-style3 table at-savesearch">
                        <thead className="t-head">
                          <tr>
                            <th scope="col">Amount</th>
                            <th scope="col">Date</th>
                            <th scope="col">Payout Method</th>
                            <th scope="col">Payment Status</th>
                          </tr>
                        </thead>
                        <tbody className="t-body">
                          <tr>
                            <th scope="row">$1.800</th>
                            <td className="vam">April 9, 2023</td>
                            <td className="vam">Paypal</td>
                            <td className="vam">
                              <span className="pending-style style1">
                                Pending
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">$1.800</th>
                            <td className="vam">April 9, 2023</td>
                            <td className="vam">Payoneer</td>
                            <td className="vam">
                              <span className="pending-style style2">
                                Completed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th className="active">$1.800</th>
                            <td className="vam">April 9, 2023</td>
                            <td className="vam">Bank Transfer</td>
                            <td className="vam">
                              <span className="pending-style style2">
                                Completed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">$1.800</th>
                            <td className="vam">April 9, 2023</td>
                            <td className="vam">Bank Transfer</td>
                            <td className="vam">
                              <span className="pending-style style2">
                                Completed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">$1.800</th>
                            <td className="vam">April 9, 2023</td>
                            <td className="vam">Paypal</td>
                            <td className="vam">
                              <span className="pending-style style2">
                                Completed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th className="active">$1.800</th>
                            <td className="vam">April 9, 2023</td>
                            <td className="vam">Bank Transfer</td>
                            <td className="vam">
                              <span className="pending-style style2">
                                Completed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">$1.800</th>
                            <td className="vam">April 9, 2023</td>
                            <td className="vam">Paypal</td>
                            <td className="vam">
                              <span className="pending-style style1">
                                Pending
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">$1.800</th>
                            <td className="vam">April 9, 2023</td>
                            <td className="vam">Payoneer</td>
                            <td className="vam">
                              <span className="pending-style style3">
                                Cancel
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">$1.800</th>
                            <td className="vam">April 9, 2023</td>
                            <td className="vam">Payoneer</td>
                            <td className="vam">
                              <span className="pending-style style1">
                                Pending
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">$1.800</th>
                            <td className="vam">April 9, 2023</td>
                            <td className="vam">Paypal</td>
                            <td className="vam">
                              <span className="pending-style style3">
                                Cancel
                              </span>
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
                  <div className="ps-widget bgc-white bdrs4 p30 mb30 position-relative">
                    <div className="row">
                      <div className="col-lg-9">
                        <div className="bdrb1 pb15">
                          <h5 className="list-title">Payout Methods</h5>
                        </div>
                        <div className="widget-wrapper mt35">
                          <h6 className="list-title mb10">
                            Select default payout method
                          </h6>
                          <div className="bootselect-multiselect">
                            <select className="selectpicker">
                              <option>Paypal</option>
                              <option data-tokens="BankTransfer">
                                Bank Transfer
                              </option>
                              <option data-tokens="Chicago">Payoneer</option>
                            </select>
                          </div>
                        </div>
                        <h5 className="mb15">Payout Details</h5>
                        <div className="navpill-style1 payout-style">
                          <ul
                            className="nav nav-pills align-items-center justify-content-center mb30"
                            id="pills-tab"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link fw500 dark-color"
                                id="pills-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-home"
                                type="button"
                                role="tab"
                                aria-controls="pills-home"
                                aria-selected="true"
                              >
                                Paypal
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link active fw500 dark-color"
                                id="pills-profile-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-profile"
                                type="button"
                                role="tab"
                                aria-controls="pills-profile"
                                aria-selected="false"
                              >
                                Bank Transfer
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link fw500 dark-color"
                                id="pills-contact-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-contact"
                                type="button"
                                role="tab"
                                aria-controls="pills-contact"
                                aria-selected="false"
                              >
                                Payoneer
                              </button>
                            </li>
                          </ul>
                          <div className="tab-content" id="pills-tabContent">
                            <div
                              className="tab-pane fade"
                              id="pills-home"
                              role="tabpanel"
                              aria-labelledby="pills-home-tab"
                            >
                              <form className="form-style1">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="mb20">
                                      <label className="heading-color ff-heading fw500 mb-1">
                                        Bank Name
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="creativelayers088@gmail.com"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="mb20">
                                      <label className="heading-color ff-heading fw500 mb-1">
                                        Bank Account Number
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="creativelayers088@gmail.com"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="mb20">
                                      <label className="heading-color ff-heading fw500 mb-1">
                                        Bank Account Holder Name
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="creativelayers088@gmail.com"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="mb20">
                                      <label className="heading-color ff-heading fw500 mb-1">
                                        Bank Routing Number
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="creativelayers088@gmail.com"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="mb20">
                                      <label className="heading-color ff-heading fw500 mb-1">
                                        Bank IBAN
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="creativelayers088@gmail.com"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="mb20">
                                      <label className="heading-color ff-heading fw500 mb-1">
                                        Swift Code
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="creativelayers088@gmail.com"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="text-start">
                                      <a
                                        className="ud-btn btn-thm"
                                        href="page-contact.html"
                                      >
                                        Save Detail
                                        <i className="fal fa-arrow-right-long" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div
                              className="tab-pane fade show active"
                              id="pills-profile"
                              role="tabpanel"
                              aria-labelledby="pills-profile-tab"
                            >
                              <form className="form-style1">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="mb20">
                                      <label className="heading-color ff-heading fw500 mb-1">
                                        Bank Name
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="creativelayers088@gmail.com"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="mb20">
                                      <label className="heading-color ff-heading fw500 mb-1">
                                        Bank Account Number
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="creativelayers088@gmail.com"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="mb20">
                                      <label className="heading-color ff-heading fw500 mb-1">
                                        Bank Account Holder Name
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="creativelayers088@gmail.com"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="mb20">
                                      <label className="heading-color ff-heading fw500 mb-1">
                                        Bank Routing Number
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="creativelayers088@gmail.com"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="mb20">
                                      <label className="heading-color ff-heading fw500 mb-1">
                                        Bank IBAN
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="creativelayers088@gmail.com"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="mb20">
                                      <label className="heading-color ff-heading fw500 mb-1">
                                        Swift Code
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="creativelayers088@gmail.com"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="text-start">
                                      <a
                                        className="ud-btn btn-thm"
                                        href="page-contact.html"
                                      >
                                        Save Detail
                                        <i className="fal fa-arrow-right-long" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="pills-contact"
                              role="tabpanel"
                              aria-labelledby="pills-contact-tab"
                            >
                              <form className="form-style1">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="mb20">
                                      <label className="heading-color ff-heading fw500 mb-1">
                                        Bank Name
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="creativelayers088@gmail.com"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="mb20">
                                      <label className="heading-color ff-heading fw500 mb-1">
                                        Bank Account Number
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="creativelayers088@gmail.com"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="mb20">
                                      <label className="heading-color ff-heading fw500 mb-1">
                                        Bank Account Holder Name
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="creativelayers088@gmail.com"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="mb20">
                                      <label className="heading-color ff-heading fw500 mb-1">
                                        Bank Routing Number
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="creativelayers088@gmail.com"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="mb20">
                                      <label className="heading-color ff-heading fw500 mb-1">
                                        Bank IBAN
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="creativelayers088@gmail.com"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="mb20">
                                      <label className="heading-color ff-heading fw500 mb-1">
                                        Swift Code
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="creativelayers088@gmail.com"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="text-start">
                                      <a
                                        className="ud-btn btn-thm"
                                        href="page-contact.html"
                                      >
                                        Save Detail
                                        <i className="fal fa-arrow-right-long" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </form>
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
                        © Digically. 2023 CreativeLayers. All rights reserved.
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
      <a className="scrollToHome" href="#">
        <i className="fas fa-angle-up" />
      </a>
    </>
  );
}

export default Payouts;
