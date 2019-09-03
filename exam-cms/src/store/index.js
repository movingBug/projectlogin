/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-03 09:02:29
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-03 09:12:12
 */
import action from './action.index';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let reducer = combineReducers({
    action
})

let store = createStore(reducer, applyMiddleware(thunk));

export default store;