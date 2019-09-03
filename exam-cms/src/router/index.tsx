/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-02 20:11:41
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-03 20:10:59
 */
import * as React from 'react';
import Login from '../views/login';
import Userhome from '../views/user';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
class Main extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/userhome' component={Userhome}></Route>
                    <Redirect from='/' to='/login'></Redirect>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Main;