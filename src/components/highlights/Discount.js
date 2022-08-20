import React, {useState, useEffect} from "react";
import {Fade, Slide} from 'react-awesome-reveal';
import MyButton from "../utils/MyButton";
const Discount = () => {
    const final_dis = 28;
    const[start, setStart] = useState(0);
    const porcentage = () =>{
        if(start<final_dis){
            setStart(prevCount => prevCount+1);
        }
    }

    useEffect(() =>{
        if(start>0 && start<final_dis){
            setTimeout(()=>{
                setStart(prevCount => prevCount+1)
            },final_dis)
        }
    },[start])

        const[alertshow, setAlertShow] = useState(false);

        const display_alert = () =>{
            setTimeout(()=>{
                setAlertShow(true)
                },3000)
        }

    

    return(
        <div className="center_wrapper">
            <div className="discount_wrapper">

                <Fade
                onVisibilityChange={(inView) => {
                    if(inView){
                        porcentage();
                        display_alert();
                    }
                }}
                >
                    <div className="discount_porcentage">
                        <span>{start}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>

                <Slide right = {true}>
                    <div className="discount_description">
                        <h3>
                            Purchase ticket early
                        </h3>
                        <p>
                        The mind freshing and amazing journey to Hawaii can be fully experienced through our Tourism Services. We provide best Tourism Services at affordable prices. Purchase your tickets of any category before <div className="disc_date">30 August 2022</div> to avail 28% Discount.
                        <div className="vn_alert" style={{
                            visibility : alertshow?"visible":"hidden"
                        }}> Hurry Up, Offer ends Soon!!</div>
                        </p>
                        <MyButton
                            text = "Purchase Tickets"
                            link = "http://google.com"
                            style = {{
                                background:'#ffa800',
                                color:'ffffff'
                            }}
                            iconTicket = {true}
                        />
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default Discount;