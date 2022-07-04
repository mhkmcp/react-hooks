import React, { useState } from 'react'

function UseStateHook() {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState("initial");

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const handleChange = e => {
        setInputValue(e.target.value);
    }
    
    return (
        <div>
            <p>Count: { counter }</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <br/>
            { inputValue } <br/>
            <input placeholder='Enter something' onChange={handleChange}/>

        </div>
    )
}

export default UseStateHook