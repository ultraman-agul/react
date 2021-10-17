import React, { Component } from 'react'
import Item from '../Item'
import PropTypes from 'prop-types'
import './index.css'
export default class List extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateChecked: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }
    render() {
        const { todos, updateChecked, deleteTodo } = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((todo) => {
                        return <Item key={todo.id} {...todo} updateChecked={updateChecked} deleteTodo={deleteTodo} />
                    })
                }
            </ul>
        )
    }
}