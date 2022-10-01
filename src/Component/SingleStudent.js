import React, {Fragment} from 'react';

const SingleStudent = (props) => {
    const {id, name} = props.item
    return (
        // Fragment will no add extra tag code same do as fragment <></>
        <Fragment>
            <li>Id: {id} - Name: {name}</li>
        </Fragment>
    );
};

export default SingleStudent;