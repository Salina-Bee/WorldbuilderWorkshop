import {Link} from 'react-router-dom';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

//images
import SignUpPic from '../images/signup.jpg'

const SignUp = () => {

	return (
		<div>
		<Container fluid>
		<br/>
		<br/>
		<Row>
		<Col xs={1}>
		</Col>
		<Col xs={6}>
		<img src={SignUpPic} width="100%" alt="Sign Up art"/>
		</Col>

		<Col xs={1}>
		</Col>
		<Col xs={3}>
			<Row>
			<Col xs={1} className="bannerBBG">
			</Col>
			<Col xs={10} className="bannerBG">
				<h4 className="bannerTitle">Sign Up</h4>
			</Col>
			<Col xs={1} className="bannerBBG">
			</Col>
			</Row>

			<Row className="justify-content-center">
				<Col xs={10}>
				<Form>
					<br/>
					<Form.Group className="mb-3" controlId="fgUsername">
						<Form.Label>Username</Form.Label>
						<Form.Control type="text" placeholder="Username"/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="fgEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control type="text" placeholder="example@email.com"/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="fgPassword">
						<Form.Label>Password </Form.Label>
						<Form.Control type="password" placeholder="Password"/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="fgPassword">
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control type="password" placeholder="Password"/>
					</Form.Group>
					<br/>
					<Form.Group className="mb-3" id="formGridCheckbox">
				        <Form.Check type="checkbox" label="Notify me of offers from The Worldbuilder's Workshop." />
				    </Form.Group>

					<Container className="signUpContainer">
					<Link to="/WorldbuilderWorkshop"><Button className="signInButtonNotNav" as="input" type="button" value="Create Account"/></Link>
					</Container>
				</Form>

			
				</Col>
			</Row>



		</Col>

		</Row>

		</Container>
		</div>
	);
}

export default SignUp;