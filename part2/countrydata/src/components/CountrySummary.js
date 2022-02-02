import React , {useState,useEffect} from "react";
import Country from "./Country";
import Flag from "./Flag";
import Languages from "./Languages";
import Header from "./Header";
import Weather from "./Weather";
import axios from "axios";

const CountrySummary = ({ country }) => {
    const languages = Object.values(country.languages);
    const [weatherStats, setWeatherStats] = useState({});
    const [showWeather, setShowWeather] = useState(false);
    useEffect(() => {
        setShowWeather(false);
        const appId = process.env.REACT_APP_API_KEY;
        const lat = country.capitalInfo.latlng[0]
        const lng = country.capitalInfo.latlng[1]
        axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appId}&units=metric`)
            .then((response) => {
                setWeatherStats({
                    temp: response.data.main.temp,
                    wind: response.data.wind.speed,
                    deg: response.data.wind.deg,
                    icon: response.data.weather[0].icon
                });
                setShowWeather(true);
            })
    }
    , [country]);

    return (
        <div>
            <Header Tag="h1" title={country.name.common} />
            <Country capital={country.capital} population={country.population} />
            <Languages languages={languages} />
            <Flag flag={country.flags.png} />
            {showWeather ? (
                <Weather
                    capital={country.capital}
                    weatherStats={weatherStats}
                />
            ) : <></>}
        </div>
    )
}

export default CountrySummary;