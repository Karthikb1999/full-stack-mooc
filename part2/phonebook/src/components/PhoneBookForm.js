import React from "react";
import Header from "./Header";

const PhoneBookForm = ({ personFormOnSubmit, personInputChange, numberInputChange, name, number }) => {
    return (
        <div>
            <Header title='add a new' />
            <form onSubmit={personFormOnSubmit}>
                <div>
                    name: <input value={name} onChange={personInputChange} />
                </div>
                <div>
                    number: <input value={number} onChange={numberInputChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    );
}


export default PhoneBookForm;