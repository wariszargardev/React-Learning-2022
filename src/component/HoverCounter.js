import WithCounter from "./HOC/WithCounter";

const HoverCounter = (props) =>{
    const {name, incrementCount, counter} = props
    return(
        <div>
            <p>Data from HOC Component {name}</p>
            <h1 onMouseOver={incrementCount}>Hover {counter} time</h1>
        </div>
    )
}

export default WithCounter(HoverCounter)