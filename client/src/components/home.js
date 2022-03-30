import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/index.css";
import "../css/header-footer.css";

// Here, we display our Homepage
export default function Home() {
    return (
        <div>
        <div class="slider-menu">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../img/East-Village-Apartment.jpeg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="../img/East-Village-Apartment.jpeg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="../img/East-Village-Apartment.jpeg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="../img/East-Village-Apartment.jpeg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="../img/East-Village-Apartment.jpeg" class="d-block w-100" alt="..."/>
                </div>
            </div>
            
        </div>

        <div id="list-example" class="list-group">
            <a class="list-group-item list-group-item-action opacity-75" href="#list-item-1">FEATURED</a>
            <a class="list-group-item list-group-item-action opacity-75" href="#list-item-2">NEW ARRIVALS</a>
            <a class="list-group-item list-group-item-action opacity-75" href="#list-item-3">EVENTS</a>
            <a class="list-group-item list-group-item-action opacity-75 active" href="#list-item-4">TRENDING ARTISTS</a>
        </div>

    </div>

    <div class="container-fluid" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" tabindex="0">
    {/* <div class="container-fluid" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0"> */}
        <div id="list-item-1" class="featured-wrap">
            <h2>FEATURED</h2>

            <div class="drag-drop-slider" id="slider2">
                <div class="artists">
                    <div class="box"></div>
                    <h3><a href="#">Alice Zhao</a></h3>
                    <p>Canadian</p>
                </div>
                <div class="artists">
                    <div class="box"></div>
                    <h3><a href="#">Alice Zhao</a></h3>
                    <p>Canadian</p>
                </div>
                <div class="artists">
                    <div class="box"></div>
                    <h3><a href="#">Alice Zhao</a></h3>
                    <p>Canadian</p>
                </div>
            </div>


        </div>

        <div id="list-item-2" class="new-arrivals">
            <img src="" alt = ""/>
        </div>

        <h2 id="list-item-3" class="events-type">EVENTS</h2>
        <div class="events-wrap">
             {/* <div class="events-row">
                <div class="events-col">
                    <div class="events">
                        <div class="events-box1"></div>
                        <h3><a href="">Alice Zhao</a></h3>
                        <p>Canadian</p>
                    </div>
                </div>
            <div class="events-row">
                <div class="events-col">
                    <div class="events">
                        <div class="events-box2"></div>
                        <h3><a href="">Alice Zhao</a></h3>
                        <p>Canadian</p>
                    </div>
                </div>

                <div class="events-row2">
                    <div class="events-col">
                        <div class="events">
                            <div class="events-box3"></div>
                            <h3><a href="">Alice Zhao</a></h3>
                            <p>Canadian</p>
                        </div>
                    </div>
                    <div class="events-col">
                        <div class="events">
                            <div class="events-box4"></div>
                            <h3><a href="">Alice Zhao</a></h3>
                            <p>Canadian</p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div class="row row1">
                <div class="col-sm-6">
                    <div class="events">
                        <div class="events-box1"></div>
                        <h3><a href="">Greater New York 2021 MoMA</a></h3>
                        <p>Through Apr 18</p>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="events">
                        <div class="events-box2"></div>
                        <h3><a href="">Takesada Matsutani: Combine Hauser & Wirth</a></h3>
                        <p>Through Apr 02</p>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="events events2">
                                <div class="events-box3"></div>
                                <h3><a href="">Greater New York 2021 MoMA</a></h3>
                                <p>Through Apr 18</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="events events2">
                                <div class="events-box4"></div>
                                <h3><a href="">Greater New York 2021 MoMA</a></h3>
                                <p>Through Apr 18</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="trending-wrap">
            <h2>TRENDING ARTISTS</h2>
    
            <div class="drag-drop-slider" id="slider">
                <div class="artists">
                    <div class="box"></div>
                    <h3><a href="">Alice Zhao</a></h3>
                    <p>Canadian</p>
                </div>
                <div class="artists">
                    <div class="box"></div>
                    <h3><a href="">Alice Zhao</a></h3>
                    <p>Canadian</p>
                </div>
                <div class="artists">
                    <div class="box"></div>
                    <h3><a href="">Alice Zhao</a></h3>
                    <p>Canadian</p>
                </div>
                <div class="artists">
                    <div class="box"></div>
                    <h3><a href="">Alice Zhao</a></h3>
                    <p>Canadian</p>
                </div>
                <div class="artists">
                    <div class="box"></div>
                    <h3><a href="">Alice Zhao</a></h3>
                    <p>Canadian</p>
                </div>
                <div class="artists">
                    <div class="box"></div>
                    <h3><a href="">Alice Zhao</a></h3>
                    <p>Canadian</p>
                </div>
                <div class="artists">
                    <div class="box"></div>
                    <h3><a href="">Alice Zhao</a></h3>
                    <p>Canadian</p>
                </div>
                <div class="artists">
                    <div class="box"></div>
                    <h3><a href="">Alice Zhao</a></h3>
                    <p>Canadian</p>
                </div>
                <div class="artists">
                    <div class="box"></div>
                    <h3><a href="">Alice Zhao</a></h3>
                    <p>Canadian</p>
                </div>
                <div class="artists">
                    <div class="box"></div>
                    <h3><a href="">Alice Zhao</a></h3>
                    <p>Canadian</p>
                </div>
                <div class="artists">
                    <div class="box"></div>
                    <h3><a href="">Alice Zhao</a></h3>
                    <p>Canadian</p>
                </div>
                <div class="artists">
                    <div class="box"></div>
                    <h3><a href="">Alice Zhao</a></h3>
                    <p>Canadian</p>
                </div>
            </div>
    
            <div class="bar-slider">
                <div class="long-bar"></div>
                <div class="short-bar" id="sliderBar"></div>
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