import React, { Component } from 'react'
import './App.css';
import Header from './components/Header'
import List from './components/List'
// import Item from './components/Item'
import Footer from './components/Footer'
export default class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: false },
      { id: '003', name: '学习', done: true },
    ]
  }
  // 添加一项
  addTodo = (newTodoObj) => {
    const { todos } = this.state
    this.setState({
      todos: [newTodoObj, ...todos]
    })
  }
  // 改变勾选框
  updateChecked = (id, check) => {
    const { todos } = this.state
    const newTodoObj = todos.map(todo => {
      if (todo.id === id) return { ...todo, done: check }
      return todo
    })
    this.setState({
      todos: newTodoObj
    })
  }
  // 删除项
  deleteTodo = (id) => {
    const newTodoObj = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: newTodoObj
    })
  }
  // 全选或反选
  selectAll = (flag) => {
    const newTodos = this.state.todos.map(todo => {
      todo.done = flag
      return todo
    })
    console.log(newTodos)
    this.setState({
      todos: newTodos
    })
  }
  // 清除已经完成
  clearAll = () => {
    const newTodoObj = this.state.todos.filter(todos => todos.done === false)
    this.setState({
      todos: newTodoObj
    })
  }
  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateChecked={this.updateChecked} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} selectAll={this.selectAll} clearAll={this.clearAll} />
        </div>
      </div>
    )
  }
}
