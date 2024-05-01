
import React, { useState } from 'react'
import './Slider.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Slider() {
  
    const [count,setCount] = useState(0);

    let images = [
     
        {img: "https://clipground.com/images/smart-watch-png-8.png"},
        {img: "http://www.pngmart.com/files/13/Smartwatch-PNG-Image.png"},
        {img: "https://www.pngmart.com/files/13/Smartwatch-PNG-Free-Download.png"},

    ];


    const previous = () => 
    {
       setCount(count-1)

       if(count === 0)
       {
        setCount(2);
       }

    }


    const next = () => 
    {
        setCount(count+1)

        if(count > 1)
       {
        setCount(0);
       }

    }


    return (
    <>
     <div className="slider-container">
        <div className="slider">
            <div className="info-box">
                <p>Your Products <br /> Are Great </p>
                <button>View Products</button>
            </div>
            <div className="slider-box">
                <img src={images[count].img} alt="" />
            </div>
            <ArrowBackIosIcon sx={{position:"absolute",cursor: "pointer" ,top:"36%",color:"#c6d8de" ,left:"1%", fontSize:"75px"}} onClick={previous} />

            <ArrowForwardIosIcon  sx={{position:"absolute", cursor: "pointer",color:"#c6d8de" ,top:"36%", right:"1%", fontSize:"75px"}} onClick={next} />
        </div>
     </div>
    </>
  )
}

export default Slider

