import React, {useEffect} from 'react';

const UseLogger = (value) => {
   useEffect(()=>{
       console.log("-*-*-*-*-* output")
       console.log(value)
   }, [value])
};

export default UseLogger;