import React from "react";
import { TextField, Select, MenuItem, InputLabel, Button } from "@mui/material";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import '../Signup.css';
import { useNavigate } from 'react-router-dom';
import { BaseUrl } from "../Component/Const";
import LoginNav from "../Component/LoginNav";

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    roleId: 3,
    password: ""
};
const Signup = () => {
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
        // cpassword: Yup.string()
        //     .label("confirm password")
        //     .required()
        //     .oneOf([Yup.ref("password"), null], "Passwords must match"),
    });


    // const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    //     useFormik({
    //         initialValues,
    //         validationSchema: validateSchema,
    //         onSubmit: (values ) => {

    //             var config = {
    //                 method: 'post',
    //                 maxBodyLength: Infinity,
    //                 url: 'https://book-e-sell-node-api.vercel.app/api/user',
    //                 headers: { "Content-Type": "application/json" },
    //                 data: JSON.stringify(values)
    //             };

    //             axios(config)
    //                 .then(function () {
    //                     toast.success("Register successfully");
    //                     Navigate("/");
    //                 })
    //                 .catch(function () {
    //                     toast.error("Invalid Registration");
    //                 });

    //         }
    //     });
    function onSignupClick(values) {
        // console.log(errors);

        var config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${BaseUrl}api/user`,
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify(values)
        };

        axios(config)
            .then(function (res) {
                console.log(res.status);
                if (res.status === 409) {
                    console.log("Already exist");
                    toast.success('User already exist. Please login!');
                    <ToastContainer />
                } else if (res.status === 200) {
                    toast.success('User Registration successfully...');
                    <ToastContainer />
                    Navigate("/");
                } else {
                    toast.error('Something went wrong. Please try again!');
                }
                // toast.success("Register successfully");
            })
            .catch(function () {
                toast.error("Invalid Registration");
            });

        // var data = {
        //     "firstName": "",
        //     "lastName": "",
        //     "email": "",
        //     "roleId": 2,
        //     "password": "",
        // };
        // console.log(data);
        // axios.post(`${BaseUrl}api/user`,
        //     {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(data)
        //     }
        // ).then((res) => {
        //     console.log(res.status);
        //     if (res.status === 409) {
        //         console.log("Already exist");
        //         toast.success('User already exist. Please login!');
        //         <ToastContainer />
        //     } else if (res.status === 200) {
        //         toast.success('User Registration successfully...');
        //         <ToastContainer />
        //     } else {
        //         toast.error('Something went wrong. Please try again!');
        //     }
        // })

    }

    return (
        <>
            <LoginNav />
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
                        Create An Account
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
                                <div className="itemContainer" >
                                    <span>Role</span>
                                    <InputLabel id="role"></InputLabel>
                                    <Select
                                        defaultValue=""
                                        name="roleId"
                                        style={{
                                            width: "20",
                                        }}
                                        labelId="CategoryList"
                                        id="demo-simple-select"
                                        //   value={age}
                                        // label="Category"
                                        fullWidth
                                        size="small"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        {/* <MenuItem value={""}></MenuItem> */}
                                        <MenuItem value="2">Seller</MenuItem>
                                        <MenuItem value="3">Buyer</MenuItem>
                                    </Select>
                                    {touched.role && errors.role && (
                                        <div className="error">{errors.role}</div>
                                    )}
                                </div>
                                <div style={{
                                    marginTop: "-40px",
                                }} >
                                    <h4>Login Information</h4>
                                </div>
                                <br />
                                <div
                                    style={{
                                        marginTop: "-40px",
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
                                    style={{
                                        marginTop: "-40px",
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

                                <div
                                    style={{
                                        display: "flex",
                                        felxDirection: "row",
                                        columnGap: "1vh",
                                    }}
                                >
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
                                        Register
                                    </Button>
                                </div>
                            </div>
                        </form>
                    )}</Formik>
            </div>
        </>
    );
}

export default Signup;