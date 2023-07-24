import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


// react-bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';

// image
import profile from '../images/profile.png'

// data
import Data from '../data/db.json';

const PostDetails = () => {

	let { id } = useParams();
	const postInfo = Data["posts"].filter((post) => post.id === parseInt(id));
	const post = postInfo[0];
	const comments = post.comments;
	const navigate = useNavigate();

	const handleBack = () => {
		navigate("/WorldbuilderWorkshop/community");
	}


	return (
		<div>
		<br/>
		
		<Container className ="p-2">
		<br/>
				<Row className="bannerBG justify-content-center" style={{"padding-left": "10px"}}>
					<Col xs={10} style={{"padding-left": "10px", "display":"flex", "align-items": "center"}}>

						<h4 style={{"color":"#F2F2F0"}}>{post.title}</h4>

						</Col>

						<Col xs={2} style={{"text-align":"right", "padding-right": "20px", "paddingTop":"5px", "color":"#F2F2F0"}}>
						<h5>{post.date}</h5>
						</Col>
				</Row>
		<br/>
		<Container>
				<h5>Posted by: &nbsp;<em>{post.author}</em></h5>
				<h5>Type: &nbsp;<em>{post.type}</em></h5>

				<br/>
				{post.body !== "" && <span>{post.body}</span>}
				{post.body === "" && <span>[Post body text goes here.] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				Amet mattis vulputate enim nulla aliquet porttitor lacus. Odio ut enim blandit volutpat. Neque volutpat ac tincidunt vitae semper quis. Malesuada bibendum arcu vitae 
				elementum curabitur vitae nunc. In ante metus dictum at tempor commodo. Pulvinar mattis nunc sed blandit libero volutpat. Scelerisque varius morbi enim nunc faucibus a. 
				Nibh sit amet commodo nulla. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Egestas tellus rutrum 
				tellus pellentesque eu. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Laoreet sit amet cursus sit amet dictum.
				<br/><br/>
				Massa placerat duis ultricies lacus sed turpis. Egestas sed tempus urna et pharetra pharetra massa. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. 
				Scelerisque purus semper eget duis at tellus at urna condimentum. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Varius vel pharetra vel turpis nunc. Nam 
				at lectus urna duis convallis. Dolor sit amet consectetur adipiscing elit ut. Scelerisque felis imperdiet proin fermentum leo. Risus in hendrerit gravida rutrum quisque non 
				tellus orci ac. Sit amet porttitor eget dolor morbi non arcu. Odio euismod lacinia at quis. Enim nunc faucibus a pellentesque sit.</span>}
		</Container>
		</Container>
		<br/><br/>
		<Container>

		<h4>Comments</h4>
		<br/>
		{comments.length != 0 && 
			<div>
				{comments.map((comment) => (
				<div key={comment.commentId}>
				
				<Row style={{"backgroundColor":"#64ccb3", "padding":"10px"}}>
				<Col xs={1}>
				<img src={profile} width="75" height="75"/>
				</Col>
				<Col xs={11}>
				<h6><em>{comment.author}</em> said:</h6>
				<span><em>{comment.body}</em></span>
				</Col>
				</Row>
				<br/>
				</div>

				))}
			</div>}

		{comments.length == 0 && <span>There are currently no comments on this post.</span>}


		</Container>
		<br/>
		<Container>
		<Button className="signInButtonNotNav" as="input" type="button" value="&lt; Community" onClick={handleBack}/>
		</Container>
		</div>
	);

}

export default PostDetails;
