import React from "react";
import { useNavigate } from "react-router-dom";
import PageTwo from "./PageTwo";
import './PageOne.css';
import { Avatar, TextField } from '@mui/material'
import { useState } from "react";


const PageOne = () => {
    const [name, setName] = useState("");
    const buttonClicked = () => {
        alert("Button has been clicked...");
    };
    const nameenter = () => {
        // setname(name.value);
    }
    const Navigate = useNavigate();
    return (<div>
        <h1>Hello Developers...</h1>
        <p>You are on page 1</p>
        <button onClick={() => Navigate("/page2")}>Click me to render page 2</button><br></br>
        <button onClick={buttonClicked}>Click here to get alert</button><br></br>
        <TextField style={{ margin: '5px' }} id="outlined-basic" label="Enter Name" variant="outlined" onChange={()=>{setName();console.log({name});}} />
        <Avatar style={{ padding: '5px', margin: '5px' }}>H</Avatar>
        {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
<Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar> */}
    </div>);
};
export default PageOne;