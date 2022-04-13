import React from "react";
import '../css/profile-collects.css';
import '../css/header-footer.css';
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// Here, we display our Navbar
export default function ProfileCollect() {
 return (
   <div>
     <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        <div className="sub-menu">
          <div className="sub-menu-list">
            <a href="/profile-collects" className="collects">Collects</a>
            <a href="/follow" className="followed-artists">Followed Artists</a>
            <a href="/order-history" className="order">Order History</a>
            <a href="/edit-setting" className="edit-settings">Edit Settings</a>
          </div>
        </div>
        <main className="artist-container">

          {/* row1 */}
          <div className="artist-container-row">
            <div className="artists">
            <img className="no-image-box-2" src="img/collection1880.png" alt="liked artworks"/>
              <dl>
                <dt>Aino Aalto</dt>
                <dt>Fininish,</dt>
                <dt>1894-1949</dt>
                <dt className="top-height">2works online</dt>
              </dl>
            </div>
            <div className="artists">
            <img className="no-image-box-2" src="img/event4.png" alt="liked artworks"/>
              <dl>
                <dt>Aino Aalto</dt>
                <dt>Fininish,</dt>
                <dt>1894-1949</dt>
                <dt className="top-height">2works online</dt>
              </dl>
            </div>
            <div className="artists">
            <img className="no-image-box-2" src="img/afe.png" alt="liked artworks"/>
              <dl>
                <dt>Aino Aalto</dt>
                <dt>Fininish,</dt>
                <dt>1894-1949</dt>
                <dt className="top-height">2works online</dt>
              </dl>
            </div>
            <div className="artists">
            <img className="no-image-box-2" src="img/wis.png" alt="liked artworks"/>
              <dl>
                <dt>Aino Aalto</dt>
                <dt>Fininish,</dt>
                <dt>1894-1949</dt>
                <dt className="top-height">2works online</dt>
              </dl>
            </div>
          </div>
          {/* row2 */}
          <div className="artist-container-row">
            <div className="artists">
            <img className="no-image-box-2" src="img/takashi2.png" alt="liked artworks"/>
              <dl>
                <dt>Aino Aalto</dt>
                <dt>Fininish,</dt>
                <dt>1894-1949</dt>
                <dt className="top-height">2works online</dt>
              </dl>
            </div>
            <div className="artists">
            <img className="no-image-box-2" src="img/takashi3.png" alt="liked artworks"/>
              <dl>
                <dt>Aino Aalto</dt>
                <dt>Fininish,</dt>
                <dt>1894-1949</dt>
                <dt className="top-height">2works online</dt>
              </dl>
            </div>
            <div className="artists">
            <img className="no-image-box-2" src="img/monet2.png" alt="liked artworks"/>
              <dl>
                <dt>Aino Aalto</dt>
                <dt>Fininish,</dt>
                <dt>1894-1949</dt>
                <dt className="top-height">2works online</dt>
              </dl>
            </div>
            <div className="artists">
            <img className="no-image-box-2" src="img/monet3.png" alt="liked artworks"/>
              <dl>
                <dt>Aino Aalto</dt>
                <dt>Fininish,</dt>
                <dt>1894-1949</dt>
                <dt className="top-height">2works online</dt>
              </dl>
            </div>
          </div>
        </main>
        <footer>
          <a href="about.html">About us</a>
          <a href="support.html">Support</a>
          <a href="resources.html">Resources</a>
          <a href="partnership.html">Partnership</a>
        </footer>
   </div>
 );
}