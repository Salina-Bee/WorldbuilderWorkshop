import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ErrorImg from '../images/404img.png';
const NotFound = () => {
	return (
		<div className="text-center">

		<br/>
		<Container>
		<Row className="justify-content-center">
			<Col xs={6} className="bannerBG">
				<h4 className="bannerTitle">404 Page Not Found</h4>
			</Col>
			</Row>

		</Container>
		<br/>
		<br/>
		<img src={ErrorImg} width="200" height="200"/>
		<br/>
		<br/>
		<h4>You've traveled long and far...</h4><br/>
		<h6>We're not quite sure how you got here, but we commend your adventurous spirit!<br/><br/>Feel free to check the URL and try again, or <Link to="/WorldbuilderWorkshop">return Home</Link>.</h6>
		</div>
	);
}

export default NotFound;