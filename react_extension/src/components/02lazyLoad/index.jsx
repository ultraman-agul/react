import React, { Component, lazy, Suspense } from 'react'
import { NavLink, Route, Redirect } from 'react-router-dom'
// import Home from './Home'
// import About from './About'
import Loading from './Loading'
const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
export default class Demo extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>懒加载</h1>
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                </header>
                <div>
                    <Suspense fallback={<Loading></Loading>}>
                        <Route path='/home' component={Home}></Route>
                        <Route path='/about' component={About}></Route>
                        <Redirect to='/home'></Redirect>
                    </Suspense>

                </div>
            </div>
        )
    }
}
