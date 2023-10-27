import React, { useState } from 'react';
// import { Link } from "react-router-dom"
import { Button, Menu } from 'antd';
import { AiFillHome } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { FaRegPlusSquare } from "react-icons/fa"
import { BiLogIn } from "react-icons/bi"
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Store/Action/userAction';


const HeaderComponent = (props) => {
    const dispatch = useDispatch()
    const [current, setCurrent] = useState('home');
    const navigater = useNavigate();
    const user = useSelector(state => state.user)

    const items = [
        {
            label: 'Home',
            key: 'home',
            icon: < AiFillHome />,

        },
        {
            label: 'Login',
            key: 'login',
            icon: < BiLogIn />,

        },
        {
            label: 'Register',
            key: 'register',
            icon: < FaRegPlusSquare />,

        }
    ];

    const clickBtn = (e) => {
        console.log(e)
        setCurrent(e.key)
        if (e.key == "home") {
            navigater("/")
        } else {
            navigater('/' + e.key)
        }

    }

    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
            <Menu onClick={clickBtn} selectedKeys={[current]} mode="horizontal" items={items} />

            {
                user.email == "" ? <></> : <Button onClick={() => { dispatch(logout()) }}>LOGOUT</Button>
            }


        </div>


        // <>

        //     <Link to="/">Home</Link>
        //     <Link to="/login">Login</Link>
        //     <Link to="/register">Register</Link>
        // </>




    );
};

export default HeaderComponent;