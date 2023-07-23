// react-router-dom
import { useParams, useNavigate } from 'react-router-dom';


// react-bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// data
import Data from '../data/db.json';

const ProductDetails = () => {
	let { id } = useParams();
	const productInfo = Data["products"].filter((product) => product.id === parseInt(id));
	const navigate = useNavigate();

	const handleBack = () => {
		navigate(-1);
	}

	return (
		<div>
		<Container>
		<br/>
		<br/>
		<Row className="justify-content-center">
			<Col xs={6} style={{'text-align':'center'}}>
			<Container style={{'background-color': 'white'}}>
			<img src={productInfo[0]["img"]} alt="Product Image" className="productDetailImage" />
			</Container>
			</Col>
			<Col xs={6}>

			<Row className="justify-content-center">
					<Col xs={1} className="bannerBBG">
					</Col>
					<Col xs={10} className="bannerBG">
					<h4 className="bannerTitle">{productInfo[0]["name"]}</h4>
					</Col>
					<Col xs={1} className="bannerBBG">
					</Col>
			</Row>
			<br/>
			<Row>
				<Col>
				<h5>Amount in-stock: {productInfo[0]["stock"]}</h5>
				</Col>
				<Col style={{'text-align': 'right'}}>
				<h5>Cost: {productInfo[0]["cost"]}</h5>
				</Col>
			</Row>
			<br/>

			<Row>
				<p>
					[Description for {productInfo[0]["name"]} goes here. All items under <em>Base & Layer Paints</em> and <em>Tools & Supplies</em> will include
					a carousel of images (in some cases, there may also be a video) that shows what the product looks like from different angles,
					how to use the product, and an example of an item that the product can be used on.] <br/><br/>Lorem ipsum dolor sit amet, consectetur 
					adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum posuere urna nec tincidunt 
					praesent semper feugiat nibh. Sit amet consectetur adipiscing elit ut aliquam purus. Urna nec tincidunt praesent semper 
					feugiat nibh.
				</p>
			</Row>
			<br/>
			<Row className="justify-content-center">
			<Col xs={8}>
			<Row>
			<Button className="backBtn" onClick={handleBack}>Back</Button>
			</Row>
			</Col>
			</Row>
			</Col>

		</Row>

		</Container>
		</div>
	);
}

export default ProductDetails;