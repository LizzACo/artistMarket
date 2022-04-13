import React from "react";
import '../css/edit-settings.css';
import '../css/header-footer.css';
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// edit setting
export default function Edit() {
 return (
   <div>
     <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Edit Setting</title>
        <div className="sub-menu">
          <div className="sub-menu-list">
            <a href="/profile-collects" className="collects">Collects</a>
            <a href="/follow" className="followed-artists">Followed Artists</a>
            <a href="/order-history" className="order">Order History</a>
            <a href="/edit-setting" className="edit-settings">Edit Settings</a>
          </div>
        </div>
        <div className="form-wrap">
          <h2>Information</h2>
          <form action method>
            <label htmlFor="user-name">User Name*</label>
            <input type="text" id="user-name" name="user-name" placeholder="Please enter your name" />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Please enter your email" />
            <label htmlFor="pn">Phone Number</label>
            <input type="text" id="pn" name="pn" placeholder="Please enter your phone number" />
            <button type="save" value="save" className="save-changes">Save Changes</button>
          </form>
          <hr />
          <h2>Password</h2>
          <button type="submit" value="pw" className="pw">Change Password</button>
        </div>
        <footer>
          <a href="about.html">About us</a>
          <a href="support.html">Support</a>
          <a href="resources.html">Resources</a>
          <a href="partnership.html">Partnership</a>
        </footer>
   </div>
 );
}