import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Search extends Component {
    search = async () => {
        console.log(this.keyWordElement.value)
        PubSub.publish('agul', { isFirst: false, isLoading: true })
        try {
            const response = await fetch('/api1/search/users?q=' + this.keyWordElement.value)
            const result = await response.json()
            PubSub.publish('agul', { isLoading: false, users: result.items })
        } catch (err) {
            console.log('请求出错' + err)
            PubSub.publish('agul', { isLoading: false, error: err })
        }

    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" ref={c => this.keyWordElement = c} placeholder="enter the name you search" />&nbsp;<button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
