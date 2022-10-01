import React, {useRef, useState} from 'react';

function UseRefFunctionalComponent(props) {

    const [users, setUsers] = useState({userName:"" , email:""})
    const {userName, email} = users
    const nameTextInput= useRef()
    const emailTextInput= useRef()


   const onChangeHandler = (e) =>{
        e.preventDefault()
        let name = e.target.name
        let value = e.target.value

       setUsers(users=>({
           ...users, [name]: value
       }))

    }

   const submitForm = (e) =>{
        e.preventDefault()
        let {userName, email} =  users

        if(userName == ""){
            alert("User name is required")
            nameTextInput.current.focus();
            return false;
        }

        if(email == ""){
            alert("Email is required")
            emailTextInput.current.focus();
            return false;
        }

        alert("Thanks for registration")
       setUsers({
           userName: "",
           email: ""
       })
    }


    return (
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <label htmlFor="userName">User name: </label>
                    <input
                        type="text"
                        onChange={onChangeHandler}
                        id={"userName"}
                        name={"userName"}
                        value={userName}
                        ref={nameTextInput}
                    />
                </div>
                <div>
                    <label htmlFor="userEmail">User email: </label>
                    <input
                        type="text"
                        onChange={onChangeHandler}
                        id={"userEmail"}
                        name={"email"}
                        value={email}
                        ref={emailTextInput}
                    />
                </div>
                <div>
                    <button type={"submit"}>
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UseRefFunctionalComponent;