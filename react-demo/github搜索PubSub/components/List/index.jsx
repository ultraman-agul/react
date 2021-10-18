import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'
export default class List extends Component {
    state = {
        isFirst: true,
        isLoading: false,
        err: '',
        users: []
    }
    componentDidMount() {
        this.token = PubSub.subscribe('agul', (_, newObj) => {
            this.setState(newObj)
        })
    }
    componentWillUnmount() {
        PubSub.unsubsrice(this.token)
    }
    render() {
        const { users, isFirst, isLoading, err } = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>请输入关键词查找</h2> :
                        isLoading ? <h2>Loading</h2> :
                            err ? <h2>{err.message}</h2> :
                                users.map(user => {
                                    return (
                                        <div className="card" key={user.login}>
                                            <a rel="noreferrer" href={user.html_url} target="_blank">
                                                <img alt='avatar' src={user.avatar_url} style={{ width: '100px' }} />
                                            </a>
                                            <p className="card-text">{user.login}</p>
                                        </div>
                                    )
                                })
                }
            </div>
        )
    }
}
