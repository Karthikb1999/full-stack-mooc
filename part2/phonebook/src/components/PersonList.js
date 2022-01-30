import React from "react";
import Person from "./Person";
import Header from "./Header";

const PersonList = ({ personList }) => {
    return (
        <div>
            <Header title='Numbers' />
            {personList.map((person) => <Person name={person.name} key={person.id} number={person.number} />)}
        </div>
    )
}
export default PersonList;