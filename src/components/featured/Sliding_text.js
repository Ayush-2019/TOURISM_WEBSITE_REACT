import React from "react";
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { width } from "@mui/system";


const Slidingtext = () =>{

        const settings = {
            dots:false,
            infinite:true,
            autoplay:true,
            speed:500
            
        }

    return(
        <div 
        className="carrousel_wrapper"

        style = {{
            height:`${window.innerHeight}px`
        }}
        >
            <Slider {...settings}>
                    <div>
                    <div className="artist_name wrapper">
                        HAWAI 1
                    </div>
                    </div>

                    <div>
                    <div className="artist_name wrapper">
                        HAWAI 2
                    </div>
                    </div>

                    <div>
                    <div className="artist_name wrapper">
                        HAWAI 3
                    </div>
                    </div>

                    <div>
                    <div className="artist_name wrapper">
                        HAWAI 4
                    </div>
                    </div>

                    <div>
                    <div className="artist_name wrapper">
                        HAWAI 5
                    </div>
                    </div>    
            </Slider>
            
        </div>

    )
}

export default Slidingtext;