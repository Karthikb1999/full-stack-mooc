import React from "react";

const Search = ({ filter, searchHandle }) => {
    return (
        <div>
            filter shown with: <input value={filter} onChange={searchHandle}></input>
        </div>
    )
}

export default Search;