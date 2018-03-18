import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import "./index.less"
import {connect} from "react-redux";
import actions from "../../store/actions/vip";
class Tab extends Component {
    render() {
        return (
            <nav className="tab">
                <NavLink exact to="/">
                    <i className="iconfont icon-shouye"></i>
                    <span>首页</span>
                </NavLink>
                <NavLink to="/vip">
                    <i className="iconfont icon-huiyuan"></i>
                    <span>会员</span>
                </NavLink>
                <NavLink to="/shopCart">
                    <i className="iconfont icon-gouwuche"></i>
                    <span>购物车</span>
                </NavLink>
                <NavLink to="/profile">
                    <i className="iconfont icon-wode"></i>
                    <span>我的</span>
                </NavLink>
            </nav>
        )
    }
}

export default connect(
    state=>state.vip,
    actions,
)(Tab)

