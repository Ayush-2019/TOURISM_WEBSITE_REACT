import React from "react";

const Location = () =>{

    return(
        <div className="location_wrapper">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31664.092252587347!2d-157.86155646746943!3d21.344678759116963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c00183b8cc3464d%3A0x4b28f55ff3a7976c!2sHonolulu%2C%20HI%2C%20USA!5e0!3m2!1sen!2sin!4v1661020729536!5m2!1sen!2sin" 
        width="100%" 
        height="400px" 
        frameBorder="0" 
        title="Venue"
        allowFullScreen 
        >
        </iframe>
        <div className="location_tag">
            <div>Location</div>
        </div>
        </div>
    )
}

export default Location;