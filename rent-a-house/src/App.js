import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import CityList from './pages/CityList'
function App() {
  return (
    <Router>
      <div className="App">
        {/* 配置路由规则 */}
        {/* 默认路由到/home */}
        <Route path='/' exact render={() => <Redirect to='/home' />}></Route>
        <Route path='/home' component={Home}></Route>
        <Route path='/citylist' component={CityList}></Route>
        <Link to='/home'>home</Link>
        <Link to='/citylist'>cityList</Link>
      </div>
    </Router>

  );
}

export default App;
