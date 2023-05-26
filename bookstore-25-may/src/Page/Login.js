import React from "react";
import * as Yup from 'yup';
import { Formik, Form } from "formik";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import '../Login.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const Navigate = useNavigate();
    const initialValue = {
        // name: "",
        email: "",
        password: "",
    };

    function loginisubmit(value) {
        console.log("Submit clicked...", value);
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            'useremail': value.email,
            'userpassword': value.password,
        }).then((res) => {
            if (res.status === 201) {
                console.log(res.data.id);
                toast.success('Api call completed successfully...', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                <ToastContainer />
            }
            // console.log(res);
        });

    }
    const validateSchema = Yup.object().shape({
        // name: Yup.string().min(3, "Please make sure atlest 3 character in name"),
        email: Yup.string().email("Please enter valid email").required("Please provide an email address"),
        // password: Yup.string().required("Please provide a valid password"),
        // password: Yup.string().min(8, 'Password must require minimum 8 character'),
        // password: Yup.string().oneOf([Yup.ref('password'), null]).matches(/[a-z]/, "Password must require atleast 1 small letter character"),
        password: Yup.string().oneOf([Yup.ref('password'), null]).matches(/[A-Z]/, "Password must require atleast 1 capital letter character").matches(/[a-z]/, "Password must require atleast 1 small letter character").min(8, 'Password must require minimum 8 character').required("Please provide a valid password"),

    });

    return (
        <>
            <div className="login-page">
                <span className="home-login-home">Home > </span>
                <span className="home-login-login">Login</span>
                <h2 className="head-login"> Login</h2>
                <div className="signup-in-box">
                    <div className="new-customer">
                        <span className="customer-heading"> New Customer </span>
                        <div style={{
                            margin: '10px',
                            padding: '10px',

                        }}>
                            <span className="sign-up-in-title">Registration is free and easy</span>
                            <ul style={{
                                marginBottom:'75px',
                            }}>
                                <li className="register-customer-way">Factor checkout</li>
                                <li className="register-customer-way">Save multiple shopping addresses</li>
                                <li className="register-customer-way">View and track orders and more</li>
                            </ul>
                            <Button type="submit" variant="contained" style={{
                                backgroundColor: '#f14d54',
                                color: 'white',
                                marginTop: '20px',
                            }}>
                                Create an Account
                            </Button>
                        </div>
                    </div>
                    <div className="registered-customer">
                        <span className="customer-heading"> Registered Customers </span>
                        <Formik
                            initialValues={initialValue}
                            validationSchema={validateSchema}
                            onSubmit={loginisubmit}
                        >
                            {({
                                values,
                                touched,
                                errors,
                                handleSubmit,
                                handleChange,
                                handleBlur,
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <div style={{
                                        margin: '10px',
                                        padding: '10px',

                                    }}>
                                        <span className="sign-up-in-title">If you have an account with us, please log in</span><br></br>
                                        <br></br>
                                        <TextField
                                            id="outlined-basic"
                                            name="email"
                                            label="Email"
                                            variant="outlined"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            size="small"
                                            className="input-field"
                                        />
                                        <br></br>
                                        <span className="err-msg">

                                            {touched.email && errors.email && <div
                                            //   className={appStyle.error}
                                            >{errors.email}</div>}
                                        </span>

                                        <br></br>
                                        <TextField
                                            id="outlined-basic"
                                            name="password"
                                            label="Password"
                                            variant="outlined"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            size="small"
                                            type={'password'}
                                            className="input-field"
                                        />
                                        <br></br>
                                        <span className="err-msg">
                                            {touched.password && errors.password && <div
                                            //   className={appStyle.error}
                                            >{errors.password}</div>}
                                        </span>

                                        <br></br>
                                        <Button type="submit" variant="contained" style={{
                                            backgroundColor: '#f14d54',
                                            color: 'white',
                                            marginTop: '20px',
                                        }}>
                                            SignIn
                                        </Button>
                                        <br></br>
                                    </div>
                                </form>
                            )}
                        </Formik>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;