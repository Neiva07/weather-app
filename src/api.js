import axios from 'axios';

const BELEMFORECAST = 'http://api.openweathermap.org/data/2.5/forecast?id=3405870&APPID=e6cfbd410ffbdea0015f8808679f0592'

export async function getForecast () {
        return axios({
            method: 'get',
            url: BELEMFORECAST,
            responseType: 'json'
        })
        .then(response => {
            return response.data.list
        }
        )
}
export function threeHoursToDailyForecast(daysInfo) {
       const days = new Array(5);
       for(let i=0; i<days.length; i++){
           days[i] = daysInfo.slice(i*8, (i+1)*8)
       }
       return days
    }
export function maxMinDailyTemperature(daysInfo, category){
       let feature = `temp_${category}`
       const tempArray = daysInfo.map(day => day.reduce((acc, next, index) => {
           acc.push(next.main[feature]);
           return acc;
       },[]))
        const featureTempArray= tempArray.map(day => Math[category](...day))
        return featureTempArray;
    }
export function chooseDailyIcon(daysInfo) {
        const iconArray = daysInfo.map(day => day.reduce((acc,next) => {
            acc.push(next.weather[0].icon)
            return acc;
        },[]))
        const dayIcon = iconArray.map(mapDay => {
            if(mapDay.includes("13d"))
                return "13d"
            else if (mapDay.includes("50d"))
                return "50d"
            else if(mapDay.includes("11d"))
                return "11d"
            else if(mapDay.includes("09d"))
                return "09d"
            else if(mapDay.includes("03d"))
                return "03d"
            else if(mapDay.includes("02d"))
                return "02d"
            else return "01d"
        })
        return dayIcon;
    }
export function nextFiveDays(daysInfo) {
        const date = daysInfo.map(day => new Date(day[0].dt_txt).getDay())
        const weekDate = date.map(day => getWeekDay(day)) 
        return weekDate;
}

export function getForecastForADay(dayInfo) {
    const dayForecast = dayInfo.map(forecast => {
        return {
            maxTemp: forecast.main.temp_max,
            minTemp : forecast.main.temp_min,
            icon : forecast.weather[0].icon,
            date : new Date(forecast.dt_txt)
        }
    })  
    return dayForecast
}

export function getWeekDay (day) {
            if(day === 0)
                return "Sunday"
            else if (day === 1)
                return "Monday"
            else if(day === 2)
                return "Tuesday"
            else if(day === 3)
                return "Wednesday"
            else if(day === 4)
                return "Thursday"
            else if (day === 5)
                return "Friday"
            else return "Saturday"
}
