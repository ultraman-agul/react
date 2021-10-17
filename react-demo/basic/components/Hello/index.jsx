import React, { Component } from 'react'
import hello from './index.module.css'
export default class Hello extends Component {
    render() {
        return (
            <div>
                <h3 className={hello.title}>hello world!</h3>
            </div>
        )
    }
}