import React, {Component} from 'react';
import './DayWeather.css'
import axios from 'axios'
import icons from './icons'

class DayWeather extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        console.log(icons)
        const {day, icon, minTemp, maxTemp} = this.props;
        return(
            <div className="day-card thumbnail">
                <div>
                    <p>{day}</p> 
                </div>
                <div>
                    <img src={icons[icon]} />
                </div>    
                <div>
                    <p>{maxTemp}º <br/> {minTemp}º</p>
                </div>
            </div> 
        )
    }
}

export default DayWeather;
