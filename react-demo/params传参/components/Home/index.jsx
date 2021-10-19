import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import News from './News'
import Message from './Message'
import MyNavLink from '../MyNavLink'
export default class Home extends Component {
    render() {
        return (
            <div>Home
                <br />
                <MyNavLink to='/home/news'>news</MyNavLink>
                <MyNavLink to='/home/message'>message</MyNavLink>
                <Switch>
                    <Route path='/home/news' component={News}></Route>
                    <Route path='/home/message' component={Message}></Route>
                    <Redirect to='/home/message'></Redirect>
                </Switch>

            </div>
        )
    }
}
