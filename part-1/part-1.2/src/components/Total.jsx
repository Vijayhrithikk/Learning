export default function Total(props){
    console.log(props);
    return(
        <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    )
}