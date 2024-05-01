import React from 'react'
import Slider from '../Slider/Slider';
import { useNavigate } from 'react-router-dom';

const Hero = () => 
{

  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));


  const handleLogOut = () =>
  {
   window.localStorage.clear();
   navigate("/login");
   

  };

  return (

    <>

<section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img className="object-cover object-center rounded" alt="hero" src="https://media.licdn.com/dms/image/D4D12AQHi-aV3Kq-j8A/article-cover_image-shrink_720_1280/0/1694591957594?e=2147483647&v=beta&t=xcEa-Y8Fzz2EpgdAf8-AxvTooMraPkJfkGH4xLvUEi4" />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to the E-commerce Website !!
          <br/> <br/>
          <h4 className="hidden lg:inline-block">{userName.fname} {userName.lname}</h4> 
        </h1>
        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        <div className="flex justify-center">
          <button className="inline-flex justify-center items-center text-white bg-[#18355e] border-0 py-2 px-7  focus:outline-none hover:bg-[#18355e] rounded text-lg" onClick={handleLogOut}>LogOut</button>
          {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
        </div>
      </div>
    </div>
  </section>

  <Slider/>

    </>



  );
}

export default Hero
