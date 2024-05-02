// import React, { useState,useEffect } from 'react'
// import ProductCard from '../../component/ProductCard/Products'
// import Category from '../../component/Categories/Category';



// const Prod = () => {

//     const [products, setProducts] = useState();

//     useEffect(() => {
     
//      const fetchProducts = async () => {
//        const response = await fetch('https://fakestoreapi.com/products');
//        const data = await response.json();
//        console.log(data)
//        setProducts(data)
//      }
   
//      fetchProducts()
   
//     }, []);

// return(
//     <div>
//         <Category/>

//     <div className='flex flex-col text-center w-full mt-20'>
//       <h2 className='text-xs text-indigo-500 tracking-widest font-medium title-font mb-1'>Products</h2>
//       <h1 className='sm:text-3xl text-2xl font-medium text-gray-900 title-font'>Most Popular Products are here</h1>
//     </div>
    

//         {
//             products?.length > 0 ? <ProductCard products={products}/> : <div>Loading....</div>
//         }
//         <ProductCard/>
//     </div>
// )
// }

// export default Prod
