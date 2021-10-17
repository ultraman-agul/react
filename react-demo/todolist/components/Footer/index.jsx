import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
    handleSelectAll = (e) => {
        console.log(e.target.checked)
        this.props.selectAll(e.target.checked)
    }
    handleClearAll = () => {
        this.props.clearAll()
    }
    render() {
        const { todos } = this.props
        const doneNum = todos.reduce((pre, cur) => {
            return pre + (cur.done ? 1 : 0)
        }, 0)
        const total = todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={doneNum === total && total > 0} onChange={this.handleSelectAll} />
                </label>
                <span>
                    <span>已完成{doneNum}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.handleClearAll}>清除已完成任务</button>
            </div>
        )
    }
}