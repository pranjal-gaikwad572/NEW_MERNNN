
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Home from './modules/Home/Home.jsx';
import Footer from './component/Footer/Footer.jsx';
import Contact from './component/Contact/Contact.jsx';
import { Routes, Route }from 'react-router-dom';
import Product from './modules/Product/Product.jsx';
// import Card from './component/FeatureCard/Card.jsx';
// import Prod from './modules/Products/Prod.jsx';
// import ProductCard from './component/ProductCard/Products.jsx';
import Categoryproducts from './modules/CategoryProducts/index.js';
import Cart from './modules/Cart/Cart.jsx';
import SignUp from './component/SignUpComp/SignUp.js';
import { ToastContainer, toast } from 'react-toastify';
import MainCheckOut from './modules/Maincheckout/MainCheckOut.jsx';
import Login from './Pages/Login/Login.js';


function App() {
  return (
 
   <>

   <Header/>
 

   <Routes>

    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/products/:id" element={<Product/>} />
    <Route path="/categories/:name" element={<Categoryproducts/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/check" element={<MainCheckOut/>} />



   </Routes>
   <Contact/>
   <Footer/>
   </> 

);
}

export default App;
