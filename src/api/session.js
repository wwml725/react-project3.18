import {get,post} from "./index";
export function reg(user) {
    return post("/api/user/reg",user);
}
export function login(user) {
    return post("/api/user/login",user);
}
//退出
export function logout(){
    return get('/api/user/logout?uid=1');
}
