// react-router-dom
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import logo from '../images/logo.png';
import profile from '../images/profile.png'
import world from '../images/world.png'


const NavbarComponent = () => {

	var status = localStorage.getItem("isSignedIn");

	const {t, i18n} = useTranslation();

 	 const changeLanguage = (lng) => {
    	i18n.changeLanguage(lng);
  	}

  	const swapLanguage = () => {
    	if (i18n.language === 'en') {
      		changeLanguage('fr');
    	} else {
      	changeLanguage('en');
    	}
  	};


	const handleSignOut = () => {
		localStorage.setItem("isSignedIn", "false");
		window.location.reload();
	}


  return (
  	<div>
    <Navbar expand="lg" activeKey="/WorldbuilderWorkshop" collapseOnSelect>
	        <Navbar.Brand href="/WorldbuilderWorkshop">
	          <img src={logo} width="50" height="45"/>
	          {t("title")}
	        </Navbar.Brand>
	        <Button style={{"backgroundColor":"#318EAD", "border":"none", "color":"#F2F2F0", "font-weight":"bold", "paddingLeft":"10px", "paddingRight":"10px"}}onClick={() => swapLanguage()}><img src={world} width="20" height="20"/>&nbsp;{t('lang')}</Button>
	        
	        <Navbar.Toggle data-bs-theme="dark" aria-controls="responsive-navbar-nav"/>
	        <div className="center-navbar ms-auto">
		        <Navbar.Collapse id="responsive-navbar-nav">
		          <Nav.Item>
		            <Link to="/WorldbuilderWorkshop">{t('link1')}</Link>
		          </Nav.Item>
		          <Nav.Item>
		            <Link to="/WorldbuilderWorkshop/products">{t("link2")}</Link>
		          </Nav.Item>
		          <Nav.Item>
		            <Link to="/WorldbuilderWorkshop/services">{t("link3")}</Link>
		          </Nav.Item>
		          <Nav.Item>
		            <Link to="/WorldbuilderWorkshop/community">{t("link4")}</Link>
		          </Nav.Item>
		          {status == "false" &&
		          	<Nav.Item>
		            	<Link to="/WorldbuilderWorkshop/signin"><Button className="signInButton" as="input" type="button" value={t("signIn")}/></Link>
		         	 </Nav.Item>
		         	}

		         	{status == "true" &&
		         		<Nav.Item style={{"display":"flex", "marginLeft": "20px", "paddingRight":"20px"}}>

		         			<img src={profile} width="40" height="40"/>

		         			<NavDropdown title={localStorage.getItem("username")} id="basic-nav-dropdown" data-bs-theme="dark">
			              <NavDropdown.Item>
			                {t("myPosts")}
			              </NavDropdown.Item>
			              <NavDropdown.Item onClick={handleSignOut}>{t("signOut")}</NavDropdown.Item>
			            </NavDropdown>

		         		</Nav.Item>

		         	}
		        	
		        	
		               
		        </Navbar.Collapse>
	        </div>
	</Navbar>
	</div>
  );
}
 
export default NavbarComponent;