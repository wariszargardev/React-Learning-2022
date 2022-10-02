import {useState} from "react";

const HoverCounter = (props) =>{

    const [counter, setCounter] = useState(0)
    const incrementCount = ()=>{
        setCounter(counter + 1)
    }

    return(
        <div>
            <p>Data from HOC Component {props.name}</p>
            <h1 onMouseOver={incrementCount}>Hover {counter} time</h1>
        </div>
    )
}

export default HoverCounter