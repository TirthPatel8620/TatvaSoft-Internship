import React from "react";
import { TextField, Select, MenuItem, InputLabel, Button } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import '../Signup.css';
import { useNavigate } from 'react-router-dom';
import { BaseUrl } from "../Component/Const";
import LogeedNav from "../Component/LoggedNav";

const initialValues = {
    id: 1,
    firstName: "",
    lastName: "",
    email: "",
    roleId: 3,
    role: "",
    password: ""
};
const UpdateProfile = () => {
    const Navigate = useNavigate();
    const validateSchema = Yup.object().shape({
        firstName: Yup.string().label("First Name").min(3, "too short").required(),
        lastName: Yup.string().label("Last Name").min(3, "too short").required(),
        email: Yup.string().label("Email").email("Enter Valid email").required(),
        roleId: Yup.string().label("Role").required(),
        password: Yup.string()
            .oneOf([Yup.ref("password"), null])
            .matches(
                /[A-Z]/,
                "Password must require atleast 1 capital letter character"
            )
            .matches(
                /[a-z]/,
                "Password must require atleast 1 small letter character"
            )
            .min(8, "Password must require minimum 8 character")
            .required("Please provide a valid password"),
    });


    function onSignupClick(values) {
        // console.log(errors);

        var config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `${BaseUrl}api/user`,
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify(values)
        };

        axios(config)
            .then(function (res) {
                console.log(res.status);
                if (res.status === 200) {
                    toast.success('User Registration successfully...');
                    Navigate("/productlist");
                    <ToastContainer />
                } else {
                    toast.error('Something went wrong. Please try again!');
                }
                // toast.success("Register successfully");
            })
            .catch(function () {
                toast.error("Invalid Registration");
            });


    }

    return (
        <>
            <LogeedNav />
            <div
                style={{
                    fontFamily: "Roboto",
                    fontSize: "15px",
                }}
            >
                <div id="heading" >
                    <h1
                        style={{
                            fontSize: "35",
                            fontFamily: "Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                        }}
                    >
                        Update Your Profile
                    </h1>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validateSchema}
                    onSubmit={onSignupClick}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleSubmit,
                        handleChange,
                        handleBlur,
                    }) => (
                        <form method="post" onSubmit={handleSubmit}>
                            <div className="GridContainer">
                                <div className="itemContainer">
                                    <span>First Name*</span>
                                    <TextField
                                        id="outlined-basic"
                                        name="firstName"
                                        // label="First Name"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.firstName && errors.firstName && (
                                        <div className="error" >{errors.firstName}</div>
                                    )}
                                </div>
                                <div className="itemContainer" >
                                    <span>Last Name*</span>
                                    <TextField
                                        id="outlined-basic"
                                        name="lastName"
                                        // label="Last Name"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.lastName && errors.lastName && (
                                        <div className="error" >{errors.lastName}</div>
                                    )}
                                </div>
                                <div className="itemContainer" >
                                    <span>Email</span>
                                    <TextField
                                        id="outlined-basic"
                                        name="email"
                                        // label="Last Name"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.email && errors.email && (
                                        <div className="error" >{errors.email}</div>
                                    )}
                                </div>

                                <div className="itemContainer"
                                    style={{
                                        // marginTop: "-40px",
                                    }}
                                >
                                    <span>Password*</span>
                                    <TextField
                                        id="outlined-basic"
                                        name="password"
                                        type="password"
                                        // label="First Name"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.password && errors.password && (
                                        <div className="error" >{errors.password}</div>
                                    )}
                                </div>

                                <div
                                    className="itemContainer"
                                    style={{
                                        // marginTop: "-40px",
                                    }}
                                >
                                    <span>Confirm Password*</span>
                                    <TextField
                                        id="outlined-basic"
                                        // name="cpassword"
                                        type="password"
                                        // label="First Name"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                    // onChange={handleChange}
                                    // onBlur={handleBlur}
                                    />
                                    {/* {touched.cpassword && errors.cpassword && (
                                        <div className="error">{errors.cpassword}</div>
                                    )} */}
                                </div>
                                <br />
                                <div
                                    style={{
                                        display: "flex",
                                        felxDirection: "row",
                                        columnGap: "1vh",
                                    }}
                                >
                                    <Button
                                        color="success"
                                        variant="contained"
                                        type="submit"
                                        style={{
                                            color: "white",
                                            height: "45px",
                                            width: "134px",
                                            marginTop: "25px",
                                            marginBottom: '25px',
                                        }}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        variant="raised"
                                        type="submit"
                                        style={{
                                            backgroundColor: "#F14d54",
                                            color: "white",
                                            height: "45px",
                                            width: "134px",
                                            marginTop: "25px",
                                            marginBottom: '25px',
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        </form>
                    )}</Formik>
            </div>
        </>
    );
}

export default UpdateProfile;