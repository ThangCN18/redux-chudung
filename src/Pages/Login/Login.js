import React from 'react';

import { Button, Checkbox, Form, Input, message } from 'antd';
import { data } from '../../data';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../Store/Action/userAction';


const Login = (props) => {
    const dispatch = useDispatch()

    const navigator = useNavigate()
    const handelFinish = (values) => {
        console.log(values)
        const newUser = {
            email: values.email,
            name: values.username
        }
        dispatch(login(newUser)).then(
            navigator("/")
        )





        // let loginBolem = 0

        // if (loginBolem == 1) {
        //     navigator("/")
        // } else {
        //     messageApi.open({
        //         type: 'error',
        //         content: 'Sai username hoặc password!',
        //     });
        // }


    }
    const [messageApi, contextHolder] = message.useMessage();
    return (
        <>

            {contextHolder}
            <div className='loginpage'>

                <Form
                    onFinish={handelFinish}
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        minWidth: 600,
                        display: "flex",
                        justifyContent: 'start',
                        flexDirection: "column",
                        alignItems: "start",
                        width: "400px"
                    }}

                    initialValues={{
                        remember: true,
                    }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <h1>LOGIN</h1>
                    <label>Email</label>
                    <Form.Item
                        style={{ width: "600px" }}
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />

                    </Form.Item>
                    <label>User Name</label>
                    <Form.Item
                        style={{ width: "600px" }}
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <label>Pasword</label>
                    <Form.Item
                        style={{ width: "600px" }}
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        style={{ width: "600px" }}
                        name="remember"
                        valuePropName="checked"

                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        style={{ width: "600px", textAlign: "center" }}

                    >
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>

    );
};

export default Login;