import React from 'react'
import ReactDOM from 'react-dom'
/* class Demo extends React.Component {
    timer = null
    state = { count: 0, name: 'agul' }
    refContainer = React.createRef()
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState((state) => {
                return ++state.count
            })
        }, 1000)
    }
    add = () => {
        this.setState((state) => {
            return state.count++
        })
    }
    change = () => {
        this.setState({ name: 'jerry' })
    }
    unmount = () => {
        ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    show = () => {
        alert(this.refContainer.current.value)
    }
    render() {
        return (
            <div>
                <button onClick={this.add}>点我加一</button>
                <button onClick={this.change}>改变姓名</button>
                <button onClick={this.unmount}>卸载组件</button>
                <br />
                <input type="text" ref={this.refContainer} /> <button onClick={this.show}>点击显示数据</button>
                <h1>数字：{this.state.count}，名字：{this.state.name}</h1>
            </div>
        )
    }
} */

// 函数式
function Demo() {
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('agul')
    const refContainer = React.useRef()
    React.useEffect(() => {
        console.log('@')
        let timer = setInterval(() => {
            setCount(count => ++count)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [name])
    function add() {
        setCount(c => ++c) // 不能写作 count++
    }

    function change() {
        setName('jerry')
    }

    function unmount() {
        ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
    }

    function show() {
        alert(refContainer.current.value)
    }
    return (
        <div>
            <button onClick={add}>点我加一</button>
            <button onClick={change}>改变姓名</button>
            <button onClick={unmount}>卸载组件</button>
            <br />
            <input type="text" ref={refContainer} /> <button onClick={show}>点击显示数据</button>
            <h1>数字：{count}，名字：{name}</h1>
        </div>
    )
}

export default Demo
