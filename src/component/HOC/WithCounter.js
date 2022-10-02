import {useState} from "react";

const WithCounter = (OriginalComponent) =>{
    const NewComponent = () =>{

        const [counter, setCounter] = useState(0)
        const incrementCount = ()=>{
            setCounter(counter + 1)
        }

        return(
            <OriginalComponent name={"Muhammad Waris"} counter={counter} incrementCount={incrementCount} />
        )
    }
    return NewComponent
}
export default WithCounter