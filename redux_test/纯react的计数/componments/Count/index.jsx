import React, { Component } from 'react'

export default class Count extends Component {
    state = {
        sum: 0
    }
    selectNum = this.selectNum
    add = () => {
        this.setState({
            sum: this.state.sum + this.selectNum.value * 1
        })
    }
    sub = () => {
        this.setState({
            sum: this.state.sum - this.selectNum.value * 1
        })
    }
    addIfOdd = () => {
        if (this.state.sum % 2 !== 0) {
            this.setState({
                sum: this.state.sum + this.selectNum.value * 1
            })
        }
    }
    addAsync = () => {
        setTimeout(() => {
            this.setState({
                sum: this.state.sum + this.selectNum.value * 1
            })
        }, 500)
    }
    render() {
        return (
            <div>
                <h1>
                    现在的值为：{this.state.sum}
                </h1>
                <div>
                    <select name="" id="" ref={c => this.selectNum = c}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <button onClick={this.add}>加</button>
                    <button onClick={this.sub}>减</button>
                    <button onClick={this.addIfOdd}>奇数的时候加</button>
                    <button onClick={this.addAsync}>异步加</button>
                </div>

            </div>
        )
    }
}