import React, {Component} from 'react';
import './index.less'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../../store/actions/session';
class ProfileList extends Component{
    handleLogout = ()=>{
        this.props.logout();
    }
    render(){
        return (
            <div className="profile-list">
                <ul className="ul-list order">
                    <NavLink to="/myorder">
                        <li className="item-list">
                            我的订单
                            <i></i>
                        </li>
                    </NavLink>

                    <li className="item-list" >
                        我的地址
                        <i></i>
                    </li>

                    <li className="item-list"  onClick={this.handleLogout} >
                        退出
                        <i></i>
                    </li>


                </ul>
            </div>
        )
    }
}
export default connect(
    state => state.session,
    actions
)(ProfileList);