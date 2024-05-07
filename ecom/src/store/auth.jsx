import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>
{


const [token, setToken] = useState(localStorage.getItem('token'));

// const [user, setUser ] = useState("");

const [user, setUser ] = useState('userId');



const storetokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem('token', serverToken);
};


const storeuserInLS = (serverUser) => {
    setUser(serverUser);
    return localStorage.setItem('user', serverUser);
};




let isLoggedIn = !!token;

console.log("isLoggedIn",isLoggedIn);


    const LogoutUser = () =>
        {
             setToken("");
             return localStorage.removeItem('token');
        };

    const userAuthentication = async()  => 
        {
            try {
               const response = await fetch("http://localhost:7000/api/auth/user", 
                {
                    method: "GET",
                    headers: 
                    {
                        Authorization : `Bearer ${token}`,
                    },

                });

                if(response.ok)
                    {
                        const data = await response.json();
                         console.log('user data', data);
                        setUser(data);



                    }

            } catch (error) {
                console.log("Error Fetching User Data");
            }
        }

    useEffect(() =>
    {
         userAuthentication();
    }, [])



    return (
    <AuthContext.Provider value={{isLoggedIn ,storetokenInLS,storeuserInLS, LogoutUser, user}} >

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