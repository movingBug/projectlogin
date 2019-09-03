/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-02 21:26:02
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-02 23:20:48
 */
import axios from 'axios';
let requestObj = {
    testUser(params) {
        return axios.post('/user/login', params)
    }
}
export default requestObj;