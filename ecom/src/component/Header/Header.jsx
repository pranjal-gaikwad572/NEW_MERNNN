import React from "react";
import { NavLink} from "react-router-dom";
// import {NavDropdown} from 'react-bootstrap'
import { useAuth } from "../../store/auth";


const navigations = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "Product",
    path: "/products",
  },
  {
    name: "Contact",
    path: "/Contact",
  },
  {
    name: "Footer",
    path: "/Footer",
  },
  {
    name: "Logout",
    path: "/logout",
  },


];



const Header = () => {
  

  const {isLoggedIn} = useAuth();



 
  // 1.Sign In and signout for Blogging Application Project
// 2. Storing data into the BAckend of blogging operation.
//3. View orders and backend part in ecommerce website.


  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-7 flex-col md:flex-row items-center">
        <NavLink
          to={"/"}
          className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-1 bg-yellow-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Fake-Store-API</span>
        </NavLink>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

          {navigations.map((navigation) => {
            return (
              <NavLink
                to={navigation.path}
                className="mr-5 hover:text-gray-900"
              >
                {navigation.name}
              </NavLink>
            );
          })}

          {/* <NavLink className="mr-5 hover:text-gray-900">Home</NavLink>
          <NavLink className="mr-5 hover:text-gray-900">Products</NavLink>
          <NavLink className="mr-5 hover:text-gray-900">Contact</NavLink>
          <NavLink className="mr-5 hover:text-gray-900">Footer</NavLink> */}

        </nav>


        {
          isLoggedIn ?  
          
          <div>
          <NavLink
          to={'/logout'}
           className="inline-flex text-white bg-[#18355e]
          border-0 py-2 px-6 focus:outline-none mr-2 hover:bg-[#18355e]
          rounded text-lg">Logout
          </NavLink>  
          <NavLink
          to={"/cart"}
          className="inline-flex text-white bg-[#18355e]
          border-0 py-2 px-6 focus:outline-none hover:bg-[#18355e]
          rounded text-lg"> Cart
        </NavLink> </div>
         :

          <div>

        <NavLink
        to={"/SignUp"}
         className="inline-flex text-white bg-[#18355e]
        border-0 py-2 px-6 focus:outline-none mr-2 hover:bg-[#18355e]
        rounded text-lg"> Register
        </NavLink>
        <NavLink
        to={"/LogIn"}
        className="inline-flex text-white bg-[#18355e]
        border-0 py-2 px-6 focus:outline-none mr-2 hover:bg-[#18355e]-600
        rounded text-lg"> Login
        </NavLink>

          </div>
        }


        



      </div>
    </header>

  );
};




export default Header;
