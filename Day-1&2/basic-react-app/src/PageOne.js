import React from "react";
import { useNavigate } from "react-router-dom";
import PageTwo from "./PageTwo";
const PageOne = () => {
    const Navigate = useNavigate();
    return (<div>
        <h1>Hello Developers...</h1>
        <p>You are on page 1</p>
        <button onClick={() => Navigate("/page2")}>Click me to render page 2</button>
    </div>);
};
export default PageOne;