import React from 'react'
import Hero from '../../component/Hero/Her'
import {useEffect,useState} from 'react';
import Card from '../../component/FeatureCard/Card';
import ProductCard from '../../component/ProductCard/Products';
import FeatureCard from '../../component/FeatureCard/Card'
import Category from '../../component/Categories/Category';

const Home = () => {
 

const [products, setProducts] = useState();

 useEffect(() => {
  
  const fetchProducts = async () => {
    const response = await fetch('http://localhost:7000/api/data/product');
    const data = await response.json();
    console.log(data)
    setProducts(data)
  }

  fetchProducts()

 }, []);
 
  return (
   
    <>

    <Hero/>
    <Category/>
    

 
    {
      products?.products?.length > 0 ?

      <ProductCard products={products.products}/>
      :
      <div>Loading.....</div>
    }

   <ProductCard/>
   



    </>

   
  );
}

export default Home
