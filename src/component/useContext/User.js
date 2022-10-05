import React, {useContext} from 'react';
import UserContext from "./context/UserContext";

const User = () => {
    const userContext = useContext(UserContext)
    console.log(userContext)
    const {name, email ,setName, callingFunction} = userContext;

    const emailChangeHandler = (e) =>{
        callingFunction(e.target.value)
    }
    return (
        <div>
            <h1>User name: {name}</h1>
            <div>
                <label>User name: </label>
                <input type={"text"} name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>

            <h1>Email: {email}</h1>
            <div>
                <label>Email: </label>
                <input type={"email"} name="email" value={email} onChange={emailChangeHandler}/>
            </div>
        </div>
    );
};

export default User;