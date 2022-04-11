import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
// import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
     <header>
        <div className="logo2">VENUSTY</div>
        <div className="login-signup-button">
            <a href={window.location.origin} id="signup-button">Home</a>
            <a href={window.location.origin + "/login"} id="login-button">Login</a>
            <a href={window.location.origin + "/register"} id="signup-button">SignUp</a>
        </div>
        </header>
   </div>
 );
}