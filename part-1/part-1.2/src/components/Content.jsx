export default function Content(props){
  return(
      <>
        {props.parts.map((part, i) => (
          <p key={i}>{part.name} {part.exercises}</p>
        ))}
      </>
  )
}