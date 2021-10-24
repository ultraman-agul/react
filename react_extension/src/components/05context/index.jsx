import React, { Component } from 'react'
import './index.css'

const MyContext = React.createContext()
class A extends Component {
    state = {
        name: 'agul',
        age: 22
    }
    render() {
        const { name, age } = this.state
        return (
            <div className='first'>
                <h1>姓名：{name}，年龄: {age}</h1>
                <MyContext.Provider value={{ name, age }}>
                    <B />
                </MyContext.Provider>
            </div>
        )
    }
}

class B extends Component {
    render() {
        // const { name, age } = this.props
        return (
            <div className='second'>
                B组件
                {/* <h1>姓名：{name}，年龄: {age}</h1> */}
                <C />
            </div>
        )
    }
}

class C extends Component {
    static contextType = MyContext
    render() {
        console.log(this.context)
        return (
            <div className='three'>
                <MyContext.Consumer>
                    {
                        value => `姓名：${value.name}年龄${value.age}`
                    }
                </MyContext.Consumer>
            </div >
        )
    }
}


// function C() {
//     return (<div className='three'>
//         <MyContext.Consumer>
//             {
//                 value => `姓名：${value.name}年龄${value.age}`
//             }
//         </MyContext.Consumer></div>
//     )

// }
export default A