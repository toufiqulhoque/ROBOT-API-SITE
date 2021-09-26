import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import UserInfo from '../UserInfo/UserInfo';
import './User.css'

const User = () => {
    const [users, setUsers] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./userData.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    const handleAddToCart = (userInfo) => {
        const newCart = [...cart, userInfo]
        setCart(newCart)
    }
    return (

        <div className="row">
            <div className='col-md-9'>


                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        users.map(user => <UserInfo
                            key={user.id}
                            user={user}
                            handleAddToCart={handleAddToCart}>

                        </UserInfo>)
                    }
                </div>

            </div>
            <div className='col-md-3'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};


export default User;