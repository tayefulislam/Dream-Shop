import React from 'react';


const Cart = ({ cart }) => {
    console.log(cart)

    return (
        <div>

            <h1>Choose Product</h1>
            {
                cart.map(cart => <h1>{cart.name}</h1>)
            }



        </div>
    );
};







export default Cart;