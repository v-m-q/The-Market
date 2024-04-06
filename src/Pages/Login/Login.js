import React from "react";
import login from '../../assets/Sign up-bro.svg'
import { useFormik } from "formik";
import LoginSchema from "../../schemas/loginSchema";
import axios from "axios";

const Login = () => {
  const response = "";
  const onsubmit = async () => {
    try {
      const response = await axios.post( "http://127.0.0.1:8000/account/signin", values, );
      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);
    } catch ( err ) {
      setError(err);
    }
  }
  console.log(`status: ${response}`)
  const { values, errors, handleChange, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: LoginSchema,
      onSubmit:onsubmit,
    });

  return (
    <div className="limiter">
      <div className="container-login100">
        <div
          className="wrap-login100"
        >
          <div
            className="login100-pic js-tilt"
            data-tilt
            style={{ position: "relative", top: "-30" }}
          >
            <img src={login} alt="IMG" />
          </div>

          <form
            className="login100-form validate-form"
            onSubmit={handleSubmit}
            method="post"
          >
            <span className="login100-form-title">Welcome back</span>
            <div className="wrap-input100 validate-input">
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Email"
                autoComplete="off"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="text-danger">{errors.email}</p>
              ) : (
                ""
              )}
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                className="input100"
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="text-danger">{errors.password}</p>
              ) : (
                ""
              )}
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>
            {/* { error ? (
              <p className="text-danger"> wrong password or email</p>
            ) : (
              ""
            )} */}
            <div className="container-login100-form-btn">
              <button className="login100-form-btn" type="submit">
                Login
              </button>
            </div>

            <div className="text-center p-t-12">
              <span className="txt1">Forgot</span>
              <a className="txt2" href="#">
                Username / Password?
              </a>
            </div>

            <div className="text-center p-t-136">
              <a className="txt2" href="#">
                Create your Account
                <i
                  className="fa fa-long-arrow-right m-l-5"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
