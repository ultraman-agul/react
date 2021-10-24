import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
export default class Index extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.querySelector('#root'))