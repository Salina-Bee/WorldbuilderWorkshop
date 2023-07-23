import { useState } from 'react';
import { Link } from 'react-router-dom';

// react-bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Stack from 'react-bootstrap/Stack';

// data
import Data from '../data/db.json';

const Community = () => {
	
	const [show, setShow] = useState(true);

	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(8);
	const lastPostIndex = currentPage * postsPerPage; // default: 10
	const firstPostIndex = lastPostIndex - postsPerPage; // default: 0
	let posts = Data["posts"];
	const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

	const handleNext = () => {
		setCurrentPage(currentPage+1);
	}

	const handlePrev = () => {
		setCurrentPage(currentPage-1);
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
					<h4 className="bannerTitle">Community</h4>
					</Col>
					<Col xs={1} className="bannerBBG">
					</Col>
				</Row>
				</Col>
				
				</Row>

			</Container>

			<br/>
			<br/>
			<Container>

			 
				<Alert variant="info" onClose={() => setShow(false)} dismissible>
					You must be signed in to create and comment on posts. 
					&nbsp;&nbsp;&nbsp;
					<Link to='/WorldbuilderWorkshop/signin'>Sign In</Link>
					&nbsp;&nbsp;|&nbsp;&nbsp;
					<Link to='/WorldbuilderWorkshop/signup'>Sign Up</Link>
				</Alert>

			<br/>
			
			<Stack gap={postsPerPage}>
			{currentPosts.map((post) => (
					
					<div key={post.id}>
					
					{currentPage == 1 && post.id==1 && <h4 style={{"margin-bottom":"20px"}}>Pinned</h4>}
					
					<Link to={'/WorldbuildersWorkshop/community/' + post.id}>
					<div className="p-2">
						<Row>
						<Col xs={10} style={{"padding-left": "20px", "display":"flex", "align-items": "center"}}>

						<h5 style={{"padding-top":"10px"}}>{post.title}</h5><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;by {post.author}</span>

						</Col>

						<Col xs={2} style={{"text-align":"right", "padding-right": "20px", "padding-top":"10px"}}>
						{post.date}
						</Col>
						</Row>



					</div>

					</Link>
					<br/>

					{currentPage == 1 && post.id==2 && <div><br/><hr className="horizontal"/><br/></div>}


				
									
					</div>
					
				))}

			</Stack>

			<Row className="justify-content-center">
				<Col xs={5} className="productBtnContainer1">
				<Button className="prevBtn" onClick={handlePrev} disabled={currentPage==1}>Previous</Button>
				</Col>
				<Col xs={1}></Col>
				<Col xs={5}>
				<Button className="nextBtn" onClick={handleNext} disabled={lastPostIndex >= posts.length}>Next</Button>
				</Col>
			</Row>
			

			</Container>
			


		</div>

	);
}



export default Community;