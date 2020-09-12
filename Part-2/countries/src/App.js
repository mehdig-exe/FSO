import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css'

function App() {
  const [ countries, setCountries] = useState([])
  const [ filterCountries, setFilterCountries ] = useState('')
  
  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        setCountries(response.data)
      })
    }
  , [])

  const handleCountryNameChange = (event) => {
    setFilterCountries(event.target.value)
  }

  return (
    <div className="App">
      <SearchCountries handleChange={handleCountryNameChange} searchVal={filterCountries}></SearchCountries>
      <DisplayCountries searchVal={filterCountries} countries={countries}></DisplayCountries>
    </div>
  );
}

const SearchCountries = ({ searchVal, handleChange}) => {
  return (
    <form>
      find countries<input onChange={handleChange} value={searchVal} type="text"></input>
    </form>
  )
}

const DisplayCountries = ({countries, searchVal}) => {
  const searches = countries.filter(e => e.name.includes(searchVal))
  if (searches.length > 10) {
    return (
      <p>Too many matches, specificy another filter</p>
    )
  }
  else if (searches.length === 1) {
    return (
      <SingleCountry country={searches[0]}></SingleCountry>
    )
  }
  else {
    return (
      searches.map(e => {
        return (
        <div key={e.name}>
          {e.name}
          <br></br>
        </div>
        )}
      )
    )
  }
}

const SingleCountry = ({country}) => {
  const name = country.name
  const capital = country.capital
  const population = country.population
  const langs = country.languages
  const flag = country.flag
  console.log(langs)

  return (
    <div>
      <h1>{name}</h1>
      Capital {capital}<br></br>
      Population {population}<br></br>
    <h2>languages</h2>
      <ul>
        {langs.map(e => {
          return (
          <li key={e.name} >{e.name}</li>
          )
        })}
      </ul>
    <img id="flag" src={flag}></img>
    </div>
  )
}

export default App;
