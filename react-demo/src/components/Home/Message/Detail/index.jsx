import React, { Component } from 'react'
// import qs from 'querystring'
export default class Detail extends Component {
    render() {
        console.log(this.props)
        const { title, content } = this.props.location.state
        return (
            <div>
                <div>{title}, {content}</div>
            </div>
        )
    }
}
