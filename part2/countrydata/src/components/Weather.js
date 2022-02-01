import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';

const Weather = ({ capital, lat, lng }) => {
    const [weatherStats, setWeatherStats] = useState({ temp: 0, wind: 0, deg: 0 });


    useEffect(() => {
        const appId = process.env.REACT_APP_API_KEY;
        axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appId}&units=metric`)
            .then((response) => {
                setWeatherStats({
                    temp: response.data.main.temp,
                    wind: response.data.wind.speed,
                    deg: response.data.wind.deg
                });
            })
    }, []);

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
            <div>
                <b>wind: </b>{Math.round(weatherStats.wind * 2.237)} mph direction {degToCompass(weatherStats.deg)}
            </div>
        </div>
    )
}

export default Weather;