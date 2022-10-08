import React, {useEffect, useMemo, useState} from 'react';

const UseFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        console.log("Use fetch called")
        fetch(url)
            .then(response => response.json())
            .then(json => setData(json))
    }, [])

    return [data];
};

export default UseFetch;