import React from 'react'

const Course = (props) => {
    return (
      <>
        <Header course={props.course}></Header>
        <Content course={props.course}></Content>
      </>
    )
}
  
const Header = (props) => {
    return (
        <h1>{props.course.name}</h1>
    )
}

const Content = (props) => {
    const arr = props.course.parts
    const reducer = (x,y) => x + y.exercises
    return (
        <div>
            {arr.map(element => (
                <p key={element.id}>{element.name} {element.exercises}</p>
            ))}
            <p><b>total of {arr.reduce(reducer,0)} exercises</b></p>
        </div>
    )
}

export default Course