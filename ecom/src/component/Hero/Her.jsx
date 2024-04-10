import React from 'react'

const Hero = () => {
  return (
    <section  className="text-gray-400 bg-gray-900 body-font">
  <div  className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img  className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://gadgets-africa.com/wp-content/uploads/2022/10/Best-Online-Shopping-Sites-In-Kenya-.png"/>
    <div  className="text-center lg:w-2/3 w-full">
      <h1  className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">MY ECOMMERCE WEBSITE</h1>
      <p  className="leading-relaxed mb-8 text-white">Shopping is something that can never go out of style. One is always going to have to buy new things, hence shopping is inevitable in one’s life. When once shopping meant dressing up and going to malls, today it can be done from the comfort of your house. Online shopping was already booming , but with the coronavirus making stepping out of your house a tricky thing, online shopping took a front seat and became the preferred method for the majority of the market. 

</p>
      <div  className="flex justify-center">
        <button  className="inline-flex text-black bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600  hover:text-white rounded text-lg">Explore</button>
        <button  className="ml-4 inline-flex text-black bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 hover:text-white rounded text-lg">Go Down </button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
