import React  from 'react';
import DayWeather from './DayWeather'
import PropTypes from 'prop-types'
import * as functionCalls from './api.js'

const HourWeather = props => {
    const {dayForecast} = props; 
    const dayInfo = functionCalls.getForecastForADay(dayForecast);
    const dayWeatherCards = dayInfo.map((forecast, i) => (
        <DayWeather key={i} day={`${forecast.date.getHours()} hr`} {...forecast}/>
    )) 
    return (
        <div>
            {dayInfo[0] ? <h3 style={{textAlign: 'center'}}>Forecast from {dayInfo[0].date.getHours()}:00 on {functionCalls.getWeekDay(dayInfo[0].date.getDay())} to {dayInfo[7].date.getHours()}:00 of the next day</h3> : null}
            <div className="forecast">
                {dayWeatherCards} 
            </div>
        </div>
        );
}
HourWeather.porpTYpes = {
    dayForecast: PropTypes.arrayOf(PropTypes.object).isRequired
    }

HourWeather.defaultProps = {
    dayForecast: Array(8)
}

export default HourWeather;
