/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-02 20:11:41
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-03 19:54:06
 */
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import * as React from 'react';
import config from '../../api';

const { testUser } = config;

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
interface Names {
    className: string
}

interface Propsinfo extends FormComponentProps {
    history: any
}

class Login extends React.Component<Propsinfo, State,Names>{
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
                            values.username = '';
                            values.password = '';
                        }
                    })
                })
            }
        });
    };

    public render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item className='formitem'>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item className='formitem'>
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
                <Form.Item className='formitem'>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    <a className="login-form-forgot" href="">
                        Forgot password
              </a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
              </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create()(Login);
