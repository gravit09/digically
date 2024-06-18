import React, { useState, useEffect, useContext } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import axios from "axios";
import { GigContext } from "./GigContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Service() {
  //const { selectedGigId } = useContext(GigContext);
  const [gigDetails, setGigDetails] = useState(null);

  const { gigid } = useParams();
  // Options for OwlCarousel
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  useEffect(() => {
    const fetchGigDetails = async () => {
      try {
        const response = await axios.get(`/api/gigs?gigId=${gigid}`);
        if (
          response.data &&
          response.data.data &&
          response.data.data.length > 0
        ) {
          const gig = response.data.data[0];
          if (gig.media && gig.media.length > 0) {
            const gigsWithImages = gig.media.map((mediaItem) => {
              const imageUri = mediaItem.uri;
              const imageUrl = `/api/gigs/media/${gig.gigId}/${imageUri}`;
              return {
                ...mediaItem,
                imageUrl,
              };
            });
            setGigDetails({
              ...gig,
              media: gigsWithImages,
            });
          } else {
            setGigDetails(gig);
          }
        } else {
          setGigDetails(null);
        }
      } catch (error) {
        console.error("Error fetching gig details:", error);
      }
    };

    if (gigid) {
      fetchGigDetails();
    } else {
      setGigDetails(null); // Reset gig details if no gigId is selected
    }
  }, [gigid]);

  //for placing order
  const handleOrder = (gigId) => {
    axios
      .post("/api/gigs/order", {
        gigId: gigId,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (!gigDetails) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <section className="pt0 pb90 pb30-md">
        <section className="breadcumb-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-lg-10">
                <div className="breadcumb-style1 mb10-xs">
                  <div className="breadcumb-list">
                    <a href="#">Home</a>
                    <a href="#">Services</a>
                    <a href="#">Design &amp; Creative</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-lg-2">
                <div className="d-flex align-items-center justify-content-sm-end">
                  <div className="share-save-widget d-flex align-items-center">
                    <span className="icon flaticon-share dark-color fz12 mr10" />
                    <div className="h6 mb-0">Share</div>
                  </div>
                  <div className="share-save-widget d-flex align-items-center ml15">
                    <span className="icon flaticon-like dark-color fz12 mr10" />
                    <div className="h6 mb-0">Save</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row wrap">
            <div className="col-lg-8">
              <div className="column wow fadeInUp">
                <div className="px30 bdr1 pt30 pb-0 mb30 bg-white bdrs12 wow fadeInUp default-box-shadow1">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="position-relative">
                        <h2>{gigDetails.title}</h2>
                        <div className="list-meta mt10">
                          <a className="list-inline-item mb5-sm" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="images/team/fl-d-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badge" />
                            </span>
                            <span className="fz14">{gigDetails.by}</span>
                          </a>
                          <p className="mb-0 dark-color fz14 list-inline-item ml25 ml15-sm mb5-sm ml0-xs">
                            <i className="fas fa-star vam fz10 review-color me-2" />{" "}
                            {gigDetails.rating} {gigDetails.totalRatings}{" "}
                            reviews
                          </p>
                          <p className="mb-0 dark-color fz14 list-inline-item ml25 ml15-sm mb5-sm ml0-xs">
                            <i className="flaticon-file-1 vam fz20 me-2" />{" "}
                            {gigDetails.ordersInQueue} Order in Queue
                          </p>
                          <p className="mb-0 dark-color fz14 list-inline-item ml25 ml15-sm mb5-sm ml0-xs">
                            <i className="flaticon-website vam fz20 me-2" />{" "}
                            {gigDetails.views} Views
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="opacity-100 mb30 mt30" />
                  <div className="row mt30">
                    <div className="col-sm-6 col-md-4">
                      <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                        <div className="icon flex-shrink-0">
                          <span className="flaticon-calendar" />
                        </div>
                        <div className="details">
                          <h5 className="title">Delivery Time</h5>
                          <p className="mb-0 text">
                            {gigDetails.deliveryTime} Days
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                      <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                        <div className="icon flex-shrink-0">
                          <span className="flaticon-goal" />
                        </div>
                        <div className="details">
                          <h5 className="title">English Level</h5>
                          <p className="mb-0 text">Professional</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                      <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                        <div className="icon flex-shrink-0">
                          <span className="flaticon-tracking" />
                        </div>
                        <div className="details">
                          <h5 className="title">Location</h5>
                          <p className="mb-0 text">India</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-single-sldier vam_nav_style slider-1-grid owl-carousel owl-theme mb60">
                  {gigDetails.media.map((mediaItem, index) => (
                    <div key={index} className="item">
                      <div className="thumb p50 p30-sm">
                        <img
                          src={mediaItem.imageUrl}
                          alt=""
                          className="w-100"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <OwlCarousel className="owl-theme" {...options}>
                  {gigDetails.media.map((mediaItem, index) => (
                    <div key={index} className="item">
                      <div className="thumb p50 p30-sm">
                        <img
                          src={mediaItem.imageUrl}
                          alt=""
                          className="w-100"
                        />
                      </div>
                    </div>
                  ))}
                </OwlCarousel>

                <div className="service-about">
                  <div className="p30 bdr1 mb30 bg-white bdrs12 wow fadeInUp default-box-shadow1">
                    <h4>Description</h4>
                    <p className="text mb30">{gigDetails.description}</p>
                  </div>

                  <div className="p30 bdr1 mb30 bg-white bdrs12 wow fadeInUp default-box-shadow1">
                    <h4>Frequently Asked Questions</h4>
                    <div className="accordion-style1 faq-page mt30">
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-item active">
                          <h2 className="accordion-header" id="headingOne">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              What methods of payments are supported?
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              Cras vitae ac nunc orci. Purus amet tortor non at
                              phasellus ultricies hendrerit. Eget a, sit morbi
                              nunc sit id massa. Metus, scelerisque volutpat nec
                              sit vel donec. Sagittis, id volutpat erat vel.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Can I cancel at anytime?
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              Cras vitae ac nunc orci. Purus amet tortor non at
                              phasellus ultricies hendrerit. Eget a, sit morbi
                              nunc sit id massa. Metus, scelerisque volutpat nec
                              sit vel donec. Sagittis, id volutpat erat vel.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              How do I get a receipt for my purchase?
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              Cras vitae ac nunc orci. Purus amet tortor non at
                              phasellus ultricies hendrerit. Eget a, sit morbi
                              nunc sit id massa. Metus, scelerisque volutpat nec
                              sit vel donec. Sagittis, id volutpat erat vel.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFour">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              Which license do I need?
                            </button>
                          </h2>
                          <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              Cras vitae ac nunc orci. Purus amet tortor non at
                              phasellus ultricies hendrerit. Eget a, sit morbi
                              nunc sit id massa. Metus, scelerisque volutpat nec
                              sit vel donec. Sagittis, id volutpat erat vel.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFive">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFive"
                              aria-expanded="false"
                              aria-controls="collapseFive"
                            >
                              How do I get access to a theme I purchased?
                            </button>
                          </h2>
                          <div
                            id="collapseFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFive"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              Cras vitae ac nunc orci. Purus amet tortor non at
                              phasellus ultricies hendrerit. Eget a, sit morbi
                              nunc sit id massa. Metus, scelerisque volutpat nec
                              sit vel donec. Sagittis, id volutpat erat vel.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p30 bdr1 mb30 bg-white bdrs12 wow fadeInUp default-box-shadow1">
                    <div className="product_single_content mb50">
                      <div className="mbp_pagination_comments">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="total_review mb30">
                              <h4>80 Reviews</h4>
                            </div>
                            <div className="d-md-flex align-items-center mb30">
                              <div className="total-review-box d-flex align-items-center text-center mb30-sm">
                                <div className="wrapper mx-auto">
                                  <div className="t-review mb15">4.96</div>
                                  <h5>Exceptional</h5>
                                  <p className="text mb-0">3,014 reviews</p>
                                </div>
                              </div>
                              <div className="wrapper ml60 ml0-sm">
                                <div className="review-list d-flex align-items-center mb10">
                                  <div className="list-number">5 Star</div>
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      style={{ width: "90%" }}
                                      role="progressbar"
                                      aria-valuenow={90}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <div className="value text-end">58</div>
                                </div>
                                <div className="review-list d-flex align-items-center mb10">
                                  <div className="list-number">4 Star</div>
                                  <div className="progress">
                                    <div
                                      className="progress-bar w-75"
                                      role="progressbar"
                                      aria-valuenow={75}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <div className="value text-end">20</div>
                                </div>
                                <div className="review-list d-flex align-items-center mb10">
                                  <div className="list-number">3 Star</div>
                                  <div className="progress">
                                    <div
                                      className="progress-bar w-50"
                                      role="progressbar"
                                      aria-valuenow={50}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <div className="value text-end">15</div>
                                </div>
                                <div className="review-list d-flex align-items-center mb10">
                                  <div className="list-number">2 Star</div>
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      style={{ width: "30%" }}
                                      role="progressbar"
                                      aria-valuenow={30}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <div className="value text-end">2</div>
                                </div>
                                <div className="review-list d-flex align-items-center mb10">
                                  <div className="list-number">1 Star</div>
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      style={{ width: "20%" }}
                                      role="progressbar"
                                      aria-valuenow={10}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <div className="value text-end">1</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mbp_first position-relative d-flex align-items-center justify-content-start mb30-sm">
                              <img
                                src="images/blog/comments-2.png"
                                className="mr-3"
                                alt="comments-2.png"
                              />
                              <div className="ml20">
                                <h6 className="mt-0 mb-0">Bessie Cooper</h6>
                                <div>
                                  <span className="fz14">12 March 2022</span>
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
                            <div className="review_cansel_btns d-flex">
                              <a href="#">
                                <i className="fas fa-thumbs-up" />
                                Helpful
                              </a>
                              <a href="#">
                                <i className="fas fa-thumbs-down" />
                                Not helpful
                              </a>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mbp_first position-relative d-flex align-items-center justify-content-start mt30 mb30-sm">
                              <img
                                src="images/blog/comments-2.png"
                                className="mr-3"
                                alt="comments-2.png"
                              />
                              <div className="ml20">
                                <h6 className="mt-0 mb-0">Darrell Steward</h6>
                                <div>
                                  <span className="fz14">12 March 2022</span>
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
                            <div className="review_cansel_btns d-flex pb30">
                              <a href="#">
                                <i className="fas fa-thumbs-up" />
                                Helpful
                              </a>
                              <a href="#">
                                <i className="fas fa-thumbs-down" />
                                Not helpful
                              </a>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="position-relative bdrb1 pb50">
                              <a
                                href="page-service-single.html"
                                className="ud-btn btn-light-thm"
                              >
                                See More
                                <i className="fal fa-arrow-right-long" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bsp_reveiw_wrt">
                      <h6 className="fz17">Add a Review</h6>
                      <p className="text">
                        Your email address will not be published. Required
                        fields are marked *
                      </p>
                      <h6>Your rating of this product</h6>
                      <div className="d-flex">
                        <i className="fas fa-star review-color" />
                        <i className="far fa-star review-color ms-2" />
                        <i className="far fa-star review-color ms-2" />
                        <i className="far fa-star review-color ms-2" />
                        <i className="far fa-star review-color ms-2" />
                      </div>
                      <form className="comments_form mt30 mb30-md">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="mb-4">
                              <label className="fw500 fz16 ff-heading dark-color mb-2">
                                Comment
                              </label>
                              <textarea
                                className="pt15"
                                rows={6}
                                placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb20">
                              <label className="fw500 ff-heading dark-color mb-2">
                                Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Ali Tufan"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb20">
                              <label className="fw500 ff-heading dark-color mb-2">
                                Email
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="creativelayers088"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb20">
                              <label className="custom_checkbox fz15 ff-heading">
                                Save my name, email, and website in this browser
                                for the next time I comment.
                                <input type="checkbox" />
                                <span className="checkmark" />
                              </label>
                            </div>
                            <a href="#" className="ud-btn btn-thm">
                              Send
                              <i className="fal fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="column">
                <div className="blog-sidebar ms-lg-auto">
                  <div className="price-widget">
                    <div className="navtab-style1">
                      <nav>
                        <div
                          className="nav nav-tabs mb20"
                          id="nav-tab2p"
                          role="tablist"
                        >
                          <button
                            className="nav-link fw500"
                            id="nav-item1p-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-item1p"
                            type="button"
                            role="tab"
                            aria-controls="nav-item1p"
                            aria-selected="true"
                          >
                            Price
                          </button>
                        </div>
                      </nav>
                      <div className="tab-content" id="nav-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="nav-item2p"
                          role="tabpanel"
                          aria-labelledby="nav-item2p-tab"
                        >
                          <div className="price-content">
                            <div className="price">
                              {gigDetails.cost} digics
                            </div>
                            <div className="h5 mb-2">{gigDetails.title}</div>
                            <p className="text fz14">
                              {gigDetails.description
                                .split(" ")
                                .slice(0, 30)
                                .join(" ")}
                              ...
                            </p>
                            <hr className="opacity-100 mb20" />
                            <ul className="p-0 mb15 d-sm-flex align-items-center">
                              <li className="fz14 fw500 dark-color">
                                <i className="flaticon-sandclock fz20 text-thm2 me-2 vam" />
                                {gigDetails.deliveryTime} Days Delivery
                              </li>
                              <li className="fz14 fw500 dark-color ml20 ml0-xs">
                                <i className="flaticon-recycle fz20 text-thm2 me-2 vam" />
                                {gigDetails.reportCount} Revisions
                              </li>
                            </ul>
                            <div className="list-style1">
                              <ul className="">
                                {gigDetails.tags.map((tag, index) => (
                                  <li key={index} className="mb15">
                                    <i className="far fa-check text-thm3 bgc-thm3-light" />
                                    {tag}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div
                              className="d-grid"
                              onClick={() => handleOrder(gigDetails.gigId)}
                            >
                              <Link
                                to="/orderCompleted"
                                className="ud-btn btn-thm"
                              >
                                Continue {gigDetails.cost} digics
                                <i className="fal fa-arrow-right-long" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="freelancer-style1 service-single mb-0">
                    <div className="wrapper d-flex align-items-center">
                      <div className="thumb position-relative mb25">
                        <img
                          className="rounded-circle mx-auto"
                          src="images/team/fl-1.png"
                          alt=""
                        />
                        <span className="online" />
                      </div>
                      <div className="ml20">
                        <h5 className="title mb-1">Kristin Watson</h5>
                        <p className="mb-0">Web developer</p>
                        <div className="review">
                          <p>
                            <i className="fas fa-star fz10 review-color pr10" />
                            <span className="dark-color">4.9</span> (595
                            reviews)
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr className="opacity-100" />
                    <div className="details">
                      <div className="fl-meta d-flex align-items-center justify-content-between">
                        <a className="meta fw500 text-start">
                          Location
                          <br />
                          <span className="fz14 fw400">India</span>
                        </a>
                        <a className="meta fw500 text-start">
                          Rate
                          <br />
                          <span className="fz14 fw400">$90 / hr</span>
                        </a>
                        <a className="meta fw500 text-start">
                          Job Success
                          <br />
                          <span className="fz14 fw400">98%</span>
                        </a>
                      </div>
                    </div>
                    <div className="d-grid mt30">
                      <a
                        href="page-freelancer-single.html"
                        className="ud-btn btn-thm-border"
                      >
                        Contact Me
                        <i className="fal fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Listings */}
      <section className="pt30 pb90 pb30-md">
        <div className="container">
          <div className="row wow fadeInUp">
            <div className="col-lg-12">
              <div className="main-title mb35">
                <h2>People Who Viewed This Service Also Viewed </h2>
                <p className="text">
                  Give your visitor a smooth online experience with a solid UX
                  design
                </p>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp">
            <div className="col-sm-6 col-lg-3">
              <div className="listing-style1">
                <div className="list-thumb">
                  <img className="w-100" src="images/listings/g-1.jpg" alt="" />
                  <a href="#" className="listing-fav fz12">
                    <span className="far fa-heart" />
                  </a>
                </div>
                <div className="list-content">
                  <p className="list-text body-color fz14 mb-1">
                    Web &amp; App Design
                  </p>
                  <h5 className="list-title">
                    <a href="page-services-single.html">
                      I will design modern websites in figma or adobe xd
                    </a>
                  </h5>
                  <div className="review-meta d-flex align-items-center">
                    <i className="fas fa-star fz10 review-color me-2" />
                    <p className="mb-0 body-color fz14">
                      <span className="dark-color me-2">4.82</span>94 reviews
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
                      <span className="fz14">Wanda Runo</span>
                    </a>
                    <div className="budget">
                      <p className="mb-0 body-color">
                        Starting at
                        <span className="fz17 fw500 dark-color ms-1">$983</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="listing-style1">
                <div className="list-thumb">
                  <img className="w-100" src="images/listings/g-1.jpg" alt="" />
                  <a href="#" className="listing-fav fz12">
                    <span className="far fa-heart" />
                  </a>
                </div>
                <div className="list-content">
                  <p className="list-text body-color fz14 mb-1">
                    Web &amp; App Design
                  </p>
                  <h5 className="list-title">
                    <a href="page-services-single.html">
                      I will design modern websites in figma or adobe xd
                    </a>
                  </h5>
                  <div className="review-meta d-flex align-items-center">
                    <i className="fas fa-star fz10 review-color me-2" />
                    <p className="mb-0 body-color fz14">
                      <span className="dark-color me-2">4.82</span>94 reviews
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
                      <span className="fz14">Wanda Runo</span>
                    </a>
                    <div className="budget">
                      <p className="mb-0 body-color">
                        Starting at
                        <span className="fz17 fw500 dark-color ms-1">$983</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="listing-style1">
                <div className="list-thumb">
                  <img className="w-100" src="images/listings/g-3.jpg" alt="" />
                  <a href="#" className="listing-fav fz12">
                    <span className="far fa-heart" />
                  </a>
                </div>
                <div className="list-content">
                  <p className="list-text body-color fz14 mb-1">
                    Design &amp; Creative
                  </p>
                  <h5 className="list-title line-clamp2">
                    <a href="page-services-single.html">
                      I will build a fully responsive design in HTML,CSS,
                      bootstrap, and javascript
                    </a>
                  </h5>
                  <div className="review-meta d-flex align-items-center">
                    <i className="fas fa-star fz10 review-color me-2" />
                    <p className="mb-0 body-color fz14">
                      <span className="dark-color me-2">4.82</span>94 reviews
                    </p>
                  </div>
                  <hr className="my-2" />
                  <div className="list-meta d-flex justify-content-between align-items-center mt15">
                    <a href="#">
                      <span className="position-relative mr10">
                        <img
                          className="rounded-circle"
                          src="images/team/fl-s-3.png"
                          alt="Freelancer Photo"
                        />
                        <span className="online-badge" />
                      </span>
                      <span className="fz14">Wanda Runo</span>
                    </a>
                    <div className="budget">
                      <p className="mb-0 body-color">
                        Starting at
                        <span className="fz17 fw500 dark-color ms-1">$983</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="listing-style1">
                <div className="list-thumb">
                  <img className="w-100" src="images/listings/g-4.jpg" alt="" />
                  <a href="#" className="listing-fav fz12">
                    <span className="far fa-heart" />
                  </a>
                </div>
                <div className="list-content">
                  <p className="list-text body-color fz14 mb-1">
                    Web &amp; App Design
                  </p>
                  <h5 className="list-title">
                    <a href="page-services-single.html">
                      I will do mobile app development for ios and android
                    </a>
                  </h5>
                  <div className="review-meta d-flex align-items-center">
                    <i className="fas fa-star fz10 review-color me-2" />
                    <p className="mb-0 body-color fz14">
                      <span className="dark-color me-2">4.82</span>94 reviews
                    </p>
                  </div>
                  <hr className="my-2" />
                  <div className="list-meta d-flex justify-content-between align-items-center mt15">
                    <a href="#">
                      <span className="position-relative mr10">
                        <img
                          className="rounded-circle"
                          src="images/team/fl-s-4.png"
                          alt="Freelancer Photo"
                        />
                        <span className="online-badge" />
                      </span>
                      <span className="fz14">Wanda Runo</span>
                    </a>
                    <div className="budget">
                      <p className="mb-0 body-color">
                        Starting at
                        <span className="fz17 fw500 dark-color ms-1">$983</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
