import React, {useRef} from 'react';

const InputValueByRef = () => {
    const inputRef = useRef()

    const getInputValueByRef = () =>{
        alert("Input value: " + inputRef.current.value)
    }

    return (
        <div>
            <input ref={inputRef} type={"text"} />
            <button onClick={getInputValueByRef}>Get Value BY Ref</button>
        </div>
    );
};

export default InputValueByRef;