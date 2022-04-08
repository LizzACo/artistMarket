import '../css/index.css';
import { Carousel, Button, ListGroup} from 'react-bootstrap'

export default function Homepage() {
    return (
        <div>
        {/* <header>
        <div className="logo2">VENUSTY</div>
        <div className="login-signup-button">
            
            <a href={window.location.origin + "/login"} id="login-button">Login</a>
            <a href={window.location.origin + "/register"} id="signup-button">SignUp</a>
        </div>
        </header> */}
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="East-Village-Apartment.jpeg"
                alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="East-Village-Apartment.jpeg"
                alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="East-Village-Apartment.jpeg"
                alt="Third slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="East-Village-Apartment.jpeg"
                alt="Third slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="East-Village-Apartment.jpeg"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>

        <ListGroup className="list-group list-example">
            <ListGroup.Item className="list-group-item list-group-item-action opacity-75 active" action href="#list-item-1">
                FEATURED
            </ListGroup.Item>
            <ListGroup.Item className="list-group-item list-group-item-action opacity-75 active" action href="#list-item-2">
                NEW ARRIVALS
            </ListGroup.Item>
            <ListGroup.Item className="list-group-item list-group-item-action opacity-75 active" action href="#list-item-3">
                EVENTS
            </ListGroup.Item>
            <ListGroup.Item className="list-group-item list-group-item-action opacity-75 active" action href="#list-item-4">
                TRENDING ARTISTS
            </ListGroup.Item>
        </ListGroup>

        {/* <div id="list-example" className="list-group">
            <a className="list-group-item list-group-item-action opacity-75" href="{}">FEATURED</a>
            <a className="list-group-item list-group-item-action opacity-75" href="{}">NEW ARRIVALS</a>
            <a className="list-group-item list-group-item-action opacity-75" href="{}">EVENTS</a>
            <a className="list-group-item list-group-item-action opacity-75 active" href="{}">TRENDING ARTISTS</a>
        </div> */}
        

        <div className="container-fluid" data-bs-spy="scroll" data-bs-target=".list-example" data-bs-offset={0} tabIndex={0}>
        <div id="list-item-1" className="featured-wrap">
            <h2>FEATURED</h2>
            <div className="drag-drop-slider" id="slider2">
            <div className="artists">
                <div className="box" />
                <h3><a href="{}">Alice Zhao</a></h3>
                <p>Canadian</p>
            </div>
            <div className="artists">
                <div className="box" />
                <h3><a href="{}">Alice Zhao</a></h3>
                <p>Canadian</p>
            </div>
            <div className="artists">
                <div className="box" />
                <h3><a href="{}">Alice Zhao</a></h3>
                <p>Canadian</p>
            </div>
            </div>
        </div>
        <div id="list-item-2" className="new-arrivals">
            <img src="true"  alt="list item"></img>
        </div>
        <h2 id="list-item-3" className="events-type">EVENTS</h2>
        <div className="events-wrap">
            <div className="row row1">
            <div className="col-sm-6">
                <div className="events">
                <div className="events-box1" />
                <h3><a href="{}">Greater New York 2021 MoMA</a></h3>
                <p>Through Apr 18</p>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="events">
                <div className="events-box2" />
                <h3><a href="{}">Takesada Matsutani: Combine Hauser &amp; Wirth</a></h3>
                <p>Through Apr 02</p>
                </div>
                <div className="row">
                <div className="col-sm-6">
                    <div className="events events2">
                    <div className="events-box3" />
                    <h3><a href="{}">Greater New York 2021 MoMA</a></h3>
                    <p>Through Apr 18</p>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="events events2">
                    <div className="events-box4" />
                    <h3><a href="{}">Greater New York 2021 MoMA</a></h3>
                    <p>Through Apr 18</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="trending-wrap">
            <h2 id="list-item-4">TRENDING ARTISTS</h2>
            <div className="drag-drop-slider" id="slider">
            <div className="artists">
                <div className="box" />
                <h3><a href="{}">Alice Zhao</a></h3>
                <p>Canadian</p>
            </div>
            <div className="artists">
                <div className="box" />
                <h3><a href="{}">Alice Zhao</a></h3>
                <p>Canadian</p>
            </div>
            <div className="artists">
                <div className="box" />
                <h3><a href="{}">Alice Zhao</a></h3>
                <p>Canadian</p>
            </div>
            <div className="artists">
                <div className="box" />
                <h3><a href="{}">Alice Zhao</a></h3>
                <p>Canadian</p>
            </div>
            <div className="artists">
                <div className="box" />
                <h3><a href="{}">Alice Zhao</a></h3>
                <p>Canadian</p>
            </div>
            <div className="artists">
                <div className="box" />
                <h3><a href="{}">Alice Zhao</a></h3>
                <p>Canadian</p>
            </div>
            <div className="artists">
                <div className="box" />
                <h3><a href="{}">Alice Zhao</a></h3>
                <p>Canadian</p>
            </div>
            <div className="artists">
                <div className="box" />
                <h3><a href="{}">Alice Zhao</a></h3>
                <p>Canadian</p>
            </div>
            <div className="artists">
                <div className="box" />
                <h3><a href="{}">Alice Zhao</a></h3>
                <p>Canadian</p>
            </div>
            <div className="artists">
                <div className="box" />
                <h3><a href="{}">Alice Zhao</a></h3>
                <p>Canadian</p>
            </div>
            <div className="artists">
                <div className="box" />
                <h3><a href="{}">Alice Zhao</a></h3>
                <p>Canadian</p>
            </div>
            <div className="artists">
                <div className="box" />
                <h3><a href="{}">Alice Zhao</a></h3>
                <p>Canadian</p>
            </div>
            </div>
            <div className="bar-slider">
                <div className="long-bar" />
                <div className="short-bar" id="sliderBar" />
            </div> 
        </div>
        </div>
        <footer>
        <a href="{}">About us</a>
        <a href="{}">Support</a>
        <a href="{}">Resources</a>
        <a href="{}">Partnership</a>
        </footer>
    </div>
);

}