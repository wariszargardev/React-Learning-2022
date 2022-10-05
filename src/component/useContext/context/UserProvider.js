import UserContext from "./UserContext";
import {useState} from "react";

const UserProvider = (props) =>{
    const [name, setName] = useState('Muhammad Waris')
    const [email, setEmail] = useState('')

    const callingFunction = (email) =>{
        setEmail(email)
    }

    return(
        <UserContext.Provider value={{name, email ,setName, callingFunction}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider