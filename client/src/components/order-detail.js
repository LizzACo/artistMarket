import React from "react";
import '../css/order-history.css';
import '../css/header-footer.css';
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// Here, we display our Navbar
export default function OrderHistory() {
 return (
   <div>
     <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>VENUSTY &gt; Order History &gt; Order Detail</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        <div className="sub-menu">
          <div className="sub-menu-list">
            <a href="/profile-collects" className="collects">Collects</a>
            <a href="/follow" className="followed-artists">Followed Artists</a>
            <a href="/order-history" className="order">Order History</a>
            <a href="/edit-setting" className="edit-settings">Edit Settings</a>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-md-center row1">
            <div className="col-4 column1">
            <img className="box" src="img/artist11.png" alt="ordered artwork"/>
            </div>
            <div className="col-4 column2">
              <h2 className="order-in-progress">Order Detail</h2>
              <h3 className="order-number-2">ORDER NUMBER: #CCP000000034</h3>
              <h3 className="order-date">ORDER DATE: Mar 13th, 2022</h3>
              <h2 className="order-in-progress-2">Order Total</h2>
              <div className="price-2">$ 3,200</div>
              <h2 className="order-in-progress-2">Shipping</h2>
              <h3 className="order-number-2">Ship To</h3>
              <div className="address">
                Alice Z.<br />
                3200 Richman Blvd&lt;<br />
                Oackville, ON, R1C 1H1
              </div>
              <h2 className="order-in-progress-2">Payment</h2>
              <h3 className="order-number-2">Credit Card</h3>
              <div className="address">
                ****** 2022<br />
                3Exp: 02/2023
              </div>
            </div>
          </div>
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