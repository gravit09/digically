import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ToggleContext } from "../App";

function Dashboard() {
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
              <Link to="/dashboard" className="items-center -is-active">
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
              <Link to="./signin" className="items-center">
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
                  <h2>Dashboard</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-xxl-3">
                <div className="d-flex align-items-center justify-content-between statistics_funfact">
                  <div className="details">
                    <div className="fz15">Services Offered</div>
                    <div className="title">25</div>
                    <div className="text fz14">
                      <span className="text-thm">10</span> New Offered
                    </div>
                  </div>
                  <div className="icon text-center">
                    <i className="flaticon-contract" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xxl-3">
                <div className="d-flex align-items-center justify-content-between statistics_funfact">
                  <div className="details">
                    <div className="fz15">Completed Services</div>
                    <div className="title">1292</div>
                    <div className="text fz14">
                      <span className="text-thm">80+</span> New Completed
                    </div>
                  </div>
                  <div className="icon text-center">
                    <i className="flaticon-success" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xxl-3">
                <div className="d-flex align-items-center justify-content-between statistics_funfact">
                  <div className="details">
                    <div className="fz15">in Queue Services</div>
                    <div className="title">182</div>
                    <div className="text fz14">
                      <span className="text-thm">35+</span> New Queue
                    </div>
                  </div>
                  <div className="icon text-center">
                    <i className="flaticon-review" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xxl-3">
                <div className="d-flex align-items-center justify-content-between statistics_funfact">
                  <div className="details">
                    <div className="fz15">Total Review</div>
                    <div className="title">22,786</div>
                    <div className="text fz14">
                      <span className="text-thm">290+</span> New Review
                    </div>
                  </div>
                  <div className="icon text-center">
                    <i className="flaticon-review-1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-xxl-4">
                <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                  <div className="d-flex justify-content-between bdrb1 pb15 mb20">
                    <h5 className="title">Most Viewed Services</h5>
                    <a className="text-decoration-underline text-thm6" href="#">
                      View All
                    </a>
                  </div>
                  <div className="dashboard-img-service">
                    <div className="listing-style1 list-style d-block d-xl-flex align-items-center border-0 mb10">
                      <div className="list-thumb flex-shrink-0 bdrs4">
                        <img
                          className="w-100"
                          src="/images/listings/g-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="list-content flex-grow-1 pt10 pb10 pl15 pl0-lg">
                        <h6 className="list-title mb-2">
                          <a href="page-services-single.html">
                            I will design modern websites in figma or adobe xd
                          </a>
                        </h6>
                        <div className="list-meta d-flex justify-content-between align-items-center">
                          <div className="review-meta d-flex align-items-center">
                            <i className="fas fa-star fz10 review-color me-2" />
                            <p className="mb-0 body-color fz14">
                              <span className="dark-color me-2">4.82</span>
                            </p>
                          </div>
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
                    <hr className="opacity-100 mt-0" />
                    <div className="listing-style1 list-style d-block d-xl-flex align-items-center border-0 mb10">
                      <div className="list-thumb flex-shrink-0 bdrs4">
                        <img
                          className="w-100"
                          src="/images/listings/g-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="list-content flex-grow-1 pt0 pb10 pl15 pl0-lg">
                        <h6 className="list-title mb-2">
                          <a href="page-services-single.html">
                            I will create modern flat design illustration
                          </a>
                        </h6>
                        <div className="list-meta d-flex justify-content-between align-items-center">
                          <div className="review-meta d-flex align-items-center">
                            <i className="fas fa-star fz10 review-color me-2" />
                            <p className="mb-0 body-color fz14">
                              <span className="dark-color me-2">4.82</span>
                            </p>
                          </div>
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
                    <hr className="opacity-100 mt-0" />
                    <div className="listing-style1 list-style d-block d-xl-flex align-items-center border-0 mb-0">
                      <div className="list-thumb flex-shrink-0 bdrs4">
                        <img
                          className="w-100"
                          src="/images/listings/g-6.jpg"
                          alt=""
                        />
                      </div>
                      <div className="list-content flex-grow-1 pt0 pb-0 pl15 pl0-lg pe-0">
                        <h6 className="list-title mb-2">
                          <a href="page-services-single.html">
                            I will build a fully responsive design in HTML,CSS,
                            bootstrap, and javascript
                          </a>
                        </h6>
                        <div className="list-meta d-flex justify-content-between align-items-center">
                          <div className="review-meta d-flex align-items-center">
                            <i className="fas fa-star fz10 review-color me-2" />
                            <p className="mb-0 body-color fz14">
                              <span className="dark-color me-2">4.82</span>
                            </p>
                          </div>
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
              <div className="col-md-6 col-xxl-4">
                <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                  <div className="d-flex justify-content-between bdrb1 pb15 mb30">
                    <h5 className="title">Recent Purchased Services</h5>
                    <a className="text-decoration-underline text-thm6" href="#">
                      View All
                    </a>
                  </div>
                  <div className="dashboard-img-service">
                    <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb10">
                      <div className="list-thumb wa flex-shrink-0 bdrs4 mb15-lg">
                        <img
                          className="wa img-2"
                          src="/images/team/client-1.png"
                          alt=""
                        />
                      </div>
                      <div className="list-content flex-grow-1 py-0 pb10 pl15 pl0-lg">
                        <h6 className="list-title mb-2">
                          Medium.{" "}
                          <span className="text-thm">has purchased</span> I will
                          deal with your item Description and assets
                        </h6>
                        <div className="list-meta d-flex justify-content-between align-items-center">
                          <div className="review-meta d-flex align-items-center">
                            <p className="mb-0 body-color fz14">
                              February 26, 2021
                            </p>
                          </div>
                          <div className="budget">
                            <p className="mb-0">
                              <span className="fz15 fw500 dark-color">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="opacity-100 mt-0" />
                    <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb10 mt20">
                      <div className="list-thumb wa flex-shrink-0 bdrs4 mb15-lg">
                        <img
                          className="wa img-2"
                          src="/images/team/client-3.png"
                          alt=""
                        />
                      </div>
                      <div className="list-content flex-grow-1 py-0 pb10 pl15 pl0-lg">
                        <h6 className="list-title mb-2">
                          Medium.{" "}
                          <span className="text-thm">has purchased</span> I will
                          deal with your item Description and assets
                        </h6>
                        <div className="list-meta d-flex justify-content-between align-items-center">
                          <div className="review-meta d-flex align-items-center">
                            <p className="mb-0 body-color fz14">
                              February 26, 2021
                            </p>
                          </div>
                          <div className="budget">
                            <p className="mb-0">
                              <span className="fz15 fw500 dark-color">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="opacity-100 mt-0" />
                    <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0 mt20">
                      <div className="list-thumb wa flex-shrink-0 bdrs4 mb15-lg">
                        <img
                          className="wa img-2"
                          src="/images/team/client-6.png"
                          alt=""
                        />
                      </div>
                      <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                        <h6 className="list-title mb-2">
                          Medium.{" "}
                          <span className="text-thm">has purchased</span> I will
                          deal with your item Description and assets
                        </h6>
                        <div className="list-meta d-flex justify-content-between align-items-center">
                          <div className="review-meta d-flex align-items-center">
                            <p className="mb-0 body-color fz14">
                              February 26, 2021
                            </p>
                          </div>
                          <div className="budget">
                            <p className="mb-0">
                              <span className="fz15 fw500 dark-color">
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
              <div className="col-md-6 col-xxl-4">
                <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                  <div className="bdrb1 pb15 mb30">
                    <h5 className="title">Recent Activity</h5>
                  </div>
                  <div className="dashboard-timeline-label">
                    <div className="timeline-item pb15">
                      {/*begin::Label*/}
                      <div className="child-timeline-label">08:42</div>
                      {/*end::Label*/}
                      {/*begin::Badge*/}
                      <div className="timeline-badge d-flex align-items-center">
                        <i className="fas fa-genderless" />
                      </div>
                      {/*end::Badge*/}
                      {/*begin::Text*/}
                      <div className="ra_pcontent pl10">
                        <span className="title">Purchase by Ali Price</span>{" "}
                        <br />{" "}
                        <span className="subtitle">
                          Product noise evolve smartwatch
                        </span>
                      </div>
                      {/*end::Text*/}
                    </div>
                  </div>
                  <div className="dashboard-timeline-label">
                    <div className="timeline-item pb15">
                      {/*begin::Label*/}
                      <div className="child-timeline-label">14:37</div>
                      {/*end::Label*/}
                      {/*begin::Badge*/}
                      <div className="timeline-badge d-flex align-items-center color3">
                        <i className="fas fa-genderless" />
                      </div>
                      {/*end::Badge*/}
                      {/*begin::Text*/}
                      <div className="ra_pcontent pl10">
                        <span className="title">
                          Make deposit{" "}
                          <span className="text-thm6 fw500">USD 700</span> to
                          TFN
                        </span>
                      </div>
                      {/*end::Text*/}
                    </div>
                  </div>
                  <div className="dashboard-timeline-label">
                    <div className="timeline-item pb0">
                      {/*begin::Label*/}
                      <div className="child-timeline-label">16:50</div>
                      {/*end::Label*/}
                      {/*begin::Badge*/}
                      <div className="timeline-badge d-flex align-items-center color4">
                        <i className="fas fa-genderless" />
                      </div>
                      {/*end::Badge*/}
                      {/*begin::Text*/}
                      <div className="ra_pcontent pl10">
                        <span className="title">
                          Natasha Carey have liked the products
                        </span>{" "}
                        <br />{" "}
                        <span className="subtitle">
                          Allow users to like products in your WooCommerce
                          store.
                        </span>
                      </div>
                      {/*end::Text*/}
                    </div>
                  </div>
                  <div className="dashboard-timeline-label">
                    <div className="timeline-item pb10">
                      {/*begin::Label*/}
                      <div className="child-timeline-label">21:03</div>
                      {/*end::Label*/}
                      {/*begin::Badge*/}
                      <div className="timeline-badge d-flex align-items-center color5">
                        <i className="fas fa-genderless" />
                      </div>
                      {/*end::Badge*/}
                      {/*begin::Text*/}
                      <div className="ra_pcontent pl10">
                        <span className="title">Favoried Product</span> <br />{" "}
                        <span className="subtitle">
                          Esther James have favorited product.
                        </span>
                      </div>
                      {/*end::Text*/}
                    </div>
                  </div>
                  <div className="dashboard-timeline-label before-none mb30">
                    <div className="timeline-item">
                      {/*begin::Label*/}
                      <div className="child-timeline-label">23:07</div>
                      {/*end::Label*/}
                      {/*begin::Badge*/}
                      <div className="timeline-badge d-flex align-items-center color6">
                        <i className="fas fa-genderless" />
                      </div>
                      {/*end::Badge*/}
                      {/*begin::Text*/}
                      <div className="ra_pcontent pl10">
                        <span className="title">
                          Today offers by Digitech Galaxy
                        </span>{" "}
                        <br />{" "}
                        <span className="subtitle">
                          Offer is valid on orders of Rs.500 Or above for
                          selected products only.
                        </span>
                      </div>
                      {/*end::Text*/}
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
  );
}

export default Dashboard;
