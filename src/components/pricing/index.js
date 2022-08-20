import React from "react";
import MyButton from '../utils/MyButton';
import { Zoom } from "react-awesome-reveal";
import { Exposure } from "@mui/icons-material";

const Pricing = () =>{


    const priceState = {

        prices : [300,800,1200],
        seat : ['Basic', 'Better', 'Advanced'],
        desc : [

                ['3 Days 4 Nights', 'Economy Class Travel', 'Party Tickets', 'Farewell Gifts'],
                ['5 Days 4 Nights','Business Class Travel','Party and Orchestra','Tourist Guide', 'Farewll Gifts'],
                ['10 Days 9 Nights','First Class Travel','Party, Orchestra and Dance', 'Tourist Guide(24Hrs)','EveryDay Gifts']

            ],
        link_to:['http://trip.basic', 'http://trip.better', 'http://trip.advanced'],
        delay:[600,100,600]
    }

    const showBoxes = () =>(

        priceState.prices.map((box, index) => (
                <Zoom key = {index} className = 'pricing_item' delay={priceState.delay[index]}>

                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${priceState.prices[index]}</span>
                            <span>{priceState.seat[index]}</span>
                        </div>
                        <div className="pricing_description">

                            <ul>
                                {priceState.desc[index].map((disc, ind) =>( 
                                    <li key={ind}>
                                        {priceState.desc[index][ind]}
                                    </li>
                                ))}
                            </ul>

                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                            text = "purchase"
                            style = {{
                                color:'#ffffff'
                            }}

                            link = {priceState.link_to[index]}
                            />
                        </div>
                    </div>
                </Zoom>
        ))
    )
        return(
        <div className="bck_black">
          <div className="center_wrapper pricing_section">
            <h2>Pricing</h2>

            <div className="pricing_wrapper">
                {showBoxes()}
            </div>
            </div>  
        </div>
        )
}

export default Pricing;