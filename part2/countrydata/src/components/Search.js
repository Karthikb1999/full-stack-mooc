import React from "react";

const Search =({value,handle}) => {
    return (
        <div>
            find countries : <input value={value} onChange={handle}></input>
        </div>
    )
}  

export default Search;