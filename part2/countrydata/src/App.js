import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import axios from "axios";
import Countries from "./components/Countries";
import CountrySummary from "./components/CountrySummary";


const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [showCountry, setShowCountry] = useState(false);
  const [country, setCountry] = useState({});

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then(response => {
        setCountries(response.data);
      });
  }, []);

  const searchInputHandler = (event) => {
    if (showCountry) {
      setShowCountry(false)
      setCountry({})
    }
    setFilter(event.target.value);
  }

  const filteredCountries = countries
    .filter((country) => country.name.common.toLowerCase().includes(filter.toLowerCase().trim()));

  const showClickHandler = (event) => {
    const clickCountry = countries.filter((country) => country.ccn3 === event.target.id)[0];
    setCountry(clickCountry);
    setShowCountry(true);
  }

  return (
    <div>
      <Search value={filter} handle={searchInputHandler} />
      {filter.trim() ?
        <Countries
          countries={filteredCountries}
          filter={filter}
          clickHandler={showClickHandler}
        /> : <></>}
      {
        showCountry ?
          <CountrySummary country={country} /> :
          <></>
      }
    </div>
  );
}

export default App;
