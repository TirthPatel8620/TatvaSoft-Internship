import React from "react";
import { useNavigate } from "react-router-dom";
const PageTwo = () => {
    const Navigate = useNavigate();
    return (<div>
        <h1>Dear Developer,</h1>
        You are on page 2. Please eat an apple 🍎.
        <br></br>
        <button onClick={() => Navigate("/")}>Click me to render page 2</button>
    </div>);
};
export default PageTwo;