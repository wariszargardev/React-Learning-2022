import React from 'react';
import SingleStudent from "./SingleStudent";

const StudentListings = () => {
    const users = [
        {id: 1, name: "Waris"},
        {id: 2, name: "Ali"},
        {id: 3, name: "Talha"},
        {id: 4, name: "Ahmed"},
    ]
    return (
        <div>
            <ul>
                {users.map((item, index)=>(
                    <SingleStudent item={item} key={index} />
                ))}
            </ul>
        </div>
    );
};

export default StudentListings;