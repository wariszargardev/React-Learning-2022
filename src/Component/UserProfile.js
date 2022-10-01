import React from 'react';

const UserProfile = (props) => {
    if(props.name == "Ahsan"){
        throw new Error("Error");
    }
    return (
        <div>
            <h1>Name is: {props.name}</h1>
        </div>
    );
};

export default UserProfile;