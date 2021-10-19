import React, { Component } from 'react'
import qs from 'querystring'
export default class Detail extends Component {
    render() {
        console.log(this.props)
        console.log(this.props.location.search)
        const { search } = this.props.location
        const { title, content } = qs.parse(search.slice(1))
        return (
            <div>
                <div>{title}, {content}</div>
            </div>
        )
    }
}
