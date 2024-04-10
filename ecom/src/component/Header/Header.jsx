import React from 'react'
import { NavLink } from 'react-router-dom';

const navigations = [
{
  name: 'Home',
  path: '/'
},

{
  name: 'Products',
  path: '/products'
},
{
  name: 'Contact',
  path: '/contact'
},
{
  name: 'Footer',
  path: '/footer'
},
]





const Header = () => 
{
  return (


    <header  className="text-gray-600 body-font shadow-lg">
  <div  className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <NavLink  to ={'/'} className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span  className="ml-3 text-xl">Fake-Store-API</span>
    </NavLink>
    <nav  className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      
      {
        navigations.map((navigation) => {
          return (
            <NavLink to={navigation.path} className= "mr-5 hover:text-gray-900">{navigation.name}</NavLink>
          )
        })
      }
      {/* <a  className="mr-5 hover:text-gray-900">Home</a>
      <a  className="mr-5 hover:text-gray-900">Products</a>
      <a  className="mr-5 hover:text-gray-900">Contact</a>
      <a  className="mr-5 hover:text-gray-900">Footer</a> */}
    </nav>

    <button  className="inline-flex items-center bg-yellow-500 space-y-[5px] border-0 py-2 px-5 focus:outline-none hover:bg-yellow-300 rounded text-base mt-4 md:mt-0 mr-2">Login
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>

    <button  className="inline-flex items-center bg-yellow-500 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-300 rounded text-base mt-4 md:mt-0 mr-2">LogOut
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>

    <NavLink to={'/cart'} className="inline-flex items-center bg-yellow-500 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-300 rounded text-base mt-4 md:mt-0">Cart
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </NavLink>
  </div>
</header>
  );

}

export default Header;
