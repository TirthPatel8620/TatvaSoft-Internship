import { TextField, Select, MenuItem, InputLabel, Button, InputAdornment } from "@mui/material";
import "../EditProduct.css";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { BaseUrl } from "../Component/Const";
import LogeedNav from "../Component/LoggedNav";

export const EditProduct = (bookprop) => {
    const initialValue = {
        // id: bookprop.id,
        id: 20,
        name: `${bookprop.name}`,
        description: `${bookprop.description}`,
        price: bookprop.price,
        categoryId: bookprop.categoryId,
        // base64image: `${bookprop.base64image}`,
        base64image: 'https://m.media-amazon.com/images/I/81InFh0R4UL.jpg',

    };
    const validateSchema = Yup.object().shape({
        name: Yup.string().required("required"),
        price: Yup.string().required("required"),
        description: Yup.string().min(20, "Make sure to have aleast 20 charater"),
    });

    function onClickSubmit(values) {
        var config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `${BaseUrl}api/book`,
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify(values)
        };
        axios(config)
            .then(function (res) {
                console.log(res.status);
                if (res.status === 200) {
                    toast.success('Book updated successfully...');
                    <ToastContainer />
                } else {
                    toast.error('Something went wrong. Please try again!');
                }
                // toast.success("Register successfully");
                // Navigate("/");
            })
            .catch(function () {
                toast.error("Could'nt Update");
            });
        // console.log("Form Submitted.....");
        // console.log(value);
        // toast("success");


    }
    return (
        <>
            <LogeedNav />
            <div
                style={{
                    fontFamily: "Roboto",
                }}
            >
                <div id="heading">
                    <h1
                        style={{
                            fontSize: "35",
                            fontFamily: "Roboto",
                        }}
                    >
                        Edit Product
                    </h1>
                </div>
                <hr className="heading-below-line"></hr>
                <Formik
                    initialValues={initialValue}
                    validationSchema={validateSchema}
                    onSubmit={onClickSubmit}
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
                                    <span>Book Name*</span>
                                    <TextField
                                        id="outlined-basic"
                                        name="name"
                                        // label="First Name"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.bookname && errors.bookname && (
                                        <div className="error">{errors.bookname}</div>
                                    )}
                                </div>
                                <div className="itemContainer">
                                    <span>Book Price(Rs)*</span>
                                    <TextField
                                        id="outlined-basic"
                                        name="price"
                                        // label="Price"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        startAdornment={<InputAdornment position="start">Rs.</InputAdornment>}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.price && errors.price && (
                                        <div className="error">{errors.price}</div>
                                    )}
                                </div>
                                <div className="itemContainer">
                                    <span>Category</span>
                                    <InputLabel id="CategoryList"></InputLabel>
                                    <Select
                                        defaultValue=""
                                        name="categoryId"
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
                                        <MenuItem value={"2"}>Horror</MenuItem>
                                        <MenuItem value={"3"}>Literature</MenuItem>
                                        <MenuItem value={"4"}>Science & technology</MenuItem>
                                        <MenuItem value={"5"}>Self improvements</MenuItem>
                                        <MenuItem value={"6"}>Business</MenuItem>
                                        <MenuItem value={"7"}>IT</MenuItem>
                                        <MenuItem value={"8"}>Test category</MenuItem>
                                        <MenuItem value={"9"}>Traveling_Places</MenuItem>
                                    </Select>
                                </div>
                                <div
                                    style={{
                                        position: "relative",
                                        // border:"1px solid red",
                                        marginTop: "25px",
                                        alignItems: "center",
                                    }}
                                >
                                    <label htmlFor="raised-button-file">
                                        <Button
                                            variant="raised"
                                            component="span"
                                            style={{
                                                backgroundColor: "#F14d54",
                                                color: "white",
                                                height: "40px",
                                                width: "120px",
                                                zIndex: "1",
                                            }}
                                        >
                                            Upload
                                        </Button>
                                    </label>
                                    <input
                                        accept="image/*"
                                        //   className={classes.input}
                                        //   style={{ display:  }}
                                        id="raised-button-file"
                                        multiple
                                        type="file"
                                        style={{
                                            zIndex: "-1",
                                            position: "absolute",
                                            left: "25px",
                                            top: "10px",
                                        }}
                                    />
                                </div>
                                <div className="itemContainer">
                                    <span>Description</span>
                                    <TextField
                                        name="description"
                                        id="outlined-multiline-flexible"
                                        // label="Description"
                                        fullWidth
                                        multiline
                                        maxRows={4}
                                        size="small"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.description && errors.description && (
                                        <div className="error">{errors.description}</div>
                                    )}
                                </div>

                                <br />
                                {/* <div></div> */}

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
                                            backgroundColor: "#7dc12b",
                                            color: "white",
                                            height: "40px",
                                            width: "100px",
                                        }}
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        variant="raised"
                                        style={{
                                            backgroundColor: "#F14d54",
                                            color: "white",
                                            height: "40px",
                                            width: "100px",
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    );
};