import React, { useRef } from 'react'

function UseRefHook() {
    const nameRef = useRef(null)

    const onClick = () => {
        nameRef.current.focus();
        // console.log(nameRef.current.value); // get value
        // nameRef.current.value = '' // clear the input
    }

    return (
        <div>
            <h1>Pedro</h1>
            <input type='type' ref={nameRef} placeholder='Name' />
            <button onClick={onClick}>Change Name</button>
        </div>
    )
}

export default UseRefHook