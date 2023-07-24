import {useState} from 'react';
import {Link} from 'react-router-dom';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

//images
import SignUpPic from '../images/signup.jpg';

//data
import data from '../data/db.json';

const SignUp = () => {

	const[validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		const isValid = getValidation();
		if (form.checkValidity() === false || !isValid) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			localStorage.setItem("username", document.getElementById("username").value);
			localStorage.setItem("isSignedIn", "true");
		}

		setValidated(true);
		
	}

	const getValidation = () => {
		const username = document.getElementById("username");
		const email = document.getElementById("email");
		const password = document.getElementById("password");
		const password2 = document.getElementById("password2");

		// check that username is unique
		const users = data.users;
		console.log(users);


		// check that passwords match

		return false;

	}

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
				<Form novalidate validated={validated} onSubmit={handleSubmit}>
					<br/>
					<Form.Group className="mb-3" controlId="fgUsername">
						<Form.Label>Username</Form.Label>
						<Form.Control required id="username" type="text" placeholder="Username"/>
						<Form.Control.Feedback type="invalid">Please enter a username.</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className="mb-3" controlId="fgEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control required id="email" type="text" placeholder="example@email.com"/>
						<Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className="mb-3" controlId="fgPassword">
						<Form.Label>Password </Form.Label>
						<Form.Control required id="password" type="password" placeholder="Password"/>
						<Form.Control.Feedback type="invalid">Please enter a password.</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className="mb-3" controlId="fgPassword">
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control required id="password2" type="password" placeholder="Password"/>
						<Form.Control.Feedback type="invalid">This password does not match the one you first entered. Please try again.</Form.Control.Feedback>
					</Form.Group>
					<br/>
					<Form.Group className="mb-3" id="formGridCheckbox">
				        <Form.Check type="checkbox" label="Notify me of offers from The Worldbuilder's Workshop." />
				    </Form.Group>

					<Container className="signUpContainer">
					<Button className="signInButtonNotNav" as="input" type="submit" value="Create Account"/>
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