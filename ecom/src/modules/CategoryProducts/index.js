import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'; 
import ProductCard from '../../component/ProductCard/Products';

const Categoryproducts = () => {

    const {name} = useParams();
    const [products,setProducts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {
            const response = await fetch(`http://localhost:7000/api/auth/product`);
            const data = await response.json();
            console.log(data)
            setProducts(data)
        }
        
        fetchProducts()

    } , []) 

if(products?.length === 0) return <div>Loading.....</div>
  return (
    
    <ProductCard products={products}/>

  );
}

export default Categoryproducts
