import React, { useState, createContext, useContext } from "react";

const MyContext = createContext()
function Demo() {
    let [count, setCount] = useState(0)
    return (
        <div>
            <h1>现在数值是：{count}</h1>
            <br />
            <button onClick={() => { setCount(++count) }}>click me!</button>
            <br />
            <MyContext.Provider value={count}>
                <Child></Child>
            </MyContext.Provider>
        </div>
    )
}

function Child() {
    const obj = useContext(MyContext)
    return (
        <div>
            {obj}
        </div>
    )
}

export default Demo