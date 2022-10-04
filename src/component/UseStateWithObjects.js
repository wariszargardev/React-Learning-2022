import React, {useState} from 'react';

const UseStateWithObjects = () => {
    const [userInfo, setUser] = useState({name: "Waris", age:25, section: 'C'})
    // We can destruct userInfo
    const {name, age, section} = userInfo

    // change only name
    const changeOnlyName = (e) =>{
        // setUser((prevState)=>{
        //     return{
        //         ...prevState,
        //         name: e.target.value
        //     }
        // })

        setUser(prevState => {
            return{
                ...prevState, name: e.target.value
            }
        })

    }

    const inputChangeHandler = (e) => {
        setUser(prevState => {
            return{
                ...prevState, [e.target.name]: e.target.value
            }
        })
    }

    return (
        <div>
            <p><b>Name: </b> {name}</p>
            <p><b>Age: </b> {age}</p>
            <p><b>Section: </b> {section}</p>

            <div>
                <label>Name: </label>
                <input name={"name"} value={name} onChange={changeOnlyName}/>
            </div>
            <div>
                <label>Age: </label>
                <input name={"age"} value={age} onChange={inputChangeHandler}/>
            </div>
            <div>
                <label>Section: </label>
                <input name={"section"} value={section} onChange={inputChangeHandler}/>
            </div>
        </div>
    );
};

export default UseStateWithObjects;