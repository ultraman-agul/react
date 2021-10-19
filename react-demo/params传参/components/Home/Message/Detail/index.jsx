import React, { Component } from 'react'
export default class Detail extends Component {
    render() {
        const { title, content } = this.props.match.params
        console.log(this.props)
        return (
            <div>
                <div>{title}, {content}</div>
            </div>
        )
    }
}
