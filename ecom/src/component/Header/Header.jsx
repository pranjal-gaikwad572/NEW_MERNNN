import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const navigations = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Footer",
    path: "/footer",
  },
];

const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
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
            className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
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

        {isAuthenticated ? (
          <>
            <div>
              <p className="text-white text-1rem">{user.email}</p>
            </div>

            <li>
              <button
                className="inline-flex items-center text-white  bg-yellow-500 hover:bg-yellow-600 hover:text-black border-0 py-2 px-5 focus:outline-none rounded text-base mt-4 md:mt-0 mr-2"
                onClick={() =>
                  logout({ logoutParams: { returnTo: loginWithRedirect() } })
                }
              >
                LogOut
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </li>
          </>
        ) : (
          <li>
            <button
              className="inline-flex items-center text-white  bg-yellow-500 hover:bg-yellow-600 hover:text-black space-y-[5px] border-0 py-2 px-5 focus:outline-none  rounded text-base mt-4 md:mt-0 mr-2"
              onClick={() => loginWithRedirect()}
            >
              Login
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </li>
        )}

        <NavLink
          to={"/cart"}
          className="inline-flex items-center bg-green-800 hover:bg-green-800 border-0 py-2 px-5 hover:text-black focus:outline-none text-white rounded text-base mt-4 md:mt-0"
        >
          Cart
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
