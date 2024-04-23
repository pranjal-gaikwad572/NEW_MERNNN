import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'


function Login() {
 
    const [name,setName] = useState()
   const [email,setEmail] = useState()

    const handleSubmit = (e) => {

    e.preventDefault()
    axios.post('',{name,email})
    .then(result => console.log(result))
    .catch(err => console.log(err))

  }

    return (
    

        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
          <h2>Login Here</h2>
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

        </form>
        </div>

        </div>
    
  )
}

export default Login
