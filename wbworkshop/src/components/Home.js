import {Link} from 'react-router-dom';

// react-bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

// images
import HomePic1 from '../images/home.png';
import HomePic2 from '../images/home1.png';
import HomePic3 from '../images/home2.png';
import HomePic4 from '../images/home3.png';
import ProductPic from '../images/products.png';
import ServicePic from '../images/services.jpg';
import CommunityPic from '../images/community.jpg';

const Home = () => {
	return (
	<div style={{"align-items":"center"}}>
		<div className="bannerPicture">
      	</div>
      <div className="bannerRow">
        <Row className="justify-content-center">
          <Col xs={8} className="bannerBG">
            <h2 className="bannerTitle">Welcome to The Worldbuilder's Workshop!</h2>
          </Col>
        </Row>
      </div>
      <br/>
      <br/>
      <Row className="justify-content-center">

      <Col xs={4}>
      <div>
        <h4 className="bannerSubtitle">We provide the tools. You build the world.</h4><br/>
        <span style={{"font-size":"16px"}}>Welcome to a world where possiblities are limitless and ideas come to life. 
        Here at The Worldbuilder's Workshop, we are passionate about helping you craft a fictional world worth remembering.<br/><br/>
        We understand that the journey to building a truly engaging world is long and often difficult. But do not fear! Our friendly 
        and knowledgeable staff are here to assist you every step of the way, and our community is brimming with like-minded enthusiasts 
        where you can exchange ideas and ignite each other's creativity. Whether you're an experienced game developer, a budding novelist, 
        or simply a humble artist drawing during your free time, we have something to offer for each and every one of you.</span>
      </div>
      </Col>

      <Col xs={4}>
      <div>
      <Carousel data-bs-theme="dark">
            <Carousel.Item>
            <img
                      className="d-block"
                      style={{"display":"block", "margin-left":"auto","margin-right": "auto", "margin-bottom":"40px", "width": "75%"}}
                        src={HomePic1}
                        alt="First slide"
                      />
            </Carousel.Item>
            <Carousel.Item>
            <img
                      className="d-block"
                      style={{"display":"block", "margin-left":"auto","margin-right": "auto", "margin-bottom":"40px", "width": "75%"}}
                        src={HomePic2}
                        alt="Second slide"
                      />
            </Carousel.Item>
            <Carousel.Item>
            <img
                      className="d-block"
                      style={{"display":"block", "margin-left":"auto","margin-right": "auto", "margin-bottom":"40px", "width": "75%"}}
                        src={HomePic3}
                        alt="Third slide"
                      />
            </Carousel.Item>
            <Carousel.Item>
            <img
                      className="d-block"
                      style={{"display":"block", "margin-left":"auto","margin-right": "auto", "margin-bottom":"40px", "width": "75%"}}
                        src={HomePic4}
                        alt="Fourth slide"
                      />
            </Carousel.Item>
    </Carousel>
    </div>


      </Col>

      </Row>

      <br/><br/><hr className="horizontal"/><br/>

      <div style={{"margin":"0px", "width": "100%"}} >
      <Row>
      <Col xs={1}>
      </Col>

      <Col xs={10}>


        <Row className="justify-content-center">
          <Col xs={2} style={{"marginRight": "20px"}}>

          <Row>
            <div className="generalBG">
              <h5 className="generalTitle">Location</h5>
            </div>
            <span className = "spanHomeInfo">
            75 Laurier Ave E<br/>
            Ottawa, ON<br/>
            K1N 6N5<br/><br/>
            </span>
          </Row>

          <Row>
            <div className="generalBG">
              <h5 className="generalTitle">Hours</h5>
            </div>
            <span className = "spanHomeInfo">
            Mon-Fri: <wbr/>9 am - 5 pm<br/>
            Sat: <wbr/>10 am - 4 pm<br/>
            Sun: <wbr/>CLOSED<br/><br/>
            </span>
          </Row>

          <Row>
            <div className="generalBG">
              <h5 className="generalTitle">Contact</h5>
            </div>
            <span className = "spanHomeInfo">
            Phone: <wbr/>(613) 562-5700<br/>
            Email: <wbr/>wbws@gmail.com
            </span>
          </Row>

          </Col>



          <Col xs={3}>
                
          <Card style={{border: "none", width: "18rem"}} className="mx-auto">
            <Link to='/WorldbuilderWorkshop/products'>
            <Card.Img variant="top" src={ProductPic} alt="Products Card Image"/>

            <Card.Body>
              <Card.Title>Products</Card.Title>
              <Card.Text>
                Browse through a variety of tools and supplies 
                that will help you bring your ideas to life! 
                <br/> <br/> <br/>
              </Card.Text>
            </Card.Body>
            
            </Link>
          </Card>
          


          </Col>

          <Col xs={3}>

          <Card style={{border: "none", width: "18rem"}} className="mx-auto">
            <Link to='/WorldbuilderWorkshop/services'>
            <Card.Img variant="top" src={ServicePic} alt="Services Card Image"/>
            <Card.Body>
              <Card.Title>Services</Card.Title>
              <Card.Text style={{"color": "#F2F2F0 !important"}}>
                Lack the time or equipment to build something on your own? Fill out a 
                form to make use of our state-of-the-art 3D printers or 
                commission our team for custom items!
              </Card.Text>
            </Card.Body>
            
            </Link>
          </Card>

          </Col>

          <Col xs={3}>

          <Card style={{border: "none", width: "18rem"}} className="mx-auto">
            <Link to='/WorldbuilderWorkshop/community'>
            <Card.Img variant="top" src={CommunityPic} alt="Community Card Image"/>
            <Card.Body>
              <Card.Title>Community</Card.Title>
              <Card.Text>
                Whether you're a beginner or an expert in the art of worldbuilding, 
                there's a place for you in our community. 
                Share your ideas and experiences with others!
              </Card.Text>
            </Card.Body>
            
            </Link>
          </Card>


          </Col>
        </Row>
      </Col>
      <Col xs={1}>
      </Col>
      </Row>
      </div>

      <div className="signUpContainer">
        <br/><hr className="horizontal"/><br/>
        <h4 className="bannerSubtitle">Join the adventure today.</h4>
        <Link to="/WorldbuilderWorkshop/signup"><Button className="signUpButton" as="input" type="button" value="Sign Up"/></Link>
        <br/>
        <br/>
      </div>
    </div>
	);
}

export default Home;