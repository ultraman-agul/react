import React, { useState, useEffect } from 'react'

function Demo() {
    const [count, setCount] = useState(0)
    const [age, setAge] = useState(18)
    useEffect(() => {
        console.log('调用了useEffect~')
        return () => {
            console.log('走啦！')
        }
    }, [age])
    return (
        <div>
            <h1>数值：{count}&nbsp;年龄：{age}</h1>
            <br />
            <button onClick={() => { setCount(count + 1) }}>click me !</button>
            <button onClick={() => { setAge(age - 1) }}>年龄-1</button>
        </div>
    )
}


export default Demo