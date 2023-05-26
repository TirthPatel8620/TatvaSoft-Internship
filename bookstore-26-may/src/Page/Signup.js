import React from "react";
import { TextField, Select, MenuItem, InputLabel, Button } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import '../Signup.css';


const Signup = () => {
    const initialValue = {
        firstname: "",
        lastname: "",
        email: "",
        role: "",
        password: "",
        cpassword: "",
    };
    const validateSchema = Yup.object().shape({
        firstname: Yup.string().label("First Name").min(3, "too short").required(),
        lastname: Yup.string().label("Last Name").min(3, "too short").required(),
        email: Yup.string().label("Email").email("Enter Valid email").required(),
        role: Yup.string().label("Role").required(),
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
        cpassword: Yup.string()
            .label("confirm password")
            .required()
            .oneOf([Yup.ref("password"), null], "Passwords must match"),
    });

    async function onSignupClick(value) {
        console.log("Form Submitted.....");
        console.log(value);

        const userdata = {
            userfname: value.fir0stname,
            userlname: value.lastname,
            useremail: value.email,
            userpassword: value.password,
        };

        const res = await axios.post("https://jsonplaceholder.typicode.com/posts", userdata);
        if (res.status === 201) {
            console.log(res.data.id);
            toast.success("Form Successfully Submitted....!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <>
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
                            fontFamily: "Roboto",
                        }}
                    >
                        Create An Account
                    </h1>
                </div>
                <Formik
                    initialValues={initialValue}
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
                        <form onSubmit={handleSubmit}>
                            <div className="GridContainer">
                                <div className="itemContainer">
                                    <span>First Name*</span>
                                    <TextField
                                        id="outlined-basic"
                                        name="firstname"
                                        // label="First Name"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.firstname && errors.firstname && (
                                        <div className="error" >{errors.firstname}</div>
                                    )}
                                </div>
                                <div className="itemContainer" >
                                    <span>Last Name*</span>
                                    <TextField
                                        id="outlined-basic"
                                        name="lastname"
                                        // label="Last Name"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.lastname && errors.lastname && (
                                        <div className="error" >{errors.lastname}</div>
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
                                        name="role"
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
                                        <MenuItem value={"Seller"}>Seller</MenuItem>
                                        <MenuItem value={"Buyer"}>Buyer</MenuItem>
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
                                        name="cpassword"
                                        type="password"
                                        // label="First Name"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.cpassword && errors.cpassword && (
                                        <div className="error">{errors.cpassword}</div>
                                    )}
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
                                        }}
                                    >
                                        Register
                                    </Button>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    );
}

export default Signup;