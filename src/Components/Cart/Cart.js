import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart)
    let total = 0;

    for (const userInfo of cart) {
        total = total + userInfo.salary


    }
    return (
        <div className='card mt-5 me-5'>
            <h3>Selected Bots: {cart.length}</h3>


            <br />
            <p>Total Price: {total}</p>
            <br />
            <div>
                {
                    cart.map(img => <div>
                        < img className='cart-image mx-auto' key={img.id} src={img.image} alt="" />
                        <p>Robot Name: {img.full_name}</p>
                    </div>

                    )


                }
            </div>


        </div>
    );
};

export default Cart;