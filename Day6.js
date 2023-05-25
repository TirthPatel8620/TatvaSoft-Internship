import React from 'react'

import * as Yup from 'yup';
import { Formik, Form } from "formik";
import { Button, TextField } from "@mui/material";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";

const Day6 = async () => {
    const initialValue = {
        // name: "",
        email: "",
        password: "",
    };
    var [user, setUser] = useState([]);
    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            // if(res.status === 201){
            console.log(res.data);
            setUser(res.data);
            // }
        });

    }, []);

    async function loginisubmit(value) {
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
                // <ToastContainer />
            }
            // console.log(res);
        });
        var res = await axios.delete('https://jsonplaceholder.typicode.com/posts/1');
        if (res.status === 200) {
            toast.success('Delete Api call completed successfully...', {
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
    const validateSchema = Yup.object().shape({
        email: Yup.string().email("Please enter valid email").required("Please provide an email address"),

        password: Yup.string().oneOf([Yup.ref('password'), null]).matches(/[A-Z]/, "Password must require atleast 1 capital letter character").matches(/[a-z]/, "Password must require atleast 1 small letter character").min(8, 'Password must require minimum 8 character').required("Please provide a valid password"),

    });

    return (
        <div>

            <h1>Day 6 api fetching data</h1>

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
            <div>

                {user.map((item) => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Day6;
