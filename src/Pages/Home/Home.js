import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import { useSelector } from 'react-redux';

const Home = (props) => {
    const user = useSelector(state => state.user)
    useEffect(() => {
        console.log(user);
    })
    return (

        <div className='homepage'>
            <h1>Hello {user.name}</h1>
            <h1>Hello {user.email}</h1>

            <Carousel autoplay>
                <img src='https://cdn.sforum.vn/sforum/wp-content/uploads/2023/09/hinh-anh-20-10-1-1.jpg' />
                <img src='https://cdn.sforum.vn/sforum/wp-content/uploads/2023/09/hinh-anh-20-10-2-1.jpg' />
                <img src='https://cdn.sforum.vn/sforum/wp-content/uploads/2023/09/hinh-anh-20-10-thumbnail.jpg' />

            </Carousel>
            <h1>Chào mừng ngày phụ nữ VN</h1>

        </div>
    );
};

export default Home;