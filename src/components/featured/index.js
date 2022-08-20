import React from "react";
import Carrousel from "./Carrousel";
import Slidingtext from "./Sliding_text";
import TimeUntil from "./timeUntil";

const Featured = () =>{

    return(
        <div className="featured_container">
            <Carrousel/>
            <div className="artist_name">
                <div className="wrapper">
                    TRIP TO HAWAII
                </div>
            </div>
            <TimeUntil/>

        </div>

    )
}

export default Featured;