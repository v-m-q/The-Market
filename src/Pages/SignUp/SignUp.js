import React, { useState,useRef } from "react";
import { useFormik } from "formik";
import SignUpSchema from "../../schemas/registerationSchema";
import bg from "../../assets/as-an-art-director-create-a-photo-describes-e-commerce-in-a-hologram-laptop-open-in-the-website-wi-978612724.jpeg";
import axiosInstance from "../../APIs/Axios";
import { flushSync } from "react-dom";
const SignUp = () => {
   const [registrationMessage, setRegistrationMessage] = useState("");
   const [errorMessage, setErrorMessage] = useState("");
   const onSubmit = (values, actions) => {
     axiosInstance
     .post("/account/signup", values) 
     .then((res) => {
       setRegistrationMessage("Registered successfully!");
       setErrorMessage( "" );
         actions.resetForm({values:""})
        })
        .catch((err) => {
         console.log(values)
         if (err.response && err.response.status === 400) {
           setErrorMessage("This email already exists");
           setRegistrationMessage("");
         } else {
           setErrorMessage("An error occurred!");
           setRegistrationMessage( "" );
           console.log(err)
         }
       });
   };

   const { errors, values, handleChange, touched, isSubmitting ,handleBlur, handleSubmit } =
     useFormik({
       initialValues: {
         email: "",
         password: "",
         first_name: "",
         last_name: "",
         phone: "",
         address: "",
         confirm_password: "",
       },
       validationSchema: SignUpSchema,
       onSubmit,
     });
  return (
    <div className="d-lg-flex half">
      <div
        className="bg order-1 order-md-2"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="contents order-2 order-md-1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7 py-5">
              <h3>Register</h3>
              <p className="mb-4">
                Become part of our family! Register today and engage with us
                through reviews, ratings, and more.
              </p>
              <form autoComplete="off" onSubmit={handleSubmit}>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group first">
                      <label for="fname">First Name</label>
                      <input
                        autoComplete="off"
                        type="text"
                        className="form-control"
                        placeholder="e.g. John"
                        id="first_name"
                        name="first_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.first_name}
                      />
                      {errors.first_name && touched.first_name ? (
                        <p className="text-danger">{errors.first_name}</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group first">
                      <label for="last_name">Last Name</label>
                      <input
                        autoComplete="off"
                        type="text"
                        className="form-control"
                        placeholder="e.g. Smith"
                        id="last_name"
                        name="last_name"
                        value={values.last_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.last_name && touched.last_name ? (
                        <p className="text-danger">{errors.last_name}</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group first">
                      <label for="email">Email Address</label>
                      <input
                        autoComplete="off"
                        type="email"
                        className="form-control"
                        placeholder="e.g. john@your-domain.com"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email ? (
                        <p className="text-danger">{errors.email}</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group first">
                      <label for="phone">Phone Number</label>
                      <input
                        autoComplete="off"
                        type="text"
                        class="form-control"
                        placeholder="000 000 000 00"
                        id="phone"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.phone && touched.phone ? (
                        <p className="text-danger">{errors.phone}</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group first">
                      <label for="address">Address</label>
                      <input
                        autoComplete="off"
                        type="text"
                        className="form-control"
                        placeholder="street city"
                        id="address"
                        name="address"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.address && touched.address ? (
                        <p className="text-danger">{errors.address}</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group last mb-3">
                      <label for="password">Password</label>
                      <input
                        autoComplete="off"
                        type="password"
                        className="form-control"
                        placeholder="Your Password"
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.password && touched.password ? (
                        <p className="text-danger">{errors.password}</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group last mb-3">
                      <label for="confirm-password">Re-type Password</label>
                      <input
                        autoComplete="off"
                        type="password"
                        className="form-control"
                        placeholder="Your Password"
                        id="confirm_password"
                        value={values.confirm_password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.confirm_password && touched.confirm_password ? (
                        <p className="text-danger">{errors.confirm_password}</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <button type="submit" class="btn px-5 btn-primary">
                  Register
                </button>
                {registrationMessage && (
                  <p className="alert alert-success m-t-5">
                    {registrationMessage}
                  </p>
                )}
                {errorMessage && (
                  <p className="alert alert-danger m-t-5 ">{errorMessage}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
