/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-02 20:11:41
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-03 10:20:36
 */
import React, { Component } from 'react';
import config from '../../api';
import { Form, Icon, Input, Button, message } from 'antd';
let { testUser } = config;
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
};

const success = () => {
    message.success('login succeed!');
};

const error = () => {
    message.error('This is an error message');
};

const warning = () => {
    message.warning('login be defeated');
};

export class Login extends Component {
    state = {
        code: 0
    }
    componentDidMount() {
        this.props.form.validateFields();
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let params = {
                    user_name: values.username,
                    user_pwd: values.password
                }
                testUser(params).then(res => {
                    if (res.data.code === 1) {
                        this.setState({
                            code: res.data.code
                        }, () => {
                            let { code } = this.state;
                            if (code === 1) {
                                //登陆成功
                                success();
                                this.props.history.push('/userhome');
                            } else {
                                //登陆失败
                                warning();
                            }
                        })
                    }
                })
            }
        });
    };
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        // Only show error after a field is touched.
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                        Log in
              </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create({ name: 'horizontal_login' })(Login);
