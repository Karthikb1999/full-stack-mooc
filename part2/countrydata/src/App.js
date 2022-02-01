import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import axios from "axios";
import Countries from "./components/Countries";

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
    if(showCountry){
      setShowCountry(false)
      setCountry({})
    }
    setFilter(event.target.value);
  }

  const showClickHandler = (event) => {
    const clickCountry = countries.filter((country) => country.ccn3 === event.target.id)[0];
    setCountry(clickCountry);
    setShowCountry(true);
  }

  return (
    <div>
      <Search value={filter} handle={searchInputHandler} />
      <Countries
        countries={countries}
        filter={filter}
        country={country}
        showCountry={showCountry}
        clickHandler={showClickHandler}
      />
    </div>
  );
}

export default App;
