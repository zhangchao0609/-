import React from 'react';
// 导入路由组件
import { BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
// 导入antd-monile组件库
// import {Button} from 'antd-mobile'
import Home from './pages/Home';
import CityList from './pages/CityList';
import Map from './pages/Map';
import NotFound from './pages/NotFound';





function App() {
  return (
    <Router>
      
      <div className="App">
        {/* 一级路由 */}
        <Switch>
          {/* 路由重定向 */}
          <Redirect exact from="/" to="home" />
          {/* 首页 */}
          <Route path="/home" component={Home} />
          {/* 城市列表 */}
          <Route path="/cityList" component={CityList} />
          {/* 地图找房 */}
          <Route path="/map" component={Map} />
          {/*404页面  */}
          <Route  component={NotFound} /> 
      </Switch>
    </div>    
  </Router>
  );
}

export default App;
