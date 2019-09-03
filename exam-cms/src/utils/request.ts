/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-03 20:29:10
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-03 21:21:50
 */

import axios from 'axios';
import { AxiosResponse } from 'axios/index';

const instance = axios.create({
    baseURL: 'http://169.254.88.18:7001',
    timeout: 1000
})

instance.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
})

instance.interceptors.response.use((Response: AxiosResponse<any>) => {
    console.log(Response);
    return Response.data;
}, (error) => {
    return Promise.reject(error);
})

export default instance;