import React, { Component } from 'react'

export default class Demo extends Component {
    state = { count: 0 }
    add = () => {
        /* this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count) // setState方法执行是同步的，但是react引起的状态更新是异步的*/

        /* this.setState({ count: this.state.count + 1 }, 
            () => { console.log(this.state) })  */ // 这个回调函数可以获取到一部的更新结果

        this.setState((state) => {      // 函数式setState
            return state.count++
        }, () => console.log(this.state.count))
        // console.log(this.state.count)

        // 总结： 1. 如果新状态不依赖原状态，则使用对象式
        //       2. 如果新状态依赖原状态，则使用函数式
        //       如果需要获取更新后的状态，则通过回调函数获取
    }
    render() {
        return (
            <div>
                <div>现在的值是：{this.state.count}</div>
                <button onClick={this.add}>+1</button>
            </div>
        )
    }
}
