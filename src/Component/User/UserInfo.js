import React, {useContext} from 'react';
import userContext from "../../Context/userContext";
const UserInfo = () => {
    const context = useContext(userContext)
    const {user, updateUserInfo} = context.state
    const {name, email, age, degree} = user

    const updateMyProfile = (e) =>{
        context.updateUserInfo({
            name: "Ali",
            email: "ali@gmail.com",
            age: 32,
            degree: "Software Eng"
        })
    }

    return (
        <div>
            <p><b>Name: </b> {name}</p>
            <p><b>Email: </b> {email}</p>
            <p><b>Age: </b> {age}</p>
            <p><b>Degree: </b> {degree}</p>


            <button onClick={updateMyProfile}>
                Update my Profile
            </button>
        </div>
    );
};

export default UserInfo;