import React from "react";
import '../css/followed-artists.css';
import '../css/header-footer.css';
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// Here, we display our Navbar
export default function Follow() {
 return (
   <div>
     <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Follow</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        {/* <header>
          <div className="logo2">VENUSTY</div>
          <a href="#" className="profile">
            <div className="profile-btn" />
          </a>
        </header> */}
        <div className="sub-menu">
          <div className="sub-menu-list">
            <a href="#" className="collects">Collects</a>
            <a href="#" className="followed-artists">Followed Artists</a>
            <a href="#" className="order">Order History</a>
            <a href="#" className="edit-settings">Edit Settings</a>
          </div>
        </div>
        <div className="artists-wrap">
          <h2 className="artist-name">Claude Monet</h2>
          <p className="year">French, 1840-1926</p>
          <div className="drag-drop-slider" id="slider">
            <div className="artists">
              <div className="box" />
              <h3><a href>Claude Monet</a></h3>
              <p>Water Lilies, 1902</p>
            </div>
            <div className="artists">
              <div className="box" />
              <h3><a href>Claude Monet</a></h3>
              <p>Water Lilies, 1902</p>
            </div>
            <div className="artists">
              <div className="box" />
              <h3><a href>Claude Monet</a></h3>
              <p>Water Lilies, 1902</p>
            </div>
            <div className="artists">
              <div className="box" />
              <h3><a href>Claude Monet</a></h3>
              <p>Water Lilies, 1902</p>
            </div>
            <div className="artists">
              <div className="box" />
              <h3><a href>Claude Monet</a></h3>
              <p>Water Lilies, 1902</p>
            </div>
            <div className="artists">
              <div className="box" />
              <h3><a href>Claude Monet</a></h3>
              <p>Water Lilies, 1902</p>
            </div>
            <div className="artists">
              <div className="box" />
              <h3><a href>Claude Monet</a></h3>
              <p>Water Lilies, 1902</p>
            </div>
            <div className="artists">
              <div className="box" />
              <h3><a href>Claude Monet</a></h3>
              <p>Water Lilies, 1902</p>
            </div>
            <div className="artists">
              <div className="box" />
              <h3><a href>Claude Monet</a></h3>
              <p>Water Lilies, 1902</p>
            </div>
            <div className="artists">
              <div className="box" />
              <h3><a href>Claude Monet</a></h3>
              <p>Water Lilies, 1902</p>
            </div>
            <div className="artists">
              <div className="box" />
              <h3><a href>Claude Monet</a></h3>
              <p>Water Lilies, 1902</p>
            </div>
            <div className="artists">
              <div className="box" />
              <h3><a href>Claude Monet</a></h3>
              <p>Water Lilies, 1902</p>
            </div>
          </div>
          <div className="bar-slider">
            <div className="long-bar" />
            <div className="short-bar" id="sliderBar" />
          </div> 
        </div>
        <div className="artists-wrap wrap2">
          <h2 className="artist-name">Takashi Murakami</h2>
          <p className="year">Japanese, b.1962</p>
          <div className="drag-drop-slider" id="slider">
            <div className="artists">
              <div className="box" />
              <h3><a href>Takashi Murakami</a></h3>
              <p>Water Lilies, 1902</p>
            </div>
            <div className="artists">
              <div className="box" />
              <h3><a href>Takashi Murakami</a></h3>
              <p>Water Lilies, 1902</p>
            </div>
            <div className="artists">
              <div className="box" />
              <h3><a href>Takashi Murakami</a></h3>
              <p>Water Lilies, 1902</p>
            </div>
            <div className="artists">
              <div className="box" />
              <h3><a href>Takashi Murakami</a></h3>
              <p>Water Lilies, 1902</p>
            </div>
            <div className="artists">
              <div className="box" />
              <h3><a href>Takashi Murakami</a></h3>
              <p>Water Lilies, 1902</p>
            </div>
            <div className="artists">
              <div className="box" />
              <h3><a href>Takashi Murakami</a></h3>
              <p>Water Lilies, 1902</p>
            </div>
            <div className="artists">
              <div className="box" />
              <h3><a href>Takashi Murakami</a></h3>
              <p>Water Lilies, 1902</p>
            </div>
            <div className="artists">
              <div className="box" />
              <h3><a href>Takashi Murakami</a></h3>
              <p>Water Lilies, 1902</p>
            </div>
            <div className="artists">
              <div className="box" />
              <h3><a href>Takashi Murakami</a></h3>
              <p>Water Lilies, 1902</p>
            </div>
            <div className="artists">
              <div className="box" />
              <h3><a href>Takashi Murakami</a></h3>
              <p>Water Lilies, 1902</p>
            </div>
            <div className="artists">
              <div className="box" />
              <h3><a href>Takashi Murakami</a></h3>
              <p>Water Lilies, 1902</p>
            </div>
            <div className="artists">
              <div className="box" />
              <h3><a href>Takashi Murakami</a></h3>
              <p>Water Lilies, 1902</p>
            </div>
          </div>
          <div className="bar-slider">
            <div className="long-bar" />
            <div className="short-bar" id="sliderBar" />
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