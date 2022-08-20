import React, {useState, useCallback, useEffect} from "react";
import {Slide} from 'react-awesome-reveal';

const TimeUntil = () => {

            
            const [time, setTime] = useState({
                Days:'0',
                Hours:'0',
                Minutes:'0',
                Seconds:'0'
            })

            const renderTime = (time, value) => (
                <div className="countdown_item">
                        <div className="countdown_time">
                            {time}
                        </div>
                        <div className="countdown_tag">
                            {value}
                        </div>
                    </div>
            )
            
            const getTimeUntil = useCallback((deadline) => {

                const time = Date.parse(deadline) - Date.parse(new Date());

                    if(time<0){
                        console.log('Passed')
                    }
                    else{
                        const seconds = Math.floor((time/1000)%60);
                        const minutes = Math.floor((time/(1000*60))%60);
                        const hours = Math.floor((time/(1000*60*60))%24)
                        const days = Math.floor(time/(1000*60*60*24))

                        setTime({
                            days,
                            hours,
                            minutes,
                            seconds
                        })
                    }
        },[])

            useEffect(()=>{
                setInterval(()=>getTimeUntil('Sep,20,2022,10:12:15'),1000)
            },[getTimeUntil])
    return(
            <Slide left delay={1000}>
                <div className="countdown_wrapper">

                <div className="countdown_top">
                    TRIP BEGINS IN:
                </div>

                <div className="countdown_bottom">
                    {renderTime(time.days, 'Days')}
                    {renderTime(time.hours, 'Hours')}
                    {renderTime(time.minutes, 'Minutes')}
                    {renderTime(time.seconds, 'Seconds')}
                </div>

                </div>
            </Slide>
    )
}

export default TimeUntil;