import React, { Component } from 'react'
import './index.css'
export default class List extends Component {
    render() {
        const { users, isFirst, isLoading, err } = this.props
        return (
            <div className="row">
                {
                    isFirst ? <h2>请输入关键词查找</h2> :
                        isLoading ? <h2>Loading</h2> :
                            err ? <h2>{err.message}</h2> :
                                users.map(user => {
                                    return (
                                        <div className="card">
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
