import * as types from "../action-types";
import {reg,login,logout} from "../../api/session"
import {push} from "react-router-redux"
export default {
    reg(user){
        return function (dispatch,getState) {
            reg(user).then(result=>{
                //let {code,success,error}=result;
                let {code,msg}=result;
                dispatch({
                    type:types.REG,
                   // payload:{success,error}
                    payload:{code,msg}
                })
                if(code==0){
                    setTimeout(()=>{dispatch(push("/login"))},1000)

                }else{

                }
            })
        }
    },
    login(user){
            return function (dispatch,setState) {
                login(user).then(result=>{
                    //let {code,success,error}=result;
                    let {code,msg,data}=result;
                    dispatch({
                        type:types.LOGIN,
                        //payload:{success,error}
                        payload:{code,msg,data,user}
                    });
                    if(code==0){
                        setTimeout(()=>{dispatch(push("/profile"))},1000)
                        dispatch(push("/confirm"))
                        //window.location.hash='/confirm'
                    }
                })
            }
    },
    clearMessage(){
        return{
            type:types.CLEAR_MESSAGE
        }
    },
    logout(){
        return function(dispatch,getState){
            logout().then(result=>{
                let {code,success,error} = result;
                dispatch({
                    type:types.LOGOUT,
                    payload:{success,error}
                });
                dispatch(push('/login'));
            });
        }
    },

}