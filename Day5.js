import { Button, TextField } from "@mui/material";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useState } from "react";

// function stringAvatar(name) {
//   return {
//     children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
//   };
// }

export const SignIn = () => {
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
    >
      <div 
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
              {touched.name && errors.name && <div 
              >{errors.name}</div>}
              <TextField
                id="outlined-basic"
                name="email"
                label="Email"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && <div 
              >{errors.email}</div>}
 
              <Button type="submit" variant="outlined">
                SignIn
              </Button>
            </form>
          )}
</Formik>
      </div>
    </div>
  );
};