import React from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { ToggleContext } from "../App";

function Saved() {
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
              <Link to="/dashboard/saved" className="items-center -is-active">
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
              <Link to="/dashboard/reviews" className="items-center">
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
            <div className="row pb40">
              <div className="col-lg-12">
                <div className="dashboard_title_area">
                  <h2>Saved</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="ps-widget bgc-white bdrs4 p30 mb30 position-relative">
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
                          Services
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
                        <div className="row">
                          <div className="col-sm-6 col-xl-3">
                            <div className="listing-style1">
                              <div className="list-thumb">
                                <img
                                  className="w-100"
                                  src="images/listings/g-1.jpg"
                                  alt=""
                                />
                                <a
                                  href="#"
                                  className="tag-del"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Delete Item"
                                  aria-label="Delete Item"
                                >
                                  <span className="flaticon-delete" />
                                </a>
                              </div>
                              <div className="list-content">
                                <p className="list-text body-color fz14 mb-1">
                                  Web &amp; App Design
                                </p>
                                <h5 className="list-title">
                                  <a href="page-services-single.html">
                                    I will design modern websites in figma or
                                    adobe xd
                                  </a>
                                </h5>
                                <div className="review-meta d-flex align-items-center">
                                  <i className="fas fa-star fz10 review-color me-2" />
                                  <p className="mb-0 body-color fz14">
                                    <span className="dark-color me-2">
                                      4.82
                                    </span>
                                    94 reviews
                                  </p>
                                </div>
                                <hr className="my-2" />
                                <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                  <a className="d-flex" href="#">
                                    <span className="position-relative mr10">
                                      <img
                                        className="rounded-circle wa"
                                        src="images/team/fl-s-1.png"
                                        alt="Freelancer Photo"
                                      />
                                      <span className="online-badges" />
                                    </span>
                                    <span className="fz14">Wanda Runo</span>
                                  </a>
                                  <div className="budget">
                                    <p className="mb-0 body-color">
                                      Starting at
                                      <span className="fz17 fw500 dark-color ms-1">
                                        $983
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-xl-3">
                            <div className="listing-style1">
                              <div className="list-thumb">
                                <img
                                  className="w-100"
                                  src="images/listings/g-2.jpg"
                                  alt=""
                                />
                                <a
                                  href="#"
                                  className="tag-del"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Delete Item"
                                  aria-label="Delete Item"
                                >
                                  <span className="flaticon-delete" />
                                </a>
                              </div>
                              <div className="list-content">
                                <p className="list-text body-color fz14 mb-1">
                                  Art &amp; Illustration
                                </p>
                                <h5 className="list-title">
                                  <a href="page-services-single.html">
                                    I will create modern flat design
                                    illustration
                                  </a>
                                </h5>
                                <div className="review-meta d-flex align-items-center">
                                  <i className="fas fa-star fz10 review-color me-2" />
                                  <p className="mb-0 body-color fz14">
                                    <span className="dark-color me-2">
                                      4.82
                                    </span>
                                    94 reviews
                                  </p>
                                </div>
                                <hr className="my-2" />
                                <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                  <a className="d-flex" href="#">
                                    <span className="position-relative mr10">
                                      <img
                                        className="rounded-circle wa"
                                        src="images/team/fl-s-2.png"
                                        alt="Freelancer Photo"
                                      />
                                      <span className="online-badges" />
                                    </span>
                                    <span className="fz14">Ali Tufan</span>
                                  </a>
                                  <div className="budget">
                                    <p className="mb-0 body-color">
                                      Starting at
                                      <span className="fz17 fw500 dark-color ms-1">
                                        $983
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-xl-3">
                            <div className="listing-style1">
                              <div className="list-thumb">
                                <img
                                  className="w-100"
                                  src="images/listings/g-3.jpg"
                                  alt=""
                                />
                                <a
                                  href="#"
                                  className="tag-del"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Delete Item"
                                  aria-label="Delete Item"
                                >
                                  <span className="flaticon-delete" />
                                </a>
                              </div>
                              <div className="list-content">
                                <p className="list-text body-color fz14 mb-1">
                                  Design &amp; Creative
                                </p>
                                <h5 className="list-title line-clamp2">
                                  <a href="page-services-single.html">
                                    I will build a fully responsive design in
                                    HTML,CSS, bootstrap, and javascript
                                  </a>
                                </h5>
                                <div className="review-meta d-flex align-items-center">
                                  <i className="fas fa-star fz10 review-color me-2" />
                                  <p className="mb-0 body-color fz14">
                                    <span className="dark-color me-2">
                                      4.82
                                    </span>
                                    94 reviews
                                  </p>
                                </div>
                                <hr className="my-2" />
                                <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                  <a className="d-flex" href="#">
                                    <span className="position-relative mr10">
                                      <img
                                        className="rounded-circle"
                                        src="images/team/fl-s-3.png"
                                        alt="Freelancer Photo"
                                      />
                                      <span className="online-badges" />
                                    </span>
                                    <span className="fz14">Wanda Runo</span>
                                  </a>
                                  <div className="budget">
                                    <p className="mb-0 body-color">
                                      Starting at
                                      <span className="fz17 fw500 dark-color ms-1">
                                        $983
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-xl-3">
                            <div className="listing-style1">
                              <div className="list-thumb">
                                <img
                                  className="w-100"
                                  src="images/listings/g-4.jpg"
                                  alt=""
                                />
                                <a
                                  href="#"
                                  className="tag-del"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Delete Item"
                                  aria-label="Delete Item"
                                >
                                  <span className="flaticon-delete" />
                                </a>
                              </div>
                              <div className="list-content">
                                <p className="list-text body-color fz14 mb-1">
                                  Web &amp; App Design
                                </p>
                                <h5 className="list-title line-clamp2">
                                  <a href="page-services-single.html">
                                    I will do mobile app development for ios and
                                    android
                                  </a>
                                </h5>
                                <div className="review-meta d-flex align-items-center">
                                  <i className="fas fa-star fz10 review-color me-2" />
                                  <p className="mb-0 body-color fz14">
                                    <span className="dark-color me-2">
                                      4.82
                                    </span>
                                    94 reviews
                                  </p>
                                </div>
                                <hr className="my-2" />
                                <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                  <a className="d-flex" href="#">
                                    <span className="position-relative mr10">
                                      <img
                                        className="rounded-circle"
                                        src="images/team/fl-s-4.png"
                                        alt="Freelancer Photo"
                                      />
                                      <span className="online-badges" />
                                    </span>
                                    <span className="fz14">Wanda Runo</span>
                                  </a>
                                  <div className="budget">
                                    <p className="mb-0 body-color">
                                      Starting at
                                      <span className="fz17 fw500 dark-color ms-1">
                                        $983
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-xl-3">
                            <div className="listing-style1">
                              <div className="list-thumb">
                                <img
                                  className="w-100"
                                  src="images/listings/g-1.jpg"
                                  alt=""
                                />
                                <a
                                  href="#"
                                  className="tag-del"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Delete Item"
                                  aria-label="Delete Item"
                                >
                                  <span className="flaticon-delete" />
                                </a>
                              </div>
                              <div className="list-content">
                                <p className="list-text body-color fz14 mb-1">
                                  Web &amp; App Design
                                </p>
                                <h5 className="list-title">
                                  <a href="page-services-single.html">
                                    I will design modern websites in figma or
                                    adobe xd
                                  </a>
                                </h5>
                                <div className="review-meta d-flex align-items-center">
                                  <i className="fas fa-star fz10 review-color me-2" />
                                  <p className="mb-0 body-color fz14">
                                    <span className="dark-color me-2">
                                      4.82
                                    </span>
                                    94 reviews
                                  </p>
                                </div>
                                <hr className="my-2" />
                                <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                  <a className="d-flex" href="#">
                                    <span className="position-relative mr10">
                                      <img
                                        className="rounded-circle wa"
                                        src="images/team/fl-s-1.png"
                                        alt="Freelancer Photo"
                                      />
                                      <span className="online-badges" />
                                    </span>
                                    <span className="fz14">Wanda Runo</span>
                                  </a>
                                  <div className="budget">
                                    <p className="mb-0 body-color">
                                      Starting at
                                      <span className="fz17 fw500 dark-color ms-1">
                                        $983
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-xl-3">
                            <div className="listing-style1">
                              <div className="list-thumb">
                                <img
                                  className="w-100"
                                  src="images/listings/g-2.jpg"
                                  alt=""
                                />
                                <a
                                  href="#"
                                  className="tag-del"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Delete Item"
                                  aria-label="Delete Item"
                                >
                                  <span className="flaticon-delete" />
                                </a>
                              </div>
                              <div className="list-content">
                                <p className="list-text body-color fz14 mb-1">
                                  Art &amp; Illustration
                                </p>
                                <h5 className="list-title">
                                  <a href="page-services-single.html">
                                    I will create modern flat design
                                    illustration
                                  </a>
                                </h5>
                                <div className="review-meta d-flex align-items-center">
                                  <i className="fas fa-star fz10 review-color me-2" />
                                  <p className="mb-0 body-color fz14">
                                    <span className="dark-color me-2">
                                      4.82
                                    </span>
                                    94 reviews
                                  </p>
                                </div>
                                <hr className="my-2" />
                                <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                  <a className="d-flex" href="#">
                                    <span className="position-relative mr10">
                                      <img
                                        className="rounded-circle wa"
                                        src="images/team/fl-s-2.png"
                                        alt="Freelancer Photo"
                                      />
                                      <span className="online-badges" />
                                    </span>
                                    <span className="fz14">Ali Tufan</span>
                                  </a>
                                  <div className="budget">
                                    <p className="mb-0 body-color">
                                      Starting at
                                      <span className="fz17 fw500 dark-color ms-1">
                                        $983
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-xl-3">
                            <div className="listing-style1">
                              <div className="list-thumb">
                                <img
                                  className="w-100"
                                  src="images/listings/g-3.jpg"
                                  alt=""
                                />
                                <a
                                  href="#"
                                  className="tag-del"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Delete Item"
                                  aria-label="Delete Item"
                                >
                                  <span className="flaticon-delete" />
                                </a>
                              </div>
                              <div className="list-content">
                                <p className="list-text body-color fz14 mb-1">
                                  Design &amp; Creative
                                </p>
                                <h5 className="list-title line-clamp2">
                                  <a href="page-services-single.html">
                                    I will build a fully responsive design in
                                    HTML,CSS, bootstrap, and javascript
                                  </a>
                                </h5>
                                <div className="review-meta d-flex align-items-center">
                                  <i className="fas fa-star fz10 review-color me-2" />
                                  <p className="mb-0 body-color fz14">
                                    <span className="dark-color me-2">
                                      4.82
                                    </span>
                                    94 reviews
                                  </p>
                                </div>
                                <hr className="my-2" />
                                <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                  <a className="d-flex" href="#">
                                    <span className="position-relative mr10">
                                      <img
                                        className="rounded-circle"
                                        src="images/team/fl-s-3.png"
                                        alt="Freelancer Photo"
                                      />
                                      <span className="online-badges" />
                                    </span>
                                    <span className="fz14">Wanda Runo</span>
                                  </a>
                                  <div className="budget">
                                    <p className="mb-0 body-color">
                                      Starting at
                                      <span className="fz17 fw500 dark-color ms-1">
                                        $983
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-xl-3">
                            <div className="listing-style1">
                              <div className="list-thumb">
                                <img
                                  className="w-100"
                                  src="images/listings/g-4.jpg"
                                  alt=""
                                />
                                <a
                                  href="#"
                                  className="tag-del"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Delete Item"
                                  aria-label="Delete Item"
                                >
                                  <span className="flaticon-delete text-thm2" />
                                </a>
                              </div>
                              <div className="list-content">
                                <p className="list-text body-color fz14 mb-1">
                                  Web &amp; App Design
                                </p>
                                <h5 className="list-title line-clamp2">
                                  <a href="page-services-single.html">
                                    I will do mobile app development for ios and
                                    android
                                  </a>
                                </h5>
                                <div className="review-meta d-flex align-items-center">
                                  <i className="fas fa-star fz10 review-color me-2" />
                                  <p className="mb-0 body-color fz14">
                                    <span className="dark-color me-2">
                                      4.82
                                    </span>
                                    94 reviews
                                  </p>
                                </div>
                                <hr className="my-2" />
                                <div className="list-meta d-flex justify-content-between align-items-center mt15">
                                  <a className="d-flex" href="#">
                                    <span className="position-relative mr10">
                                      <img
                                        className="rounded-circle"
                                        src="images/team/fl-s-4.png"
                                        alt="Freelancer Photo"
                                      />
                                      <span className="online-badges" />
                                    </span>
                                    <span className="fz14">Wanda Runo</span>
                                  </a>
                                  <div className="budget">
                                    <p className="mb-0 body-color">
                                      Starting at
                                      <span className="fz17 fw500 dark-color ms-1">
                                        $983
                                      </span>
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
                  <div className="mbp_pagination text-center">
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

export default Saved;
