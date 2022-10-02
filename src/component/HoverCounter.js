import WithCounter from "./HOC/WithCounter";

const HoverCounter = (props) =>{
    return(
        <div>
            <p>Data from HOC Component {props.name}</p>
            <h1 onMouseOver={props.incrementCount}>Hover {props.counter} time</h1>
        </div>
    )
}

export default WithCounter(HoverCounter)