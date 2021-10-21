import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'


class Count extends Component {
    state = {
        test: 'asd'
    }
    add = () => {
        // store.dispatch(createIncrementAction(this.selectNum.value * 1))
        this.props.increment(this.selectNum.value * 1)
    }
    sub = () => {
        this.props.decrement(this.selectNum.value * 1)
    }
    addIfOdd = () => {
        if (this.props.count % 2 !== 0) {
            this.props.increment(this.selectNum.value * 1)
        }
    }
    addAsync = () => {
        this.props.incrementAsync(this.selectNum.value * 1, 500)
    }
    render() {
        return (
            <div>
                <h1>
                    现在的值为：{this.props.count}
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


export default connect(
    state => ({ count: state }),
    {
        increment: createIncrementAction,
        decrement: createDecrementAction,
        incrementAsync: createIncrementAsyncAction

    }
)(Count)