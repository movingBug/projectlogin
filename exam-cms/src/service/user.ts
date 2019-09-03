/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-03 20:36:10
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-03 20:37:21
 */
import request from '../utils/request';

//登陆
export function login(params: object) {
    return request.post('/user/login', params);
}