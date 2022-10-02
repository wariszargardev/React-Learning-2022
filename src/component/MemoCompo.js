import React from 'react';
import {memo} from "react";

function MemoCompo(props) {
    console.log("--*-*-*- Memo Component render")
    return (
        <div>
            <h1>Name from memo component:  {props.name}</h1>
        </div>
    );
}

export default memo(MemoCompo);