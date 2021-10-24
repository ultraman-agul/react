import React, { Component } from 'react'

class index extends Component {
    render() {
        return (
            <div>
                <A render={data => <B name={data}></B>}>
                </A>
            </div>
        )
    }
}

class A extends Component {
    state = { name: 'zs' }
    render() {
        return (
            <div>
                this.is A
                》》》》
                {this.props.render(this.state.name)}
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div>
                this is B
                姓名：
                {this.props.name}
            </div>
        )
    }
}

export default index