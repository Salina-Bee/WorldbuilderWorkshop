import { Link } from 'react-router-dom';

// react-bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import InputGroup from 'react-bootstrap/InputGroup';

const BookPrinter = () => {
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
					<h4 className="bannerTitle">Book a Printer</h4>
					</Col>
					<Col xs={1} className="bannerBBG">
					</Col>
				</Row>
				</Col>
				
				</Row>

				<br/>
				<br/>
			</Container>

			<Container>

			<p>Please fill out the form below to book a printer.</p>
			<br/>

			<Form>

			<h4> Personal Information </h4>
			<br/>
			<Row>

				<Col xs={3}>
				<Form.Group className="mb-3">
			        <Form.Label>First Name</Form.Label>
			        <Form.Control type="text" placeholder="Enter first name" />
	      		</Form.Group>
	      		</Col>

	      		<Col xs={3}>
	      		<Form.Group className="mb-3">
			        <Form.Label>Last Name</Form.Label>
			        <Form.Control type="text" placeholder="Enter last name" />
	      		</Form.Group>
	      		</Col>


			</Row>

			<br/>
			<Row>

				<Col xs={4}>

				<Form.Group className="mb-3">
			        <Form.Label>Email Address</Form.Label>
			        <Form.Control type="email" placeholder="example@email.com" />
	      		</Form.Group>

	      		</Col>

	      		<Col xs={3}>

	      		<Form.Group className="mb-3">
			        <Form.Label>Phone Number</Form.Label>
			        <Form.Control type="tel" placeholder="(123) 456-7890" />
	      		</Form.Group>

	      		</Col>

			</Row>



			<br/>
			<h4> Reservation Information </h4>
			<br/>
			<Row>
			

				<Col xs={2}>
				<Form.Group className="mb-3">
			        <Form.Label>Reservation Date</Form.Label>
			        <Form.Control type="date"/>
	      		</Form.Group>


				</Col>

				<Col xs={2}>
				<Form.Group className="mb-3">
			        <Form.Label>Reservation Time</Form.Label>
			        <InputGroup className="mb-3">
        			<Form.Select aria-label="Default select example">
				      <option disabled selected>hh</option>
				      <option value="10">10</option>
				      <option value="11">11</option>
				      <option value="12">12</option>
				      <option value="13">1</option>
				      <option value="14">2</option>
				      <option value="15">3</option>
				    </Form.Select>
        			<InputGroup.Text>: 00</InputGroup.Text>
        			<InputGroup.Text>AM/PM</InputGroup.Text>
      				</InputGroup>

	      		</Form.Group>
				</Col>

				



			</Row>
			<br/>
			
			<Row>
			<Alert variant={'info'}>
		        <strong>Note:</strong> Larger and more complex designs will take longer to print than smaller and simpler objects! 
		        A humanoid miniature, for example, can take anywhere between 4-8 hours. If you cannot pick up your 3D print on the same
		        day as the reservation date, please ensure that you will be available to pick it up within <u>14 days</u> after the reservation date.         
		    </Alert>
			</Row>

			<br/>
			<Row>

			<Col xs={8}>
				<Form.Group controlId="formFile" className="mb-3">
			        <Form.Label>File to Print (Optional)</Form.Label>
			        <br/>
			        <Form.Text id="fileHelpBlock" style={{'color':'#d7eafc'}}>
				    Expected file type: .stl OR .obj<br/>
				    </Form.Text>
			        <Form.Control type="file" aria-describedby="fileHelpBlock"/>

			        
			    </Form.Group>
		    </Col>

			</Row>


			<br/>

			<Link to="/WorldbuilderWorkshop"><Button className="signInButtonNotNav" as="input" type="button" value="Submit"/></Link>






			</Form>

			</Container>

		</div>
	);
}

export default BookPrinter;