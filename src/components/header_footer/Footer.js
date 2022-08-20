import React from "react";
import {Fade} from 'react-awesome-reveal';

const footer = () =>{

    return(

        <footer className="bck_dark">
            <Fade triggerOnce>
            <div className="font_righteous">
                    DreamLand Tourism Services
                </div>

                <div className="footer_copyright">The DreamLand {new Date().getFullYear()} all rights reserved</div>
            </Fade>
        </footer>
    )
}

export default footer;