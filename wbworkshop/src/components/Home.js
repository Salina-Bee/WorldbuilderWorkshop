import {Link} from 'react-router-dom';

// react-bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// images
import HomePic from '../images/homepage_art2.jpg';
import ProductPic from '../images/products.png';
import ServicePic from '../images/services.jpg';
import CommunityPic from '../images/community.jpg';


const Home = () => {
	return (
	<div>
		<div className="bannerPicture">
        <img src={HomePic} width="90%" alt="Homepage art"/>
      	</div>
      <Container className="bannerRow">
        <Row className="justify-content-center">
          <Col xs={1} className="bannerBBG">
          </Col>
          <Col xs={8} className="bannerBG">
            <h2 className="bannerTitle">Welcome to The Worldbuilder's Workshop!</h2>
          </Col>
          <Col xs={1} className="bannerBBG">
          </Col>
          
        </Row>
      </Container>
      <Container>
        <h4 className="bannerSubtitle">We provide the tools. You build the world.</h4><br/>
      </Container>
      <hr className="horizontal"/><br/>

      <Container>
        <Row className="justify-content-center">
          <Col xs={2}>

          <Row>
            <Container className="generalBG">
              <h5 className="generalTitle">Location</h5>
            </Container>
            75 Laurier Ave E<br/>
            Ottawa, ON<br/>
            K1N 6N5<br/><br/>
          </Row>

          <Row>
            <Container className="generalBG">
              <h5 className="generalTitle">Hours</h5>
            </Container>
            Mon-Fri: <wbr/>9 am - 5 pm<br/>
            Sat: <wbr/>10 am - 4 pm<br/>
            Sun: <wbr/>CLOSED<br/><br/>
          </Row>

          <Row>
            <Container className="generalBG">
              <h5 className="generalTitle">Contact</h5>
            </Container>
            Phone: <wbr/>(613) 562-5700<br/>
            Email: <wbr/>wbwkshp@gmail.com
          </Row>

          </Col>


          <Col xs={3} style={{"margin-left": "20px"}}>
                
          <Card style={{border: "none", width: "18rem" }}>
            <Link to='/WorldbuilderWorkshop/products'>
            <Card.Img variant="top" src={ProductPic} />

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

          <Card style={{border: "none", width: "18rem"}}>
            <Link to='/WorldbuilderWorkshop/services'>
            <Card.Img variant="top" src={ServicePic} />
            <Card.Body>
              <Card.Title>Services</Card.Title>
              <Card.Text>
                Lack the time or equipment to build something on your own? Fill out a 
                form to make use of our state-of-the-art 3D printers or 
                commission our team for custom items!
              </Card.Text>
            </Card.Body>
            
            </Link>
          </Card>

          </Col>

          <Col xs={3}>

          <Card style={{border: "none", width: "18rem"}}>
            <Link to='/WorldbuilderWorkshop/community'>
            <Card.Img variant="top" src={CommunityPic} />
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
      </Container>

      <Container className="signUpContainer">
        <br/><hr className="horizontal"/><br/>
        <h4 className="bannerSubtitle">Join the adventure today.</h4>
        <Link to="/WorldbuilderWorkshop/signup"><Button className="signUpButton" as="input" type="button" value="Sign Up"/></Link>
        <br/>
        <br/>
      </Container>
    </div>
	);
}

export default Home;