import React, { Component } from 'react'
import store from '../../redux/store'
import { createIncrementAction, createDecrementAction } from '../../redux/count_action'
export default class Count extends Component {
    state = {
        test: 'asd'
    }
    add = () => {
        store.dispatch(createIncrementAction(this.selectNum.value * 1))
    }
    sub = () => {
        store.dispatch(createDecrementAction(this.selectNum.value * 1))
    }
    addIfOdd = () => {
        if (store.getState() % 2 !== 0) {
            store.dispatch(createIncrementAction(this.selectNum.value * 1))
        }
    }
    addAsync = () => {
        setTimeout(() => {
            store.dispatch(createIncrementAction(this.selectNum.value * 1))
        }, 500)
    }
    render() {
        return (
            <div>
                <h1>
                    现在的值为：{store.getState()}
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