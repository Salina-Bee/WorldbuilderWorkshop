import {Link} from 'react-router-dom';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

//images
import SignInPic from '../images/signin.jpg'

const SignIn = () => {

	return (
		<div>
		<Container fluid>
		<br/>
		<br/>
		<Row>
		<Col xs={1}>
		</Col>
		<Col xs={6}>
		<img src={SignInPic} width="100%" alt="Sign In art"/>
		</Col>

		<Col xs={1}>
		</Col>
		<Col xs={3}>
			<Row className="justify-content-center">
			<Col xs={1} className="bannerBBG">
			</Col>
			<Col xs={10} className="bannerBG">
				<h4 className="bannerTitle">Sign In</h4>
			</Col>
			<Col xs={1} className="bannerBBG">
			</Col>
			</Row>

			<Row className="justify-content-center">
				<Col xs={10}>
				<Form>
					<br/>
					<br/>
					<Form.Group className="mb-3" controlId="fgUsernameEmail">
						<Form.Label> Username/Email </Form.Label>
						<Form.Control type="text" placeholder="Enter username/email"/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="fgPassword">
						<Form.Label> Password </Form.Label>
						<Form.Control type="password" placeholder="Enter password"/>
					</Form.Group>

					<Container className="signUpContainer">
					<Link to="/WorldbuilderWorkshop"><Button className="signInButtonNotNav" as="input" type="button" value="Sign In"/></Link>
					</Container>
				</Form>

				<Container>
					<p><u>Forgot your password?</u></p>
					<Link to="/WorldbuildersWorkshop/signup"><p><u>Don't have an account? Sign up now.</u></p></Link>
				</Container>
				</Col>
			</Row>



		</Col>

		</Row>

		</Container>
		</div>
	);
}

export default SignIn;