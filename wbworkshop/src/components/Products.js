import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// react-bootstrap
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

// data
import Data from '../data/db.json';


const Products = () => {
	
	// pagination variables
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(6);
	const lastPostIndex = currentPage * postsPerPage; // default: 6
	const firstPostIndex = lastPostIndex - postsPerPage; // default: 0
	let products = Data["products"];
	const currentProducts = products.slice(firstPostIndex, lastPostIndex);

	// tooltip variables
	const [show1, setShow1] = useState(false);
	const [show2, setShow2] = useState(false);
	const [show3, setShow3] = useState(false);
  	const target = useRef(null);
  	const target2 = useRef(null);
  	const target3 = useRef(null);

	

	const handleNext = () => {
		setCurrentPage(currentPage+1);
	}

	const handlePrev = () => {
		setCurrentPage(currentPage-1);
	}

	const handleClear = () => {
		setCurrentPage(1); // return to first page
	}

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
					<h4 className="bannerTitle">Products</h4>
					</Col>
					<Col xs={1} className="bannerBBG">
					</Col>
				</Row>
				</Col>
				
				</Row>
			</Container>

			<Container>
			<br/>
			<br/>
			<Row>
				

				<Col xs={3} >
				
				<Container className="filterContainer">
				<Row className="justify-content-center">
				<Col xs={10}>
				<Form>

				<div className="filterHeader">
				<h5 className="productFilterTitle">Base & Layer Paints&nbsp;</h5>
				<Button className="infoBtn" ref={target} onClick={() => setShow1(!show1)} onFocusOut={() => setShow1(false)}>?</Button>
				</div>

				<Form.Check label="Primers" name="paints" type="checkbox"/>
				<Form.Check label="Thinners & Solvents" name="paints" type="checkbox"/>
				<Form.Check label="Top Coat" name="paints" type="checkbox"/>
				<Form.Check label="Weathering & Washes" name="paints" type="checkbox"/>

				<div className="filterHeader">
				<h5 className="productFilterTitle">Tools & Supplies&nbsp;</h5>
				<Button className="infoBtn" ref={target2} onClick={() => setShow2(!show2)}>?</Button>
				</div>

				<Form.Check label="Bases" name="tools" type="checkbox"/>
				<Form.Check label="Brushes" name="tools" type="checkbox"/>
				<Form.Check label="Decals" name="tools" type="checkbox"/>
				<Form.Check label="Knives & Saws" name="tools" type="checkbox"/>
				<Form.Check label="Masking Products" name="tools" type="checkbox"/>
				<Form.Check label="Nippers & Tweezers" name="tools" type="checkbox"/>
				<Form.Check label="Sanding Tools" name="tools" type="checkbox"/>
				<Form.Check label="Scribing Tools" name="tools" type="checkbox"/>

				<div className="filterHeader">
				<h5 className="productFilterTitle">TTRPG&nbsp;</h5>
				<Button className="infoBtn" ref={target3} onClick={() => setShow3(!show3)}>?</Button>
				</div>

				<Form.Check label="Books" name="ttrpg" type="checkbox"/>
				<Form.Check label="Dice" name="ttrpg" type="checkbox"/>
				<Form.Check label="Miniatures" name="ttrpg" type="checkbox"/>
				<Form.Check label="Miscellaneous" name="ttrpg" type="checkbox"/>
				<div className="productBtnsContainer">
				<Button className="filterBtn">Filter</Button>
				<Button className="clearBtn" type="reset" onClick={handleClear}>Clear All</Button>
				</div>
				</Form>
				</Col>
				</Row>


				</Container>



				</Col>

				<Col xs={8}>

				<Row>
				<p style={{'margin-left': '3px'}}>Showing {firstPostIndex+1}-{(Math.min(lastPostIndex, products.length))} of {products.length} entries</p>
				</Row>

				<Row className="cards">
				{currentProducts.map((product) => (
					<Col xs={4}>
					<div key={product.id}>
					
					<Card className="productCard h-100" style={{ width: '18rem' }, {border: 'none'}}>
					<Link to={'/WorldbuilderWorkshop/products/' + product.id}>
						<Card.Img className="productImage" variant="top" src={product.img}/>
						<Card.Body>
							<Card.Title className="productTitle" style={{'font-size':'16px'}}>{product.name}</Card.Title>
							<Card.Text style={{'text-align': 'center'}}>
							{product.cost}
							</Card.Text>
						</Card.Body>
					</Link>
					</Card>
									
					</div>
					</Col>
				))}
				</Row>


				<Row className="justify-content-center">
				<Col xs={5} className="productBtnContainer1">
				<Button className="prevBtn" onClick={handlePrev} disabled={currentPage==1}>Previous</Button>
				</Col>
				<Col xs={1}></Col>
				<Col xs={5}>
				<Button className="nextBtn" onClick={handleNext} disabled={lastPostIndex >= products.length}>Next</Button>
				</Col>
				</Row>
				<br/>

				</Col>

				

				



			</Row>


			</Container>
			<Overlay target={target.current} show={show1} placement="right">
		        {(props) => (
		          <Tooltip id="overlay-example" {...props}>
		            [A very brief description of what base and layer paints are used for.]
		          </Tooltip>
		        )}
		     </Overlay>
		     <Overlay target={target2.current} show={show2} placement="right">
		        {(props) => (
		          <Tooltip id="overlay-example" {...props}>
		            [A very brief description of what tools and supplies can be used for.]
		          </Tooltip>
		        )}
		     </Overlay>
		     <Overlay target={target3.current} show={show3} placement="right">
		        {(props) => (
		          <Tooltip id="overlay-example" {...props}>
		            [A very brief description of what TTRPGs are.]
		          </Tooltip>
		        )}
		     </Overlay>		
			
		</div>

	);
}



export default Products;