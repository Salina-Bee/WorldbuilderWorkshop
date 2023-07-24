import { Link } from 'react-router-dom';
import {useTranslation} from 'react-i18next';

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

	const {t, i18n} = useTranslation();

 	 const changeLanguage = (lng) => {
    	i18n.changeLanguage(lng);
  	}

  	const swapLanguage = () => {
    	if (i18n.language === 'en') {
      		changeLanguage('fr');
    	} else {
      	changeLanguage('en');
    	}
  	};

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
					<h4 className="bannerTitle">{t("link3")}</h4>
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

				<Card style={{'border': 'none', 'width': '30rem', 'backgroundColor': '#1d6957'}} className="mx-auto">
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

			        <Card.Title style={{"color":"#F2F2F0"}}>{t("printing")}</Card.Title>

			        <Card.Text style={{"margin-bottom":"10px" , "margin-top":"20px", "margin-left":"15px", "color":"#F2F2F0"}}>
			        
			        {t("printingBody")}

			        </Card.Text>

			        <Container className="signUpContainer">
			        <Link to='/WorldbuilderWorkshop/services/printer'><Button className="bookBtn" as="input" type="button" value={t("reservePrinter")}/></Link>
			        </Container>
			        
			      </Card.Body>
    			</Card>

				</Col>

				
				<Col xs={4} style={{"margin-left":"10px"}}>

				<Card style={{'border': 'none', 'width': '30rem', 'backgroundColor': '#1d6957'}} className="mx-auto">
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

			        <Card.Title style={{"color":"#F2F2F0"}}>{t("commissions")}</Card.Title>

			        <Card.Text style={{"margin-bottom":"10px", "margin-top":"20px", "margin-left":"15px", "color":"#F2F2F0"}}>
			        
			          {t("commissionsBody")}
			        </Card.Text>

			        <Container className="signUpContainer">
			        <Link to='/WorldbuilderWorkshop/services/commission'><Button className="bookBtn" as="input" type="button" value={t("commissionItem")}/></Link>
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