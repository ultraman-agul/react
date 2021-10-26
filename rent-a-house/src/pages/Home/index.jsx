import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { TabBar } from 'antd-mobile'; // 引入tabbar
import './index.css'
import Index from '../Index'
import List from '../List'
import News from '../News'
import Profile from '../Profile'
export default class Home extends Component {
    state = {
        selectedTab: this.props.location.pathname,
    };

    render() {
        return (
            <>
                <Route path='/home' component={Index}></Route>
                <Route path='/home/list' component={List}></Route>
                <Route path='/home/news' component={News}></Route>
                <Route path='/home/profile' component={Profile}></Route>
                <div style={{ position: 'fixed', width: '100%', bottom: 0 }}>

                    <TabBar
                        tintColor="orange"
                        barTintColor="white"
                        noRenderContent={true}
                    >
                        <TabBar.Item
                            title="主页"
                            key="Home"
                            icon={
                                <i className='iconfont icon-ind'></i>
                            }
                            selectedIcon={
                                <i className='iconfont icon-ind'></i>
                            }
                            selected={this.state.selectedTab === '/home'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: '/home',
                                });
                                this.props.history.push('/home')
                            }}
                        >
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <i className='iconfont icon-findHouse'></i>
                            }
                            selectedIcon={
                                <i className='iconfont icon-findHouse'></i>
                            }
                            title="找房"
                            key="Koubei"
                            selected={this.state.selectedTab === '/home/list'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: '/home/list',
                                });
                                this.props.history.push('/home/list')
                            }}
                        >
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <i className='iconfont icon-infom'></i>
                            }
                            selectedIcon={
                                <i className='iconfont icon-infom'></i>
                            }
                            title="咨询"
                            key="Friend"
                            selected={this.state.selectedTab === '/home/news'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: '/home/news',
                                });
                                this.props.history.push('/home/news')
                            }}
                        >
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <i className='iconfont icon-my'></i>
                            }
                            selectedIcon={
                                <i className='iconfont icon-my'></i>
                            }
                            title="我的"
                            key="my"
                            selected={this.state.selectedTab === '/home/profile'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: '/home/profile',
                                });
                                this.props.history.push('/home/profile')
                            }}
                        >
                        </TabBar.Item>
                    </TabBar>
                </div>
            </>

        );
    }
}
