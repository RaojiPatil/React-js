import { add } from "./cal.js"
import "./style.css";

import React from "react";
import ReactDOM from "react-dom";

console.log(add(5, 5));



ReactDOM.render (
    <h1 className="redtext">
   <div>hello</div>
    </h1>,
    document.getElementById("root")
);

// @babel/core @babel/node @babel/preset-env @babel/preset-react babel-loader