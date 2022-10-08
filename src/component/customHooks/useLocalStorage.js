import React, {useEffect, useState} from 'react';

const getSavedValue = (key, initialValue) =>{
    let savedValue = JSON.parse(localStorage.getItem(key))
    if(savedValue) return savedValue;

    return initialValue;
}

const UseLocalStorage = (key, initialValue) => {
    const [value , setValue] = useState(()=>{
        return getSavedValue(key, initialValue)
    })

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])
    return [
        value,
        setValue
    ]
};

export default UseLocalStorage;