import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPerson } from '../../redux/actions/person'

// person UI
class Person extends Component {
    addPersonHandle = () => {
        const personObj = {
            id: new Date().getTime(),
            name: this.name.value,
            age: this.age.value * 1  // 转为数字
        }
        this.props.addPerson(personObj)
        this.name.value = ''
        this.age.value = ''
    }
    render() {
        return (
            <div>
                <h1>上方计算的和为{this.props.count}</h1>
                <input type="text" placeholder='请输入姓名' ref={c => this.name = c} />
                <input type="text" placeholder='请输入年龄' ref={c => this.age = c} />
                <button onClick={this.addPersonHandle}>添加</button>
                <ul>
                    {
                        this.props.person.map((item) => {
                            return <li key={item.id}>姓名: {item.name} 年龄： {item.age} </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

// person容器
export default connect(
    state => ({
        count: state.count,
        person: state.person
    }),
    {
        addPerson
    }
)(Person)