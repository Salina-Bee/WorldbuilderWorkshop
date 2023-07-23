import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';


// images
import print1 from '../images/3dprinting1.jpg';
import print2 from '../images/3dprinting2.jpg';
import print3 from '../images/3dprinting3.jpg';
import commission1 from '../images/customprop1.jpg';
import commission2 from '../images/customprop2.png';
import commission3 from '../images/customprop3.png';


const Services = () => {

	return (
		<div>
			<Container>
				<br/>
				<Row className="justify-content-center">
				
				<Col xs={10}>
				<Row>
					<Col xs={1} className="bannerBBG">
					</Col>
					<Col xs={10} className="bannerBG">
					<h4 className="bannerTitle">Services</h4>
					</Col>
					<Col xs={1} className="bannerBBG">
					</Col>
				</Row>
				</Col>
				
				</Row>

				<br/>
				<br/>
			</Container>

			<Container fluid >
				<Row className="justify-content-center">

				<Col xs={4} style={{"margin-right":"10px"}}>

				<Card style={{'border': 'none', 'width': '30rem'}} className="mx-auto">
			      <Card.Body>


			      	<Carousel interval={null}>
				      <Carousel.Item>
				        <img
				        className="d-block"
				        style={{"display":"block", "margin-left":"auto","margin-right": "auto", "margin-bottom":"40px", "width": "75%"}}
				          src={print1}
				          alt="First slide"
				        />
				      </Carousel.Item>
				      <Carousel.Item>
				        <img
				          className="d-block"
				          style={{"display":"block", "margin-left":"auto","margin-right": "auto", "margin-bottom":"40px", "width": "75%"}}
				          src={print2}
				          alt="Second slide"
				        />
				      </Carousel.Item>
				      <Carousel.Item>
				        <img
				          className="d-block"
				          style={{"display":"block", "margin-left":"auto","margin-right": "auto", "margin-bottom":"40px", "width": "75%"}}
				          src={print3}
				          alt="Third slide"
				        />

				      </Carousel.Item>
				    </Carousel>

			        <Card.Title>3D Printing</Card.Title>

			        <Card.Text style={{"margin-bottom":"10px" , "margin-top":"20px", "margin-left":"15px"}}>
			        
			        [A brief description of what this service entails and its options. 
			        Cost is based on the type and amount of filament used per gram.]

			        </Card.Text>

			        <Container className="signUpContainer">
			        <Link to='/WorldbuilderWorkshop/services/printer'><Button className="bookBtn" as="input" type="button" value="Reserve a Printer"/></Link>
			        </Container>
			        
			      </Card.Body>
    			</Card>

				</Col>

				
				<Col xs={4} style={{"margin-left":"10px"}}>

				<Card style={{'border': 'none', 'width': '30rem'}} className="mx-auto">
			      <Card.Body>


			      	<Carousel interval={null}>
				      <Carousel.Item>
				        <img
				          className="d-block"
				          style={{"display":"block", "margin-left":"auto","margin-right": "auto", "margin-bottom":"40px", "width": "75%"}}
				          src={commission1}
				          alt="First slide"
				        />
				      </Carousel.Item>
				      <Carousel.Item>
				        <img
				          className="d-block"
				          style={{"display":"block", "margin-left":"auto","margin-right": "auto", "margin-bottom":"40px", "width": "75%"}}
				          src={commission2}
				          alt="Second slide"
				        />
				      </Carousel.Item>
				      <Carousel.Item>
				        <img
				          className="d-block"
				          style={{"display":"block", "margin-left":"auto","margin-right": "auto", "margin-bottom":"40px", "width": "75%"}}
				          src={commission3}
				          alt="Third slide"
				        />

				      </Carousel.Item>
				    </Carousel>

			        <Card.Title>Prop Commissions</Card.Title>

			        <Card.Text style={{"margin-bottom":"10px", "margin-top":"20px", "margin-left":"15px"}}>
			        
			          [A brief description of what this service entails and its options. 
			          Cost is based on the user's budget, cost of materials, and 
			          the service flat rate.]
			        </Card.Text>

			        <Container className="signUpContainer">
			        <Link to='/WorldbuilderWorkshop/services/commission'><Button className="bookBtn" as="input" type="button" value="Commission an Item"/></Link>
			        </Container>
			        
			      </Card.Body>

    			</Card>

				</Col>

				</Row>

			</Container>
		</div>
	);
}

export default Services;