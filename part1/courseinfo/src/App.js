import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from './Total'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const partExercise1 = {
    part: part1,
    count: exercises1
  }
  const partExercise2 = {
    part: part2,
    count: exercises2
  }
  const partExercise3 = {
    part: part3,
    count: exercises3
  }

  const partExercises=[partExercise1,partExercise2,partExercise3]

  return (
    <div>
      <Header course={course} />
      <Content partExercises={partExercises} />
      <Total partExercises={partExercises} />
    </div>
  )
}

export default App