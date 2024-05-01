import React from "react"
import './LogIn.css'
import { useState } from "react";
//used to give pop up notifications on the screen
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';


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


    let name, value;
    const handleChange = (event) =>
    {


        //name and value of the input field
        name = event.target.name;
        value = event.target.value;

        //update with  the properties with new value:
        // spread the current state using the spread operator (...signupState)
        // nsures that the state is updated dynamically as the user types into the input fields.
        setLoginState({...loginState, [name]: value});
    }


    const goToSignUp = () =>
    {
        navigate("/signup")
    }

    const validateEmail = (input) =>
    {
       
    const emailRegex = /^[A-Z0-9._%+-]+ @[A-Z0-9.-]+\.[A-Z]{2,}$/i;
   
    return emailRegex.test(input);

    };


    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // window.localStorage.setItem("IsLoggedIn",isLoggedIn);
    
    window.localStorage.setItem("IsLoggedIn",true);


  const login = async (event) =>
  {
    //   event.preventDefault();

    //   const loggeduser = JSON.parse(localStorage.getItem("user"));

    //  if(loginState.email === loggeduser.email && loginState.password === loggeduser.password)
    //  {
    //     localStorage.setItem("loggedIn", true)
    //     navigate("/");
    //  }

    //  else
    //  {
    //     toast.error(" ohooo, Wrong email and password")
    //  }

    const {email, password} = loginState;

    // navigate('/');

    if(!email || !password)
    {
        toast.error("plz fill out all the fields");
    }
    // else if (!validateEmail(email))
    // {
    //     toast.error("Invalid Email Address");
    // }
    else if (password.length < 8)
    {
        toast.error("Atleast Enter 8 Characters!");
    }
    else
    {
        const response = await fetch("http://localhost:4000/login",
        {
            // making a POST request to the specified URL.
            method: "POST",
            headers:
            {
                //"Content-Type" header to "application/json", indicating that the request body will contain JSON data.
                "Content-Type": "application/json",
            },
           
            body: JSON.stringify
            ({
                email,
                password,
            }),
        });

        // result = await result.json;
        // localStorage.setItem("user", JSON.stringify(result));

        // const response = true;

        const data = await response.json();

        if(data)
        {
            toast.success("Login Successfully");
            window.localStorage.setItem("token", data.data);
            setIsLoggedIn(true);
            console.log(data.data);
            
            navigate("/");
        }

        
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