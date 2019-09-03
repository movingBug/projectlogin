/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-02 21:26:02
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-03 20:28:17
 */
import axios from 'axios';
const requestObj = {
    testUser(params: object) {
        return axios.post('/user/login', params)
    }
}
export default requestObj;