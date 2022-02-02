import Header from "./Header";

const Languages = ({ languages }) => {
    return (
        <div>
            <Header Tag="h2" title="languages" />
            <ul>
                {
                    languages.map((language) => <li key={language}>{language}</li>)
                }
            </ul>
        </div>
    )
}

export default Languages;