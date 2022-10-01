import React, {useState} from 'react';
import UserContext from "./userContext";

function UserState(props) {
    const stateInfo = {
        user: {
            name: "Waris",
            email: "waris@gmail.com",
            age: 27,
            degree: "BS"
        },
        courses:[
            {id: 1, name: "C++"},
            {id: 2, name: "React JS"},
            {id: 3, name: "OOP"}
        ]
    }
    const [state, setState] = useState(stateInfo)

    const updateUserInfo = (data) =>{
        setState(state=> ({
            ...state,
            'user': data
        }))
    }

    return (
        <UserContext.Provider value={{state, updateUserInfo}}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserState;