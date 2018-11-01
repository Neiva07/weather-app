import React, {Component} from 'react';
import './DayWeather.css'
import cloudy from './cloud.png'
import axios from 'axios'

class DayWeather extends Component {
    constructor(props) {
        super(props);
        this.state ={

        }
    }
    render(){
        const {day, icon, minTemp, maxTemp} = this.props;
        const url = `http://openweathermap.org/img/w/${icon}.png`
        return(
            <div className="day-card thumbnail">
                <div>
                    <p>{day}</p> 
                </div>
                <div>
                    <img src={url} />
                </div>    
                <div>
                    <p>{maxTemp}º {minTemp}º</p>
                </div>
            </div> 
        )
    }
}

export default DayWeather;
