import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignIn() {
  const [formState, setFormState] = useState({
    UserName: "",
    EmailID: "",
    Password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formState.UserName.trim() && !formState.EmailID.trim()) {
      newErrors.UserName = "Either username or email is required";
      newErrors.EmailID = "Either username or email is required";
    }
    if (!formState.Password.trim()) newErrors.Password = "Password is required";
    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await fetch("http://139.84.175.38/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            UserName: formState.UserName,
            EmailID: formState.EmailID,
            Password: formState.Password,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Network response was not ok");
        }

        const data = await response.json();
        alert("Login successful!");
        console.log("Success:", data);

        // Redirect to the dashboard or home page
      } catch (error) {
        console.error("Error:", error);
        alert("There was a problem with the login");
      }
    }
  };

  return (
    <div className="body_content bgc-thm3">
      <section className="our-login">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="main-title text-center">
                <Link to="/">
                  <h1 className="mb30 mt-50">Digically</h1>
                </Link>
                <h2 className="title">Log In</h2>
                <p className="paragraph">
                  Give your visitor a smooth online experience with a solid UX
                  design
                </p>
              </div>
            </div>
          </div>
          <div className="row wow fadeInRight" data-wow-delay="300ms">
            <div className="col-xl-6 mx-auto">
              <div className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
                <div className="mb30">
                  <h4>We're glad to see you again!</h4>
                  <p className="text">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-thm">
                      Sign Up!
                    </Link>
                  </p>
                </div>
                <div className="mb20">
                  <label className="form-label fw600 dark-color">
                    Username or Email Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="UserName"
                    value={formState.UserName}
                    onChange={handleChange}
                    placeholder="Username or Email"
                  />
                  {errors.UserName && (
                    <span className="error-text">{errors.UserName}</span>
                  )}
                </div>
                <div className="mb20">
                  <label className="form-label fw600 dark-color">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="Password"
                    value={formState.Password}
                    onChange={handleChange}
                    placeholder="*******"
                  />
                  {errors.Password && (
                    <span className="error-text">{errors.Password}</span>
                  )}
                </div>
                <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb20">
                  <label className="custom_checkbox fz14 ff-heading">
                    Remember me
                    <input type="checkbox" defaultChecked="checked" />
                    <span className="checkmark" />
                  </label>
                  <a className="fz14 ff-heading" href="#">
                    Lost your password?
                  </a>
                </div>
                <div className="d-grid mb20">
                  <button
                    className="ud-btn btn-thm"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Log In <i className="fal fa-arrow-right-long" />
                  </button>
                </div>
                <div className="hr_content mb20">
                  <hr />
                  <span className="hr_top_text">OR</span>
                </div>
                <div className="d-md-flex justify-content-between">
                  <button
                    className="ud-btn btn-fb fz14 fw400 mb-2 mb-md-0"
                    type="button"
                  >
                    <i className="fab fa-facebook-f pr10" /> Continue Facebook
                  </button>
                  <button
                    className="ud-btn btn-google fz14 fw400 mb-2 mb-md-0"
                    type="button"
                  >
                    <i className="fab fa-google" /> Continue Google
                  </button>
                  <button className="ud-btn btn-apple fz14 fw400" type="button">
                    <i className="fab fa-apple" /> Continue Apple
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
