import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name} and you are {props.age}</p>
    </div>
  )
}

const App = () => {
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Mehdi" age="10"/>
      <Hello name="yeet"/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))