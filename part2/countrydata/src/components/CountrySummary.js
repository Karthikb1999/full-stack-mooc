import Country from "./Country";
import Flag from "./Flag";
import Languages from "./Languages";
import Header from "./Header";
import Weather from "./Weather";

const CountrySummary = ({ country }) => {
    const languages = Object.values(country.languages);
    return (
        <div>
            <Header Tag="h1" title={country.name.common} />
            <Country capital={country.capital} population={country.population} />
            <Languages languages={languages} />
            <Flag flag={country.flags.png} />
            <Weather
                capital={country.capital}
                lat={country.capitalInfo.latlng[0]}
                lng={country.capitalInfo.latlng[1]}
            />
        </div>
    )
}

export default CountrySummary;