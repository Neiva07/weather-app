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
        console.log(dayInfo)
        const dayWeatherCards = dayInfo.map(forecast => (
            <DayWeather day={forecast.hour} {...forecast}/>
        )) 
        console.log(dayWeatherCards)
        return (
            <div className="forecast">
                {dayWeatherCards} 
            </div>
        );
    }
}

export default HourWeather;
