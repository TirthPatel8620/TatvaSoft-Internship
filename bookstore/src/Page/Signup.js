// import React from "react";

// const Signup = () => {
//     return (
//         <>

//         </>
//     );
// }

// export default Signup;
import { Button, TextField } from "@mui/material";
// import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
// import LogoutIcon from "@mui/icons-material/Logout";
import { Formik, Form } from "formik";
// import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
// import appStyle from "../AppStyle.module.css";
import * as Yup from "yup";
// import { useState } from "react";

// function stringAvatar(name) {
//   return {
//     children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
//   };
// }

const SignIn = () => {
    const navigate = useNavigate();
    function navigateToHome(value) {
        console.log("clicked");
        console.log("form submitted:", value);

        navigate("/");
    }
    const initialValue = {
        name: "",
        email: "",
    };
    const validateSchema = Yup.object().shape({
        name: Yup.string().min(3, "Please make sure atlest 3 character in name"),
        email: Yup.string().email("Please enter valid email"),
    });
    // const [name, setName] = useState("Vicky Gandhi");
    // const [email, setEmail] = useState("Vicky@gmail.com");

    return (
        <div
            style={{
                position: 'relative',
                left: '30%',
                top: '50px',

            }}
        // className={appStyle.Container}
        >
            <div
            //   className={appStyle.MContainer}
            >
                <Formik
                    initialValues={initialValue}
                    validationSchema={validateSchema}
                    onSubmit={navigateToHome}
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
                            <TextField
                                id="outlined-basic"
                                name="name"
                                label="Name"
                                variant="outlined"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <br></br>
                            {touched.name && errors.name && <div
                            //   className={appStyle.error}
                            >{errors.name}</div>}

                            <br></br>
                            <TextField
                                id="outlined-basic"
                                name="email"
                                label="Email"
                                variant="outlined"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <br></br>
                            {touched.email && errors.email && <div
                            //   className={appStyle.error}
                            >{errors.email}</div>}

                            <br></br>
                            <Button type="submit" variant="contained" style={{
                                backgroundColor: '#f14d54',
                                color: 'white',
                            }}>
                                SignIn
                            </Button>
                            <br></br>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default SignIn;