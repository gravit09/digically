import React from "react";

function AddService() {
  return (
    <div className="dashboard_content_wrapper">
      <div className="dashboard dashboard_wrapper pr30 pr0-xl">
        <div className="dashboard__sidebar d-none d-lg-block">
          <div className="dashboard_sidebar_list">
            <p className="fz15 fw400 ff-heading pl30">Start</p>
            <div className="sidebar_list_item">
              <a href="page-dashboard.html" className="items-center">
                <i className="flaticon-home mr15" />
                Dashboard
              </a>
            </div>
            <div className="sidebar_list_item">
              <a href="page-dashboard-proposal.html" className="items-center">
                <i className="flaticon-document mr15" />
                My Proposals
              </a>
            </div>
            <div className="sidebar_list_item">
              <a href="page-dashboard-save.html" className="items-center">
                <i className="flaticon-like mr15" />
                Saved
              </a>
            </div>
            <div className="sidebar_list_item ">
              <a href="page-dashboard-message.html" className="items-center">
                <i className="flaticon-chat mr15" />
                Message
              </a>
            </div>
            <div className="sidebar_list_item ">
              <a href="page-dashboard-reviews.html" className="items-center">
                <i className="flaticon-review-1 mr15" />
                Reviews
              </a>
            </div>
            <div className="sidebar_list_item">
              <a href="page-dashboard-invoice.html" className="items-center">
                <i className="flaticon-receipt mr15" />
                Invoice
              </a>
            </div>
            <div className="sidebar_list_item">
              <a href="page-dashboard-payouts.html" className="items-center">
                <i className="flaticon-dollar mr15" />
                Payouts
              </a>
            </div>
            <div className="sidebar_list_item">
              <a href="page-dashboard-statement.html" className="items-center">
                <i className="flaticon-web mr15" />
                Statements
              </a>
            </div>
            <p className="fz15 fw400 ff-heading pl30 mt30">
              Organize and Manage
            </p>
            <div className="sidebar_list_item ">
              <a
                href="page-dashboard-manage-service.html"
                className="items-center"
              >
                <i className="flaticon-presentation mr15" />
                Manage Services
              </a>
            </div>
            <div className="sidebar_list_item ">
              <a
                href="page-dashboard-manage-jobs.html"
                className="items-center"
              >
                <i className="flaticon-briefcase mr15" />
                Manage Jobs
              </a>
            </div>
            <div className="sidebar_list_item ">
              <a
                href="page-dashboard-manage-project.html"
                className="items-center"
              >
                <i className="flaticon-content mr15" />
                Manage Project
              </a>
            </div>
            <p className="fz15 fw400 ff-heading pl30 mt30">Account</p>
            <div className="sidebar_list_item ">
              <a
                href="page-dashboard-profile.html"
                className="items-center -is-active"
              >
                <i className="flaticon-photo mr15" />
                My Profile
              </a>
            </div>
            <div className="sidebar_list_item ">
              <a href="page-login.html" className="items-center">
                <i className="flaticon-logout mr15" />
                Logout
              </a>
            </div>
          </div>
        </div>
        <div className="dashboard__main pl0-md">
          <div className="dashboard__content hover-bgc-color">
            <div className="row pb40">
              <div className="col-lg-12 d-none d-lg-flex">
                <div className="dashboard_navigationbar d-block d-lg-none">
                  <div className="dropdown">
                    <button onclick="myFunction()" className="dropbtn">
                      <i className="fa fa-bars pr10" /> Dashboard Navigation
                    </button>
                    <ul id="myDropdown" className="dropdown-content">
                      <li>
                        <p className="fz15 fw400 ff-heading mt30 pl30">Start</p>
                      </li>
                      <li>
                        <a href="page-dashboard.html">
                          <i className="flaticon-home mr10" />
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="page-dashboard-proposal.html">
                          <i className="flaticon-document mr10" />
                          My Proposals
                        </a>
                      </li>
                      <li>
                        <a href="page-dashboard-save.html">
                          <i className="flaticon-like mr10" />
                          Saved
                        </a>
                      </li>
                      <li>
                        <a href="page-dashboard-message.html">
                          <i className="flaticon-chat mr10" />
                          Message
                        </a>
                      </li>
                      <li>
                        <a href="page-dashboard-reviews.html">
                          <i className="flaticon-review-1 mr10" />
                          Reviews
                        </a>
                      </li>
                      <li>
                        <a href="page-dashboard-invoice.html">
                          <i className="flaticon-receipt mr10" />
                          Invoice
                        </a>
                      </li>
                      <li>
                        <a href="page-dashboard-payouts.html">
                          <i className="flaticon-dollar mr10" />
                          Payouts
                        </a>
                      </li>
                      <li>
                        <a href="page-dashboard-statement.html">
                          <i className="flaticon-web mr10" />
                          Statements
                        </a>
                      </li>
                      <li>
                        <p className="fz15 fw400 ff-heading mt30 pl30">
                          Organize and Manage
                        </p>
                      </li>
                      <li>
                        <a href="page-dashboard-manage-service.html">
                          <i className="flaticon-presentation mr10" />
                          Manage Services
                        </a>
                      </li>
                      <li>
                        <a href="page-dashboard-manage-jobs.html">
                          <i className="flaticon-briefcase mr10" />
                          Manage Jobs
                        </a>
                      </li>
                      <li>
                        <a href="page-dashboard-manage-project.html">
                          <i className="flaticon-content mr10" />
                          Manage Project
                        </a>
                      </li>
                      <li>
                        <p className="fz15 fw400 ff-heading mt30 pl30">
                          Account
                        </p>
                      </li>
                      <li className="active">
                        <a href="page-dashboard-profile.html">
                          <i className="flaticon-photo mr10" />
                          My Profile
                        </a>
                      </li>
                      <li>
                        <a href="page-login.html">
                          <i className="flaticon-logout mr10" />
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="dashboard_title_area">
                  <h2>Add Services</h2>
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="text-lg-end">
                  <a href="#" className="ud-btn btn-dark">
                    Save &amp; Publish
                    <i className="fal fa-arrow-right-long" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                  <div className="bdrb1 pb15 mb25">
                    <h5 className="list-title">Basic Information</h5>
                  </div>
                  <div className="col-xl-8">
                    <form className="form-style1">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">
                              Service Title
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="i will"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">
                              Price
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="$10"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">
                              Maximum Pending Order
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">
                              Delivery Time
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="eg:- 3 days"
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="mb10">
                            <label className="heading-color ff-heading fw500 mb10">
                              Tags
                            </label>
                            <textarea
                              cols={30}
                              rows={6}
                              placeholder="Add tags related to your Project"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb10">
                            <label className="heading-color ff-heading fw500 mb10">
                              Message To Buyer
                            </label>
                            <textarea
                              cols={30}
                              rows={6}
                              placeholder="Add a Message To The Buyer"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb10">
                            <label className="heading-color ff-heading fw500 mb10">
                              Description
                            </label>
                            <textarea
                              cols={30}
                              rows={6}
                              placeholder="Description"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="text-start">
                            <a
                              className="ud-btn btn-thm"
                              href="page-contact.html"
                            >
                              Save
                              <i className="fal fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="ps-widget bgc-white bdrs12 p30 mb30 overflow-hidden position-relative">
                  <div className="bdrb1 pb15 mb30">
                    <h5 className="list-title">Gallery</h5>
                  </div>
                  <div className="col-xl-9">
                    <div className="d-flex mb30">
                      <div className="gallery-item me-3 bdrs4 overflow-hidden position-relative">
                        <img
                          className="w-100"
                          src="images/gallery/g-1.jpg"
                          alt=""
                        />
                        <div className="del-edit">
                          <div className="d-flex justify-content-center">
                            <a
                              href="#"
                              className="icon me-2"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Edit"
                              aria-label="Edit"
                            >
                              <span className="flaticon-pencil" />
                            </a>
                            <a
                              href="#"
                              className="icon"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Delete"
                              aria-label="Delete"
                            >
                              <span className="flaticon-delete" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="gallery-item me-3 bdrs4 overflow-hidden position-relative">
                        <img
                          className="w-100"
                          src="images/gallery/g-2.jpg"
                          alt=""
                        />
                        <div className="del-edit">
                          <div className="d-flex justify-content-center">
                            <a
                              href="#"
                              className="icon me-2"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Edit"
                              aria-label="Edit"
                            >
                              <span className="flaticon-pencil" />
                            </a>
                            <a
                              href="#"
                              className="icon"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Delete"
                              aria-label="Delete"
                            >
                              <span className="flaticon-delete" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="gallery-item me-3 bdrs4 overflow-hidden position-relative">
                        <img
                          className="w-100"
                          src="images/gallery/g-3.jpg"
                          alt=""
                        />
                        <div className="del-edit">
                          <div className="d-flex justify-content-center">
                            <a
                              href="#"
                              className="icon me-2"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Edit"
                              aria-label="Edit"
                            >
                              <span className="flaticon-pencil" />
                            </a>
                            <a
                              href="#"
                              className="icon"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Delete"
                              aria-label="Delete"
                            >
                              <span className="flaticon-delete" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="gallery-item me-3 bdrs4 overflow-hidden position-relative">
                        <img
                          className="w-100"
                          src="images/gallery/g-4.jpg"
                          alt=""
                        />
                        <div className="del-edit">
                          <div className="d-flex justify-content-center">
                            <a
                              href="#"
                              className="icon me-2"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Edit"
                              aria-label="Edit"
                            >
                              <span className="flaticon-pencil" />
                            </a>
                            <a
                              href="#"
                              className="icon"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Delete"
                              aria-label="Delete"
                            >
                              <span className="flaticon-delete" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="gallery-item bdrs4 overflow-hidden">
                        <a href="#">
                          <img
                            className="w-100"
                            src="images/gallery/g-1.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <p className="text">
                      Max file size is 1MB, Minimum dimension: 330x300 And
                      Suitable files are .jpg &amp; .png
                    </p>
                    <a href="#" className="ud-btn btn-thm mt-2">
                      Save
                      <i className="fal fa-arrow-right-long" />
                    </a>
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

export default AddService;
