import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1,
                showText: state.showText
            }
        case "DECREMENT":
            return {
                count: state.count - 1,
                showText: state.showText
            }
        case "TOGGLE":
            return {
                count: state.count,
                showText: !state.showText
            }
        default: 
            return state;
            
    }
}

function UseReducerHook() {
    const [state, dispatch] = useReducer(reducer, {count: 0, showText: false});


    
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => {
                dispatch({type: "INCREMENT"})
                dispatch({type: "TOGGLE"})
            }}>Increment</button>

            <button onClick={() => {
                dispatch({type: "DECREMENT"})
                dispatch({type: "TOGGLE"})
            }}>Decrement</button>

            <button onClick={() => {
                dispatch({type: "TOGGLE"})
            }}>Toggle Text</button>

            { state.showText && <p>Playing Level Field!</p>}
        </div>
    )
}

export default UseReducerHook