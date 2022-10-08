import React, {useState} from 'react';
import useLogger from "./customHooks/useLogger";
import useLocalStorage from "./customHooks/useLocalStorage";

const UserProfile = () => {
    const [name, setName] = useLocalStorage('name', '')
    useLogger(name)

    const changeHandler = (e) => {
        setName(e.target.value)
    }
    return (
        <div>
            <div>
                <label>Name: </label>
                <input name={"name"} value={name} onChange={changeHandler}/>
            </div>
        </div>
    );
};

export default UserProfile;