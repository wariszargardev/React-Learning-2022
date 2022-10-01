import React from 'react';

const CourseDetail = (props) => {
    const {id, name} = props.course
    return (
        <div>
            <p><b>Course ID: </b> {id}</p>
            <p><b>Course Title: </b> {name}</p>
        </div>
    );
};

export default CourseDetail;