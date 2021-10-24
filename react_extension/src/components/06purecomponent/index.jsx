import React, { PureComponent } from 'react'

class Demo extends PureComponent {
    state = { car: '比亚迪', name: 'zs' }
    changeCar = () => {
        this.setState({ car: '宾利' })
        // this.setState({})
    }
    render() {
        console.log('parent')
        return (
            <div>
                parent
                <button onClick={this.changeCar}>{this.state.car}</button>
                <Child name={this.state.name} />
            </div>
        )
    }
}

class Child extends PureComponent {
    render() {
        console.log('child')
        return (
            <div>child12312 &nbsp; {this.props.name}</div>
        )
    }
}
export default Demo