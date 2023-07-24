import { useState, useRef } from 'react';
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
	const postsPerPage = 6;
	const lastPostIndex = currentPage * postsPerPage; // default: 6
	const firstPostIndex = lastPostIndex - postsPerPage; // default: 0
	const [products, setProducts] = useState(Data["products"]);

	const currentProducts = products.slice(firstPostIndex, lastPostIndex);

	// tooltip variables
	const [show1, setShow1] = useState(false);
	const [show2, setShow2] = useState(false);
	const [show3, setShow3] = useState(false);
  	const target = useRef(null);
  	const target2 = useRef(null);
  	const target3 = useRef(null);

  	// filter variables
  	const [facetIsChecked, setFacetIsChecked] = useState({
		facets:[
			{name:"Primers", isChecked:false},
			{name:"Thinners & Solvents", isChecked:false},
			{name:"Top Coat", isChecked:false},
			{name:"Weathering & Washes", isChecked:false},
			{name:"Bases", isChecked:false},
			{name:"Brushes", isChecked:false},
			{name:"Decals", isChecked:false},
			{name:"Knives & Saws", isChecked:false},
			{name:"Masking Products", isChecked:false},
			{name:"Nippers & Tweezers", isChecked:false},
			{name:"Sanding Tools", isChecked:false},
			{name:"Scribing Tools", isChecked:false},
			{name:"Books", isChecked:false},
			{name:"Dice", isChecked:false},
			{name:"Miniatures", isChecked:false},
			{name:"Miscellaneous", isChecked:false}
		]
	});
	

	const handleNext = () => {
		setCurrentPage(currentPage+1);
	}

	const handlePrev = () => {
		setCurrentPage(currentPage-1);
	}

	const handleClear = () => {
		setCurrentPage(1); // return to first page
		setProducts(Data["products"]);
	}

	const handleFacetChecked = (name, isChecked) => {
		const array = facetIsChecked["facets"];

		for (var i = 0; i < array.length; i++) {
			if (array[i]["name"] === name) {
				array[i]["isChecked"] = isChecked;
			}
		}

		setFacetIsChecked({facets:array});
	}

	const handleFilter = () => {

		const array = Data["products"];
		const array2 = facetIsChecked["facets"];
		var checkedFacets = [];
		var updatedList = [];
		var allFalse = true;

		// get a list of all checked facets
		for (var i = 0; i < array2.length; i++) {
			if (array2[i]["isChecked"]) {
				checkedFacets.push(array2[i]);
				allFalse = false;
			}
		}

		if (allFalse) {
			handleClear();
		} else {
			for (var j = 0; j < checkedFacets.length; j++) {
				const result = array.filter((elem) => elem["type"] == checkedFacets[j]["name"]);
				updatedList = updatedList.concat(result);
			}

			setProducts(updatedList);
		}
		
	}


	return (
		<div>
							
			<Container>
				<br/>
				<Row className="justify-content-center">
				
				<Col xs={10}>
				<Row className="justify-content-center">

					<Col xs={10} className="bannerBG">
					<h4 className="bannerTitle">Products</h4>
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
				
				<div className="filterContainer">
				<Row className="justify-content-center">
				<Col xs={10}>
				<Form>

				<div className="filterHeader">
				<h5 className="productFilterTitle">Base & Layer Paints&nbsp;</h5>
				<Button className="infoBtn" ref={target} onClick={() => setShow1(!show1)} onFocusOut={() => setShow1(false)}>?</Button>
				</div>

				<Form.Check label="Primers" name="Primers" type="checkbox" onChange={(e) => handleFacetChecked(e.target.name, e.target.checked)}/>
				<Form.Check label="Thinners & Solvents" name="Thinners & Solvents" type="checkbox" onChange={(e) => handleFacetChecked(e.target.name, e.target.checked)}/>
				<Form.Check label="Top Coat" name="Top Coat" type="checkbox" onChange={(e) => handleFacetChecked(e.target.name, e.target.checked)}/>
				<Form.Check label="Weathering & Washes" name="Weathering & Washes" type="checkbox" onChange={(e) => handleFacetChecked(e.target.name, e.target.checked)}/>

				<div className="filterHeader">
				<h5 className="productFilterTitle">Tools & Supplies&nbsp;</h5>
				<Button className="infoBtn" ref={target2} onClick={() => setShow2(!show2)}>?</Button>
				</div>

				<Form.Check label="Bases" name="Bases" type="checkbox" onChange={(e) => handleFacetChecked(e.target.name, e.target.checked)}/>
				<Form.Check label="Brushes" name="Brushes" type="checkbox" onChange={(e) => handleFacetChecked(e.target.name, e.target.checked)}/>
				<Form.Check label="Decals" name="Decals" type="checkbox" onChange={(e) => handleFacetChecked(e.target.name, e.target.checked)}/>
				<Form.Check label="Knives & Saws" name="Knives & Saws" type="checkbox" onChange={(e) => handleFacetChecked(e.target.name, e.target.checked)}/>
				<Form.Check label="Masking Products" name="Masking Products" type="checkbox" onChange={(e) => handleFacetChecked(e.target.name, e.target.checked)}/>
				<Form.Check label="Nippers & Tweezers" name="Nippers & Tweezers" type="checkbox" onChange={(e) => handleFacetChecked(e.target.name, e.target.checked)}/>
				<Form.Check label="Sanding Tools" name="Sanding Tools" type="checkbox" onChange={(e) => handleFacetChecked(e.target.name, e.target.checked)}/>
				<Form.Check label="Scribing Tools" name="Scribing Tools" type="checkbox" onChange={(e) => handleFacetChecked(e.target.name, e.target.checked)}/>

				<div className="filterHeader">
				<h5 className="productFilterTitle">TTRPG&nbsp;</h5>
				<Button className="infoBtn" ref={target3} onClick={() => setShow3(!show3)}>?</Button>
				</div>

				<Form.Check label="Books" name="Books" type="checkbox" onChange={(e) => handleFacetChecked(e.target.name, e.target.checked)}/>
				<Form.Check label="Dice" name="Dice" type="checkbox" onChange={(e) => handleFacetChecked(e.target.name, e.target.checked)}/>
				<Form.Check label="Miniatures" name="Miniatures" type="checkbox" onChange={(e) => handleFacetChecked(e.target.name, e.target.checked)}/>
				<Form.Check label="Miscellaneous" name="Miscellaneous" type="checkbox" onChange={(e) => handleFacetChecked(e.target.name, e.target.checked)}/>
				<div className="productBtnsContainer">
				<Button className="filterBtn" onClick={handleFilter}>Filter</Button>
				<Button className="clearBtn" type="reset" onClick={handleClear}>Clear All</Button>
				</div>
				</Form>
				</Col>
				</Row>


				</div>



				</Col>

				<Col xs={8}>

				<Row>
				{((Math.min(lastPostIndex, products.length)) != 0 && <p style={{'margin-left': '3px'}}>Showing {firstPostIndex+1}-{(Math.min(lastPostIndex, products.length))} of {products.length} entries</p>) || 
				 <p style={{'margin-left': '3px'}}>There are no entries matching the filter. Please come back later!</p>}
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


				{Math.min(lastPostIndex, products.length) != 0 && <Row className="justify-content-center">
				<Col xs={5} className="productBtnContainer1">
				<Button className="prevBtn" onClick={handlePrev} disabled={currentPage==1}>Previous</Button>
				</Col>
				<Col xs={1}></Col>
				<Col xs={5}>
				<Button className="nextBtn" onClick={handleNext} disabled={lastPostIndex >= products.length}>Next</Button>
				</Col>
				</Row>}
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