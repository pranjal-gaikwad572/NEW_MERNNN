import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
// import HistoricalPage from './HistoricalPage';

const Sign = () => {

   const [name,setName] = useState()
   const [email,setEmail] = useState()
   const[password, setPassword] = useState()

   const handleSubmit = (e) => {

     e.preventDefault()
     axios.post("",{name,email,password})
     .then(result => console.log(result))
     .catch(err => console.log(err))

   }

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>

              <div className='mb-3'>

               <label htmlFor="name">
                <strong>Name</strong>
               </label>

               <input type="text"

               placeholder='Enter Name'
               autoComplete='off'
               name='name'
               className='form-control rounded-0'
               onChange={(e) => setName(e.target.value)}
                />
              </div>


              <div className='mb-3'>

               <label htmlFor="email">
                <strong>Email</strong>
               </label>

               <input type="email"

               placeholder='Enter Email'
               autoComplete='off'
               name='email'
               className='form-control rounded-0'
               onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className='mb-3'>

               <label htmlFor="password">
                <strong>Password</strong>
               </label>

               <input type="password"

               placeholder='Enter Password'
            //    autoComplete='off'
               name='password'
               className='form-control rounded-0'
               onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className='btn btn-success w-100 rounded-0' >
              Register
              </button>

              </form>

              <p>Already Have an Account??</p>


              <NavLink to="/login" className='btn btn-default w-100 bg-light rounded-0 text-decoration-none' >
              Login
              </NavLink>

      </div>
    </div>
  )
}

export default Sign