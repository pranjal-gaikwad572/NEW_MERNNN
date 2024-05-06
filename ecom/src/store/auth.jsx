import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>
{


const [token, setToken] = useState(localStorage.getItem('token'));

const storetokenInLS = (serverToken) => {

    return localStorage.setItem('token', serverToken);
};

let isLoggedIn = !!token;


    const LogoutUser = () =>
        {
             setToken("");
             return localStorage.removeItem('token');
        };



    return (
    <AuthContext.Provider value={{isLoggedIn ,storetokenInLS, LogoutUser}} >

      {children}

    </AuthContext.Provider>

    );

};



export const useAuth = () =>
    {

       const AuthContextValue = useContext(AuthContext);

       if(!AuthContextValue)
        {
            throw new Error("useAuth used outside of the Provider");
        }

        return AuthContextValue;
    }