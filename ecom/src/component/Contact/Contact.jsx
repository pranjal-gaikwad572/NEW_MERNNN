import React from "react";

const Contact = () => {
  return (
    <>
      <div>

      <div className="container px-5 py-24 mx-auto pt-3 pb-1">
      <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-green-5rem tracking-widest font-medium title-font mb-1">Contact Page</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Contact Us Below</h1>
      </div>
      </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.2939516827564!2d72.95177067515698!3d19.182359248625023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8f08ad5e181%3A0x1988f11af1e83386!2sTechathalon%20Software%20Solutions%20Pvt.ltd!5e0!3m2!1sen!2sin!4v1712733431481!5m2!1sen!2sin"
          width="100%"
          height="400"
          style= {{border:0}}
          allowFullScreen=""
          loading="lazy"
      
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Please spare a few moments to share about your experience
            </h1>
            <p className="leading-relaxed mt-4">
              Please rate your overall satisfaction with the shopping experience
              at our website today
            </p>
          </div>

          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <form action="https://formspree.io/f/mrgnolre" method="POST">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              You Can Share Your FeedBack Here
            </h2>

            <div className="relative mb-4">
              <label
                for="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                User Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="username"
                autoComplete="off"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Date
              </label>
              <input
                type="date"
                placeholder="Enter the Date"
                name="date"
                autoComplete="off"
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">

              <label for="=text" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <input
                type="text"
                placeholder="Enter Your Feedback"
                name="text"
                autoComplete="off"
                cols="30"
                rows="10"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button
              type="submit"
              value="send"
              className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
            >
              Submit
            </button>

            <p className="text-xs text-gray-500 mt-3">
              This will only take a minute.
            </p>
              </form>
          </div>




        </div>
      </section>
      </div>

    </>
  );
};

export default Contact
