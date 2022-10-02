import React, {useEffect, useRef, useState} from 'react';

function RefsWithFunctionalComponent(props) {
    const [name, setName] = useState('')
    const inputRef = useRef()

    useEffect(()=>{
        inputRef.current.focus()
    })

    const changeHandler = () =>{
        setName(inputRef.current.val)
    }
    return (
        <div>
            <h1> Refs with functional component set state using ref </h1>
            <input name={"name"} onChange={changeHandler} value={name} ref={inputRef} />
        </div>
    );
}

export default RefsWithFunctionalComponent;