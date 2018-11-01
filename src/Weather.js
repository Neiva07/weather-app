import React, {Component} from 'react';
import DayWeather from './DayWeather';
import './Weather.css'
import axios from 'axios'
import * as functionCalls from './api'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dailyForecast: new Array(5)
        }
        this.loadForecast = this.loadForecast.bind(this);
    }
   
    componentDidMount(){
               this.loadForecast(); 
    }
    async loadForecast () {
        const dataList = await functionCalls.getForecast();
        const dailyInfo = functionCalls.threeHoursToDailyForecast(dataList)  
        console.log(dailyInfo)
        this.setState({dailyForecast: dailyInfo})
        
    }
    
    getDailyForecast(){
        const dailyInfo = this.state.dailyForecast;
        const minTemp = functionCalls.maxMinDailyTemperature(dailyInfo, 'min') 
        const maxTemp = functionCalls.maxMinDailyTemperature(dailyInfo, 'max')
        const dayIcon = functionCalls.chooseDailyIcon(dailyInfo)
        const weekDay = functionCalls.nextFiveDays(dailyInfo)
        return({
            minTemp,
            maxTemp,
            dayIcon,
            weekDay
        })
    }    
    render() {
        const {dayIcon, maxTemp, minTemp, weekDay}= this.getDailyForecast();
        const weatherDays = new Array(5);
        for(let i=0; i<weatherDays.length; i++)
            weatherDays[i] = (
                    <DayWeather key={i} icon={dayIcon[i]} maxTemp={maxTemp[i]} minTemp={minTemp[i]} day={weekDay[i]} />
            )
        return (
            <div className='forecast'>
                {weatherDays}
                <Link to="/netflix">Netflix</Link>
                <Link to="/google">Google</Link>
                <Link to="/facebook">Facebook</Link>
                <Link to="/airbnb">Airbnb</Link>
                <Link to="/pinterest">Pinterest</Link>
                <Route path="/:day" component={dailyForecast}/>
            </div>
        );
    }
}
function dailyForecast({match}) {
    const day = match.params.day;
    return (
        <h2>{day}!!!!</h2>
    ) 
}

export default Weather;
