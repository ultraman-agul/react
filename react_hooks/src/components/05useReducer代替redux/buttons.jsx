import React, { useContext } from 'react'
import { ColorContext } from './color'
function Button() {
    const { dispatch } = useContext(ColorContext)
    return (
        <div>
            <button onClick={() => dispatch({ type: 'updatecolor', data: 'blue' })}>蓝色</button>
            <button onClick={() => dispatch({ type: 'updatecolor', data: 'yellow' })}>黄色</button>
        </div>
    )
}

export default Button