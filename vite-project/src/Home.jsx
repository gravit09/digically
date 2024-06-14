import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://139.84.175.38/gigs");
        if (response.data && response.data.data) {
          const gigs = response.data.data;
          const gigsWithImages = gigs.map((gig) => {
            if (gig.media && gig.media.length > 0) {
              const imageUri = gig.media[0].uri;
              const imageUrl = `http://139.84.175.38/gigs/media/${gig.gigId}/${imageUri}`;
              return {
                ...gig,
                imageUrl,
              };
            }
            return gig;
          });
          setData(gigsWithImages); // Update state with gigs including imageUrls
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <section className=" mt-40 pt30 pb90 ">
        <section className="breadcumb-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcumb-style1">
                  <div className="breadcumb-list">
                    <a href="#">Home</a>
                    <a href="#">Services</a>
                    <a href="#">Design &amp; Creative</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="breadcumb-section pt-0">
          <div className="cta-service-v1 cta-banner mx-auto maxw1700 pt120 pb120 bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg px30-lg">
            <img
              className="left-top-img wow zoomIn"
              src="images/vector-img/left-top.png"
              alt=""
            />
            <img
              className="right-bottom-img wow zoomIn"
              src="images/vector-img/right-bottom.png"
              alt=""
            />
            <img
              className="service-v1-vector bounce-y d-none d-lg-block"
              src="images/vector-img/vector-service-v1.png"
              alt=""
            />
            <div className="container">
              <div className="row wow fadeInUp">
                <div className="col-xl-5">
                  <div className="position-relative">
                    <h2>Design &amp; Creative</h2>
                    <p className="text mb30">
                      Give your visitor a smooth online experience with a solid
                      UX design
                    </p>
                    <div className="d-flex align-items-center">
                      <a
                        className="video-btn mr10 popup-iframe popup-youtube"
                        href="https://www.youtube.com/watch?v=7EHnQ0VM4KY"
                      >
                        <i className="fal fa-play" />
                      </a>
                      <h6 className="mb-0">How Digically Works</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row align-items-center mb20">
            <div className="col-6 col-sm-6 col-lg-9 pe-0">
              <div className="text-center text-sm-start">
                <div className="dropdown-lists">
                  <ul className="p-0 mb-0 text-center text-sm-start">
                    <li className="list-inline-item position-relative d-none d-xl-inline-block">
                      <button
                        className="open-btn mb10 dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                      >
                        Delivery Time <i className="fa fa-angle-down ms-2" />
                      </button>
                      <div className="dropdown-menu">
                        <div className="widget-wrapper pb25 mb0">
                          <div className="radio-element">
                            <div className="form-check d-flex align-items-center mb10">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault1"
                              >
                                Express 24H
                              </label>
                            </div>
                            <div className="form-check d-flex align-items-center mb10">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                defaultChecked="checked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault2"
                              >
                                Up to 3 days
                              </label>
                            </div>
                            <div className="form-check d-flex align-items-center mb10">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault3"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault3"
                              >
                                Up to 7 days
                              </label>
                            </div>
                            <div className="form-check d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault4"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault4"
                              >
                                Anytime
                              </label>
                            </div>
                          </div>
                        </div>
                        <button className="done-btn ud-btn btn-thm drop_btn">
                          Apply
                          <i className="fal fa-arrow-right-long" />
                        </button>
                      </div>
                    </li>
                    <li className="list-inline-item position-relative d-none d-xl-inline-block">
                      <button
                        className="open-btn mb10 dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                      >
                        Budget <i className="fa fa-angle-down ms-2" />
                      </button>
                      <div className="dropdown-menu dd3">
                        <div className="widget-wrapper pb25 mb0 pr20">
                          {/* Range Slider Desktop Version */}
                          <div className="range-slider-style1">
                            <div className="range-wrapper">
                              <div className="slider-range mb20" />
                              <div className="text-center">
                                <input
                                  type="text"
                                  className="amount"
                                  placeholder="$20"
                                />
                                <span className="fa-sharp fa-solid fa-minus mx-1 dark-color" />
                                <input
                                  type="text"
                                  className="amount2"
                                  placeholder="$70987"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="done-btn ud-btn btn-thm drop_btn3">
                          Apply
                          <i className="fal fa-arrow-right-long" />
                        </button>
                      </div>
                    </li>
                    <li className="list-inline-item position-relative d-none d-xl-inline-block">
                      <button
                        className="open-btn mb10 dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                      >
                        Level <i className="fa fa-angle-down ms-2" />
                      </button>
                      <div className="dropdown-menu">
                        <div className="widget-wrapper pb25 mb0">
                          <div className="checkbox-style1">
                            <label className="custom_checkbox">
                              Top Rated Seller
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                            <label className="custom_checkbox">
                              Level Two
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                            <label className="custom_checkbox">
                              Level One
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                            <label className="custom_checkbox">
                              New Seller
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </div>
                        <button className="done-btn ud-btn btn-thm dropdown-toggle">
                          Apply
                          <i className="fal fa-arrow-right-long" />
                        </button>
                      </div>
                    </li>
                    <li className="list-inline-item position-relative d-none d-xl-inline-block">
                      <button
                        className="open-btn mb10 dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                      >
                        Location <i className="fa fa-angle-down ms-2" />
                      </button>
                      <div className="dropdown-menu dd4 pb20">
                        <div className="widget-wrapper pr20">
                          <div className="checkbox-style1">
                            <label className="custom_checkbox">
                              United States
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                            <label className="custom_checkbox">
                              United Kingdom
                              <input type="checkbox" defaultChecked="checked" />
                              <span className="checkmark" />
                            </label>
                            <label className="custom_checkbox">
                              Canada
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                            <label className="custom_checkbox">
                              Germany
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                            <label className="custom_checkbox">
                              Turkey
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </div>
                        <button className="done-btn ud-btn btn-thm drop_btn4">
                          Apply
                          <i className="fal fa-arrow-right-long" />
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {data.map((item) => (
              <div key={item._id} className="col-sm-6 col-xl-3">
                <div className="listing-style1">
                  <div className="list-thumb">
                    {item.imageUrl ? (
                      <img
                        className="w-100"
                        src={item.imageUrl}
                        alt={item.title}
                      />
                    ) : (
                      <p>No Image Available</p>
                    )}
                    <a href="#" className="listing-fav fz12">
                      <span className="far fa-heart" />
                    </a>
                  </div>
                  <div className="list-content">
                    <p className="list-text body-color fz14 mb-1">
                      {item.category}
                    </p>
                    <h5 className="list-title">
                      <Link to="/services">{item.title}</Link>
                    </h5>
                    <div className="review-meta d-flex align-items-center">
                      <i className="fas fa-star fz10 review-color me-2" />
                      <p className="mb-0 body-color fz14">
                        <span className="dark-color me-2">
                          {item.rating.toFixed(2)}
                        </span>
                        {`${item.totalRatings} reviews`}
                      </p>
                    </div>
                    <hr className="my-2" />
                    <div className="list-meta d-flex justify-content-between align-items-center mt15">
                      <a href="#">
                        <span className="position-relative mr10">
                          <img
                            className="rounded-circle"
                            src="images/team/fl-s-1.png"
                            alt="Freelancer Photo"
                          />
                          <span className="online-badge" />
                        </span>
                        <span className="fz14">{item.by}</span>
                      </a>
                      <div className="budget">
                        <p className="mb-0 body-color">
                          Cost:
                          <span className="fz17 fw500 dark-color ms-1">
                            {item.cost} digic
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="mbp_pagination mt30 text-center">
              <ul className="page_navigation">
                <li className="page-item">
                  <a className="page-link" href="#">
                    {" "}
                    <span className="fas fa-angle-left" />
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1 <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="page-item" aria-current="page">
                  <a className="page-link" href="#">
                    2
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
                <li className="page-item d-inline-block d-sm-none">
                  <a className="page-link" href="#">
                    ...
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item d-none d-sm-inline-block">
                  <a className="page-link" href="#">
                    ...
                  </a>
                </li>
                <li className="page-item d-none d-sm-inline-block">
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
      </section>
    </>
  );
}

export default Home;
