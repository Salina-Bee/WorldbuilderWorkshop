// npm-modules
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// components
import NavbarComponent from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Services from './components/Services';
import BookPrinter from './components/BookPrinter';
import Commission from './components/Commission';
import Community from './components/Community';
import PostDetails from './components/PostDetails';
import UserPage from './components/UserPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


// stylesheet
import './App.css';

document.body.style.backgroundColor = "black";

function App() {
  

  return (
    <div>
    
      <Router>
      <NavbarComponent/>
      <div className="content">       
          <Routes>
            <Route path='/WorldbuilderWorkshop' element={<Home/>}/>
            <Route path='/WorldbuilderWorkshop/products' element={<Products/>}/>
            <Route path='/WorldbuilderWorkshop/products/:id' element={<ProductDetails/>}/>
            <Route path='/WorldbuilderWorkshop/services' element={<Services/>}/>
            <Route path='/WorldbuilderWorkshop/services/printer' element={<BookPrinter/>}/>
            <Route path='/WorldbuilderWorkshop/services/commission' element={<Commission/>}/>
            <Route path='/WorldbuilderWorkshop/community' element={<Community/>}/>
            <Route path='/WorldbuilderWorkshop/community/:id' element={<PostDetails />}/>
            <Route path='/WorldbuilderWorkshop/signin' element={<SignIn/>}/>
            <Route path='/WorldbuilderWorkshop/signup' element={<SignUp/>}/>
            <Route path='/WorldbuilderWorkshop/user' element={<UserPage/>}/>
            
          </Routes>

      </div>
      </Router>
      
    </div>
  );
}

export default App;
