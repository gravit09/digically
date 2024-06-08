import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ToggleContext } from "../App";

function Profile() {
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
              <Link to="/dashboard/services" className="items-center">
                <i className="flaticon-presentation mr15" />
                Manage Services
              </Link>
            </div>
            <p className="fz15 fw400 ff-heading pl30 mt30">Account</p>
            <div className="sidebar_list_item ">
              <Link to="/dashboard/profile" className="items-center -is-active">
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
                  <h2>My Profile</h2>
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                  <div className="bdrb1 pb15 mb25">
                    <h5 className="list-title">Profile Details</h5>
                  </div>
                  <div className="col-xl-7">
                    <div className="profile-box d-sm-flex align-items-center mb30">
                      <div className="profile-img mb20-sm">
                        <img
                          className="w-100 rounded-circle wa-xs"
                          src="/images/team/fl-1.png"
                          alt=""
                        />
                      </div>
                      <div className="profile-content ml20 ml0-xs">
                        <div className="d-flex align-items-center my-3">
                          <a href="#" className="tag-delt text-thm2">
                            <span className="flaticon-delete text-thm2" />
                          </a>
                          <a href="#" className="upload-btn ml10">
                            Upload Images
                          </a>
                        </div>
                        <p className="text mb-0">
                          Max file size is 1MB, Minimum dimension: 330x300 And
                          Suitable files are .jpg &amp; .png
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <form className="form-style1">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">
                              Username
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
                              Email Address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="i will"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">
                              Phone Number
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
                              Tagline
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
                            <div className="form-style1">
                              <label className="heading-color ff-heading fw500 mb10">
                                Hourly Rate
                              </label>
                              <div className="bootselect-multiselect">
                                <select className="selectpicker">
                                  <option>Select</option>
                                  <option>$50</option>
                                  <option>$60</option>
                                  <option>$70</option>
                                  <option>$80</option>
                                  <option>$90</option>
                                  <option>$100</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb20">
                            <div className="form-style1">
                              <label className="heading-color ff-heading fw500 mb10">
                                Gender
                              </label>
                              <div className="bootselect-multiselect">
                                <select className="selectpicker">
                                  <option>Select</option>
                                  <option>Male</option>
                                  <option>Female</option>
                                  <option>Other</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb20">
                            <div className="form-style1">
                              <label className="heading-color ff-heading fw500 mb10">
                                Specialization
                              </label>
                              <div className="bootselect-multiselect">
                                <select className="selectpicker">
                                  <option>Select</option>
                                  <option>Male</option>
                                  <option>Female</option>
                                  <option>Other</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb20">
                            <div className="form-style1">
                              <label className="heading-color ff-heading fw500 mb10">
                                Type
                              </label>
                              <div className="bootselect-multiselect">
                                <select className="selectpicker">
                                  <option>Select</option>
                                  <option>Type One</option>
                                  <option>Type Two</option>
                                  <option>Type Three</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb20">
                            <div className="form-style1">
                              <label className="heading-color ff-heading fw500 mb10">
                                Country
                              </label>
                              <div className="bootselect-multiselect">
                                <select className="selectpicker">
                                  <option>Turkey</option>
                                  <option>United Kingdom</option>
                                  <option>United State</option>
                                  <option>Ukraine</option>
                                  <option>Uruguay</option>
                                  <option>UK</option>
                                  <option>Uzbekistan</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb20">
                            <div className="form-style1">
                              <label className="heading-color ff-heading fw500 mb10">
                                City
                              </label>
                              <div className="bootselect-multiselect">
                                <select className="selectpicker">
                                  <option data-tokens="California">
                                    California
                                  </option>
                                  <option data-tokens="Chicago">Chicago</option>
                                  <option data-tokens="LosAngeles">
                                    Los Angeles
                                  </option>
                                  <option data-tokens="Manhattan">
                                    Manhattan
                                  </option>
                                  <option data-tokens="NewJersey">
                                    New Jersey
                                  </option>
                                  <option data-tokens="NewYork">
                                    New York
                                  </option>
                                  <option data-tokens="SanDiego">
                                    San Diego
                                  </option>
                                  <option data-tokens="SanFrancisco">
                                    San Francisco
                                  </option>
                                  <option data-tokens="Texas">Texas</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb20">
                            <div className="form-style1">
                              <label className="heading-color ff-heading fw500 mb10">
                                Languages
                              </label>
                              <div className="bootselect-multiselect">
                                <select className="selectpicker" multiple="">
                                  <option>English</option>
                                  <option>Spanish</option>
                                  <option>Greek</option>
                                  <option>Tarkish</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb20">
                            <div className="form-style1">
                              <label className="heading-color ff-heading fw500 mb10">
                                Languages Level
                              </label>
                              <div className="bootselect-multiselect">
                                <select className="selectpicker">
                                  <option>Select</option>
                                  <option>Fluent</option>
                                  <option>Mid Level</option>
                                  <option>Conversational</option>
                                  <option>Other</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb10">
                            <label className="heading-color ff-heading fw500 mb10">
                              Introduce Yourself
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
                <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                  <div className="bdrb1 pb15 mb25">
                    <h5 className="list-title">Skills</h5>
                  </div>
                  <div className="col-lg-7">
                    <div className="row">
                      <form className="form-style1">
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="mb20">
                              <div className="form-style1">
                                <label className="heading-color ff-heading fw500 mb10">
                                  Skills 1
                                </label>
                                <div className="bootselect-multiselect">
                                  <select className="selectpicker">
                                    <option>Designer</option>
                                    <option>UI/UX</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="mb20">
                              <div className="form-style1">
                                <label className="heading-color ff-heading fw500 mb10">
                                  Point
                                </label>
                                <div className="bootselect-multiselect">
                                  <select className="selectpicker">
                                    <option>90</option>
                                    <option>80</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="mb20">
                              <div className="form-style1">
                                <label className="heading-color ff-heading fw500 mb10">
                                  Skills 2
                                </label>
                                <div className="bootselect-multiselect">
                                  <select className="selectpicker">
                                    <option>Developer</option>
                                    <option>Programmer</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="mb20">
                              <div className="form-style1">
                                <label className="heading-color ff-heading fw500 mb10">
                                  Point
                                </label>
                                <div className="bootselect-multiselect">
                                  <select className="selectpicker">
                                    <option>60</option>
                                    <option>70</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="mb20">
                              <div className="form-style1">
                                <label className="heading-color ff-heading fw500 mb10">
                                  Skills 3
                                </label>
                                <div className="bootselect-multiselect">
                                  <select className="selectpicker">
                                    <option>Video Editor</option>
                                    <option>Audio &amp; Music</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="mb20">
                              <div className="form-style1">
                                <label className="heading-color ff-heading fw500 mb10">
                                  Point
                                </label>
                                <div className="bootselect-multiselect">
                                  <select className="selectpicker">
                                    <option>75</option>
                                    <option>80</option>
                                  </select>
                                </div>
                              </div>
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
                </div>

                <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                  <div className="bdrb1 pb15 mb25">
                    <h5 className="list-title">Change password</h5>
                  </div>
                  <div className="col-lg-7">
                    <div className="row">
                      <form className="form-style1">
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="mb20">
                              <label className="heading-color ff-heading fw500 mb10">
                                Old Password
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="********"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="mb20">
                              <label className="heading-color ff-heading fw500 mb10">
                                New Password
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="********"
                              />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="mb20">
                              <label className="heading-color ff-heading fw500 mb10">
                                Confirm New Password
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="********"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="text-start">
                              <a
                                className="ud-btn btn-thm"
                                href="page-contact.html"
                              >
                                Change Password
                                <i className="fal fa-arrow-right-long" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                  <div className="col-lg-7">
                    <div className="row">
                      <div className="bdrb1 pb15 mb25">
                        <h5 className="list-title">Change password</h5>
                      </div>
                      <form className="form-style1">
                        <div className="row">
                          <div className="col-sm-12">
                            <h6>Close account</h6>
                            <p className="text">
                              Warning: If you close your account, you will be
                              unsubscribed from all your 5 courses, and will
                              lose access forever.
                            </p>
                          </div>
                          <div className="col-sm-6">
                            <div className="mb20">
                              <label className="heading-color ff-heading fw500 mb10">
                                Enter Password
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="********"
                              />
                            </div>
                            <div className="text-start">
                              <a
                                className="ud-btn btn-thm"
                                href="page-contact.html"
                              >
                                Change Password
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

export default Profile;
