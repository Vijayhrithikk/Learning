import Header from "./components/Header";
import Total from "./components/Total";
import Content from "./components/Content";

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1}
      exercises1={exercises1}
       part2={part2}
      exercises2={exercises2}
       part3={part3}
      exercises3={exercises3}
      />
      <Total 
      exercises1 = {10}
      exercises2 = {7}
      exercises3 = {14}
      />
    </div>
  )
}

export default App