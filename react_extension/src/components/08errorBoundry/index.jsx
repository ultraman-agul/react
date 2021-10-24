import React, { Component } from 'react'
class index extends Component {
    state = { hasError: false }
    static getDeviedStateFromError(error) {
        console.log('@@' + error)
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }
    render() {
        return (
            <div>
                <h1>this is index component</h1>
                {
                    this.state.hasError ? '目前网络不稳定，亲稍后再试' : <A />
                }
            </div>
        )
    }
}

class A extends Component {
    render() {
        return (
            <div>
                <h1 onclick={this.handleClick}>this is A component</h1>
            </div>
        )
    }
}

export default index
