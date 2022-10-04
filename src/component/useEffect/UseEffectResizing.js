import React, {useEffect, useState} from 'react';

const UseEffectResizing = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    const resizeWindow = () =>{
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(()=>{
        console.log("Window resizing and add event listner")
        window.addEventListener('resize', resizeWindow)


        return ()=>{
            console.log("Removing event listner")
            window.removeEventListener('resize', resizeWindow)
        }
    }, [])

    return (
        <div>
            <h1>Widow width {width}  & height {height}</h1>
        </div>
    );
};

export default UseEffectResizing;