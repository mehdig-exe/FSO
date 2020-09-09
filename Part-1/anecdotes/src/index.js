import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const clickAnecdote = () => setSelected(randomAnecdote)
  
  const arr = new Array(anecdotes.length).fill(0);
  const [vote, setVote] = useState(arr)
  
  const clickVote = (index) => () => {
    const copy = [...vote]
    copy[index] += 1;
    setVote(copy)
  }
  
  console.log(vote)
  getMaxVoteAnecdote(vote)
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br></br>
      {vote[selected]}
      <br></br>
      <Button text="vote" handleClick={clickVote(selected)}></Button>
      <Button text="next anecdote" handleClick={clickAnecdote}></Button>
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[getMaxVoteAnecdote(vote)]}
      
    </div>
  )
}

function getMaxVoteAnecdote(arr) {
  return arr.indexOf(Math.max(...arr))
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const randomAnecdote = () => {
  let random = getRandomInt(anecdotes.length)
  return (random)
}

const Button = (props) => (
<button onClick={props.handleClick}>{props.text}</button>
)

ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
)