import {useState} from "react";

const WithCounter = (WrappedComponent) =>{
    const ComposeComponent = (props) =>{

        const [counter, setCounter] = useState(0)
        const incrementCount = ()=>{
            setCounter(counter + 1)
        }

        return(
            <WrappedComponent
                name={"Muhammad Waris"}
                counter={counter}
                incrementCount={incrementCount}
                {...props}
                // If any of component pass extra props then these props must past to it otherwise it will not appear to specific component
                />
        )
    }
    return ComposeComponent
}
export default WithCounter