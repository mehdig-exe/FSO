import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setSearchName ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    const checkPerson = persons.find(e => e.name === newName)
    console.log(checkPerson)
    if (checkPerson) {
      alert(`${newName} already exists in the phonebook!`)
    }
    else {
      event.preventDefault()
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchName(event.target.value)
  }
  
  const searchArr = persons.filter(e => e.name.includes(searchName))
  console.table(searchArr)
 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} handleSearchChange={handleSearchChange}></Filter>
      <h3>Add a new</h3>
      <PersonForm 
        newName={newName}
        handleNameChange={handleNameChange} 
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      ></PersonForm>
      <h2>Numbers</h2>
      <Persons searchArr={searchArr}></Persons>
      <div>debug: {newName}</div>
    </div>
  )
}

const PersonForm = ({ newName, handleNameChange, newNumber, handleNumberChange, addPerson }) => {

  return (
    <form>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button onClick={addPerson} type="submit">add</button>
        </div>
    </form>
  )
}

const Persons = ({ searchArr }) => {
  return (
    <div>
      {searchArr.map(element => {
        return (
          <div key={element.name}>
            {element.name} {element.number}
            <br></br>
          </div>
        )
      })}
    </div>
  )
}

const Filter = (props) => {
  console.log(`Filter`)
  return (
    <form>
      <div>filter shown with <input value={props.searchName} onChange={props.handleSearchChange}/></div>
    </form>
  )
}

export default App
