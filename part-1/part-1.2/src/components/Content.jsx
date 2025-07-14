import Part from "./Part"
const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]

export default function Content(){
    return(
        <div>
          <Part parts={parts}/>
          <Part parts={parts}/>
          <Part parts={parts}/>

        </div>
    )
}
