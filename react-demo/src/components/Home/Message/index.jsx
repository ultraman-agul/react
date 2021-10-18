import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
    render() {
        const msgObjList = [
            { id: 1, title: 'github', content: '世界最大的开源网站' },
            { id: 2, title: 'gitee', content: '中国的开源网站' },
            { id: 3, title: 'git', content: '版本管理工具' },
        ]
        return (
            <div>
                {
                    msgObjList.map(item => {
                        return (
                            <li key={item.id}>
                                <Link to={`/home/message/detail/${item.title}/${item.content}`}>{item.title}</Link>
                            </li>
                        )
                    })
                }
                <div>Message</div>
                <div>
                    <Route path='/home/message/detail/:title/:content' component={Detail}></Route>
                </div>
            </div>
        )
    }
}
