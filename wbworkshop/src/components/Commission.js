import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

// react-bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import InputGroup from 'react-bootstrap/InputGroup';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';


const Commission = () => {

	const [show, setShow] = useState(false);
	const target = useRef(null);

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
					<h4 className="bannerTitle">Commission a Custom Prop</h4>
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

			<p>Please fill out the form below to request a commission. Once we've evaluated the feasibility of your request, we'll get back to you as soon as possible!</p>
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
			<h4> Commission Information </h4>
			<br/>

			<Row>

				<Col xs={6}>
				<Form.Group className="mb-3">
			        <Form.Label>Commission Name</Form.Label>
			        <Form.Control type="text" placeholder="Enter commission name" style={{'width':'20em'}}/>
			        <Form.Text style={{'color':'#d7eafc'}}>
				    This is what we'll refer to your commission as whenever we contact you. Keep it short and sweet!
				    </Form.Text>
	      		</Form.Group>
	      		</Col>

	      	</Row>

	      	<br/>
			<Row>

				<Col xs={3}>
				<Form.Group className="mb-3">
				        <Form.Label>Estimated Budget</Form.Label>
				        <Form.Check type="radio" name="budget" label="Under $100" id="radio1"/>
				        <Form.Check type="radio" name="budget" label="$100-200" id="radio2"/>
				        <Form.Check type="radio" name="budget" label="$200-300" id="radio3"/>
				        <Form.Check type="radio" name="budget" label="$300-400" id="radio4"/>
				        <Form.Check type="radio" name="budget" label="$400-500" id="radio4"/>
				        <Form.Check type="radio" name="budget" label="Over $500 (Please specify):" id="radio5"/>
				        <Form.Control type="text" placeholder="Provide a range (e.g. $500-$750)"/>
		      	</Form.Group>
		      	</Col>

		      	
	      	</Row>
	      	<br/>
	      	<Row>
	      		<Col xs={3}>
		      	<Form.Group className="mb-3">
		      		<Form.Label>Estimated Size <Button className="infoBtn2" ref={target} onClick={() => setShow(!show)} onFocusOut={() => setShow(false)}>?</Button></Form.Label>
		      		
				    <Form.Select>
					      <option disabled selected>[Select Size]</option>
					      <option value="XS">Tiny (1:100) </option>
					      <option value="S">Small (1:72) </option>
					      <option value="M">Medium (1:56)</option>
					      <option value="L">Large (1:35)</option>
					      <option value="Unknown">Not sure/Not applicable</option>
					</Form.Select>
		      	</Form.Group>
		      	</Col>
	      		
	      	</Row>
	      	<br/>
	      	<Row>

	      		<Col xs={8}>
		      	<Form.Group className="mb-3">
		      		<Form.Label>References/Description for Commission </Form.Label>
		      		<Form.Control type="file" multiple/>
				    <Form.Control as="textarea" style={{'margin-top':'10px', 'height':'150px'}} placeholder="Write your description and/or paste your links here. The more details, the better!"/>
		      	</Form.Group>
		      	</Col>

	      	</Row>

	      	<br/>
	      	<Row>

	      		<Col xs={8}>
		      	<Form.Group className="mb-3">
		      		<Form.Label>Are there any other specifications you would like us to consider? (Optional)</Form.Label>
				    <Form.Control as="textarea" style={{'height':'100px'}} placeholder="Write additional details/requirements here. This "/>
		      	</Form.Group>
		      	</Col>

	      	</Row>

	      	<Link to="/WorldbuilderWorkshop"><Button className="signInButtonNotNav" as="input" type="button" value="Submit"/></Link>

			</Form>

			</Container>

			<Overlay target={target.current} show={show} placement="right">
		        {(props) => (
		          <Tooltip  {...props}>
		            Our miniatures are crafted using a relative scale. For example, "1:100" means that the miniature should be 1/100th the size
		            of the actual, real-life object.
		          </Tooltip>
		        )}
		     </Overlay>

		</div>
	);

}


export default Commission;