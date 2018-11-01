import React, {Component} from 'react';
import DayWeather from './DayWeather'

const HourWeather = (dailyInfo) => {
    console.log(dailyInfo)
   //const hourCards = dailyInfo.map(hour => <DayWeather {...hour} />) 
    //console.log(hourCards)
   return (
        <div className="hour-cards">
        </div>
   ); 
}

export default HourWeather;
