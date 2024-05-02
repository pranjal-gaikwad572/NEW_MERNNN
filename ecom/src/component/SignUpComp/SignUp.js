
import React from "react"
import './SignUp.css'
import { useState } from "react";
import Sign from "../../Pages/Sign/Sign";
//used to give pop up notifications on the screen
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () =>
{

    const navigate = useNavigate();
     //variable and function to update
    //having initial val obj empty str
    const [signupState , setSignUpState] = useState
    ({
        fname :"",
        lname :"",
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
        setSignUpState({...signupState, [name]: value});
    }


    const goToSignIn = () =>
    {
        navigate('/login')
    }


    const validateEmail = (input) =>
    {
       
    const emailRegex = /^[A-Z0-9._%+-]+ @[A-Z0-9.-]+\.[A-Z]{2,}$/i;
   
    return emailRegex.test(input);

    };


   

  const createUser = async (event) =>
  {
    //   event.preventDefault();

    //   localStorage.setItem("user",JSON.stringify(signupState));

    const {fname, lname, email, password} = signupState;

    // navigate('/');

    if(!fname || !lname || !email || !password)
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
        //http request serve by fetch function:

        const response = await fetch("http://localhost:7000/register",
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
                fname,
                lname,
                email,
                password,
            }),
        });

        // result = await result.json;
        // localStorage.setItem("user", JSON.stringify(result));

        // const response = true;

        if(response)
        {
            toast.success("User created successfully...!!");
            setSignUpState
            ({
                fname: "",
                lname: "",
                email: "",
                password: "",

            });

            // navigate('/login'); 
        }
        else 
        {
            toast.error("Failed to create user. Please try again later");
        }

    }
  }



  return (
    <>

  <div className="signup-page-container">
    <div className="sign-up-page">
        <div className="welcome-to-signup">
            <div className="welcome-to-signup-innerdiv">
                <h2>Welcome To SignUP</h2>
                <p>To Keep connected with us please login with your personal info.</p>
                <button onClick={goToSignIn}>Sign In</button>
            </div>
        </div>
        <div className="sign-up-form-div">
            <div className="signup-form-inner-div">
                <h2>Create an Account</h2>
                <p className="useEmail">Use Your Email to Registration</p>
                <div className="inputsareasabox">
                    <input type="text" placeholder="First Name" name='fname' autoComplete="on" className="firstNameInput" value={signupState.fname} onChange={handleChange} />
                    <br />
                    <input type="text" placeholder="Last Name" name='lname' autoComplete="on" value={signupState.lname} onChange={handleChange} />
                    <br />
                    <input type="email" placeholder="Email Address" name='email' autoComplete="on" value={signupState.email} onChange={handleChange} />
                    <br />
                    <input type="password" placeholder="Enter Your Password" name='password' autoComplete="on" value={signupState.password} onChange={handleChange} />

                    <button onClick={createUser}> Sign-Up </button>
 

                </div>
            </div>
        </div>
     
    </div>
  </div>


    </>
  )
}
export default SignUp