import React, { useReducer } from 'react'

function Demo() {
    const [count, dispatch] = useReducer((state, action) => {
        switch (action) {
            case 'add':
                return state + 1
            case 'sub':
                return state - 1
            default:
                return state
        }
    }, 0)

    return (
        <div>
            <h1>现在数值是：{count}</h1>
            <br />
            <button onClick={() => dispatch('add')}>click me!</button>
            <button onClick={() => dispatch('sub')}>click me!</button>
        </div>
    )
}


export default Demo