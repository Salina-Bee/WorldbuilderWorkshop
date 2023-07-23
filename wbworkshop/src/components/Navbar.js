// react-router-dom
import {Link} from 'react-router-dom';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import logo from '../images/logo1.png';
import './Navbar.css'

const NavbarComponent = () => {


  return (
    <Navbar expand="lg" activeKey="/WorldbuilderWorkshop" collapseOnSelect>
	        <Navbar.Brand href="/WorldbuilderWorkshop">
	          <img src={logo} width="45" height="45"/>
	          The Worldbuilder's Workshop
	        </Navbar.Brand>
	        
	        <Navbar.Toggle data-bs-theme="dark" aria-controls="responsive-navbar-nav"/>
	        <div className="center-navbar ms-auto">
		        <Navbar.Collapse id="responsive-navbar-nav">
		          <Nav.Item>
		            <Link to="/WorldbuilderWorkshop">Home</Link>
		          </Nav.Item>
		          <Nav.Item>
		            <Link to="/WorldbuilderWorkshop/products">Products</Link>
		          </Nav.Item>
		          <Nav.Item>
		            <Link to="/WorldbuilderWorkshop/services">Services</Link>
		          </Nav.Item>
		          <Nav.Item>
		            <Link to="/WorldbuilderWorkshop/community">Community</Link>
		          </Nav.Item>
		          <Nav.Item>
		            	<Link to="/WorldbuilderWorkshop/signin"><Button className="signInButton" as="input" type="button" value="Sign In"/></Link>
		         	 </Nav.Item>  
		        	
		        	
		               
		        </Navbar.Collapse>
	        </div>
	</Navbar>
  );
}
 
export default NavbarComponent;