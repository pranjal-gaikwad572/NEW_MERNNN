import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import axios from "axios";


const Product = ({cart}) => {

  
  //useparam = hook => to accept parameters from route
  //common pattern for accessing route
  const { id } = useParams();
  console.log(id, "id");

  //state var n fun
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const [refresh, setRefresh] = useState(false);

  //for getting single product :
  useEffect(() => {
    const fetchProduct = async () => {
      // const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const response = await fetch(`http://localhost:7000/api/data/product/${id}`);
      const data = await response.json(); //fetched data to the json
      console.log(data.product[0]);
      setProduct(data.product[0]); //update so anywhere we can use it
    };

    fetchProduct();
  }, []);

  //dependency array [] is empty. This means it will run once when the component is first rendered.

  const handleCart = (product, redirect) => {
    console.log(product);

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductExist = cart.find((item) => item.id === product.id);

    if (isProductExist) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      localStorage.setItem("cart",JSON.stringify([...cart, { ...product, quantity: 1 }])
      );
    }

    alert("Product added to the cart");
   

    if (redirect) {
      navigate("/cart");
    }

    
  };

  const handleAddToCart = async (productId) => {
  
    const userId = localStorage.getItem('user');

    console.log(product, userId);
    
    try {
   
      const response = await fetch(`http://localhost:7000/api/auth/add-to-cart`,{

        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify({productId:productId , userId})
      });

      console.log(response);
    } catch (error) {
      console.log({error: error.message})
    }
  }

  

  // if( !Object.keys(product).length >  0) return <div>Loading....</div>

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-yellow-900 font-bold tracking-widest uppercase">
              {product?.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              {product?.title}
            </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-yellow-900 text-lg font-bold border-b-2 border-black py-2 px-1">
                Description
              </a>
              {/* <a  className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
            <a  className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a> */}
            </div>
            <p className="leading-relaxed mb-4 text-black">
              {product?.description}
            </p>
            <div className="flex border-t border-black py-2">
              <span className="text-black">Color</span>
              <span className="ml-auto text-gray-900">Blue</span>
            </div>
            <div className="flex border-t border-black py-2">
              <span className="text-black">Size</span>
              <span className="ml-auto text-gray-900">Medium</span>
            </div>

            <br />

            <div className="flex border-t border-b mb-6 border-black py-2">
              <span className="text-black">Quantity</span>
              <span className="ml-auto text-gray-900">4</span>
            </div>

            <div className="flex">
              <span className="title-font font-medium text-2xl text-green-800 mr-2">
                ${product?.price}
              </span>

              <div className="flex justify-between items-center">


                <button  className="flex ml-auto border-0 py-2 px-6 focus:outline-none text-white 
                 bg-yellow-500 hover:bg-yellow-600 hover:text-black rounded mr-2" 
                onClick={() => handleAddToCart(product._id)}>Buy it Now
                </button>



                <button
                  className="flex ml-auto border-0 py-2 px-6 focus:outline-none bg-green-800 hover:bg-green-800 text-white hover:text-black rounded"
                  onClick={() => handleCart(product)}
                >
                  Add to Cart
                </button>
              </div>

              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
          <img
            alt={product?.title}
            className="lg:w-1/2 w-full lg:h-auto max-h-[400px] h-64 object-contain object-center rounded"
            src={product?.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Product;
