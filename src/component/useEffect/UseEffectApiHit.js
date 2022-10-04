import React, {useEffect, useState} from 'react';

const UseEffectApiHit = () => {
    const [resourceType, setResourceType] = useState('posts')
    const [jsonData, setJSONData] = useState([])
    useEffect(()=>{
        console.log("-*-*-* Mount component")
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setJSONData(json))

        return ()=>{
            console.log("-*-*-* Unmount component")
        }

    }, [resourceType])

    // [] empty means runs for first time when component render
    // [resourceType] run only when resourceType this state change
    return (
        <div>
            <button onClick={()=>setResourceType('posts')}>Posts</button>
            <button onClick={()=>setResourceType('users')}>Users</button>
            <button onClick={()=>setResourceType('comments')}>Comments</button>

            <h1>Current type: {resourceType}</h1>

            {/*{jsonData.map((data, index)=>(*/}
            {/*    JSON.stringify(data)*/}
            {/*))}*/}
        </div>
    );
};

export default UseEffectApiHit;