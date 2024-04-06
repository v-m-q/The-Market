import React from "react";
import login from "../../assets/Sign up-bro.svg";
import { useFormik } from "formik";
import SignUpSchema from "../../schemas/registerationSchema";
import axios from "axios";
import bg from "../../assets/bg-registration-form-2.jpg";
import regImg from "../../assets/registration-form-2.jpg";
const SignUp = () => {
    const onsubmit = async () => {
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/account/signup",
                values
            );
        } catch ( err ) {
            setError( err );
        }
    };
    const { values, errors, handleChange, touched, handleBlur, handleSubmit } =
        useFormik( {
            initialValues: {
                email: "",
                password: "",
                first_name: "",
                last_name: "",
                phone: "",
                address: "",
            },
            validationSchema: SignUpSchema,
            onSubmit: onsubmit,
        } );
    console.log( values, errors );
    return (
        <div className="wrapper" style={{ backgroundIimage: { bg } }}>
            <div className="inner">
                <form action="" method="post" onSubmit={handleSubmit}>
                    <h3>Registration Form</h3>
                    <div className="form-group">
                        <div className="form-wrapper">
                            <label for="">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="first_name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.first_name}
                            />
                        </div>
                        <div className="form-wrapper">
                            <label for="">Last Name</label>
                            <input
                                type="text"
                                name="last_name"
                                className="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.last_name}
                            />
                        </div>
                    </div>
                    <div className="form-wrapper">
                        <label for="">address</label>
                        <input
                            type="text"
                            name="address"
                            className="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.address}
                        />
                    </div>
                    <div className="form-wrapper">
                        <label for="">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            className="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}
                        />
                    </div>
                    <div className="form-wrapper">
                        <label for="">Email</label>
                        <input
                            type="text"
                            name="email"
                            className="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                    </div>
                    <div className="form-wrapper">
                        <label for="">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                    </div>
                    {/* <div className="checkbox">
                        <label>
                            <input type="checkbox" /> I caccept the Terms of Use & Privacy
                            Policy.
                            <span className="checkmark"></span>
                        </label>
                    </div> */}
                    <button type="submit">Register Now</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
