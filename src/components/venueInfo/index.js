import React from "react";
import {Zoom} from 'react-awesome-reveal';

import icon_calender from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png'

const VenueInfo = () =>{

    return(

        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">
                    <Zoom className="vn_item" triggerOnce>
                        <div>
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                        <div
                                        className="vn_icon"
                                        style={
                                            {
                                                background:`url(${icon_calender})`
                                            }
                                        }
                                        ></div>
                                        <div className="vn_title">
                                            TRIP STARTS ON: 
                                        </div>
                                        <div className="vn_desc">
                                            Sep 20  @10:12:15AM
                                            <div className="vn_alert" style={{
                                                visibility : 'visible'
                                            }}>
                                            Hurry Up, only few tickets left!!
                                        </div>
                                        </div>
                                        
                                    
                                </div>
                            </div>
                        </div>
                    </Zoom>

                    <Zoom className="vn_item" triggerOnce delay={500}>
                        <div>
                            <div className="vn_outer">
                                <div className="vn_inner"> 
                                    <div className="vn_icon_square bck_yellow"></div>
                                        <div
                                        className="vn_icon"
                                        style={
                                            {
                                                background:`url(${icon_location})`
                                            }
                                        }
                                        ></div>
                                        <div className="vn_title">
                                            Office Address
                                        </div>
                                        <div className="vn_desc">
                                            165, Pearson Gardens, CA, United States
                                        </div>
                                    
                                </div>
                            </div>
                        </div>
                    </Zoom>

                </div>
            </div>
        </div>
    )
}

export default VenueInfo;