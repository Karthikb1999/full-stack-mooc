import React from "react"
import CountrySummary from "./CountrySummary"

const CountriesSummary = ({ countries ,country, showCountry ,clickHandler}) => {
    if (countries.length > 10) {
        return <div>Too many matches, specify another filter</div>
    }
    if (countries.length === 1) {
        return <CountrySummary country={countries[0]} />
    }
    return (
        <ul>
            {
                countries.map
                    ((country) =>
                        <li key={country.ccn3}>
                            {country.name.common}
                            <button id={country.ccn3} onClick={clickHandler}>Show</button>
                        </li>
                        )
            }
            {
                showCountry ? 
                <CountrySummary country={country} /> :
                <></>
            }
        </ul>
    )
}

export default CountriesSummary;