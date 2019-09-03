/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-02 20:11:41
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-03 19:12:23
 */
import { Button, Form, Icon, Input, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import * as React from 'react';
import config from '../../api';

const { testUser } = config;

function hasErrors(fieldsError: any) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
};

const success = () => {
    message.success('login succeed!');
};

const warning = () => {
    message.warning('login be defeated');
};
interface Propsinfo {
    form: any
}
interface State {
    code: Number
}

interface Propsinfo extends FormComponentProps {
    history: any
}

class Login extends React.Component<Propsinfo, State>{
    constructor(props: any) {
        super(props);
        this.state = {
            code: 0
        }
    }

    public componentDidMount() {
        this.props.form.validateFields();
    }

    public handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        this.props.form.validateFields((err: Error, values: any) => {
            if (!err) {
                const params = {
                    user_name: values.username,
                    user_pwd: values.password
                }
                testUser(params).then(res => {
                    this.setState({
                        code: res.data.code
                    }, () => {
                        if (this.state.code === 1) {
                            //登陆成功code
                            success();
                               this.props.history.push('/userhome');
                        } else {
                            //登陆失败
                            warning();
                        }
                    })
                })
            }
        });
    };
    
    public render() {
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

export default Form.create()(Login);
