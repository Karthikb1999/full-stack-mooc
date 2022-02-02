import React from 'react';
import Header from './Header';

const Weather = ({ capital, weatherStats }) => {
    const degToCompass = (deg) => {
        const val = Math.floor((deg / 22.5) + 0.5);
        const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    }
    return (
        <div>
            <Header Tag="h1" title={`Weather in ${capital}`} />
            <div>
                <b>temperature: </b>{weatherStats.temp} Celcius
            </div>
            <img src={`http://openweathermap.org/img/wn/${weatherStats.icon}@2x.png`}></img>
            <div>
                <b>wind: </b>{Math.round(weatherStats.wind * 2.237)} mph direction {degToCompass(weatherStats.deg)}
            </div>
        </div>
    )
}

export default Weather;