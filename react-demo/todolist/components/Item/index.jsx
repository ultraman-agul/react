import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {
    static propTypes = {
        updateChecked: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }
    state = {
        mouse: false
    }
    // 改变勾选状态
    handleCheck = (id) => {
        return (e) => {
            this.props.updateChecked(id, e.target.checked)
            console.log(id, e.target.checked)
        }
    }
    // 鼠标移入移出事件回调
    handleMouse = (flag) => {
        if (flag) {
            this.setState({
                mouse: true
            })
        } else {
            this.setState({
                mouse: false
            })
        }
    }
    // 删除按钮回调
    handleDelete = (id) => {
        if (window.confirm('你确定删除？'))
            this.props.deleteTodo(id)
    }
    render() {
        const { id, name, done } = this.props
        return (
            <li onMouseEnter={() => this.handleMouse(true)} onMouseLeave={() => this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button className='btn btn-danger' style={{ display: this.state.mouse ? 'block' : 'none' }} onClick={() => { this.handleDelete(id) }}>删除</button>
            </li>
        )
    }
}