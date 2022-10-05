import React, {useEffect, useRef, useState} from 'react';

const ComponentRenderCount = () => {
    const [name, setName] = useState('')
    const renderCount = useRef();
    const nameInputRef = useRef();

    const changeHandler = (e) =>{
        setName(e.target.value)
    }

    useEffect(()=>{
        renderCount.current = renderCount.current + 1
    })

    const focusInput = () =>{
        nameInputRef.current.focus()
    }

    

    return (
        <div>
            <div>
                <label>Name: </label>
                <input ref={nameInputRef} type={"text"} value={name} onChange={changeHandler}/>
            </div>

            <button onClick={focusInput}>Focus input value </button>
            <p>Component render {renderCount.current} time</p>
        </div>
    );
};

export default ComponentRenderCount;