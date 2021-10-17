import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {
    // 对接受的props进行类型和必要性的限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }
    // 文本框输入回调，敲击回车且不为空则新建
    handleInput = (e) => {
        if (e.keyCode === 13 && e.target.value.trim().length > 0) {
            console.log(e.target.value)
            const newTodo = { id: nanoid(), name: e.target.value, done: false }
            this.props.addTodo(newTodo)
            e.target.value = ''
        }
    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleInput} placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}