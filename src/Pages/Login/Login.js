import React, { useState } from "react";
import login from "../../assets/Sign up-bro.svg";
import { useFormik } from "formik";
import LoginSchema from "../../schemas/loginSchema";
import axiosInstance from "../../APIs/Axios";
import { useNavigate,Link } from "react-router-dom";

const Login = () => {
  const [ status, setstatus ] = useState( "" );
 const navigate = useNavigate();
  const onSubmit = () => {
    axiosInstance
      .post( "/account/signin", values )
      .then( ( res ) => {
        localStorage.setItem( "Token", res.data.access );
        localStorage.setItem( "refreshToken", res.data.refresh );
        setstatus( '' );
        navigate( '/account' )
      } )
      .catch( ( err ) => {
        if (err.code == "ERR_NETWORK") setstatus("An error occured");
        else setstatus("wrong password or email");
  });
  };
console.log(``)
  const { values, errors, handleChange, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: LoginSchema,
      onSubmit,
    });

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
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
            </div>
            { status!='' ? (
              <p className="text-danger">{status}</p>
            ) : (
              ""
            )}
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
              <Link className="txt2" to="/signup">
                Create your Account
                <i
                  className="fa fa-long-arrow-right m-l-5"
                  aria-hidden="true"
                ></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
