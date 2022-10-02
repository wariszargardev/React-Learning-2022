import {useState} from "react";

const WithCounter = (WrappedComponent) =>{
    const ComposeComponent = () =>{

        const [counter, setCounter] = useState(0)
        const incrementCount = ()=>{
            setCounter(counter + 1)
        }

        return(
            <WrappedComponent name={"Muhammad Waris"} counter={counter} incrementCount={incrementCount} />
        )
    }
    return ComposeComponent
}
export default WithCounter