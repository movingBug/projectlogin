/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-03 20:16:29
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-03 20:58:48
 */
import { observable, action } from 'mobx';
import { login } from '../../service/index';
import { LoginForm } from '../../types/index';

class User {
    @observable isLogin: boolean = false;
    
    @action async login(form: LoginForm): Promise<any> {
        let result: any = await login(form);
        return result.code;
    }
}

export default User;