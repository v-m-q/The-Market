import React, { useEffect, useState } from "react";
import "./Profile.css";
import axiosInstance from "../../APIs/Axios";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserProfileData } from "../../store/slices/profileSlice";
import userImg from "../../assets/user.png";
const Profile = () => {
  const user = useSelector((state) => state.profile.userData);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    getUser();
  }, []);
  const getUser = () => {
    if (!localStorage.getItem("Token")) {
      navigator("/login");
    }
    axiosInstance
      .get("/account", {
        headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
      })
      .then((res) => {
        dispatch(setUserProfileData(res.data.payload));
      })
      .catch((err) => {
        navigator("/login");
      });
  };
  const logOut = () => {
    localStorage.removeItem("Token"), localStorage.removeItem("refreshToken");
    navigator("/");
  };
  return (
    <div className="container">
      <div className="main-body">
        <nav aria-label="breadcrumb" className="main-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="javascript:void(0)">User</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              User Profile
            </li>
          </ol>
        </nav>

        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src={userImg}
                    alt="Admin"
                    className="rounded-circle"
                    width="150"
                  />
                  <div className="mt-3">
                    <h4>
                      {user && user.length > 0
                        ? `${user[0]?.first_name} ${user[0]?.last_name}`
                        : ""}
                    </h4>
                    <p className="text-secondary mb-1">
                      {user ? user[0].email : ""}
                    </p>
                    <button className="btn btn-primary" onClick={logOut}>
                      logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <ul className="list-group list-group-flush">
                <Link style={{ textDecoration: "none" }}>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-shopping-cart mr-2 icon-inline text-primary"
                      >
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h8.64a2 2 0 0 0 2-1.61L23 6H6"></path>
                      </svg>
                      Cart
                    </h6>
                  </li>
                </Link>
                <Link style={{ textDecoration: "none" }}>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-heart mr-2 icon-inline text-danger"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                      Wishlist
                    </h6>
                  </li>
                </Link>
                <Link style={{ textDecoration: "none" }}>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#f9a0c2"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-shopping-bag mr-2 icon-inline text-primary"
                      >
                        <path d="M9 2L7 6h10l-2-4H9zm7 4h3v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6h3l3 6h4l3-6zM3 6h4"></path>
                      </svg>
                      Orders
                    </h6>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {user && user.length > 0
                      ? `${user[0]?.first_name} ${user[0]?.last_name}`
                      : ""}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {user ? user[0].email : " "}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {user ? user[0].phone : ""}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {user ? user[0].address : " "}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    <button
                      className="btn btn-info"
                      onClick={() => navigator("/updateprofile")}
                      role="button"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
