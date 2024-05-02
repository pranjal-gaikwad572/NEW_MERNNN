
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Home from './modules/Home/Home.jsx';
import Footer from './component/Footer/Footer.jsx';
import Contact from './component/Contact/Contact.jsx';
import { Routes, Route }from 'react-router-dom';
import Product from './modules/Product/Product.jsx';

import Categoryproducts from './modules/CategoryProducts/index.js';
import Cart from './modules/Cart/Cart.jsx';
import SignUp from './component/SignUpComp/SignUp.js';
import { ToastContainer, toast } from 'react-toastify';
import MainCheckOut from './modules/Maincheckout/MainCheckOut.jsx';
import LogIn from './component/LogInComp/LogIn.js';
import Order from './Pages/orders/Order.js';



function App() 
{

   const isLoggedIn = window.localStorage.getItem("isLoggedIn");

  return (
 
   <>
 
<Header/>
   <Routes>

    {/* <Route path="/" element={isLoggedIn == "true" ? <Home/> : <LogIn/>} /> */}

    <Route path="/login" element={<LogIn/>} />
    <Route path="/SignUp" element={<SignUp/>} />
    <Route path="/" element={<Home/>} />
    <Route path="/products/:id" element={<Product/>} />
    <Route path="/products" element={<Product/>} />
    <Route path="/categories/:name" element={<Categoryproducts/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/orders" element={<Order/>} />




   </Routes>
   <Contact/>
   <Footer/>
   
   </>

);
}

export default App;