import React from "react"
import './LogIn.css'
import { useState } from "react";
//used to give pop up notifications on the screen
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../../store/auth";


const LogIn = () =>
{

    const navigate = useNavigate();
     //variable and function to update
    //having initial val obj empty str
    const [loginState , setLoginState] = useState
    ({
        email :"",
        password :""
    })

    const {storetokenInLS} = useAuth();

    const handleChange = (event) =>
    {


        //name and value of the input field
       let name = event.target.name;
       let value = event.target.value;

        //update with  the properties with new value:
        // spread the current state using the spread operator (...signupState)
        // nsures that the state is updated dynamically as the user types into the input fields.
        setLoginState({...loginState, [name]: value});
    };


    const goToSignUp = () =>
    {
        navigate("/signup")
    }

 


    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // // window.localStorage.setItem("IsLoggedIn",isLoggedIn);
    
    // window.localStorage.setItem("IsLoggedIn",true);


  const login = async (event) =>
{

    event.preventDefault();

    try {
        
        const response = await fetch('http://localhost:7000/api/auth/login',{
            method: "POST",
            headers: {
              //"Content-Type" header to "application/json", indicating that the request body will contain JSON data.
              "Content-Type": "application/json",
            },

            body: JSON.stringify(loginState),
    
        });

        console.log("login form", response);


        if(response.ok)
            {


           const res_data = await response.json();

           console.log("response from the server", res_data);

           storetokenInLS(res_data.token);


                toast.success("Login Successfully");
                setLoginState({email: "", password:""});
                navigate("/");
            }

            else
            {
                toast.error("Invalid Credentials");
                console.log("Invalid Credentials");
            }

    } catch (error) {
        console.log(error)
    }

    

    
        
}

  

  

  return (
    <>

  <div className="login-page-container">
    <div className="login-up-page">
        <div className="welcome-to-login">
            <div className="welcome-to-login-innerdiv">
                <h2>Welcome To SignUP</h2>
                <p>To Keep connected with us please login with your personal info.</p>
                <button onClick={goToSignUp}>Sign Up</button>
            </div>
        </div>
        <div className="login-up-form-div">
            <div className="login-form-inner-div">
                <h2>LogIn</h2>
                <p className="useEmail">Use Your Email to Registration</p>
                <div className="inputsareasabox">
                    <input type="email" placeholder="Email Address" name='email' autoComplete="off" value={loginState.email} onChange={handleChange} />
                    <br />
                    <input type="password" placeholder="Enter Your Password" name='password' autoComplete="off" value={loginState.password} onChange={handleChange} />

                    <button onClick={login}>Sign-In </button>
 

                </div>
            </div>
        </div>
     
    </div>
  </div>



    </>
  )
}
export default LogIn