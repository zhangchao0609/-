// 首页
import React, { Component } from 'react';
import {  Route } from 'react-router-dom'
// 导入二级路由组件页面
import Index from '../Index'
import House from '../House'
import Profile from '../Profile'
// 导入底部tabbar组件
import { TabBar } from 'antd-mobile'
// 导入样式
import './index.css';

class Home extends Component {
  state = {
    // 当前标签栏选中是谁？
    selectedTab: 'blueTab'
  }
  render() {
    return (
      <div className="home">
        {/* 默认首页 */}
        <Route exact path="home" component={Index} />
        {/* 找房列表 */}
        <Route path="home/house" component={House} />
        {/* 个人中心 */}
        <Route path="home/profile" component={Profile} />
        <div>
        {/* <Link to="/home/index">首页</Link>
        <Link to="/home/house">找房</Link>
       <Link to="/home/profile">我的</Link> */}
        <Route exact path="/home" component={Index} />
        <Route path="/home/house" component={House} />
        <Route path="/home/profile" component={Profile} />
        <div className="barBox">
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            tabBarPosition="bottom"
            noRenderContent={true}
          >
       <TabBar.Item
              title="首页"
              key="Life"
              icon={
                <i className="iconfont icon-ind" />
              }
              selectedIcon={<i className="iconfont icon-ind" />
              }
              selected={this.state.selectedTab === 'blueTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab',
                });
              }}
            />
            
            <TabBar.Item
              icon={
                <i className="iconfont icon-findHouse" />
              }
              selectedIcon={
                <i className="iconfont icon-findHouse" />
              }
              title="找房"
              key="Koubei"

              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'redTab',
                });
              }}

            />

            <TabBar.Item
              icon={
                <i className="iconfont icon-my" />
              }
              selectedIcon={
                <i className="iconfont icon-my" />
              }
              title="我的"
              key="Friend"
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'greenTab',
                });
              }}
            />
          </TabBar>
        </div >
      </div>
        </div>
    );
  }
}

export default Home;