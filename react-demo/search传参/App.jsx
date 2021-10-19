import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Test from './components/Test'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">

              {/* 原生html中，靠<a>跳转不同的页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

              {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
              <MyNavLink to='/home'>Home</MyNavLink>
              <MyNavLink to='/about'>about</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Switch>
                  {/* Switch限制只能匹配一项路由 */}
                  <Route path='/home' component={Home}></Route>
                  <Route path='/home' component={Test}></Route>
                  <Route path='/about' component={About}></Route>
                  {/* Redirect表示都不匹配的话默认显示的路由 */}
                  <Redirect to='/about'></Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}