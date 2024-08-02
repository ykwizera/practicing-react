import React from "react";
import ReactDOM from "react-dom/client";

console.log("index.js is being executed");

const mywebsite = (
    <div>
        <img src="react-logo.png" width = "40px" />
        <h1>Fun facts about React</h1>
        <ol>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ol>
    </div>
);

ReactDOM.render(mywebsite, document.getElementById("root"))