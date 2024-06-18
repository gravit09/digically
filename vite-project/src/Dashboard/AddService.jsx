import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests
import { ToggleContext } from "../App";
import "./gallery.css";

function AddService() {
  const { show } = useContext(ToggleContext);
  const [formState, setFormState] = useState({
    title: "",
    price: "",
    maxPendingOrder: "",
    deliveryTime: "",
    tags: [],
    desc: "",
    images: [],
    category: "",
  });

  // Function to handle changes in tags input
  const handleTagsChange = (e) => {
    const tags = e.target.value.split(" ").filter((tag) => tag.trim() !== "");
    setFormState((prevState) => ({
      ...prevState,
      tags,
    }));
  };

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle changes in image upload
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const totalImages = formState.images.length + files.length;
    if (totalImages > 5) {
      alert("You can only upload a maximum of 5 images");
      return;
    }
    setFormState((prevState) => ({
      ...prevState,
      images: [...prevState.images, ...files],
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new instance of FormData
    const formData = new FormData();

    // Append images to formData
    formState.images.forEach((image) => {
      formData.append("files[]", image);
    });

    // Append other form data
    formData.set(
      "data",
      JSON.stringify({
        title: formState.title,
        cost: formState.price,
        description: formState.desc,
        tags: formState.tags,
        deliveryTime: formState.deliveryTime,
        category: formState.category,
        maxPendingOrders: formState.maxPendingOrder,
      })
    );

    try {
      // Make API call to create gig
      const response = await axios.post("/api/Create/gigs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      // Handle success scenario
      console.log("Gig created successfully:", response.data);
    } catch (error) {
      // Handle error scenario
      console.error("Error creating gig:", error);
    }
  };
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
              <Link to="/dashboard" className="items-center">
                <i className="flaticon-home mr15" />
                Dashboard
              </Link>
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

            <p className="fz15 fw400 ff-heading pl30 mt30">
              Organize and Manage
            </p>
            <div className="sidebar_list_item ">
              <a
                href="page-dashboard-manage-service.html"
                className="items-center -is-active"
              >
                <i className="flaticon-presentation mr15" />
                Manage Services
              </a>
            </div>
            <p className="fz15 fw400 ff-heading pl30 mt30">Account</p>
            <div className="sidebar_list_item ">
              <a href="page-dashboard-profile.html" className="items-center ">
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
              <div className="col-lg-9">
                <div className="dashboard_title_area">
                  <h2>Add Services</h2>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="text-lg-end">
                  <button onClick={handleSubmit} className="ud-btn btn-dark">
                    Save &amp; Publish
                    <i className="fal fa-arrow-right-long" />
                  </button>
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
                              name="title"
                              onChange={handleChange}
                              value={formState.title}
                              type="text"
                              className="form-control"
                              placeholder="Service Title"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">
                              Price
                            </label>
                            <input
                              name="price"
                              onChange={handleChange}
                              value={formState.price}
                              type="number"
                              className="form-control"
                              placeholder="Price"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">
                              Maximum Pending Order
                            </label>
                            <input
                              name="maxPendingOrder"
                              type="number"
                              onChange={handleChange}
                              value={formState.maxPendingOrder}
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">
                              Category
                            </label>
                            <input
                              name="category"
                              type="text"
                              onChange={handleChange}
                              value={formState.category}
                              className="form-control"
                              placeholder="Category"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">
                              Delivery Time
                            </label>
                            <input
                              name="deliveryTime"
                              type="number"
                              className="form-control"
                              placeholder="Delivery Time"
                              onChange={handleChange}
                              value={formState.deliveryTime}
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
                              rows={3}
                              placeholder="Add tags separated by spaces"
                              onChange={handleTagsChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb10">
                            <label className="heading-color ff-heading fw500 mb10">
                              Description
                            </label>
                            <textarea
                              name="desc"
                              cols={30}
                              rows={6}
                              onChange={handleChange}
                              value={formState.desc}
                              placeholder="Description"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="ps-widget bgc-white bdrs12 p30 mb30 overflow-hidden position-relative">
                  <div className="bdrb1 pb15 mb30">
                    <h5 className="list-title">Images</h5>
                  </div>
                  <div className="col-xl-9">
                    <div className="gallery-grid mb30">
                      {formState.images.length === 0 && (
                        <p>No images selected</p>
                      )}
                      {formState.images.map((image, index) => (
                        <div
                          key={index}
                          className="gallery-item bdrs4 overflow-hidden position-relative"
                        >
                          <img
                            className="gallery-img"
                            src={URL.createObjectURL(image)}
                            alt={`Preview ${index}`}
                          />
                          <div className="del-edit">
                            <div className="d-flex justify-content-center">
                              <button
                                type="button"
                                className="icon me-2"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit"
                                aria-label="Edit"
                              >
                                <span className="flaticon-pencil" />
                              </button>
                              <button
                                type="button"
                                className="icon"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Delete"
                                aria-label="Delete"
                                onClick={() => {
                                  setFormState((prevState) => ({
                                    ...prevState,
                                    images: prevState.images.filter(
                                      (_, i) => i !== index
                                    ),
                                  }));
                                }}
                              >
                                <span className="flaticon-delete" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text">
                      Max file size is 1MB, Minimum dimension: 330x300. Suitable
                      files are .jpg &amp; .png
                    </p>
                    <input
                      type="file"
                      className="form-control"
                      multiple
                      onChange={handleImageChange}
                      accept=".jpg, .png"
                    />
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
                      © Digically. 2024. All rights reserved.
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
