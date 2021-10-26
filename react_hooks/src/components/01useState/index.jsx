import React, { useState } from 'react'

function Demo() {
    let [count, setCount] = useState(0)
    let [age, setAge] = useState(18)
    return (
        <div>
            <h1>现在数值是：{count}</h1>
            年龄： {age}
            <br />
            <button onClick={() => { setCount(++count) }}>click me!</button>
            <button onClick={() => { setAge(age - 1); setCount(++count) }}>年龄-1</button>
        </div>
    )
}


export default Demo