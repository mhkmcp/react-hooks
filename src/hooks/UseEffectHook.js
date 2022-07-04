import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UseEffectHook() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            setData(response.data[0].email);
            console.log("API WAS CALLED");
        });
    }, []);


    return (
        <div>
            <h3> hello {data} </h3>
        </div>
    )
}

export default UseEffectHook