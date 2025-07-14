import Part from "./Part"
const part1 = {
  name: 'Fundamentals of React',
  exercises: 10
}
const part2 = {
  name: 'Using props to pass data',
  exercises: 7
}
const part3 = {
  name: 'State of a component',
  exercises: 14
}

export default function Content(){
    return(
        <div>
          <Part part1={part1}
          exercises1={exercises1}/>
          <Part part2={part2}
          exercises2={exercises2}/>
          <Part part3={part3}
          exercises3={exercises3}/>

        </div>
    )
}
