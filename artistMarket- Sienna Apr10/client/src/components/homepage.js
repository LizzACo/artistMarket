import '../css/index.css';
// import '../img/secondSlide.png';
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
                src="img/secondSlide.png"
                alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="img/slide3.png"
                alt="Third slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="img/slide4.png"
                alt="Third slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="img/slide5.png"
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
                {/* <div className="box" /> */}
                <img className="box" src="img/afe.png" />
                <h3><a href="{}">After Effect</a></h3>
                <p>James Turrell</p>
            </div>
            <div className="artists">
            <img className="box" src="img/wis.png" />
                <h3><a href="{}">What I Saw</a></h3>
                <p>Joseph E. Yoakum</p>
            </div>
            <div className="artists">
            <img className="box" src="img/collection1880.png" />
                <h3><a href="{}">Collection</a></h3>
                <p>1880s - 1940s</p>
            </div>
            </div>
        </div>
        <h2 id="list-item-3" className="events-type">NEW ARRIVALS</h2>
        <div id="list-item-2" className="new-arrivals">
            <img src="img/newArrival.png"  alt="list item"></img>
        </div>
        <h2 id="list-item-3" className="events-type">EVENTS</h2>
        <div className="events-wrap">
            <div className="row row1">
            <div className="col-sm-6">
                <div className="events">
                {/* <div className="events-box1" /> */}
                <img className="events-box1" src="img/event1.png" />
                <h3><a href="{}">Greater New York 2021 MoMA</a></h3>
                <p>Through Apr 18</p>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="events">
                <img className="events-box1" src="img/event.png" />
                <h3><a href="{}">Takesada Matsutani: Combine Hauser &amp; Wirth</a></h3>
                <p>Through Apr 02</p>
                </div>
                <div className="row">
                <div className="col-sm-6">
                    <div className="events events2">
                    <img className="events-box1" src="img/event3.png" />
                    <h3><a href="{}">The Ranger. 2018. Directed by Jenn Wexler</a></h3>
                    <p>Sun, Apr 10, 4:00 p.m.</p>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="events events2">
                    <img className="events-box1" src="img/event4.png" />
                    <h3><a href="{}">The Early Films of Larry</a></h3>
                    <p>Through Tue, Apr 19, 12:00 p.m.</p>
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
            <img className="box" src="img/artist1.png" />
                <h3><a href="{}">Cha Yuree</a></h3>
                <p>American</p>
            </div>
            <div className="artists">
            <img className="box" src="img/artist2.png" />
                <h3><a href="{}">Kim Hyung Dae</a></h3>
                <p>Korean</p>
            </div>
            <div className="artists">
            <img className="box" src="img/artist3.png" />
                <h3><a href="{}">Agathe Pitié</a></h3>
                <p>French</p>
            </div>
            <div className="artists">
            <img className="box" src="img/artist4.png" />
                <h3><a href="{}">Victoria Tanto</a></h3>
                <p>French</p>
            </div>
            <div className="artists">
            <img className="box" src="img/artist5.png" />
                <h3><a href="{}">Mónica de Miranda</a></h3>
                <p>Afro-Portuguese</p>
            </div>
            <div className="artists">
            <img className="box" src="img/artist6.png" />
                <h3><a href="{}">Charles Irvin</a></h3>
                <p>American</p>
            </div>
            <div className="artists">
            <img className="box" src="img/artist7.png" />
                <h3><a href="{}">David Price</a></h3>
                <p>British</p>
            </div>
            <div className="artists">
            <img className="box" src="img/artist8.png" />
                <h3><a href="{}">Alice Wheeler</a></h3>
                <p>American</p>
            </div>
            <div className="artists">
            <img className="box" src="img/artist9.png" />
                <h3><a href="{}">Yangyang Pan</a></h3>
                <p>Chinese</p>
            </div>
            <div className="artists">
            <img className="box" src="img/artist10.png" />
                <h3><a href="{}">Pablo Dávila</a></h3>
                <p>Mexican</p>
            </div>
            <div className="artists">
            <img className="box" src="img/artist11.png" />
                <h3><a href="{}">Klaus Killisch</a></h3>
                <p>German</p>
            </div>
            <div className="artists">
            <img className="box" src="img/artist12.png" />
                <h3><a href="{}">Sabrina Milazzo</a></h3>
                <p>Italian</p>
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