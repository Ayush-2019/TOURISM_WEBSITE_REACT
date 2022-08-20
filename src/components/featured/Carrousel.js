import React from "react";
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hawai1 from '../../resources/images/hawai1.jpg';
import hawai2 from '../../resources/images/hawai2.jpg';
import hawai3 from '../../resources/images/hawai3.jpg';
import hawai4 from '../../resources/images/hawai4.jpg';
import hawai5 from '../../resources/images/hawai5.jpg';


const Carrousel = () =>{

        const settings = {
            dots:false,
            infinite:true,
            autoplay:true,
            speed:500
            
        }

        const carr_array = [

            {images : hawai1},
            {images : hawai2},
            {images : hawai3},
            {images : hawai4},
            {images : hawai5}
        ]

    return(
        <div 
        className="carrousel_wrapper"

        style = {{
            height:`${window.innerHeight}px`
        }}
        >
            <Slider {...settings}>

                {carr_array.map((card, index) => (
                <div key={index}>
                <img alt={card.text} src={card.images} className = 'carrousel_image' />
                </div>
            ))}
            </Slider>
            
        </div>

    )
}

export default Carrousel;