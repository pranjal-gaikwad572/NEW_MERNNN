import React from "react";
import "./SignUp.css";
import { useState } from "react";
import Sign from "../../Pages/Sign/Sign";
//used to give pop up notifications on the screen
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../store/auth";

const SignUp = () => {
  const navigate = useNavigate();
  //variable and function to update
  //having initial val obj empty str
  const [signupState, setSignUpState] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const {storetokenInLS} = useAuth();

  const handleChange = (event) => {
    //name and value of the input field
    console.log(event);
    let name = event.target.name;
    let value = event.target.value;

    //update with  the properties with new value:
    // spread the current state using the spread operator (...signupState)
    // nsures that the state is updated dynamically as the user types into the input fields.
    setSignUpState({ ...signupState, [name]: value });
  };

  const goToSignIn = () => {
    navigate("/login");
  };

  // const validateEmail = (input) =>
  // {

  // const emailRegex = /^[A-Z0-9._%+-]+ @[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  // return emailRegex.test(input);

  // };

  const createUser = async (event) => {

      event.preventDefault();
    //   localStorage.setItem("user",JSON.stringify(signupState));
      console.log(signupState);

      //http request serve by fetch function:

      try 
      {
        const response = await fetch('http://localhost:7000/api/auth/register', {
        // making a POST request to the specified URL.
        method: "POST",
        headers: {
          //"Content-Type" header to "application/json", indicating that the request body will contain JSON data.
          "Content-Type": "application/json",
        },

        body: JSON.stringify(signupState),

      });
  
      
      if(response.ok)
        {


           //token:

           const res_data = await response.json();

           console.log("response from the server", res_data);

           storetokenInLS(res_data.token);


            setSignUpState({
                fname: "",
                lname: "",
                email: "",
                password: "",
              });

              navigate("/login")
      
      
        }

        console.log(response);

      } 
      catch (error) 
      {
          console.log("register", error);        
      }
  };




  return (
    <>
      <div className="signup-page-container">
        <div className="sign-up-page">
          <div className="welcome-to-signup">
            <div className="welcome-to-signup-innerdiv">
              <h2>Welcome To SignUP</h2>
              <p>
                To Keep connected with us please login with your personal info.
              </p>
              <button onClick={goToSignIn}>Sign In</button>
            </div>
          </div>
          <div className="sign-up-form-div">
            <div className="signup-form-inner-div">
              <h2>Create an Account</h2>
              <p className="useEmail">Use Your Email to Registration</p>
              <div className="inputsareasabox">
                <input
                  type="text"
                  placeholder="First Name"
                  name="fname"
                  autoComplete="off"
                  className="firstNameInput"
                  value={signupState.fname}
                  onChange={handleChange}
                />
                <br />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lname"
                  autoComplete="off"
                  value={signupState.lname}
                  onChange={handleChange}
                />
                <br />
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  autoComplete="off"
                  value={signupState.email}
                  onChange={handleChange}
                />
                <br />
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  autoComplete="off"
                  value={signupState.password}
                  onChange={handleChange}
                />

                <button onClick={createUser}> Sign-Up </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
