import React, {useContext} from 'react';
import userContext from "../../Context/userContext";
import CourseDetail from "./CourseDetail";

const Courses = () => {
    const context = useContext(userContext)
    return (
        <div>
            <h1>Course Info</h1>
            {context.state.courses.map((course, index)=>(
                <CourseDetail course={course} key={index} />
            ))}
        </div>
    );
};

export default Courses;