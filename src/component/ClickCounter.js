import React, { useState} from 'react';

const ClickCounter = () => {

    const [counter, setCounter] = useState(0)
    const incrementCount = ()=>{
        setCounter(counter + 1)
    }

    return (
        <div>
            <button onClick={incrementCount}>Button click {counter} time</button>
        </div>
    );
};

export default ClickCounter;