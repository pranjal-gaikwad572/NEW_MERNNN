
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
import Login from './Pages/Login/Login.js';


function App() {
  return (
 
   <>

<Header/>
 

   <Routes>

    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/SignUp" element={<SignUp/>} />
    <Route path="/products/:id" element={<Product/>} />
    <Route path="/products" element={<Product/>} />
    <Route path="/Footer" element={<Footer/>} />
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