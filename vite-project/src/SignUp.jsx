import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [formState, setFormState] = useState({
    UserName: "",
    Name: "",
    EmailID: "",
    PhoneNo: "",
    Password: "",
    CPassword: "",
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
    //validation logic
    const newErrors = {};
    if (!formState.UserName.trim()) newErrors.UserName = "Username is required";
    if (
      formState.UserName.length < 3 ||
      formState.UserName.length > 20 ||
      /\s/.test(formState.UserName)
    ) {
      newErrors.UserName =
        "Username must be 3-20 characters long and should not contain spaces";
    }
    if (!formState.Name.trim()) newErrors.Name = "Name is required";
    if (formState.Name.length < 3 || formState.Name.length > 50) {
      newErrors.Name = "Name must be 3-50 characters long";
    }
    if (!formState.EmailID.trim()) newErrors.EmailID = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formState.EmailID))
      newErrors.EmailID = "Email is invalid";
    if (!formState.PhoneNo.trim())
      newErrors.PhoneNo = "Phone number is required";
    if (!/^\d{10}$/.test(formState.PhoneNo))
      newErrors.PhoneNo = "Phone number must be a valid 10 digit Indian number";
    if (!formState.Password) newErrors.Password = "Password is required";
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(
        formState.Password
      )
    ) {
      newErrors.Password =
        "Password must be at least 8 characters long and include lowercase, uppercase, number, and special character";
    }
    if (formState.Password !== formState.CPassword)
      newErrors.CPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formState),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Network response was not ok");
        }

        const data = await response.json();
        alert("Form submitted successfully!");
        console.log("Success:", data);

        // Reset form after successful submission
        setFormState({
          UserName: "",
          Name: "",
          EmailID: "",
          PhoneNo: "",
          Password: "",
          CPassword: "",
        });
        setErrors({});
      } catch (error) {
        console.error("Error:", error);
        alert("There was a problem with the form submission");
      }
    }
  };

  return (
    <div className="body_content bgc-thm3">
      <section className="our-register">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="main-title text-center">
                <Link to="/">
                  <h1 className="mb30 mt-40">Digically</h1>
                </Link>
                <h2 className="title">Register</h2>
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
                  <h4>Let's create your account!</h4>
                  <p className="text mt20">
                    Already have an account?{" "}
                    <Link to="/signin" className="text-thm">
                      Log In!
                    </Link>
                  </p>
                </div>
                <div className="mb25">
                  <label className="form-label fw500 dark-color">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="UserName"
                    value={formState.UserName}
                    onChange={handleChange}
                    placeholder="ali"
                  />
                  {errors.UserName && (
                    <span className="error-text">{errors.UserName}</span>
                  )}
                </div>
                <div className="mb25">
                  <label className="form-label fw500 dark-color">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Name"
                    value={formState.Name}
                    onChange={handleChange}
                    placeholder="alitf"
                  />
                  {errors.Name && (
                    <span className="error-text">{errors.Name}</span>
                  )}
                </div>
                <div className="mb25">
                  <label className="form-label fw500 dark-color">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="EmailID"
                    value={formState.EmailID}
                    onChange={handleChange}
                    placeholder="alitfn58@gmail.com"
                  />
                  {errors.EmailID && (
                    <span className="error-text">{errors.EmailID}</span>
                  )}
                </div>
                <div className="mb25">
                  <label className="form-label fw500 dark-color">
                    Mobile No
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    name="PhoneNo"
                    value={formState.PhoneNo}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    placeholder="Enter a 10 digit mobile no"
                    required
                  />
                  {errors.PhoneNo && (
                    <span className="error-text">{errors.PhoneNo}</span>
                  )}
                </div>
                <div className="mb15">
                  <label className="form-label fw500 dark-color">
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
                <div className="mb15">
                  <label className="form-label fw500 dark-color">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="CPassword"
                    value={formState.CPassword}
                    onChange={handleChange}
                    placeholder="*******"
                  />
                  {errors.CPassword && (
                    <span className="error-text">{errors.CPassword}</span>
                  )}
                </div>
                <div className="d-grid mb20">
                  <button
                    className="ud-btn btn-thm default-box-shadow2"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Create Account <i className="fal fa-arrow-right-long" />
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

export default SignUp;
