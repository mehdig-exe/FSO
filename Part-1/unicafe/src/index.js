import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
  
)

const Statistic = (props) => {
  return (
  <tr>
    <td>{props.text}</td>
    <td>{props.value} {props.sign}</td>
  </tr>
  )
}

const Statistics = (props) => {
  let all = props.good+props.neutral+props.bad
  let average = (props.good-props.bad)/all
  let positive = ((props.good)/all)*100

  if (all === 0) {
    return (
      <>
        No feedback given
      </>
    )
  }

  return (
    <table>
      <tbody>
        <Statistic text="good" value = {props.good}></Statistic>
        <Statistic text="neutral" value = {props.neutral}></Statistic>
        <Statistic text="bad" value = {props.bad}></Statistic>
        <Statistic text="all" value = {all}></Statistic>
        <Statistic text="average" value = {average}></Statistic>
        <Statistic text="positive" value = {positive} sign="%"></Statistic>
      </tbody>
    </table>
  )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodAddOne = () =>  setGood(good + 1)
  const neutralAddOne = () =>  setNeutral(neutral + 1)
  const badAddOne = () =>  setBad(bad + 1)
  

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={goodAddOne}></Button>
      <Button text="neutral" handleClick={neutralAddOne}></Button>
      <Button text="bad" handleClick={badAddOne}></Button>
      <h1>statistics</h1>
      <Statistics bad={bad} good={good} neutral={neutral}></Statistics>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)