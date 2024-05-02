import React from 'react'
import { NavLink } from 'react-router-dom';

const ProductCard = ({ products = []}) => {
  return (
   
   <>
    
    <section  className="text-black-600 body-font ">
  <div  className="container px-5 py-24 mx-auto">
    <div  className="flex flex-wrap -m-4">

      {
         products.map((product) => {

          console.log(product,'product')
          const {id, title, price, category, image} = product;

          return (

            
            <NavLink  to={`/products/${id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full border border-black pb-1">
        <a  className="block relative h-48 rounded overflow-hidden">
          <img alt={title}  className="object-contain object-center w-full h-full block" src={image}/>
        </a>
        <div  className="mt-4">
          <h3  className="text-yellow-900 text-1xl font-bold text-lg tracking-widest title-font mb-1">{category}</h3>
          <h2  className="text-gray-900 title-font text-lg font-medium">{title}</h2>
          <p  className="mt-1 font-bold text-green-800">${price}</p>
        </div>
      </NavLink>

      

          )
         })
      }

      
      
    </div>
  </div>
</section>

   </>
  )
}

export default ProductCard
