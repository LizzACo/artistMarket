import React from "react";
import '../css/artist.css';

import "bootstrap/dist/css/bootstrap.css";

export default function Artist(){
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Venusty - Artists</title>
          <div className="artist-title-top">
            <p>Artists</p>
          </div>
          <main className="artist-container">
            {/* row1 */}
            <div className="artist-container-row">
              <div className="artists">
                <img
                className="no-image-box"
                src="img/artist1.png"
                alt="First slide"
                />
                <dl>
                  <dt>Cha Yuree</dt>
                  <dt>American</dt>
                  <dt>1894-1949</dt>
                  <dt className="top-height">12 works online</dt>
                </dl>
              </div>
              <div className="artists">
                <img
                className="no-image-box"
                src="img/artist2.png"
                alt="First slide"
                />
                <dl>
                  <dt>Kim Hyung Dae</dt>
                  <dt>Fininish,</dt>
                  <dt>1894-1949</dt>
                  <dt className="top-height">2 works online</dt>
                </dl>
              </div>
              <div className="artists">                
                <img
                className="no-image-box"
                src="img/artist3.png"
                alt="First slide"
                />
                <dl>
                  <dt>Agathe Pitié</dt>
                  <dt>French</dt>
                  <dt>1894-1949</dt>
                  <dt className="top-height">8 works online</dt>
                </dl>
              </div>
            </div>
            {/* row2 */}
            <div className="artist-container-row">
              <div className="artists">                
                <img
                className="no-image-box"
                src="img/artist4.png"
                alt="First slide"
                />
                <dl>
                  <dt>Victoria Tanto</dt>
                  <dt>French</dt>
                  <dt>1894-1949</dt>
                  <dt className="top-height">15 works online</dt>
                </dl>
              </div>
              <div className="artists">                
                <img
                className="no-image-box"
                src="img/artist5.png"
                alt="First slide"
                />
                <dl>
                  <dt>Mónica de Miranda</dt>
                  <dt>Afro-Portuguese</dt>
                  <dt>1894-1949</dt>
                  <dt className="top-height">4 works online</dt>
                </dl>
              </div>
              <div className="artists">                
                <img
                className="no-image-box"
                src="img/artist6.png"
                alt="First slide"
                />
                <dl>
                  <dt>Charles Irvin</dt>
                  <dt>American</dt>
                  <dt>1894-1949</dt>
                  <dt className="top-height">11 works online</dt>
                </dl>
              </div>
            </div>
            {/* row3 */}
            <div className="artist-container-row">
              <div className="artists">               
                <img
                className="no-image-box"
                src="img/artist7.png"
                alt="First slide"
                />
                <dl>
                  <dt>David Price</dt>
                  <dt>British</dt>
                  <dt>1894-1949</dt>
                  <dt className="top-height">21 works online</dt>
                </dl>
              </div>
              <div className="artists">                
                <img
                className="no-image-box"
                src="img/artist8.png"
                alt="First slide"
                />
                <dl>
                  <dt>Alice Wheeler</dt>
                  <dt>American</dt>
                  <dt>1894-1949</dt>
                  <dt className="top-height">7 works online</dt>
                </dl>
              </div>
              <div className="artists">                
                <img
                className="no-image-box"
                src="img/artist9.png"
                alt="First slide"
                />
                <dl>
                  <dt>Yangyang Pan</dt>
                  <dt>Chinese</dt>
                  <dt>1894-1949</dt>
                  <dt className="top-height">13 works online</dt>
                </dl>
              </div>
            </div>
            {/* row4 */}
            <div className="artist-container-row">
              <div className="artists">       
                <img
                className="no-image-box"
                src="img/artist10.png"
                alt="First slide"
                />
                <dl>
                  <dt>Pablo Dávila</dt>
                  <dt>Mexican</dt>
                  <dt>1894-1949</dt>
                  <dt className="top-height">9 works online</dt>
                </dl>
              </div>
              <div className="artists">                
                <img
                className="no-image-box"
                src="img/artist11.png"
                alt="First slide"
                />
                <dl>
                  <dt>Klaus Killisch</dt>
                  <dt>German</dt>
                  <dt>1894-1949</dt>
                  <dt className="top-height">26 works online</dt>
                </dl>
              </div>
              <div className="artists">
                <img
                className="no-image-box"
                src="img/artist12.png"
                alt="First slide"
                />
                <dl>
                  <dt>Sabrina Milazzo</dt>
                  <dt>Italian</dt>
                  <dt>1894-1949</dt>
                  <dt className="top-height">37 works online</dt>
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
};

