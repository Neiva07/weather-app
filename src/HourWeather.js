import React, {Component} from 'react';
import DayWeather from './DayWeather'
import PropTypes from 'prop-types'
import * as functionCalls from './api.js'

class HourWeather extends Component {
    constructor(props) {
        super(props)
    }
    static defaultProps = {
        dayForecast: Array(8)
    }
    render(){
        const {dayForecast} = this.props; 
        const dayInfo = functionCalls.getForecastForADay(dayForecast);
        const dayWeatherCards = dayInfo.map(forecast => (
            <DayWeather day={`${forecast.date.getHours()} hr`} {...forecast}/>
        )) 
        return (
            <div>
                {dayInfo[0] ? <h3 style={{textAlign: 'center'}}>Forecast from {dayInfo[0].date.getHours()}:00 of {functionCalls.getWeekDay(dayInfo[0].date.getDay())} to 24h</h3> : null}
                <div className="forecast">
                    {dayWeatherCards} 
                </div>
            </div>
            );
    }
}

export default HourWeather;
