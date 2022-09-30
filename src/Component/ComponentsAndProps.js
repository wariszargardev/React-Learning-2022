import {useEffect} from "react";

const ComponentsAndProps = (props) =>{
    const {name, email} = props
    return(
        <div>
            <h1>Components & Props</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    )
}

export default ComponentsAndProps