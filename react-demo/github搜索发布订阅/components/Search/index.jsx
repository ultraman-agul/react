import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Search extends Component {
    search = () => {
        console.log(this.keyWordElement.value)
        // axios.get('https://api.github.com/search/users?q=' + this.keyWordElement.value).then((res) => {
        //     console.log(res)
        // })
        PubSub.publish('agul', { isFirst: false, isLoading: true })
        axios.get('/api1/search/users?q=' + this.keyWordElement.value).then(res => {
            const { items: users } = res.data
            console.log(users)
            PubSub.publish('agul', { isLoading: false, users: users })
        }, err => {
            PubSub.publish('agul', { isLoading: false, err: err })
        })
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
