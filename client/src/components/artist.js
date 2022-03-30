import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/artist.css";
import "../css/header-footer.css";

// Here, we display our Artists
export default function Artists() {
    return (
        <div>
            <div id="transparency"></div>
            <div id="signup-form" class="signup-container"/>
            <span class="form-close">x</span>
    
            <div class="logo2">VENUSTY</div>
            <p>Sign up for the best art works in APPNAME...</p>
    
            {/* <form>
                <label ID="name">NAME</label>
                <input type="text" name="name"/>
            
                <label ID="email">EMAIL</label>
                <input type="text" name="email"/>
            
                <label ID="password">PASSWORD</label>
                <input type="password" name="password">
                
                <input type="checkbox">
                <label class="tou">
                Agree to the Term of Use, Privacy Policy, and Conditions of Sale and to receiving emails from Venusty
                </label>
            </form> */}
    
        <div class="flex-container">
            <div></div>
            {/* <div style="background-color: #fff;">or</div> */}
            <div></div>  
        </div>
    
        <div>
          <button type="submit" class="btn_signup">SIGN UP</button>
    
          <button type="submit" class="btn_continue"><i class="bi bi-apple"></i> Continue with Apple</button>
          <button type="submit" class="btn_continue"><i class="bi bi-google"></i> Continue with Google</button>
          <button type="submit" class="btn_continue"><i class="bi bi-facebook"></i> Continue with Facebook</button>
        </div>
    
        {/* </div> */}

    <header>
        <div class="logo">VENUSTY</div>

        <div class="login-signup-button">
            <a href="#" id="login-button">Login</a>
            <a href="#" id="signup-button">SignUp</a>
        </div>
    </header>

    <div class="artist-title-top">
        <p>Artists</p>
    </div>

    <main class="artist-container">

        {/* row1  */}
         <div class="artist-container-row">
            <div class="artists">
                <div class="no-image-box"><p><i class="bi bi-x-lg"></i></p></div>
                    <dl>
                        <dt>Aino Aalto</dt>
                        <dt>Fininish,</dt>
                        <dt>1894-1949</dt>
                        <dt class="top-height">2works online</dt>
                    </dl>
            </div>
            <div class="artists">
                <div class="no-image-box"><p><i class="bi bi-x-lg"></i></p></div>
                    <dl>
                        <dt>Aino Aalto</dt>
                        <dt>Fininish,</dt>
                        <dt>1894-1949</dt>
                        <dt class="top-height">2works online</dt>
                    </dl>
            </div>
            <div class="artists">
                <div class="no-image-box"><p><i class="bi bi-x-lg"></i></p></div>
                    <dl>
                        <dt>Aino Aalto</dt>
                        <dt>Fininish,</dt>
                        <dt>1894-1949</dt>
                        <dt class="top-height">2works online</dt>
                    </dl>
            </div>
        </div>

        {/*  row2  */}
         <div class="artist-container-row">
            <div class="artists">
                <div class="no-image-box"><p><i class="bi bi-x-lg"></i></p></div>
                    <dl>
                        <dt>Aino Aalto</dt>
                        <dt>Fininish,</dt>
                        <dt>1894-1949</dt>
                        <dt class="top-height">2works online</dt>
                    </dl>
            </div>
            <div class="artists">
                <div class="no-image-box"><p><i class="bi bi-x-lg"></i></p></div>
                    <dl>
                        <dt>Aino Aalto</dt>
                        <dt>Fininish,</dt>
                        <dt>1894-1949</dt>
                        <dt class="top-height">2works online</dt>
                    </dl>
            </div>
            <div class="artists">
                <div class="no-image-box"><p><i class="bi bi-x-lg"></i></p></div>
                    <dl>
                        <dt>Aino Aalto</dt>
                        <dt>Fininish,</dt>
                        <dt>1894-1949</dt>
                        <dt class="top-height">2works online</dt>
                    </dl>
            </div>
        </div>

         {/*  row3  */}
         <div class="artist-container-row">
            <div class="artists">
                <div class="no-image-box"><p><i class="bi bi-x-lg"></i></p></div>
                    <dl>
                        <dt>Aino Aalto</dt>
                        <dt>Fininish,</dt>
                        <dt>1894-1949</dt>
                        <dt class="top-height">2works online</dt>
                    </dl>
            </div>
            <div class="artists">
                <div class="no-image-box"><p><i class="bi bi-x-lg"></i></p></div>
                    <dl>
                        <dt>Aino Aalto</dt>
                        <dt>Fininish,</dt>
                        <dt>1894-1949</dt>
                        <dt class="top-height">2works online</dt>
                    </dl>
            </div>
            <div class="artists">
                <div class="no-image-box"><p><i class="bi bi-x-lg"></i></p></div>
                    <dl>
                        <dt>Aino Aalto</dt>
                        <dt>Fininish,</dt>
                        <dt>1894-1949</dt>
                        <dt class="top-height">2works online</dt>
                    </dl>
            </div>
        </div>

         {/*  row4  */}
         <div class="artist-container-row">
            <div class="artists">
                <div class="no-image-box"><p><i class="bi bi-x-lg"></i></p></div>
                    <dl>
                        <dt>Aino Aalto</dt>
                        <dt>Fininish,</dt>
                        <dt>1894-1949</dt>
                        <dt class="top-height">2works online</dt>
                    </dl>
            </div>
            <div class="artists">
                <div class="no-image-box"><p><i class="bi bi-x-lg"></i></p></div>
                    <dl>
                        <dt>Aino Aalto</dt>
                        <dt>Fininish,</dt>
                        <dt>1894-1949</dt>
                        <dt class="top-height">2works online</dt>
                    </dl>
            </div>
            <div class="artists">
                <div class="no-image-box"><p><i class="bi bi-x-lg"></i></p></div>
                    <dl>
                        <dt>Aino Aalto</dt>
                        <dt>Fininish,</dt>
                        <dt>1894-1949</dt>
                        <dt class="top-height">2works online</dt>
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