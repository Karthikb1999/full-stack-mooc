import React, { useState } from 'react'
import Header from './components/Header'; 
import PersonList from './components/PersonList';
import PhoneBookForm from './components/PhoneBookForm';
import Search from './components/Search';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const personInputChange = (event) => setNewName(event.target.value);

  const numberInputChange = (event) => setNewNumber(event.target.value);

  const searchHandle = (event) => setFilter(event.target.value);

  const personsToShow = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase().trim()));

  const personFormOnSubmit = (event) => {
    event.preventDefault();
    const name = newName.trim();
    if (persons.filter((person) => person.name.toLowerCase() === name.toLowerCase()).length > 0) {
      window.alert(`${name} is already added to phonebook`);
      return;
    }
    const newPerson = {
      name,
      number: newNumber,
      id: persons.length + 1
    }
    setPersons(persons.concat(newPerson));
    setNewName('');
    setNewNumber('');
  }

  return (
    <div>
      <Header title='Phonebook' />
      <Search searchHandle={searchHandle} filter={filter} />
      <PhoneBookForm
        personFormOnSubmit={personFormOnSubmit}
        personInputChange={personInputChange}
        numberInputChange={numberInputChange}
        name={newName}
        number={newNumber}
      />
      <PersonList personList={personsToShow}/>
    </div>
  )
}

export default App;