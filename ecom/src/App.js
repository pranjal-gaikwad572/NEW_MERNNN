import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Home from './modules/Home/Home.jsx';
import Footer from './component/Footer/Footer.jsx';
import Contact from './component/Contact/Contact.jsx';
import { Routes, Route }from 'react-router-dom';
import Product from './modules/Product/Product.jsx';
import Card from './component/FeatureCard/Card.jsx';
import Prod from './modules/Products/Prod.jsx';
import ProductCard from './component/ProductCard/Products.jsx';
import Categoryproducts from './modules/CategoryProducts/index.js';
import Cart from './modules/Cart/Cart.jsx';

function App() {
  return (
 
   <>
   <Header/>

   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/products/:id" element={<Product/>} />
    <Route path="/categories/:name" element={<Categoryproducts/>} />
    <Route path="/cart" element={<Cart/>} />


   </Routes>
   <Contact/>
   <Footer/>
   </> 

);
}

export default App;
