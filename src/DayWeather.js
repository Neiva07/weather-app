import React from 'react';
import './DayWeather.css'
import icons from './icons'

const DayWeather = (props) => {

    const {day, icon, minTemp, maxTemp} = props;
    return(
        <div className="day-card thumbnail">
            <div>
                <p>{day}</p> 
            </div>
            <div>
                <img src={icons[icon]} alt="weather-icon" />
            </div>    
            <div>
        {maxTemp !== minTemp ? <p>{maxTemp}º <br/> {minTemp}º</p> : <p>{maxTemp}º</p> }
            </div>
        </div> 
    )
}

export default DayWeather;
