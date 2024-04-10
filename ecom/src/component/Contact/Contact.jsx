import React from 'react'
import { Form } from 'react-router-dom'

const Contact = () => {
  return (
    <section  className="text-gray-600 body-font">
  <div  className="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div  className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1  className="title-font font-medium text-3xl text-gray-900">Please spare a few moments to share about your experience</h1>
      <p  className="leading-relaxed mt-4">Please rate your overall satisfaction with the shopping experience at our website today</p>
    </div>

    {/* <Form action="https://formspree.io/f/mwkgwbgb"> */}
    <div  className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2  className="text-gray-900 text-lg font-medium title-font mb-5">You Can Share Your FeedBack Here</h2>
      
      
      <div  className="relative mb-4">
        
        <label for="full-name" className="leading-7 text-sm text-gray-600">User Name</label>
        <input type="text" placeholder='Enter Your Name' name="username" autoComplete='off' className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>


      <div  className="relative mb-4">
        <label for="email"  className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" placeholder='Enter Your mail' name="email" autoComplete='off' required  className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>



      <div  className="relative mb-4">
        <label for="=text"  className="leading-7 text-sm text-gray-600">Message</label>
        <input type="text" placeholder='Enter Your Feedback' name="text" autoComplete='off' cols="30" rows="10" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>

      <button type="submit" value='send' className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Submit</button>

      <p  className="text-xs text-gray-500 mt-3">This will only take a minute.</p>
    </div>
    {/* </Form> */}
  </div>
</section>
  )
}

export default Contact
