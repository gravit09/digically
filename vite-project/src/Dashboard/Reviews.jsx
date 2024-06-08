import React from "react";
import { Link } from "react-router-dom";

function Reviews() {
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
              <Link to="/dashboard/reviews" className="items-center -is-active">
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
              <div className="col-lg-12"></div>
              <div className="col-lg-12">
                <div className="dashboard_title_area">
                  <h2>Reviews</h2>
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                  <div className="packages_table table-responsive">
                    <div className="navtab-style1">
                      <nav>
                        <div
                          className="nav nav-tabs mb20"
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
                            Project
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
                            Jobs
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
                          <div className="col-md-12">
                            <div className="bdrb1 pb20">
                              <div className="mbp_first position-relative d-sm-flex align-items-center justify-content-start mb30-sm mt30">
                                <img
                                  src="images/blog/comments-2.png"
                                  className="mr-3"
                                  alt="comments-2.png"
                                />
                                <div className="ml20 ml0-xs mt20-xs">
                                  <div className="del-edit">
                                    <span className="flaticon-flag" />
                                  </div>
                                  <h6 className="mt-0 mb-1">Ali Tufan</h6>
                                  <div className="d-flex align-items-center">
                                    <div>
                                      <i className="fas fa-star vam fz10 review-color me-2" />
                                      <span className="fz15 fw500">4.98</span>
                                    </div>
                                    <div className="ms-3">
                                      <span className="fz14 text">
                                        Published 2 months ago
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p className="text mt20 mb20">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text.
                              </p>
                              <a
                                href="page-service-single.html"
                                className="ud-btn bgc-thm4 text-thm"
                              >
                                Respond
                              </a>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="bdrb1 pb20">
                              <div className="mbp_first position-relative d-sm-flex align-items-center justify-content-start mb30-sm mt30">
                                <img
                                  src="images/blog/comments-2.png"
                                  className="mr-3"
                                  alt="comments-2.png"
                                />
                                <div className="ml20 ml0-xs mt20-xs">
                                  <div className="del-edit">
                                    <span className="flaticon-flag" />
                                  </div>
                                  <h6 className="mt-0 mb-1">Ali Tufan</h6>
                                  <div className="d-flex align-items-center">
                                    <div>
                                      <i className="fas fa-star vam fz10 review-color me-2" />
                                      <span className="fz15 fw500">4.98</span>
                                    </div>
                                    <div className="ms-3">
                                      <span className="fz14 text">
                                        Published 2 months ago
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p className="text mt20 mb20">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text.
                              </p>
                              <a
                                href="page-service-single.html"
                                className="ud-btn bgc-thm4 text-thm"
                              >
                                Respond
                              </a>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mbp_first position-relative d-sm-flex align-items-center justify-content-start mb30-sm mt30">
                              <img
                                src="images/blog/comments-2.png"
                                className="mr-3"
                                alt="comments-2.png"
                              />
                              <div className="ml20 ml0-xs mt20-xs">
                                <div className="del-edit">
                                  <span className="flaticon-flag" />
                                </div>
                                <h6 className="mt-0 mb-1">Ali Tufan</h6>
                                <div className="d-flex align-items-center">
                                  <div>
                                    <i className="fas fa-star vam fz10 review-color me-2" />
                                    <span className="fz15 fw500">4.98</span>
                                  </div>
                                  <div className="ms-3">
                                    <span className="fz14 text">
                                      Published 2 months ago
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="text mt20 mb20">
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour, or
                              randomised words which don't look even slightly
                              believable. If you are going to use a passage of
                              Lorem Ipsum, you need to be sure there isn't
                              anything embarrassing hidden in the middle of
                              text.
                            </p>
                            <a
                              href="page-service-single.html"
                              className="ud-btn bgc-thm4 text-thm"
                            >
                              Respond
                            </a>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav-item2"
                          role="tabpanel"
                          aria-labelledby="nav-item2-tab"
                        >
                          <div className="col-md-12">
                            <div className="bdrb1 pb20">
                              <div className="mbp_first position-relative d-sm-flex align-items-center justify-content-start mb30-sm mt30">
                                <img
                                  src="images/blog/comments-2.png"
                                  className="mr-3"
                                  alt="comments-2.png"
                                />
                                <div className="ml20 ml0-xs mt20-xs">
                                  <div className="del-edit">
                                    <span className="flaticon-flag" />
                                  </div>
                                  <h6 className="mt-0 mb-1">Ali Tufan</h6>
                                  <div className="d-flex align-items-center">
                                    <div>
                                      <i className="fas fa-star vam fz10 review-color me-2" />
                                      <span className="fz15 fw500">4.98</span>
                                    </div>
                                    <div className="ms-3">
                                      <span className="fz14 text">
                                        Published 2 months ago
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p className="text mt20 mb20">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text.
                              </p>
                              <a
                                href="page-service-single.html"
                                className="ud-btn bgc-thm4 text-thm"
                              >
                                Respond
                              </a>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="bdrb1 pb20">
                              <div className="mbp_first position-relative d-sm-flex align-items-center justify-content-start mb30-sm mt30">
                                <img
                                  src="images/blog/comments-2.png"
                                  className="mr-3"
                                  alt="comments-2.png"
                                />
                                <div className="ml20 ml0-xs mt20-xs">
                                  <h6 className="mt-0 mb-1">Ali Tufan</h6>
                                  <div className="del-edit">
                                    <span className="flaticon-flag" />
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <div>
                                      <i className="fas fa-star vam fz10 review-color me-2" />
                                      <span className="fz15 fw500">4.98</span>
                                    </div>
                                    <div className="ms-3">
                                      <span className="fz14 text">
                                        Published 2 months ago
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p className="text mt20 mb20">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text.
                              </p>
                              <a
                                href="page-service-single.html"
                                className="ud-btn bgc-thm4 text-thm"
                              >
                                Respond
                              </a>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mbp_first position-relative d-sm-flex align-items-center justify-content-start mb30-sm mt30">
                              <img
                                src="images/blog/comments-2.png"
                                className="mr-3"
                                alt="comments-2.png"
                              />
                              <div className="ml20 ml0-xs mt20-xs">
                                <h6 className="mt-0 mb-1">Ali Tufan</h6>
                                <div className="d-flex align-items-center">
                                  <div>
                                    <i className="fas fa-star vam fz10 review-color me-2" />
                                    <span className="fz15 fw500">4.98</span>
                                  </div>
                                  <div className="ms-3">
                                    <span className="fz14 text">
                                      Published 2 months ago
                                    </span>
                                  </div>
                                  <div className="del-edit">
                                    <span className="flaticon-flag" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="text mt20 mb20">
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour, or
                              randomised words which don't look even slightly
                              believable. If you are going to use a passage of
                              Lorem Ipsum, you need to be sure there isn't
                              anything embarrassing hidden in the middle of
                              text.
                            </p>
                            <a
                              href="page-service-single.html"
                              className="ud-btn bgc-thm4 text-thm"
                            >
                              Respond
                            </a>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav-item3"
                          role="tabpanel"
                          aria-labelledby="nav-item3-tab"
                        >
                          <div className="col-md-12">
                            <div className="bdrb1 pb20">
                              <div className="mbp_first position-relative d-sm-flex align-items-center justify-content-start mb30-sm mt30">
                                <img
                                  src="images/blog/comments-2.png"
                                  className="mr-3"
                                  alt="comments-2.png"
                                />
                                <div className="ml20 ml0-xs mt20-xs">
                                  <div className="del-edit">
                                    <span className="flaticon-flag" />
                                  </div>
                                  <h6 className="mt-0 mb-1">Ali Tufan</h6>
                                  <div className="d-flex align-items-center">
                                    <div>
                                      <i className="fas fa-star vam fz10 review-color me-2" />
                                      <span className="fz15 fw500">4.98</span>
                                    </div>
                                    <div className="ms-3">
                                      <span className="fz14 text">
                                        Published 2 months ago
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p className="text mt20 mb20">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text.
                              </p>
                              <a
                                href="page-service-single.html"
                                className="ud-btn bgc-thm4 text-thm"
                              >
                                Respond
                              </a>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="bdrb1 pb20">
                              <div className="mbp_first position-relative d-sm-flex align-items-center justify-content-start mb30-sm mt30">
                                <img
                                  src="images/blog/comments-2.png"
                                  className="mr-3"
                                  alt="comments-2.png"
                                />
                                <div className="ml20 ml0-xs mt20-xs">
                                  <div className="del-edit">
                                    <span className="flaticon-flag" />
                                  </div>
                                  <h6 className="mt-0 mb-1">Ali Tufan</h6>
                                  <div className="d-flex align-items-center">
                                    <div>
                                      <i className="fas fa-star vam fz10 review-color me-2" />
                                      <span className="fz15 fw500">4.98</span>
                                    </div>
                                    <div className="ms-3">
                                      <span className="fz14 text">
                                        Published 2 months ago
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p className="text mt20 mb20">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text.
                              </p>
                              <a
                                href="page-service-single.html"
                                className="ud-btn bgc-thm4 text-thm"
                              >
                                Respond
                              </a>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mbp_first position-relative d-sm-flex align-items-center justify-content-start mb30-sm mt30">
                              <img
                                src="images/blog/comments-2.png"
                                className="mr-3"
                                alt="comments-2.png"
                              />
                              <div className="ml20 ml0-xs mt20-xs">
                                <div className="del-edit">
                                  <span className="flaticon-flag" />
                                </div>
                                <h6 className="mt-0 mb-1">Ali Tufan</h6>
                                <div className="d-flex align-items-center">
                                  <div>
                                    <i className="fas fa-star vam fz10 review-color me-2" />
                                    <span className="fz15 fw500">4.98</span>
                                  </div>
                                  <div className="ms-3">
                                    <span className="fz14 text">
                                      Published 2 months ago
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="text mt20 mb20">
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour, or
                              randomised words which don't look even slightly
                              believable. If you are going to use a passage of
                              Lorem Ipsum, you need to be sure there isn't
                              anything embarrassing hidden in the middle of
                              text.
                            </p>
                            <a
                              href="page-service-single.html"
                              className="ud-btn bgc-thm4 text-thm"
                            >
                              Respond
                            </a>
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

export default Reviews;
